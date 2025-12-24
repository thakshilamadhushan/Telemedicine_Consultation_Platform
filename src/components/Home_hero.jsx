import { Box, Grid, Typography, Button, Card, Stack } from "@mui/material";
import heroImg from "../assets/Hero_image_1.jpg";
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../assets/icons/Hero", false, /\.(png|jpe?g|svg)$/));


export default function HomeSection({ onSignInClick }) {
  return (
    <Box id="home" sx={{ width: "90%", mt: {xs:5, md: 8}, px: { xs: 2, md: 6 } }} mx="auto">

      {/* TOP HERO SECTION */}
      <Grid
        container
        spacing={10}
        alignItems="left"
        justifyContent="center"
      >

        {/* LEFT IMAGES */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
          }}
        >
          <Box
            component="img"
            src= {heroImg}
            sx={{
              width: { xs: "90%", sm: "80%", md: 500 },
              height: { xs: "auto", md: 500 },
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={12} md={6} width={{ md: "50%", xs: "100%" }} justifyContent="center" alignItems="flex-start" textAlign="left">
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              px: 2,
              py: 1,
              backgroundColor: "#E6F3FF",
              color: "#009dff",
              borderRadius: 5,
              fontSize: "14px",
              mb: 2,
            }}
          >
            ✨ Your Health, Our Priority
          </Box>

          {/* Headings */}
          <Typography variant="h4" fontWeight={700} color="black">
            Quality Healthcare
          </Typography>
          <Typography variant="h5" color="#009dff" mb={2}>
            At Your Fingertips
          </Typography>

          {/* Description */}
          <Typography color="gray" sx={{ lineHeight: 1.7, mb: 3, textAlign: "justify" }}>
            Connect with board-certified doctors from the comfort of your home and 
            receive expert medical advice through secure, high-quality video consultations. 
            Our platform makes it easy to get accurate diagnoses, prescriptions, and 
            personalized treatment plans without the need to visit a clinic. Skip long queues 
            and access healthcare professionals across multiple specialties whenever you need them. 
            With encrypted video calls, complete privacy, and seamless access to your medical 
            records and consultation history, you can manage your health with confidence and 
            convenience. Your well-being is now just one click away.
          </Typography>

          {/* Buttons */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={onSignInClick}
              sx={{
                background: "linear-gradient(to right, #009dff, #005bbb)",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                fontSize:{xs:12, md:14},
              }}
            >
              Get Started Now →
            </Button>

            <Button
              variant="outlined"
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                borderColor: "#bfbfbf",
                color: "black",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Grid> 
      </Grid>

      {/* STATS SECTION */}
      <Card
        elevation={4}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
          width: "85%",
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 5, sm: 8, md: 15, lg: 30 }} justifyContent="center" alignItems="center" textAlign="center" mx="auto">

          {/* Stat 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              <img src={icons[3]} alt="Patients" style={{ width: "30px", height: "30px" }} />
            </Box>
            <Typography variant="h6" fontWeight={600} mt={1}>
              50,000+
            </Typography>
            <Typography color="gray">Active Patients</Typography>
          </Grid>

          {/* Stat 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              <img src={icons[1]} alt="Patients" style={{ width: "30px", height: "30px"}} />
            </Box>
            <Typography variant="h6" fontWeight={600} mt={1}>
              500+
            </Typography>
            <Typography color="gray">Expert Doctors</Typography>
          </Grid>

          {/* Stat 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              <img src={icons[2]} alt="Patients" style={{ width: "30px", height: "30px" }} />
            </Box>
            <Typography variant="h6" fontWeight={600} mt={1}>
              200,000+
            </Typography>
            <Typography color="gray">Consultations</Typography>
          </Grid>

          {/* Stat 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#009dff",
                width: 55,
                height: 55,
                borderRadius: 2,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              <img src={icons[0]} alt="Patients" style={{ width: "30px", height: "30px" }} />
            </Box>
            <Typography variant="h6" fontWeight={600} mt={1}>
              4.9 / 5
            </Typography>
            <Typography color="gray">Patient Rating</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
