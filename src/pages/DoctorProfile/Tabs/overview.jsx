import {Box,Grid,Paper,Typography,Chip,Stack,Divider,Card} from "@mui/material";
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
    <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, md: 5 }, py: 3 }}>
      {/* LEFT COLUMN */}
      <Grid item xs={12} md={8} container direction="column" spacing={3}>
        {/* TODAY OVERVIEW */}
        <Box>
          <Card
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 4,
              border: "1px solid #c0c0c0ff",
            }}
          >
            <Typography variant="h6" mb={2}>
              Today's Overview
            </Typography>

            {/* Cards Container */}
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
            >
              {/* Card 1 */}
              <Box width={{ xs: "45%", sm: "23%" }} height={"fit-content"}>
                <StatCard
                  icon={<CalendarMonthIcon color="primary" />}
                  value="8"
                  label="Today's Appointments"
                  bg="#e6ebff"
                />
              </Box>

              {/* Card 2 */}
              <Box width={{ xs: "45%", sm: "23%" }} height={"fit-content"}>
                <StatCard
                  icon={<GroupsIcon sx={{ color: "green" }} />}
                  value="5248"
                  label="Total Patients"
                  bg="#e9ffe8"
                />
              </Box>

              {/* Card 3 */}
              <Box width={{ xs: "45%", sm: "23%" }} height={"fit-content"}>
                <StatCard
                  icon={<StarIcon sx={{ color: "#f5a623" }} />}
                  value="4.9"
                  label="Average Rating"
                  bg="#fff3d6"
                />
              </Box>

              {/* Card 4 */}
              <Box width={{ xs: "45%", sm: "23%" }} height={"fit-content"}>
                <StatCard
                  icon={<TrendingUpIcon sx={{ color: "purple" }} />}
                  value="98%"
                  label="Completion Rate"
                  bg="#f3e5ff"
                />
              </Box>
            </Box>
          </Card>
        </Box>



        {/* PERFORMANCE METRICS */}
        <Grid item>
          <Paper
            elevation={0}
            sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff" }}
          >
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
                </Box>
                <Box>
                  <Typography>42</Typography>
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
                </Box>
                <Box>
                  <Typography>248 Reviews</Typography>
                  <Typography>Patient Feedback</Typography>
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
                </Box>
                <Box>
                  <Typography>&lt; 2 Hours</Typography>
                  <Typography>Avg Response Time</Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* EARNINGS */}
        <Grid item>
          <Paper
            elevation={0}
            sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff" }}
          >
            <Typography variant="h6" mb={2}>
              Earnings Overview
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="space-between"
            >
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  minWidth: 150,
                  border: "1px solid #c0c0c0ff",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Today
                </Typography>
                <Typography fontWeight={700}>Rs. 6000</Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  minWidth: 150,
                  border: "1px solid #c0c0c0ff",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  This Month
                </Typography>
                <Typography fontWeight={700}>Rs. 15000</Typography>
              </Paper>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* RIGHT COLUMN */}
      <Grid item xs={12} md={4} container direction="column" spacing={3}>
        {/* QUICK INFO */}
        <Grid item>
          <Paper
            elevation={0}
            sx={{ p: 3, borderRadius: 4, border: "1px solid #c0c0c0ff" }}
          >
            <Typography variant="h6" mb={2}>
              Quick Information
            </Typography>

            <Typography fontWeight={600}>Specializations</Typography>
            <Stack direction="row" spacing={1} mt={1} mb={2} sx={{flexWrap:"wrap", gap: 1}}>
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
        </Grid>

        {/* CARE TIP */}
        <Grid item>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              backgroundColor: "#eaf1ff",
              border: "1px solid #bcd3ff",
            }}
          >
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
        </Grid>
      </Grid>
    </Grid>
  );
}