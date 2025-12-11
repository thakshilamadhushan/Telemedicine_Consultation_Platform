import { Box, Button, Paper, Typography, Switch, List, ListItem, ListItemIcon, ListItemText,} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function SettingsPage() {
  return (
    <Box>
      {/* NOTIFICATIONS */}
      <Paper elevation={0} sx={{ border: "1px solid #c0c0c0ff", p: 3, mb: 4, borderRadius: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          Notifications
        </Typography>
        <Typography sx={{ mb: 3, color: "gray" }}>
          Manage Your Notification Preferences
        </Typography>

        <List>
          {[1, 2, 3].map((item, i) => (
            <ListItem key={i} sx={{ px: 0 }}>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>

              <ListItemText
                primary="Appointment Reminder"
                secondary="Receive Notifications About Upcoming Appointments"
              />

              <Switch defaultChecked={i !== 2} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* PRIVACY & SECURITY */}
      <Paper elevation={0} sx={{ border: "1px solid #c0c0c0ff", p: 3, mb: 4, borderRadius: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          Privacy & Security
        </Typography>
        <Typography sx={{ mb: 3, color: "gray" }}>
          Manage Your Privacy And Security Settings
        </Typography>

        <List sx={{ px: 0 }}>
          {/* Change Password */}
          <ListItem
            sx={{
              px: 2,
              border: "1px solid #ddddddff",
              mb: 2,
              borderRadius: 3,
              py: 2,
            }}
          >
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>

            <ListItemText
              primary="Change Password"
              secondary="Update Your Account Password"
            />

            <Button variant="outlined">Update</Button>
          </ListItem>

          {/* Two-Factor Authentication */}
          <ListItem
            sx={{
              px: 2,
              border: "1px solid #ddddddff",
              mb: 2,
              borderRadius: 3,
              py: 2,
            }}
          >
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>

            <ListItemText
              primary="Two-Factor Authentication"
              secondary="Add An Extra Layer Of Security"
            />

            <Button variant="outlined">Enable</Button>
          </ListItem>

          {/* Data Privacy */}
          <ListItem
            sx={{
              px: 2,
              border: "1px solid #ddddddff",
              borderRadius: 3,
              py: 2,
            }}
          >
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>

            <ListItemText
              primary="Data Privacy"
              secondary="Control Who Can See Your Information"
            />

            <Button variant="outlined">Manage</Button>
          </ListItem>
        </List>
      </Paper>

      {/* BILLING & PAYMENT */}
      <Paper elevation={0} sx={{ border: "1px solid #c0c0c0ff", p: 3, borderRadius: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          Billing & Payment
        </Typography>
        <Typography sx={{ mb: 3, color: "gray" }}>
          Manage Your Payment Methods And Billing Information
        </Typography>

        <List sx={{ px: 0 }}>
          {/* Payment Methods */}
          <ListItem
            sx={{
              px: 2,
              border: "1px solid #ddddddff",
              mb: 2,
              borderRadius: 3,
              py: 2,
            }}
          >
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>

            <ListItemText
              primary="Payment Methods"
              secondary="Manage Your Saved Payment Methods"
            />

            <Button variant="outlined">Manage</Button>
          </ListItem>

          {/* Billing History */}
          <ListItem
            sx={{
              px: 2,
              border: "1px solid #ddddddff",
              borderRadius: 3,
              py: 2,
            }}
          >
            <ListItemIcon>
              <ReceiptLongIcon />
            </ListItemIcon>

            <ListItemText
              primary="Billing History"
              secondary="View Your Past Invoices And Payments"
            />

            <Button variant="outlined">View</Button>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
