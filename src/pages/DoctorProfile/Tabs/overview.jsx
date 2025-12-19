import React from "react";
import {Box,Grid,Paper,Typography,Chip,Stack,Divider} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StatCard = ({ icon, value, label, bg }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      borderRadius: 3,
      backgroundColor: bg,
      height: "100%",
    }}>
    <Stack spacing={1}>
      {icon}
      <Typography variant="h6" fontWeight={700}>
        {value}
      </Typography>
      <Typography variant="body2">{label}</Typography>
    </Stack>
  </Paper>
);

export default function Overview() {
  return (
    <Box display={"flex"} gap={3} justifyContent={"center"} mx={"auto"}>
      <Box >
        {/* TODAY OVERVIEW */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff", mb: 3}}>
          <Typography variant="h6" mb={2}>
            Today&apos;s Overview
          </Typography>
          <Box spacing={3} display={"flex"} gap={3} p={3}>
            <Grid item xs={6} md={3}>
              <StatCard
                icon={<CalendarMonthIcon color="primary" />}
                value="8"
                label="Today's Appointments"
                bg="#e6ebff"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StatCard
                icon={<GroupsIcon sx={{ color: "green" }} />}
                value="5248"
                label="Total Patients"
                bg="#e9ffe8"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StatCard
                icon={<StarIcon sx={{ color: "#f5a623" }} />}
                value="4.9"
                label="Average Rating"
                bg="#fff3d6"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StatCard
                icon={<TrendingUpIcon sx={{ color: "purple" }} />}
                value="98%"
                label="Completion Rate"
                bg="#f3e5ff"
              />
            </Grid>
          </Box>
        </Paper>

        {/* PERFORMANCE METRICS */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff", mb: 3}}>
          <Typography variant="h6" mb={2}>
            Performance Metrics
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#d0d3ffff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarMonthIcon color="primary" />
                </Box >
              <Box>
              <Typography>42 </Typography>
              <Typography>Appointments This Week</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#d2ffd0ff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <StarIcon color="success" />
                </Box >
              <Box>
              <Typography>248 Reviews </Typography>
              <Typography> Patient Feedback</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#ead0ffff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ color: "purple" }} />
                </Box >
              <Box>
              <Typography>&lt; 2 Hours </Typography>
              <Typography>Avg Response Time</Typography>
              </Box>
            </Stack>
          </Stack>
        </Paper>

        {/* EARNINGS */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff" }}>
            <Typography variant="h6" mb={2}>
              Earnings Overview
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 3, minWidth: 300, border: "1px solid #c0c0c0ff" }}>
                <Typography variant="body2" color="text.secondary">
                  Today
                </Typography>
                <Typography fontWeight={700}>Rs. 6000</Typography>
              </Paper>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 3, minWidth: 300, border: "1px solid #c0c0c0ff"  }}>
                <Typography variant="body2" color="text.secondary">
                  This Month
                </Typography>
                <Typography fontWeight={700}>Rs. 15000</Typography>
              </Paper>
            </Stack>
          </Paper>
          </Box>

        <Box>
        {/* QUICK INFO */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff",mb: 3}}>
            <Typography variant="h6" mb={2}>
              Quick Information
            </Typography>

            <Typography fontWeight={600}>Specializations</Typography>
            <Stack direction="row" spacing={1} mt={1} mb={2} flexWrap="wrap">
              <Chip label="Cardiology" size="small" color="primary" />
              <Chip label="Heart Failure" size="small" color="primary" />
              <Chip label="Preventive Care" size="small" color="primary" />
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={600}>Experience</Typography>
            <Typography mb={2}>15+ Years</Typography>
            
            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={600}>Availability Status</Typography>
            <Chip label="Available" size="small" color="success" sx={{ my: 1 }} />

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight={600}>Next Available Slot</Typography>
            <Typography>Today at 4:00 PM</Typography>
          </Paper>

        {/* CARE TIP */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              backgroundColor: "#eaf1ff",
              border: "1px solid #bcd3ff",
            }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <FavoriteIcon color="primary" fontSize="large" />
              <Box>
                <Typography fontWeight={700}>Patient Care Tips</Typography>
                <Typography variant="body2">
                  Remember to follow up with patients within 24 hours of their
                  appointment.
                </Typography>
              </Box>
            </Stack>
          </Paper>
          </Box>
    </Box>
  );
}
