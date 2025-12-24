import { useState } from "react";
import {Box,Card,CardContent,Typography,Grid,Button,Stepper,Step,StepLabel,Select,MenuItem,TextField,} from "@mui/material";
import NavBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import BookingSuccessPopup from "./bookingCompletePopup";
import { useNavigate } from 'react-router-dom';

export default function ConsultationDetails() {
  const [reason, setReason] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

    const handleBooking = () => {
        // Your booking logic here
        setOpenPopup(true);
    };

  return (
    <Box>
      <NavBar isUserLoggedIn />

      <Box sx={{ maxWidth: 900, mx: "auto", mt: 10, px: 2 }}>
        {/* Stepper */}
        <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          <Stepper activeStep={2} alternativeLabel>
            {[1, 2, 3].map((step) => (
              <Step key={step}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                      }}
                    >
                      {step}
                    </Box>
                  )}
                />
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Main Card */}
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600}>
              Consultation Details
            </Typography>
            <Typography color="text.secondary" mb={3}>
              Provide information about your consultation
            </Typography>

            {/* Reason */}
            <Typography fontWeight={600} mb={1}>
              Reason For Consultation
            </Typography>
            <Select
              fullWidth
              size="small"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              displayEmpty
              sx={{ mb: 3 }}
            >
              <MenuItem value="">
                <em>Select a reason</em>
              </MenuItem>
              <MenuItem value="General Checkup">General Checkup</MenuItem>
              <MenuItem value="Follow-up Consultation">Follow-up Consultation</MenuItem>
              <MenuItem value="New Symptoms">New Symptoms</MenuItem>
              <MenuItem value="Prescription Refill">Prescription Refill</MenuItem>
              <MenuItem value="Lab Result Review">Lab Result Review</MenuItem>
              <MenuItem value="Second Opinion">Second Opinion</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>

            {/* Symptoms */}
            <Typography fontWeight={600} mb={1}>
              Current Symptoms
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              placeholder="Describe your current symptoms..."
              sx={{ mb: 3, backgroundColor: "#d6d6d6ff", }}
            />

            {/* Notes */}
            <Typography fontWeight={600} mb={1}>
              Additional Notes
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={3}
              placeholder="Any additional information you would like to share with the doctor..."
              sx={{ mb: 4, backgroundColor: "#d6d6d6ff", }}
            />

            {/* Booking Summary */}
            <Card variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Booking Summary
                </Typography>

                <Box display={"flex"} gap={{xs:8, md:30}}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography>Doctor :</Typography>
                        <Typography>Type :</Typography>
                        <Typography>Date :</Typography>
                        <Typography>Time :</Typography>
                        <Typography>Fee :</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Typography>Dr. Michael Chen</Typography>
                        <Typography>Video</Typography>
                        <Typography>November 21st, 2025</Typography>
                        <Typography>09:00 AM</Typography>
                        <Typography>Rs. 2000</Typography>
                    </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Actions */}
            <Box sx={{ mx: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ height: 48 }}
                    onClick={() => {
                        navigate("/consultationselect_2");
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ height: 48 }}
                    onClick={handleBooking}
                  >
                    Confirm Booking
                  </Button>
                  <BookingSuccessPopup
                    open={openPopup}
                    setOpen={setOpenPopup}
                    doctorName="Dr. Name"
                    date="Dec 24, 2025"
                    time="10:00 AM"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}
