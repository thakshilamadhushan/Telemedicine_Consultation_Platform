import { Box, Card, Grid, Typography, Stack } from "@mui/material";
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../assets/icons/OurServices", false, /\.(png|jpe?g|svg)$/));
const images = importAll(require.context("../assets/OurServices", false, /\.(png|jpe?g|svg)$/));

export default function OurServicesSection() {
  const services = [
    {
      title: "Psychiatry & Mental Health",
      description: "Prioritize Your Mental Well-Being With Confidential, Compassionate Care From Licensed Professionals. We Provide Personalized Treatment Plans To Help You Navigate Life's Challenges From The Comfort Of Your Home.",
      image: images[5],
      icon: icons[2],
      features: [
        "Anxiety, Depression, And Stress Management",
        "Medication Management And Ongoing Therapy Sessions",
        "Specialized Counseling For All Age Groups"
      ]
    },
    {
      title: "General Consultation",
      description: "Connect With Experienced Physicians For Common Health Concerns. Get Quick Medical Advice, Prescriptions, And Follow-Up Care Without Leaving Your Home ensuring fast, reliable healthcare access.",
      image: images[2],
      icon: icons[5],
      features: [
        "24/7 Access To Healthcare Professionals",
        "Digital Prescriptions And Medical Certificates",
        "Chronic Disease Management & Follow-Ups"
      ]
    },
    {
      title: "Cardiology Care",
      description: "Expert Heart Health Consultations From Board-Certified Cardiologists. Monitor Your Heart Health, Manage Conditions, And Get Expert Advice On Cardiovascular Wellness.",
      image: images[0],
      icon: icons[1],
      features: [
        "Heart Disease Prevention & Management",
        "Blood Pressure & Cholesterol Monitoring",
        "Post-Operative Care Consultations"
      ]
    },
    {
      title: "Pediatric Care",
      description: "Specialized Healthcare For Children And Adolescents. Our Pediatricians Provide Compassionate Care For Your Little Ones, From Newborns To Teenagers.",
      image: images[4],
      icon: icons[0],
      features: [
        "Well-Child Checkups & Development Tracking",
        "Childhood Illness Management",
        "Vaccination Guidance & Health Education"
      ]
    },
    {
      title: "Dermatology Services",
      description: "Virtual Skin Care Consultations With Certified Dermatologists. Address Skin Concerns, Get Treatment Plans, And Maintain Healthy, Radiant Skin From Home.",
      image: images[1],
      icon: icons[4],
      features: [
        "Acne, Eczema & Skin Condition Treatment",
        "Anti-Aging & Cosmetic Consultations",
        "Hair Loss & Scalp Health Solutions"
      ]
    },
    {
      title: "Nutrition & Wellness",
      description: "Personalized Nutrition Plans And Wellness Coaching. Work With Certified Dietitians To Achieve Your Health Goals Through Balanced Nutrition And Lifestyle Changes.",
      image: images[3],
      icon: icons[3],
      features: [
        "Weight Management Programs",
        "Disease-Specific Diet Planning",
        "Sports Nutrition & Performance Enhancement"
      ]
    }
  ];

  return (
    <Box id="services" sx={{ mt: 5, px: { xs: 2, md: 4 } }}>
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
          Our Services
        </Box>

        <Typography fontWeight={800}>
          Comprehensive Healthcare Solutions
        </Typography>
        <Typography mb={2}>
          Modern healthcare designed around your needs and lifestyle
        </Typography>
      </Grid>

      {/* SERVICE CARDS */}
      <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ mt: 1, px: { xs: 2, md: 10 } }}
    >
      {services.map((service, index) => (
        <Grid item xs={12} md={6} key={index} >
          <Card
            elevation={4}
            sx={{
              display: "flex",
              maxWidth: 700, 
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              borderRadius: 4,
              transition: "all 0.35s ease",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              },
            }}
          >
            {/* LEFT MAIN IMAGE */}
            <Box
              component="img"
              src={service.image} alt=" "
              sx={{
                width: { xs: "100%", sm: 200 },
                height: { xs: "auto", sm: "auto" },
                borderRadius: 3,
                objectFit: "cover",
              }}
            />

            {/* RIGHT CONTENT */}
            <Box flex={1} p={3}>
              {/* ICON + TITLE */}
              <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#009dff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={service.icon} alt=" "
                    style={{ width: "30px", height: "30px" }}
                  />
                </Box>

                <Typography variant="h6" fontWeight={700}>
                  {service.title}
                </Typography>
              </Stack>

              {/* DESCRIPTION */}
              <Typography color="gray" sx={{ textAlign: "justify", mb: 1 }}>
                {service.description}
              </Typography>

              {/* FEATURES */}
              <Box sx={{ pl: 2 }}>
                {service.features.map((feature, i) => (
                  <Typography
                    key={i}
                    component="li"
                    color="gray"
                    sx={{ mb: 0.5 }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}