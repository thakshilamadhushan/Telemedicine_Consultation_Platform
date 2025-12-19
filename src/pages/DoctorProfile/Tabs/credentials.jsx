import { Box, Paper, Typography,} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../../../assets/icons/DoctorProfile", false, /\.(png|jpe?g|svg)$/));

const education = [
  {
    Name: "Doctor Of Medicine (M.D.)",
    university: "Stanford University School Of Medicine",
    period: "2005-2009",
  },
  {
    Name: "Residency In Internal Medicine",
    university: "Massachusetts General Hospital",
    period: "2009-2012",
  },
  {
    Name: "Fellowship In Cardiovascular Disease",
    university: "Cleveland Clinic",
    period: "2012-2015",
  }
];

const certificationAndAwards = [
  {
    Name: "Board Certified In Cardiovascular Disease",
    university: "American Board Of Internal Medicine",
    period: "2015",
  },
  {
    Name: "Board Certified In Internal Medicine",
    university: "American Board Of Internal Medicine",
    period: "2012",
  },
  {
    Name: "Fellow Of The Americal College Of Cardiology (FACC)",
    university: "American College Of Cardiology",
    period: "2016",
  },
  {
    Name: "Excellence In Patient Care Award",
    university: "San Francisco Medical Society",
    period: "2023",
  },
];

const ProfessionalExperience = [
  {
    profession: "Senior Cardiologist",
    location: "San Francisco General Hospital",
    period: "2018 - Present",
  },
  {
    profession: "Attending Cardiologist",
    location: "UCSF Medical Center",
    period: "2015 - 2018",
  },
  {
    profession: "Cardiology Fellow",
    location: "Cleveland Clinic",
    period: "2012 - 2015",
  },
];

const areasOfSpecialization = [
  "Preventive Cardiology",
  "Heart Failure Management",
  "Cardiac Imaging (Echo, CT, MRI)",
  "Coronary Artery Disease",
  "Arrhythmia Management",
  "Hypertension Control",
  "Lipid Disorders",
  "Cardiac Rehabilitation",
];


export default function Overview() {
  return (
  <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }} justifyContent={"center"} mx={"auto"}>
    <Box>
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #c0c0c0ff",
        p: 3,
        mb: 4,
        borderRadius: 4,
        width: "auto",
        mx: "auto"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }} display={"flex"} gap={1}>
        <img src={icons[1]} alt="" width="25" height="25"/>
        Education
      </Typography>

      {education.map((edu, index) => {
        return (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
              border: "1px solid #d1d1d1",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#b9bdfdff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  
                  <img
                    src={icons[1]}
                    alt=" "
                    style={{ width: 40, height: 40 }}
                  />
                </Box >

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {edu.Name}
                  </Typography>
                </Box>

                <Typography variant="body2" color="gray">
                  {edu.university}
                </Typography>

                <Typography
                  variant="body2"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <CalendarMonthIcon /> {edu.period}
                </Typography>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Paper>

    {/* Professional Experience */}
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #c0c0c0ff",
        p: 3,
        borderRadius: 4,
        width: "auto",
        mx: "auto"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }} display={"flex"} gap={1}>
        <img src={icons[4]} alt="" width="25" height="25"/>
        Professional Experience
      </Typography>

      {ProfessionalExperience.map((pe, index) => {
        return (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
              border: "1px solid #d1d1d1",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#ebaffdff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  
                  <img
                    src={icons[5]}
                    alt=" "
                    style={{ width: 40, height: 40 }}
                  />
                </Box >

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {pe.profession}
                  </Typography>
                </Box>

                <Typography variant="body2" color="gray">
                  {pe.location}
                </Typography>

                <Typography
                  variant="body2"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <CalendarMonthIcon /> {pe.period}
                </Typography>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Paper>
    </Box>

    <Box>
    {/* Certifications & Awards */}
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #c0c0c0ff",
        p: 3,
        mb: 4,
        borderRadius: 4,
        width: "auto",
        mx: "auto"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }} display={"flex"} gap={1}>
        <img src={icons[2]} alt="" width="25" height="25"/>
        Certifications & Awards
      </Typography>

      {certificationAndAwards.map((ceaw, index) => {
        return (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 3,
              border: "1px solid #d1d1d1",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                  sx={{
                    width: 55,
                    height: 55,
                    backgroundColor: "#fffd8eff",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  
                  <img
                    src={icons[3]}
                    alt=" "
                    style={{ width: 40, height: 40 }}
                  />
                </Box >

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {ceaw.Name}
                  </Typography>
                </Box>

                <Typography variant="body2" color="gray">
                  {ceaw.university}
                </Typography>

                <Typography
                  variant="body2"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <CalendarMonthIcon /> {ceaw.period}
                </Typography>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Paper>

    

    {/* Areas Of Specialization */}
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #c0c0c0ff",
        p: 3,
        borderRadius: 4,
        width: "auto",
        mx: "auto"
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }} display={"flex"} gap={1}>
        <img src={icons[0]} alt="" width="25" height="25"/>
        Areas Of Specialization
      </Typography>

      {areasOfSpecialization.map((aos, index) => {
        return (
          <Typography
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 18, color: "green" }} />
            {aos}
          </Typography>
        );
      })}
    </Paper>
   </Box>
   </Box>
  );
}
