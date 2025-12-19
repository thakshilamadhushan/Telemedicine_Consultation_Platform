import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box, Typography, TextField, Grid, Card, InputAdornment, Container,
  Avatar, Slider, Select, MenuItem, FormControl, Button, Stepper, 
  Step, StepLabel, Rating, Divider, Paper, Stack, OutlinedInput
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// --- MAIN COMPONENT ---
export default function ConsultSelecting() {
  const location = useLocation();
  const selectedSpecialty = location.state?.specialty || null;

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 1. Global Stepper Header */}
      <Box sx={{ width: '100%', mb: 6, display: 'flex', justifyContent: 'center' }}>
        <Stepper activeStep={activeStep} sx={{ width: '400px' }}>
          {[1, 2, 3].map((label, index) => (
            <Step key={label}>
              <StepLabel 
                StepIconProps={{ 
                  sx: { fontSize: '2rem', '&.Mui-active, &.Mui-completed': { color: '#1976d2' } } 
                }}
              />
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* 2. Step Rendering Logic */}
      {activeStep === 0 && <Step1Search onNext={handleNext} selectedSpecialty={selectedSpecialty} />}
      {activeStep === 1 && <Step2Schedule onNext={handleNext} onBack={handleBack} />}
      {activeStep === 2 && <Step3Details onBack={handleBack} />}
    </Container>
  );
}

