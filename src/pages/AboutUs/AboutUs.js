import React, { useState } from "react";
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from "../../components/Footer";
import { Container, Box, Typography, Grid, Paper, Avatar, Divider, Button } from "@mui/material";
import Login from "../Auth/Login";
import RegisterUser from "../Auth/RegisterUser";

// Optional: Import icons if you want to use them in the 'Values' section
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';

export default function AboutUs() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleLogin = (data) => {
    console.log("Logged in user:", data);
  };

  const handleRegistered = (user) => {
    console.log("Registered user:", user);
  };

  return (
    <>
      {/* Navigation */}
      <ResponsiveAppBar isUserLoggedIn={false} onSignInClick={() => setOpenLogin(true)} />

      {/* Hero Header Section */}
      <Box 
        sx={{ 
          bgcolor: '#f8f9fa', 
          py: 8, 
          textAlign: 'center',
          borderBottom: '1px solid #ececec'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#1976d2' }}
          >
            About Our Healthcare Platform
          </Typography>
          <Typography variant="h6" color="textSecondary">
            We are dedicated to bridging the gap between patients and specialized healthcare providers 
            through seamless technology and compassionate care.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ mt: 8, mb: 8 }}>
        {/* Our Mission & Vision Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary" sx={{ lineHeight: 1.8 }}>
              Our mission is to provide every individual with instant access to high-quality medical expertise. 
              We believe that geographical boundaries shouldn't limit your healthcare options. 
              By providing a digital bridge, we empower patients to find the right specialist 
              at the right time.
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
              To be the world's most trusted healthcare consultation platform, where technology 
              serves humanity, ensuring better health outcomes for everyone, everywhere.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 10 }} />

        {/* Stats Section */}
        <Grid container spacing={4} textAlign="center">
          {[
            { label: "Active Doctors", value: "500+" },
            { label: "Patients Served", value: "10,000+" },
            { label: "Specialties", value: "25+" },
            { label: "Consultations", value: "50k+" },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Typography variant="h3" fontWeight="bold" color="primary">{stat.value}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 10 }} />

        {/* Core Values Section */}
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Our Core Values
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mt: 2 }}>
          {[
            { title: "Integrity", desc: "We uphold the highest medical ethics and transparency.", icon: <SecurityIcon fontSize="large" color="primary" /> },
            { title: "Accessibility", desc: "Healthcare should be available to everyone, regardless of location.", icon: <GroupsIcon fontSize="large" color="primary" /> },
            { title: "Innovation", desc: "Using cutting-edge tech to improve patient experiences.", icon: <LocalHospitalIcon fontSize="large" color="primary" /> },
          ].map((value, index) => (
            <Paper key={index} variant="outlined" sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 3 }}>
              <Box sx={{ mb: 2 }}>{value.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>{value.title}</Typography>
              <Typography variant="body2" color="textSecondary">{value.desc}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Call to Action Footer Section */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 9, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of users who have found their trusted healthcare partners today.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ bgcolor: 'white', color: '#1976d2', fontWeight: 'bold', '&:hover': { bgcolor: '#f0f0f0' } }}
            onClick={() => setOpenRegister(true)}
          >
            Create An Account
          </Button>
        </Container>
      </Box>

      <Footer />

      {/* Standard Auth Modals */}
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onLogin={handleLogin}
        onOpenRegister={() => {
          setOpenLogin(false);
          setOpenRegister(true);
        }}
      />
      <RegisterUser
        open={openRegister}
        onClose={() => setOpenRegister(false)}
        onRegistered={handleRegistered}
        onOpenLogin={() => {
          setOpenRegister(false);
          setOpenLogin(true);
        }}
      />
    </>
  );
}