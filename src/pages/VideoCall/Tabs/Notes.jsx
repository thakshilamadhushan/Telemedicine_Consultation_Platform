import { Box, Button, TextField, Typography } from "@mui/material";

export default function NotesTab() {
  return (
    <Box sx={{ 
      p: 2, 
      height:"100%", 
      maxHeight: "100dvh", 
      overflow: "auto",
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": { width: 6 },
      "&::-webkit-scrollbar-thumb": { backgroundColor: "#444", borderRadius: 3 }
      }}>

      <Typography mb={1}>
        Chief Complaint
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="Patient main concern..."
        InputProps={{
          sx: {color: "white", bgcolor: "#08111dff", borderRadius: 2, fontSize: 12, mb: 2,},
        }}
      />

      <Typography mb={1}>
        Clinic Notes
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={2}
        placeholder="Symptoms, Examination Findings, Patient History..."
        InputProps={{
          sx: {color: "white", bgcolor: "#08111dff", borderRadius: 2, fontSize: 12, mb: 2},
        }}
      />

      <Typography mb={1}>
        Diagnosis
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={2}
        placeholder="Primary and differential diagnosis..."
        InputProps={{
          sx: {color: "white", bgcolor: "#08111dff", borderRadius: 2, fontSize: 12, mb: 2},
        }}
      />

      <Typography mb={1}>
        Prescription
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={2}
        placeholder="Medical name, Dosage, Frequency, Duration..."
        InputProps={{
          sx: {color: "white", bgcolor: "#08111dff", borderRadius: 2, fontSize: 12, mb: 2},
        }}
      />

      <Typography mb={1}>
        Recommendations
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={2}
        placeholder="Follow-up care, Lifestyle changes, Referrals..."
        InputProps={{
          sx: {color: "white", bgcolor: "#08111dff", borderRadius: 2, fontSize: 12, mb: 2},
        }}
      />

      <Box display={"flex"} gap={3} justifyContent={"center"} mb={3}>
        <Button variant="contained" style={{ backgroundColor: "#1726ffff", color: 'white',}}>
          Save Note
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#09c413ff", color: 'white',}}>
          Send Prescription
        </Button>
      </Box>
    </Box>
  );
}
