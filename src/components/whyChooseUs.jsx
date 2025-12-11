import { Box, Card, Grid, Typography } from "@mui/material";
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../assets/icons/whychooseus", false, /\.(png|jpe?g|svg)$/));

export default function whychooseusSection() {
  return (
    <Box sx={{ mt: 5, px: { xs: 2, md: 6 } }}>
        <Grid item xs={12} md={10} justifyContent="center" alignItems="center" textAlign="center" p={4}>
            {/* Badge */}
            <Box
                sx={{
                display: "inline-flex",
                px: 2,
                py: 1,
                backgroundColor: "#E6F3FF",
                color: "black",
                borderRadius: 5,
                fontSize: "14px",
                mb: 2,
                }}
            >
                Why Choose Us
            </Box>

            {/* Headings */}
            <Typography fontWeight={800} color="black">
                Experience The HealthLink Advantage
            </Typography>
            <Typography  color="black" mb={2}>
                Modern healthcare designed around your needs and lifestyle
            </Typography>
        </Grid>

        {/* CARDS */}
        <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 5 }} 
        justifyContent="center"
        alignItems="center"
        >
        {/* CARD 1 */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center">
            <Card
            elevation={4}
            sx={{
                p: 3,
                borderRadius: 4,
                textAlign: "left",
                width: "100%",
                maxWidth: 280, 
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                transform: "translateY(-10px)", // lift card
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // bigger shadow
                },
            }}
            >
            <Box
                sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
                mb: 2
                }}
            >
                <img src={icons[0]} alt=" " style={{ width: "30px", height: "30px" }} />
            </Box>

            <Typography variant="h6" fontWeight={600}>
                24/7 Availability
            </Typography>
            <Typography color="gray">
                Access healthcare whenever you need it, day or night
            </Typography>
            </Card>
        </Grid>

        {/* CARD 2 */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <Card elevation={4} sx={{ 
                p: 3, 
                borderRadius: 4, 
                textAlign: "left", 
                width: "100%", 
                maxWidth: 280,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                transform: "translateY(-10px)", // lift card
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // bigger shadow
                },
                }}>

            <Box
                sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2
                }}
            >
                <img src={icons[3]} alt=" " style={{ width: "30px", height: "30px" }} />
            </Box>

            <Typography variant="h6" fontWeight={600}>
                Secure & Private
            </Typography>
            <Typography color="gray">
                HIPAA-compliant platform with encrypted communications
            </Typography>
            </Card>
        </Grid>

        {/* CARD 3 */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <Card elevation={4} sx={{ 
                p: 3, 
                borderRadius: 4, 
                textAlign: "left", 
                width: "100%", 
                maxWidth: 280,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                transform: "translateY(-10px)", // lift card
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // bigger shadow
                },
                }}>

            <Box
                sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2
                }}
            >
                <img src={icons[1]} alt=" " style={{ width: "30px", height: "30px" }} />
            </Box>

            <Typography variant="h6" fontWeight={600}>
                Better Outcomes
            </Typography>
            <Typography color="gray">
                Continuous care and monitoring for improved health
            </Typography>
            </Card>
        </Grid>

        {/* CARD 4 */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <Card elevation={4} sx={{ 
                p: 3, 
                borderRadius: 4, 
                textAlign: "left", 
                width: "100%", 
                maxWidth: 280,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                transform: "translateY(-10px)", // lift card
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // bigger shadow
                },
                }}>
                    
            <Box
                sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2
                }}
            >
                <img src={icons[2]} alt=" " style={{ width: "30px", height: "30px" }} />
            </Box>

            <Typography variant="h6" fontWeight={600}>
                Personalized Care
            </Typography>
            <Typography color="gray">
                Tailored treatment plans for your unique needs
            </Typography>
            </Card>
        </Grid>
        </Grid>

    </Box>
  );
}