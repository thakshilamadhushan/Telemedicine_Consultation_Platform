import { Box, Paper, Typography, Avatar, Chip, } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorIcon from '@mui/icons-material/Error';
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../../../assets/icons/UserProfile", false, /\.(png|jpe?g|svg)$/));

const appointments = [
  {
    doctorName: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "Dec 15, 2025",
    time: "10:00 AM",
    location: "Video Call",
    doctorImage: "/assets/doc1.jpg",
  },
  {
    doctorName: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    date: "Dec 20, 2025",
    time: "2:30 PM",
    location: "Medical Center - Floor 3",
    doctorImage: "/assets/doc2.jpg",
  },
  {
    doctorName: "Dr. James Wilson",
    specialty: "Dermatologist",
    date: "Nov 05, 2025",
    time: "11:00 AM",
    location: "Video Call",
    doctorImage: "/assets/doc3.jpg",
  }
];

const medicalInfo = [
  {BloodType: "A+",
  Height: "5'6\" (168cm)",
  Weight: "145 lbs (66 kg)",
  Allergies: "Peanuts, Penicillin, Latex",
  MedicalConditions: "Hypertension, Seasonal Allergies",
  CurrentMedications: "Lisinopril, Cetirizine",
  }
];

const currentmedications = [
  {
    Lisinopril: "10mg - Once Daily",
    Cetirizine: "10mg - As Needed" 
  }
]

