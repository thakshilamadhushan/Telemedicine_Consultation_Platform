import React from "react";
import { Box, Tabs, Tab, Avatar, Button, Typography, Paper, Stack } from "@mui/material";
import Navbar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import Appointments from "./Tabs/appointments";
import MedicalInfo from "./Tabs/medicalInfo";
import Settings from "./Tabs/settings";
import Overview from "./Tabs/overview";
import EventIcon from "@mui/icons-material/Event";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import user from "../../assets/UserImages/Emily_chen.jpg";


export default function UserProfile() {
  const [tab, setTab] = React.useState(0);

  return (
    <>
      <Navbar isUserLoggedIn={true}/>

      <Box sx={{ width: "90%", mt: 12, px: { xs: 2, md: 6 } }} justifyContent="center" mx="auto">
        
        {/* PROFILE CARD */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            borderRadius: 4,
            mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
            border: "1px solid #e6e6e6ff",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            gap: 3
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar
              src={user}
              sx={{ width: 130, height: 130 }}
            />
            <Stack spacing={1.2} sx={{ p: 1 }}>
              <Box display={"flex"} alignItems="center" gap={1}>
                  <Typography variant="h6" >Sarah Johnson</Typography>
                  <Box
                      sx={{
                      px: 1,
                      py: 0.2,
                      fontSize: 11,
                      borderRadius: 1,
                      backgroundColor: "#c6fdcfff",
                      color: "#0ea800ff",
                      fontWeight: 500,
                      }}
                  >
                      {"Verified"}
                  </Box>
              </Box>
              <Typography variant="body2" color="gray">Patient ID: PT-2023-0456</Typography>
              <Typography variant="body2">sarah.johnson@email.com</Typography>
              <Typography variant="body2">Yakkala, Sri Lanka</Typography>
            </Stack>
          </Box>

          <Box sx={{p: 2}} >
            <Box display="flex" gap={3} mb={2}>
              <Button variant="contained">Edit Profile</Button>
              <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>Log Out</Button>
            </Box>
            <Button variant="outlined">Download Medical Records</Button>
          </Box>
        </Paper>

        {/* TABS */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 10,
            p: 0.5,
            backgroundColor: "#e5e5e5",
            display: "flex",
            justifyContent: "center",
            height: 40,
            width: { xs: "100%", md: "60%" },
            mx: "auto",
          }}>
            <Tabs
              value={tab}
              onChange={(e, v) => setTab(v)}
              variant="scrollable"
              scrollButtons={false}
              alignItems="center"
              sx={{
                minHeight: 0,
                "& .MuiTabs-flexContainer": {
                  gap: 1,
                },
                "& .MuiTabs-indicator": {
                  display: "none",  // hide underline
                },
            }}
            >
              <Tab
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: 180,
                    minHeight: 0,
                    px: 2,
                    borderRadius: 10,
                    color: "#000",
                    height: 40,

                    display: "flex",
                    alignItems: "center",

                    "&.Mui-selected": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  icon={<EventIcon />}
                  iconPosition="start" 
                  label="Appointments" />

              <Tab
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: 180,
                    minHeight: 0,
                    px: 2,
                    borderRadius: 10,
                    color: "#000",
                    height: 40,

                    display: "flex",
                    alignItems: "center",

                    "&.Mui-selected": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  icon={<InfoIcon />}
                  iconPosition="start"
                  label="Medical Info" />

              <Tab 
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: 180,
                    minHeight: 0,
                    px: 2,
                    borderRadius: 10,
                    color: "#000",
                    height: 40,

                    display: "flex",
                    alignItems: "center",

                    "&.Mui-selected": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  icon={<SettingsIcon />}
                  iconPosition="start"
                  label="Settings" />

              <Tab
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    minWidth: 180,
                    minHeight: 0,
                    px: 2,
                    borderRadius: 10,
                    color: "#000",
                    height: 40,

                    display: "flex",
                    alignItems: "center",

                    "&.Mui-selected": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  icon={<DashboardIcon />}
                  iconPosition="start" 
                  label="Overview" />
            </Tabs>
        </Paper>

        <Box sx={{ mt: 4 }}>
          {tab === 0 && <Appointments />}
          {tab === 1 && <MedicalInfo />}
          {tab === 2 && <Settings />}
          {tab === 3 && <Overview />}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
