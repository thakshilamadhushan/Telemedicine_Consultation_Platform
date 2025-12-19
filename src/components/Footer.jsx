import React from "react";
import { Box, Typography } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ mt:10 ,backgroundColor: "#0d1525", color: "#ccc", py: 6, px: 3 }}>
      
      <Box sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
        gap: 4,
      }}>

        {/* Column 1 */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            HealthLink
          </Typography>
          <Typography>No. 112, Duplication Road,</Typography>
          <Typography>Colombo 04, Sri Lanka</Typography>
        </Box>

        {/* Column 2 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Support</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email sx={{ color: "#009dff" }} /> info@healthlinkcolombo.lk
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Phone sx={{ color: "#009dff" }} /> +94 11 267 8923
          </Typography>
        </Box>

        {/* Column 3 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Our Company</Typography>
          <Typography>About</Typography>
          <Typography>Services</Typography>
          <Typography>Doctors</Typography>
          <Typography>Careers</Typography>
        </Box>

        {/* Column 4 */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Service</Typography>
          <Typography>Blog</Typography>
          <Typography>Contact</Typography>
        </Box>

      </Box>

      <hr style={{ borderColor: "#333", marginTop: "30px" }} />

      <Typography textAlign="center" sx={{ mt: 2, color: "#aaa" }}>
        © 2024 HealthLink. Made with ❤️ for better healthcare.
      </Typography>
    </Box>
  );
}
