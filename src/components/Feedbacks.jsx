import { Box, Card, Grid, Typography, Stack, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context("../assets/Feedbacks", false, /\.(png|jpe?g|svg)$/));

export default function feedbacksSection() {
  const feedbacks = [
    {
      name: "Sarah Jenkins",
      message: "I woke up with a terrible sore throat and couldn't afford to miss a day of work sitting in a waiting room. With HealthLink, I saw a doctor within 15 minutes and had my prescription sent to the pharmacy by lunch. The process was incredibly smooth and efficient. A total lifesaver!",
      image: images[4],
      stars: 5,
      status: "Verified Patient",
      type: "General Consultation",
      patient_since: "2023",
    },
    {
      name: "Michael Ross",
      message: "I was initially hesitant about doing therapy over a video call, but Dr. Evans made me feel completely at ease immediately. The platform is secure, the connection was stable, and being in my own home made it easier to open up. I finally feel like I'm making real progress.",
      image: images[2],
      stars: 5,
      status: "Verified Patient",
      type: "Therapy & Counseling",
      patient_since: "2022",
    },
    {
      name: "Emily Chen",
      message: "As Someone Who Struggled With Acne For Years, Finding Dr. Martinez Through HealthLink Was Life-Changing. She Took The Time To Understand My Skin Issues, Provided A Detailed Treatment Plan, And Followed Up Regularly. My Skin Has Never Looked Better, And I Love The Convenience!",
      image: images[0],
      stars: 5,
      status: "Verified Patient",
      type: "Dermatology",
      patient_since: "2024",
    },
    {
      name: "Robert Williams",
      message: "After My Heart Surgery, Regular Check-Ups With My Cardiologist Were Crucial But Exhausting. HealthLink Made It So Much Easier To Monitor My Progress Without The Stress Of Travel. Dr. Patterson Is Thorough, Patient, And Always Available When I Have Concerns. Highly Recommend!",
      image: images[3],
      stars: 5,
      status: "Verified Patient",
      type: "Cardiology",
      patient_since: "2021",
    },
    {
      name: "Jessica Martinez",
      message: "Working With A Nutritionist Through HealthLink Has Been Amazing! The Virtual Sessions Fit Perfectly Into My Busy Schedule, And The Personalized Meal Plans Are Easy To Follow. I've Lost 20 Pounds And Feel More Energetic Than Ever. Best Decision I've Made For My Health!",
      image: images[1],
      stars: 5,
      status: "Verified Patient",
      type: "Nutrition & Wellness",
      patient_since: "2023",
    },
  ];

  return (
    <Box id="feedbacks" sx={{ width: "90%", px: { xs: 2, md: 4 }, py: 6 }} mx="auto">
      {/* Title Section */}
      <Grid item xs={12} textAlign="center" p={4}>
        <Box
          sx={{
            display: "inline-flex",
            px: 2,
            py: 1,
            backgroundColor: "#E6F3FF",
            borderRadius: 5,
            mb: 2,
          }}
        >
          Feedbacks
        </Box>

        <Typography fontWeight={800}>
          What Our Patients Say
        </Typography>
        <Typography mb={2}>
          Real stories from real people who've transformed their healthcare experience
        </Typography>
      </Grid>

        {/* FEEDBACK CARDS */}
      <Grid container spacing={2} maxWidth={1450} justifyContent="center" mx="auto">
        {feedbacks.map((fb, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                transition: "0.3s",
                "&:hover": {
                  border: "1px solid #1976D2",
                  transform: "translateY(-6px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* PROFILE ROW */}
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar src={fb.image} alt={fb.name} sx={{ width: 70, height: 70 }} />

                <Box>
                    {/* NAME + VERIFIED HERE */}
                    <Stack direction="row" spacing={1} alignItems="center">
                    <Typography  fontWeight={600}>
                        {fb.name}
                    </Typography>

                    <Box
                        sx={{
                        px: 1,
                        py: 0.2,
                        fontSize: 11,
                        borderRadius: 1,
                        backgroundColor: "#E8F3FF",
                        color: "#1976D2",
                        fontWeight: 500,
                        width: "fit-content",
                        }}
                    >
                        {fb.status}
                    </Box>
                    </Stack>

                  {/* STARS + TYPE + PATIENT SINCE */}
                    <Stack
                    direction={{ xs: "column", sm: "row" }}   // column on mobile, row on desktop
                    spacing={{ xs: 0.5, sm: 1 }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    mt={0.5}
                    >
                  
                  {/* STARS */}
                  <Stack direction="row" spacing={0.5}>
                    {[...Array(fb.stars)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 20, color: "#FFC107" }} />
                    ))}
                  </Stack>

                    {/* TYPE + PATIENT SINCE */}
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ color: "gray", fontSize: 14 }}
                    >
                        <Typography sx={{ fontSize: 14 }}>• {fb.type}</Typography>
                        <Typography sx={{ fontSize: 14 }}>• Patient Since {fb.patient_since}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>

              {/* MESSAGE */}
              <Typography
                sx={{
                  mt: 3,
                  color: "gray",
                  lineHeight: 1.7,
                  textAlign: "justify",
                }}
              >
                “{fb.message}”
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}