// --- STEP 1: SEARCH & FILTER ---
function Step1Search({ onNext, selectedSpecialty }) {
  const specialties = [
    'Cardiologist', 'General Practitioner', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Psychiatrist', 'Orthopedic', 'Gynecologist'
  ];

  return (
    <Grid container spacing={3}>
      {/* Filters Sidebar */}
      <Grid item xs={12} md={3}>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Filters</Typography>
          <FilterSelect label="Specialty" options={specialties} defaultValue={selectedSpecialty || "All Specialties"} />
          <FilterSelect label="Language Spoken" options={["English", "Sinhala", "Tamil"]} defaultValue="All Languages" />
          <Typography variant="body2" sx={{ mt: 2 }}>Minimum Rating : 4.0</Typography>
          <Slider defaultValue={4} min={0} max={5} step={0.1} sx={{ color: 'black', mb: 2 }} />
          <FilterSelect label="Availability" options={["All Doctors", "Available Today", "Available This Week"]} defaultValue="All Doctors" />
        </Paper>
      </Grid>

      {/* Doctor List */}
      <Grid item xs={12} md={9}>
        <Box mb={2}>
          <Typography variant="h5" fontWeight="bold">Select A Doctor</Typography>
          <Typography variant="body2" color="textSecondary">Choose A Healthcare Provider For Your Consultation</Typography>
        </Box>
        <TextField 
          fullWidth placeholder="search by name or specialty..." 
          sx={{ mb: 3, backgroundColor: '#f0f0f0', borderRadius: 2, '& fieldset': { border: 'none' } }}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
        />
        
        <Stack spacing={2}>
          {[1, 2].map((doc) => (
            <Card key={doc} variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  {/* IMAGE PLACING CODE BLOCK */}
                  <Avatar sx={{ width: 80, height: 80 }} />
                </Grid>
                <Grid item xs>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography fontWeight="bold">Dr. Michael Chen</Typography>
                      <Typography variant="body2" color="primary">Cardiologist</Typography>
                    </Box>
                    <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>View Profile</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <Rating size="small" value={1} max={1} readOnly />
                    <Typography variant="caption" fontWeight="bold">4.9 (248)</Typography>
                    <AccessTimeIcon sx={{ fontSize: 14, ml: 1 }} />
                    <Typography variant="caption">15 Years</Typography>
                  </Box>
                  <Typography variant="caption" display="block" mt={1}>Rs. 2000 Per Session</Typography>
                </Grid>
                <Grid item xs={12} textAlign="right">
                   <Typography variant="caption" color="success.main" fontWeight="bold">8 Slots Available</Typography>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Stack>
        <Button variant="contained" fullWidth sx={{ mt: 3, py: 1.5, borderRadius: 2, textTransform: 'none' }} onClick={onNext}>
          Continue To Booking
        </Button>
      </Grid>
    </Grid>
  );
}

// --- STEP 2: SCHEDULE SELECTION ---
function Step2Schedule({ onNext, onBack }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const slots = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
  
  return (
    <Paper variant="outlined" sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight="bold">Select A Doctor</Typography>
      <Typography variant="body2" color="textSecondary" mb={4}>Choose Your Preferred Consultation Type, Date And Time</Typography>

      <Typography fontWeight="bold" gutterBottom>Consultation Type</Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <Card variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer', borderColor: '#1976d2' }}>
            <VideoCameraBackIcon color="primary" />
            <Box>
              <Typography variant="body2" fontWeight="bold">Video Call</Typography>
              <Typography variant="caption" color="textSecondary">Online Consultation</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
            <LocationOnIcon color="disabled" />
            <Box>
              <Typography variant="body2" fontWeight="bold">In-Person</Typography>
              <Typography variant="caption" color="textSecondary">Clinic Visit</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Typography fontWeight="bold" gutterBottom>Select Date</Typography>
      <OutlinedInput fullWidth sx={{ mb: 3, borderRadius: 2 }} type="date" />

      <Typography fontWeight="bold" gutterBottom>Select Time Slot</Typography>
      <Grid container spacing={1} mb={4}>
        {slots.map(slot => (
          <Grid item xs={3} key={slot}>
            <Button 
              variant={selectedSlot === slot ? "contained" : "outlined"} 
              fullWidth 
              sx={{ 
                borderRadius: 5, 
                color: selectedSlot === slot ? 'white' : 'black', 
                borderColor: '#ddd', 
                backgroundColor: selectedSlot === slot ? '#1976d2' : 'transparent',
                textTransform: 'none' 
              }}
              onClick={() => setSelectedSlot(slot)}
            >
              <AccessTimeIcon sx={{ fontSize: 16, mr: 1 }} /> {slot}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" gap={2}>
        <Button variant="outlined" fullWidth sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }} onClick={onBack}>Back</Button>
        <Button variant="contained" fullWidth sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }} onClick={onNext}>Continue</Button>
      </Box>
    </Paper>
  );
}

// --- STEP 3: CONSULTATION DETAILS ---
function Step3Details({ onBack }) {
  return (
    <Paper variant="outlined" sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold">Consultation Details</Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>Provide Information About Your Consultation</Typography>

      <Typography variant="body2" fontWeight="bold" mb={1}>Reason For Consultation</Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Select displayEmpty defaultValue="" size="small">
          <MenuItem value="" disabled>Select a reason</MenuItem>
          <MenuItem value="checkup">General Checkup</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body2" fontWeight="bold" mb={1}>Current Symptoms</Typography>
      <TextField fullWidth multiline rows={3} placeholder="Describe Your Current Symptoms..." sx={{ mb: 3, backgroundColor: '#f0f0f0' }} />

      <Typography variant="body2" fontWeight="bold" mb={1}>Additional Notes</Typography>
      <TextField fullWidth multiline rows={3} placeholder="Any Additional Information..." sx={{ mb: 3, backgroundColor: '#f0f0f0' }} />

      <Box sx={{ backgroundColor: '#f9f9f9', p: 3, borderRadius: 2, mb: 4 }}>
        <Typography fontWeight="bold" mb={2}>Booking Summary</Typography>
        <SummaryRow label="Doctor:" value="Dr. Michael Chen" />
        <SummaryRow label="Type:" value="Video" />
        <SummaryRow label="Date:" value="November 21st, 2025" />
        <SummaryRow label="Time:" value="09:00 AM" />
        <SummaryRow label="Fee:" value="Rs. 2000" />
      </Box>

      <Box display="flex" gap={2}>
        <Button variant="outlined" fullWidth sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }} onClick={onBack}>Back</Button>
        <Button variant="contained" fullWidth sx={{ py: 1.5, borderRadius: 2, fontWeight: 'bold' }}>Confirm Booking</Button>
      </Box>
    </Paper>
  );
}

// --- HELPER COMPONENTS ---
const FilterSelect = ({ label, options, defaultValue }) => (
  <Box mb={2}>
    <Typography variant="caption" fontWeight="bold">{label} :</Typography>
    <Select fullWidth size="small" defaultValue={defaultValue} sx={{ mt: 0.5 }}>
      <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
      {options.map(option => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
      ))}
    </Select>
  </Box>
);

const SummaryRow = ({ label, value }) => (
  <Box display="flex" justifyContent="space-between" mb={0.5}>
    <Typography variant="body2" color="textSecondary">{label}</Typography>
    <Typography variant="body2" fontWeight="500">{value}</Typography>
  </Box>
);
