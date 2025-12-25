import { useState, useMemo } from "react";
import {Box,Grid,Card,CardContent,Typography,Avatar,Button,Rating,Stepper,Step,StepLabel,TextField,Select,MenuItem,Slider,Chip} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";

const doctorsData = [
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 248,
    experience: "15 Years",
    language: ["English", "Sinhala"],
    slots: 8,
    availability: ["T", "S", "V"],
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    rating: 4.8,
    reviews: 312,
    experience: "12 Years",
    language: ["English", "Tamil"],
    slots: 12,
    availability: ["T", "S", "I"],
  },
  {
    name: "Dr. James Wilson",
    specialty: "Dermatologist",
    rating: 4.7,
    reviews: 189,
    experience: "10 Years",
    language: ["Tamil"],
    slots: 5,
    availability: ["S", "V"],
  },
  {
    name: "Dr. Sarah Kim",
    specialty: "Pediatrician",
    rating: 5.0,
    reviews: 421,
    experience: "18 Years",
    language: ["English"],
    slots: 6,
    availability: ["T", "I"],
  }
];

export default function DoctorBooking() {
  const location = useLocation();
  const passedSpecialty = location.state?.specialty || "All";
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState(passedSpecialty);
  const [language, setLanguage] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [minRating, setMinRating] = useState(4);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  useEffect(() => {
    if (passedSpecialty) {
      setSpecialty(passedSpecialty);
    }
  }, [passedSpecialty]);

  // 🔹 Filter logic
  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      // 🔍 Search (name or specialty)
      const matchesSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(search.toLowerCase());

      // 🩺 Specialty
      const matchesSpecialty =
        specialty === "All" || doc.specialty === specialty;

      // 🌐 Language
      const matchesLanguage =
        language === "All" || doc.language.includes(language);

      // ⭐ Rating
      const matchesRating = doc.rating >= minRating;

      // 📅 Availability
      const matchesAvailability =
        availability === "All" || doc.availability.includes(availability);

      return (
        matchesSearch &&
        matchesSpecialty &&
        matchesLanguage &&
        matchesRating &&
        matchesAvailability
      );
    });
  }, [search, specialty, language, availability, minRating]);

  const navigate = useNavigate();

  return (
    <Box>
    <NavBar isUserLoggedIn={true}/>
    <Box sx={{maxWidth:{ xs: "90%", md: "60%"}, px: {xs: 2, md: 3}, mx:"auto", mt: 10}}>
      {/* Stepper */}
      <Box sx={{ maxWidth: 600, mx: "auto", mb: 3 }}>
        <Stepper activeStep={0} alternativeLabel>
          {[1, 2, 3].map((step) => (
            <Step key={step}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: step <= 1 ? "primary.main" : "#e0e0e0",
                      color: step <= 1 ? "white" : "black",
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

      <Grid container spacing={3} mt={2}>
        {/* Filters */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography fontWeight={600}>Filters</Typography>

              <Typography mt={2}>Specialty</Typography>
              <Select
                fullWidth
                size="small"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <MenuItem value="All">All Specialties</MenuItem>
                <MenuItem value="Cardiologist">Cardiologist</MenuItem>
                <MenuItem value="General Practitioner">General Practitioner</MenuItem>
                <MenuItem value="Dermatologist">Dermatologist</MenuItem>
                <MenuItem value="Pediatrician">Pediatrician</MenuItem>
                <MenuItem value="Neurologist">Neurologist</MenuItem>
                <MenuItem value="Psychiatrist">Psychiatrist</MenuItem>
                <MenuItem value="Orthopedic">Orthopedic</MenuItem>
                <MenuItem value="Gynecologist">Gynecologist</MenuItem>
              </Select>

              <Typography mt={2}>Language Spoken</Typography>
              <Select
                fullWidth
                size="small"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value="All">All Languages</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Sinhala">Sinhala</MenuItem>
                <MenuItem value="Tamil">Tamil</MenuItem>
              </Select>

              <Typography mt={2}>Minimum Rating: {minRating}</Typography>
              <Slider
                value={minRating}
                min={0}
                max={5}
                step={0.5}
                onChange={(e, val) => setMinRating(val)}
              />

              <Typography mt={2}>Availability</Typography>
              <Select
                fullWidth
                size="small"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              >
                <MenuItem value="All">All Doctors</MenuItem>
                <MenuItem value="T">Available Today</MenuItem>
                <MenuItem value="S">This Week</MenuItem>
                <MenuItem value="V">Video Only</MenuItem>
                <MenuItem value="I">In-Person Only</MenuItem>
              </Select>

            </CardContent>
          </Card>
        </Grid>

        {/* Doctor List */}
        <Grid item xs={12} md={9}>
          <Typography variant="h6">Select A Doctor</Typography>
          <Typography color="text.secondary" mb={2}>
            Choose a healthcare provider for your consultation
          </Typography>

          {/* 🔍 Search */}
          <TextField
            fullWidth
            size="small"
            placeholder="Search by name or specialty"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />
            }}
            sx={{ mb: 2 }}
          />

          {/* Doctor Cards */}
          {filteredDoctors.length === 0 && (
            <Typography color="error">No doctors found</Typography>
          )}

          {filteredDoctors.map((doc, index) => {
             const isSelected = selectedDoctor?.name === doc.name;
             return(
              <Card
                key={index}
                onClick={() => setSelectedDoctor(doc)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  width: { xs: "100%", sm: "90%", md: "100%", lg: "100%" },
                  cursor: "pointer",
                  border: isSelected ? "2px solid #1976d2" : "1px solid #e0e0e0",
                  boxShadow: isSelected ? 6 : 1,
                  backgroundColor: isSelected ? "rgba(25,118,210,0.04)" : "white",
                  transition: "0.2s ease",
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    {/* Avatar */}
                    <Grid item>
                      <Avatar sx={{ width: 64, height: 64 }} />
                    </Grid>

                    {/* Doctor Info */}
                    <Grid item xs={12} sm container direction="column" spacing={1}>
                      <Grid item container justifyContent="space-between" spacing={{xs:2, sm:20}} alignItems="center">
                        <Typography fontWeight={600} fontSize={18}>
                          {doc.name}
                        </Typography>

                        {/* View Profile Button */}
                        <Button size="small" >
                          View Profile
                        </Button>
                      </Grid>

                      <Grid item>
                        <Typography color="primary">{doc.specialty}</Typography>
                      </Grid>

                      <Grid item>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Rating value={doc.rating} precision={0.1} readOnly size="small" />
                          <Typography variant="body2">
                            {doc.rating} ({doc.reviews})
                          </Typography>
                          <Typography variant="body2">• {doc.experience}</Typography>
                        </Box>
                      </Grid>

                      <Grid item>
                        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                          <Chip icon={<VideoCameraFrontIcon />} label="Video" size="small" />
                          <Chip icon={<LocationOnIcon />} label="In-Person" size="small" />
                        </Box>
                      </Grid>

                      <Grid item container justifyContent="space-between" alignItems="center" mt={1}>
                        <Typography mt={1} fontWeight={500}>
                          Rs. 2000 Per Session
                        </Typography>

                        {/* Slots at Bottom Right */}
                        <Typography color="success.main" fontWeight={600}>
                          {doc.slots} Slots Available
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
          );
        })}


          <Button
            fullWidth
            size="large"
            variant="contained"
            disabled={!selectedDoctor}
            sx={{ mt: 2, borderRadius: 2 }}
            onClick={() => {
              navigate("/consultationselect_2");
            }}
          >
            Continue To Booking
          </Button>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </Box>
  );
}
