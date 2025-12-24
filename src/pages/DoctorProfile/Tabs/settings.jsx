import React from "react";
import {Box,Paper,Typography,Switch,TextField,Button,Stack,IconButton,} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Section = ({ icon, title, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      mb: 3,
      borderRadius: 3,
      height: "fit-content",
      border: "1px solid #c0c0c0ff",
    }}>
    <Stack direction="row" spacing={1.5} alignItems="center">
      <IconButton size="small" color="primary">
        {icon}
      </IconButton>
      <Typography fontWeight={600}>{title}</Typography>
    </Stack>
    {children}
  </Paper>
);

const ToggleRow = ({ title, subtitle }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems={{sm: "center" }}
    gap={1}
    py={1.5}
    borderBottom="1px solid"
    borderColor="divider">
    <Box pr={1}>
      <Typography fontWeight={500}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
    <Switch defaultChecked />
  </Stack>
);

export default function SettingsPage() {
  return (
    <Box gap={2} display={{md:"flex"}} justifyContent={"center"} mx={"auto"}>
      <Box>
        {/* Availability */}
          <Section
            icon={<EventAvailableIcon />}
            title="Availability Settings">
            <ToggleRow
              title="Accept New Patients"
              subtitle="Allow new patients to book appointments"
            />
            <ToggleRow
              title="Video Consultations"
              subtitle="Enable video call appointments"
            />
            <ToggleRow
              title="In-Person Visits"
              subtitle="Enable in-person appointments"
            />
            <Typography pt={1} minWidth={180}>Default Consultation Duration</Typography>
            <Stack direction="row" alignItems="center" spacing={2} mt={1}>
              <AccessTimeIcon color="action" />
              <TextField
                size="small"
                type="number"
                defaultValue={30}
                sx={{ width: 90 }}
              />
              <Typography>Minutes</Typography>
            </Stack>
          </Section>

          {/* Fees */}
          <Section icon={<PaymentsIcon />} title="Consultation Fees">
            <Stack spacing={2} pt={3}>
              <TextField
                label="Video Consultation Fee (Rs.)"
                defaultValue={1500}
                fullWidth
                sx={{ minWidth: {xs: 200, md: 350} }}
              />
              <TextField
                label="In-Person Visit Fee (Rs.)"
                defaultValue={2000}
                fullWidth
                sx={{ minWidth: {xs: 200, md: 350} }}
              />
              <TextField
                label="Follow-Up Consultation Fee (Rs.)"
                defaultValue={1000}
                fullWidth
                sx={{ minWidth: {xs: 200, md: 350} }}
              />
              <Button variant="contained" size="large">
                Update Fees
              </Button>
            </Stack>
          </Section>
        </Box>

        <Box>
        {/* Notifications */}
          <Section
            icon={<NotificationsIcon />}
            title="Notification Preferences">
            <ToggleRow
              title="New Appointment Bookings"
              subtitle="Get notified of new appointments"
            />
            <ToggleRow
              title="Appointment Reminders"
              subtitle="Receive reminders before appointments"
            />
            <ToggleRow
              title="Patient Messages"
              subtitle="Notifications for patient messages"
            />
            <ToggleRow
              title="New Reviews"
              subtitle="Alert when patients leave reviews"
            />
          </Section>
      
        
        {/* Security */}
          <Section icon={<SecurityIcon />} title="Security & Privacy">
            <Stack spacing={2} mt={3}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" spacing={1.5} alignItems="center" mr={3}>
                    <LockIcon />
                    <Box>
                      <Typography fontWeight={500}>Change Password</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Update your account password
                      </Typography>
                    </Box>
                  </Stack>
                  <Button variant="outlined">Update</Button>
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" spacing={1.5} alignItems="center" mr={3}>
                    <SecurityIcon />
                    <Box>
                      <Typography fontWeight={500}>
                        Two-Factor Authentication
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Add an extra layer of security
                      </Typography>
                    </Box>
                  </Stack>
                  <Button variant="outlined">Enable</Button>
                </Stack>
              </Paper>

              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" spacing={1.5} alignItems="center" mr={3}>
                    <PublicIcon />
                    <Box>
                      <Typography fontWeight={500}>Data Privacy</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Control who can see your information
                      </Typography>
                    </Box>
                  </Stack>
                  <Button variant="outlined">Manage</Button>
                </Stack>
              </Paper>
            </Stack>
          </Section>
        </Box>
    </Box>
  );
}
