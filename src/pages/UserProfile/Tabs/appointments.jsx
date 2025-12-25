import { Box, Paper, Typography, Avatar, Button, Chip } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import DrMichael from "../../../assets/DoctorsImages/Dr.Michael_Chen.jpg";
import DrEmily from "../../../assets/DoctorsImages/Dr.Emily_Rodriguez.jpg";
import DrJames from "../../../assets/DoctorsImages/Dr.James_Wilson.jpg";

//** This part is only for testing purpose of Join session **
const now = new Date();

// add 9 minutes
const futureTime = new Date(now.getTime() + 9 * 60000);

// format date (e.g., Dec 23, 2025)
const date = futureTime.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

// format time (e.g., 10:09 PM)
const time = futureTime.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
//** End of testing part **/

const appointments = [
  {
    doctorName: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: date, // use dynamic date for testing
    time: time,// use dynamic time for testing
    location: "Video Call",
    doctorImage: DrMichael,
  },
  {
    doctorName: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    date: "Feb 05, 2026",
    time: "9:50 PM",
    location: "Medical Center - Floor 3",
    doctorImage: DrEmily,
  },
  {
    doctorName: "Dr. James Wilson",
    specialty: "Dermatologist",
    date: "Nov 05, 2025",
    time: "11:00 AM",
    location: "Video Call",
    doctorImage: DrJames,
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
  const navigate = useNavigate();
  const joinSession = () => {
    navigate("/patientvideocall");
  };
  
  console.log("Now:", new Date());  

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #ebebebff",
        p: {xs:1, md:3},
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

        // Show join button only if session is within next 10 minutes and vidoe call
        const canJoinNow = app.location === "Video Call" && (diffMinutes <= 10 && diffMinutes > 0);

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
          {/* ROW */}
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Avatar */}
            <Avatar
              src={app.doctorImage}
              sx={{ width: 80, height: 80 }}
            />

            <Box sx={{ flex: 1, width: "100%" }}>
              {/* Name + Status */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  {app.doctorName}
                </Typography>

                <Chip
                  label={isCompleted ? "Completed" : "Upcoming"}
                  color={isCompleted ? "success" : "warning"}
                  size="small"
                  sx={{ ml: "auto" }}
                />
              </Box>

              {/* Specialty */}
              <Typography variant="body2" color="gray" mt={0.5}>
                {app.specialty}
              </Typography>

              {/* Date / Time / Location */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: 1,
                  alignItems: "center",
                }}
              >
                <CalendarMonthIcon fontSize="small" />
                <Typography variant="body2">{app.date}</Typography>

                <ScheduleIcon fontSize="small" />
                <Typography variant="body2">{app.time}</Typography>

                <Box display={"flex"} gap={1}>
                {app.location === "Video Call" ? (
                  <VideocamIcon fontSize="small" />
                ) : (
                  <LocationOnIcon fontSize="small" />
                )}
                <Typography variant="body2">{app.location}</Typography>
                </Box>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "space-between", md: "flex-end" },
                }}
              >
                {!isCompleted && (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ flex: { xs: 1, md: "unset" } }}
                    >
                      Chat
                    </Button>

                    {canJoinNow && (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={joinSession}
                        sx={{ flex: { xs: 1, md: "unset" } }}
                      >
                        Join Session
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ flex: { xs: 1, md: "unset" } }}
                    >
                      Reschedule
                    </Button>
                  </>
                )}

                {isCompleted && (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ flex: { xs: 1, md: "unset" } }}
                  >
                    View Details
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Paper>

        );
      })}
    </Paper>
  );
}
