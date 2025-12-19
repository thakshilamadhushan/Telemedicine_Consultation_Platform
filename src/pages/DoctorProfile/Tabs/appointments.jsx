import { Box, Paper, Typography, Avatar, Button, Chip } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const appointments = [
  {
    patientName: "Sarah Jonson",
    reason: "Heart Failure Management",
    date: "Dec 15, 2025",
    time: "10:00 AM",
    location: "Video Call",
    doctorImage: "/assets/doc1.jpg",
  },
  {
    patientName: "Robert Martinez",
    reason: "Preventive Cardiology",
    date: "Dec 20, 2025",
    time: "2:30 PM",
    location: "Medical Center - Floor 3",
    doctorImage: "/assets/doc2.jpg",
  },
  {
    patientName: "Emily Chen",
    reason: "Arrhythmia Management",
    date: "Nov 05, 2025",
    time: "11:00 AM",
    location: "Video Call",
    doctorImage: "/assets/doc3.jpg",
  }
];

const monthNames = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

const convertTo24hr = (timeStr) => {
  if (!timeStr) return [0, 0];
  const parts = timeStr.trim().split(" ");
  if (parts.length < 2) {
    // if already "HH:MM" assume it's 24h
    const [h, m] = parts[0].split(":").map(Number);
    return [h || 0, m || 0];
  }
  const [timePart, modifier] = parts;
  let [hours, minutes] = timePart.split(":").map((n) => parseInt(n, 10) || 0);

  if (modifier.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (modifier.toUpperCase() === "AM" && hours === 12) hours = 0;

  return [hours, minutes];
};

const parseDateManual = (dateString, timeString) => {
  if (!dateString) return null;

  // Expecting format like: "Dec 15, 2025"
  const cleaned = dateString.replace(",", "").trim();
  const parts = cleaned.split(" ");
  if (parts.length === 3) {
    const [monthStr, dayStr, yearStr] = parts;
    const month = monthNames[monthStr];
    const day = parseInt(dayStr, 10);
    const year = parseInt(yearStr, 10);
    if (typeof month === "number" && !Number.isNaN(day) && !Number.isNaN(year)) {
      const [hrs, mins] = convertTo24hr(timeString);
      return new Date(year, month, day, hrs, mins);
    }
  }

  // fallback: try letting Date.parse handle it
  const combined = `${dateString} ${timeString || ""}`.trim();
  const parsed = new Date(Date.parse(combined));
  if (!isNaN(parsed)) return parsed;

  // last resort: return invalid date
  return new Date("Invalid");
};

export default function Appointments() {
  
  console.log("Now:", new Date());  

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

      {appointments.map((app, index) => {
        const sessionDateTime = parseDateManual(app.date, app.time);
        const isValid = sessionDateTime instanceof Date && !isNaN(sessionDateTime);
        const isCompleted = isValid ? sessionDateTime < new Date() : false;
        const now = new Date();
        const diffMs = sessionDateTime - now;   // milliseconds
        const diffMinutes = diffMs / (1000 * 60);

        // Show join button only if session is within next 10 minutes
        const canJoinNow = diffMinutes <= 10 && diffMinutes > 0;

        // DEBUG: log parsed date and status
        console.log(
          `app[${index}]`,
          app.date,
          app.time,
          "=> parsed:",
          sessionDateTime,
          "valid?",
          isValid,
          "isCompleted?",
          isCompleted
        );
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
          {/* ROW: Doctor Image + Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={app.photo || "/assets/doc1.jpg"} sx={{ width: 80, height: 80 }}/>

            <Box sx={{ flex: 1}} >
              <Box sx={{flex: 1}} alignItems="center" display="flex" gap={1}>
              <Typography sx={{ fontWeight: 600 }}>{app.patientName}</Typography>
              <Chip
                  label={isCompleted ? "Completed" : "Upcoming"}
                  color={isCompleted ? "success" : "warning"}
                  size="small"
                  sx={{ width: "fit-content", display: "flex", ml: "auto"}}
                />
              </Box>
              <Typography variant="body2" color="gray">
                {app.reason}
              </Typography>

              <Typography variant="body2" display="flex" alignItems="center" gap={1}>
                <CalendarMonthIcon /> {app.date} <ScheduleIcon/> {app.time} {app.location === "Video Call" ? (
                  <VideocamIcon />
                ) : (
                  <LocationOnIcon />
                )} {app.location}

                {/* BUTTONS */}
                <Box sx={{ mt: 1, display: "flex", gap: 1, justifyContent: "center", ml: "auto"}}>
                  {!isCompleted && (
                  <>
                  <Button variant="contained" size="small">
                    Chat
                  </Button>
                  {/* SHOW JOIN ONLY IN LAST 10 MINUTES */}
                  {canJoinNow && (
                    <Button variant="contained" size="small">
                      Join Session
                    </Button>
                  )}
                  <Button variant="outlined" size="small">
                    Reschedule
                  </Button>
                  </>
                  )}

                  {isCompleted && (
                    <Button variant="outlined" size="small">
                      View Details
                    </Button>
                  )}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Paper>
        );
      })}
    </Paper>
  );
}
