import React, { useState } from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from "../../components/Footer";
import { 
  Box, 
  Typography, 
  TextField, 
  Card, 
  CardActionArea, 
  InputAdornment, 
  Container,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FaceIcon from '@mui/icons-material/Face';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import { useNavigate } from 'react-router-dom';

const BookConsultationHome = () => {
  const navigate = useNavigate();
  // 1. Data Array for all doctor types
  const specialties = [
    { id: 1, name: 'Cardiologist', icon: <FavoriteIcon sx={{ fontSize: 60, color: '#e91e63' }} /> },
    { id: 2, name: 'General Practitioner', icon: <LocalHospitalIcon sx={{ fontSize: 60, color: '#2196f3' }} /> },
    { id: 3, name: 'Dermatologist', icon: <FaceIcon sx={{ fontSize: 60, color: '#ff9800' }} /> },
    { id: 4, name: 'Pediatrician', icon: <ChildCareIcon sx={{ fontSize: 60, color: '#4caf50' }} /> },
    { id: 5, name: 'Neurologist', icon: <PsychologyIcon sx={{ fontSize: 60, color: '#9c27b0' }} /> },
    { id: 6, name: 'Psychiatrist', icon: <PsychologyIcon sx={{ fontSize: 60, color: '#607d8b' }} /> },
    { id: 7, name: 'Orthopedic', icon: <BuildIcon sx={{ fontSize: 60, color: '#795548' }} /> },
    { id: 8, name: 'Gynecologist', icon: <PregnantWomanIcon sx={{ fontSize: 60, color: '#e91e63' }} /> },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // 2. Filter logic for the search bar
  const filteredSpecialties = specialties.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <ResponsiveAppBar isUserLoggedIn={false} onSignInClick={() => {}} />
    <Container maxWidth="lg" sx={{ py: 3, backgroundColor: '#fff', minHeight: '10vh' }}></Container> {/* overlap wen ek nawattanna daapu container ek */}
    <Container maxWidth="lg" sx={{ pt: 6, py: 6, backgroundColor: '#fff', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',  
            color: '#1976d2', // Blue color from image
            mb: 1,
            textUnderlineOffset: '6px'
          }}
        >
          Select A Doctor
        </Typography>
        <Typography variant="body1" sx={{ color: '#757575', fontWeight: 500 }}>
          Choose A Healthcare Provider For Your Consultation
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <TextField
          placeholder="search by name or specialty..."
          fullWidth
          sx={{ 
            maxWidth: 700,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f1f3f4',
              borderRadius: '10px',
              '& fieldset': { border: 'none' },
            }
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9e9e9e' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Main Container for Cards */}
      <Box 
        sx={{ 
          border: '1px solid #e0e0e0', 
          borderRadius: '12px', 
          p: { xs: 2, md: 6 },
          backgroundColor: '#fafafa',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 4
        }}
      >
        {filteredSpecialties.map((specialty) => (
          <Card 
            key={specialty.id}
            sx={{ 
              borderRadius: '12px', 
              boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
              height: '100%',
              '&:hover': { boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }
            }}
          >
            <CardActionArea sx={{ p: 4, textAlign: 'center', height: '100%' }} onClick={() => navigate('/consult-selection', { state: { specialty: specialty.name } })}>
              
              {/* Icon */}
              <Box sx={{ margin: '0 auto 16px' }}>
                {specialty.icon}
              </Box>

              <Typography 
                variant="h6" 
                sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}
              >
                {specialty.name}
              </Typography>
              <IconButton 
                sx={{ mt: 1, color: '#1976d2' }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent CardActionArea click
                  navigate('/consult-selection', { state: { specialty: specialty.name } });
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </CardActionArea>
          </Card>
        ))}

        {/* Handling "No Results" */}
        {filteredSpecialties.length === 0 && (
          <Typography textAlign="center" sx={{ py: 4, color: '#999' }}>
            No healthcare providers found matching "{searchTerm}"
          </Typography>
        )}
      </Box>
    </Container>
    <Footer/>
    </>
  );
};

export default BookConsultationHome;