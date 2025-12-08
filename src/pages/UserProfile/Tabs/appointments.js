import { Box, Paper, Typography, Avatar, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';

const appointments = [
  {
    doctorName: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "Nov 15, 2025",
    time: "10:00 AM",
    location: "Video Call",
    doctorImage: "/assets/doc1.jpg",
  },
  {
    doctorName: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    date: "Nov 20, 2025",
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

export default function Appointments() {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #ebebebff",
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Upcoming Appointments
      </Typography>

      {appointments.map((app, index) => (
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
          {/* ROW: Doctor Image + Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={app.photo || "/assets/doc1.jpg"} sx={{ width: 80, height: 80 }}/>

            <Box sx={{ flex: 1}}>
              <Typography sx={{ fontWeight: 600 }}>{app.doctorName}</Typography>

              <Typography variant="body2" color="gray">
                {app.specialty}
              </Typography>

              <Typography variant="body2" display="flex" alignItems="center" gap={1}>
                <CalendarMonthIcon /> {app.date} <ScheduleIcon/> {app.time} <VideocamIcon/> {app.location}
                {/* BUTTONS */}
                <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "center", ml: "auto"}}>
                  <Button variant="contained" size="small">
                    Join Session
                  </Button>
                  <Button variant="outlined" size="small">
                    Reschedule
                  </Button>
                </Box>
              </Typography>
            </Box>
          </Box>

          
        </Paper>
      ))}
    </Paper>
  );
}