/* Convert "10:30 AM" to [10, 30] */
const convertTo24hr = (timeStr) => {
  if (!timeStr) return [0, 0];
  const parts = timeStr.trim().split(" ");
  if (parts.length < 2) {
    const [h, m] = parts[0].split(":").map(Number);
    return [h || 0, m || 0];
  }
  const [timePart, modifier] = parts;
  let [hours, minutes] = timePart.split(":").map((n) => parseInt(n, 10) || 0);

  if (modifier.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (modifier.toUpperCase() === "AM" && hours === 12) hours = 0;

  return [hours, minutes];
};

const monthNames = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

/* Convert "Dec 15, 2025" + "10:00 AM" → JS Date */
const parseDateManual = (dateString, timeString) => {
  if (!dateString) return null;

  const cleaned = dateString.replace(",", "").trim();
  const parts = cleaned.split(" ");
  if (parts.length === 3) {
    const [monthStr, dayStr, yearStr] = parts;
    const month = monthNames[monthStr];
    const day = parseInt(dayStr, 10);
    const year = parseInt(yearStr, 10);

    if (typeof month === "number" && !isNaN(day) && !isNaN(year)) {
      const [hrs, mins] = convertTo24hr(timeString);
      return new Date(year, month, day, hrs, mins);
    }
  }

  const combined = `${dateString} ${timeString}`.trim();
  const parsed = new Date(combined);
  return !isNaN(parsed) ? parsed : new Date("Invalid");
};

export default function Overview() {
  return (
    <Box display="flex" mx="auto">
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #c0c0c0ff",
        p: 3,
        borderRadius: 4,
        width: "50%",
        mx: "auto"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Upcoming Appointments
      </Typography>

      {appointments.map((app, index) => {
        const sessionDate = parseDateManual(app.date, app.time);
        const isCompleted = sessionDate < new Date(); // Auto detect

        return (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
              border: "1px solid #d1d1d1",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                src={app.doctorImage}
                sx={{ width: 80, height: 80 }}
              />

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {app.doctorName}
                  </Typography>

                  {/* Completed / Upcoming Tag */}
                  <Chip
                    label={isCompleted ? "Completed" : "Upcoming"}
                    color={isCompleted ? "success" : "warning"}
                    size="small"
                    clickable={false}
                    sx={{
                      ml: "auto",
                      cursor: "default",
                      pointerEvents: "none",
                    }}
                  />
                </Box>

                <Typography variant="body2" color="gray">
                  {app.specialty}
                </Typography>

                <Typography
                  variant="body2"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <CalendarMonthIcon /> {app.date}
                  <ScheduleIcon /> {app.time}
                  {app.location === "Video Call" ? (
                    <VideocamIcon />
                  ) : (
                    <LocationOnIcon />
                  )}
                  {app.location}
                </Typography>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Paper>

    <Box mx="auto">
         {/* Vital Information*/}
          <Paper
              elevation={0}
              sx={{
                border: "1px solid #c0c0c0ff",
                p: 3,
                mb: 3,
                borderRadius: 4,
                mx: "auto",
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Vital Information
                </Typography>
                
                <Box display="flex" gap={2} justifyContent="center" flexWrap="center">
              {medicalInfo.map((mi, index) => {
                return (
                  <Box key={index} display="flex" gap={2}>
    
                    {/* Blood Type */}
                    <Paper
                      elevation={0}
                      sx={{
                        backgroundColor: "#f1f1f1ff",
                        p: 2,
                        borderRadius: 4,
                        width: "fix-content",
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2} ml={2}>
                        <Box
                          sx={{
                            width: 55,
                            height: 55,
                            backgroundColor: "#fdb9b9ff",
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          
                          <img
                            src={icons[1]}
                            alt="Blood Icon"
                            style={{ width: 40, height: 40 }}
                          />
                        </Box >
                        <Box>
                          <Typography color="gray"> Blood Type</Typography>
                          <Typography>{mi.BloodType}</Typography>
                        </Box>
                      </Box>
                    </Paper>
    
                    {/* Height */}
                    <Paper
                      elevation={0}
                      sx={{
                        backgroundColor: "#f1f1f1ff",
                        p: 2,
                        borderRadius: 4,
                        width: "fix-content",
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2} ml={2}>
                        <Box
                          sx={{
                            width: 55,
                            height: 55,
                            backgroundColor: "#b9c3fdff",
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          
                          <img
                            src={icons[0]}
                            alt="Blood Icon"
                            style={{ width: 40, height: 40 }}
                          />
                        </Box >
                        <Box>
                          <Typography color="gray"> Height </Typography>
                          <Typography>{mi.Height}</Typography>
                        </Box>
                      </Box>
                    </Paper>
    
                    {/* Weight */}
                    <Paper
                      elevation={0}
                      sx={{
                        backgroundColor: "#f1f1f1ff",
                        p: 2,
                        borderRadius: 4,
                        width: "fix-content",
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2} ml={2}>
                        <Box
                          sx={{
                            width: 55,
                            height: 55,
                            backgroundColor: "#b9fdbcff",
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          
                          <img
                            src={icons[2]}
                            alt="Blood Icon"
                            style={{ width: 40, height: 40 }}
                          />
                        </Box >
                        <Box>
                          <Typography color="gray"> Weight</Typography>
                          <Typography>{mi.Weight}</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
          </Paper>

          {/* Allergies & Conditions */}
          {medicalInfo.map((mi, index) => (
            <Box key={index}>
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #c0c0c0ff",
                  p: 3,
                  mb: 3,
                  borderRadius: 4,
                }}
              >
                <Typography display="flex" justifyContent="space-between" variant="h6" sx={{ mb: 2 }}  gap={3}>
                  Allergies & Conditions
                </Typography>

                <Typography display="flex" variant="h6" sx={{ mb: 2 }} gap={1}>
                  <ErrorIcon sx={{ color: "red", fontSize: 30 }} /> Allergies
                </Typography>
                
                <Box display="flex" gap={3} mb={3}>
                {mi.Allergies.split(",").map((item, i) => (
                <Box
                  sx={{
                    px: 1,
                    py: 0.2,
                    fontSize: 11,
                    borderRadius: 1,
                    width: "fit-content",
                    backgroundColor: "#c6fdcfff",
                    color: "#0ea800ff",
                    fontWeight: 500,
                    
                  }}
                >
                  {item.trim()}
                </Box>
              ))}
              </Box>

              <Typography display="flex" variant="h6" sx={{ mb: 2 }} gap={1}>
                  <img src={icons[0]} alt=" " width="30" height="30"/> Medical Conditions
                </Typography>
                
                <Box display="flex" gap={3}>
                {mi.MedicalConditions.split(",").map((item, i) => (
                <Box
                  sx={{
                    px: 1,
                    py: 0.2,
                    fontSize: 11,
                    borderRadius: 1,
                    width: "fit-content",
                    backgroundColor: "#c6d5fdff",
                    color: "#000ba8ff",
                    fontWeight: 500,
                    
                  }}
                >
                  {item.trim()}
                </Box>
              ))}
              </Box>
              </Paper>
            </Box>
          ))}  

          <Box>
              {/* Current Medications */}
              {currentmedications.map((cm, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    border: "1px solid #c0c0c0ff",
                    p: 3,
                    mb: 3,
                    borderRadius: 4,
                  }}
                >
                  <Typography display="flex" justifyContent="space-between" variant="h6" sx={{ mb: 2 }} gap={3}> 
                    Current Medications
                  </Typography>
      
                  <Paper
                    elevation={0}
                    sx={{
                      border: "1px solid #ddddddff",
                      p: 2,
                      mb: 2,
                      borderRadius: 4,
                    }}
                  >
                    <Box display="flex" alignItems="center" ml={2}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box
                            sx={{
                              width: 55,
                              height: 55,
                              backgroundColor: "#e4b9fdff",
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={icons[3]}
                              alt="Blood Icon"
                              style={{ width: 40, height: 40 }}
                            />
                          </Box>
      
                          <Box>
                            <Typography color="gray">Lisinopril</Typography>
                            <Typography>{cm.Lisinopril}</Typography>
                          </Box>
                        </Box>
                    </Box>
                  </Paper>
      
                  <Paper
                    elevation={0}
                    sx={{
                      border: "1px solid #ddddddff",
                      p: 2,
                      borderRadius: 4,
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2} ml={2}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box
                            sx={{
                              width: 55,
                              height: 55,
                              backgroundColor: "#e4b9fdff",
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={icons[3]}
                              alt="Blood Icon"
                              style={{ width: 40, height: 40 }}
                            />
                          </Box>
      
                          <Box>
                            <Typography color="gray">Cetirizine</Typography>
                            <Typography>{cm.Cetirizine}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Paper>
              ))}
            </Box>
        </Box>
      </Box>
  );
}
