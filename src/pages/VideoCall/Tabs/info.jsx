import { Box, Typography, Paper } from "@mui/material";

export default function InfoTab() {
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

        {/* PATIENT DETAILS */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: "#08111dff", mb: 2,}}>
        <Typography variant="h6" mb={2} color="white">
          Patient Details
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", color: "white" }}>
            <Box>
                <Typography>Age : </Typography>
                <Typography>Gender :</Typography>
                <Typography>Medical History :</Typography>
            </Box>
            <Box>
                <Typography>34 Years</Typography>
                <Typography>Female</Typography>
                <Typography>O+</Typography>
            </Box>
        </Box>
      </Paper>

      {/* ALLERGIES */ }
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: "#08111dff", mb: 2}}>
        <Typography variant="h6" mb={2} color="white">
          Allergies
        </Typography>
        <Box sx={{ justifyContent: "space-between", color: "white" }}>
            <Typography>Penicillin</Typography>
            <Typography>Peanuts</Typography>
        </Box>
      </Paper>

      {/* CHRONIC CONDITIONS */ }
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: "#08111dff", mb: 2}}>
        <Typography variant="h6" mb={2} color="white">
          Chronic Conditions
        </Typography>
        <Box sx={{ justifyContent: "space-between", color: "white" }}>
            <Typography>Type 2 Diabetes</Typography>
            <Typography>Hypertension</Typography>
        </Box>
      </Paper>

      {/* CURRENT MEDICATIONS */ }
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, backgroundColor: "#08111dff", mb: 3}}>
        <Typography variant="h6" mb={2} color="white">
          Current Medications
        </Typography>
        <Box sx={{ justifyContent: "space-between", color: "white" }}>
            <Typography>Metformin 500mg</Typography>
            <Typography>Lisinopril 10mg</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
