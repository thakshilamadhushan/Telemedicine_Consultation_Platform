import { useState } from "react";
import {Box,Card,CardContent,Typography,Grid,Button,Stepper,Step,StepLabel,} from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
];

export default function ChooseTime() {
  const [consultationType, setConsultationType] = useState("video");
  const [selectedSlot, setSelectedSlot] = useState(null);
   const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  return (
    <Box>
      <NavBar isUserLoggedIn />

      <Box sx={{ maxWidth: "850px", mx: "auto", mt: 10, px: 2 }}>
        {/* Stepper */}
        <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          <Stepper activeStep={1} alternativeLabel>
            {[1, 2, 3].map((step) => (
              <Step key={step}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: step <= 2 ? "primary.main" : "#e0e0e0",
                        color: step <= 2 ? "white" : "black",
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

        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600}>
              Select A Doctor
            </Typography>
            <Typography color="text.secondary" mb={3}>
              Choose your preferred consultation type, date and time
            </Typography>

            {/* Consultation Type */}
            <Typography fontWeight={600} mb={1}>
              Consultation Type
            </Typography>

            <Grid container spacing={4} mb={3} justifyContent={"center"}>
              <Grid item xs={12} sm={6}>
                <Card
                  onClick={() => setConsultationType("video")}
                  sx={{
                    cursor: "pointer",
                    border: consultationType === "video"
                      ? "2px solid #1976d2"
                      : "1px solid #e0e0e0",
                  }}
                >
                  <CardContent sx={{ display: "flex", gap: 2 }}>
                    <VideoCameraFrontIcon color="primary" />
                    <Box width={300}>
                      <Typography fontWeight={600}>Video Call</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Online Consultation
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card
                  onClick={() => setConsultationType("inperson")}
                  sx={{
                    cursor: "pointer",
                    border: consultationType === "inperson"
                      ? "2px solid #1976d2"
                      : "1px solid #e0e0e0",
                  }}
                >
                  <CardContent sx={{ display: "flex", gap: 2 }}>
                    <LocationOnIcon color="primary" />
                    <Box width={300}>
                      <Typography fontWeight={600}>In-Person</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Hospital Visit
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Date */}
            <Typography fontWeight={600} mb={1}>
              Select Date
            </Typography>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                width: "95%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "24px",
              }}
            />

            {/* Time Slots */}
            <Typography fontWeight={600} mb={2}>
              Select Time Slot
            </Typography>

            <Grid container spacing={2}>
              {timeSlots.map((slot) => (
                <Grid item xs={6} sm={3} key={slot}>
                  <Button
                    variant={selectedSlot === slot ? "contained" : "outlined"}
                    startIcon={<AccessTimeIcon />}
                    onClick={() => setSelectedSlot(slot)}
                    sx={{ borderRadius: 2, width:{xs:150, md:190}}}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {/* Actions */}
            <Grid container spacing={2} mt={4}>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="outlined" size="large" onClick={() => {navigate("/consultationselect_1");}}>
                  Back
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  disabled={!selectedSlot || !selectedDate}
                  onClick={() => {
                    navigate("/consultationselect_3");
                  }}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}
