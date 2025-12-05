import React, { useState } from "react";
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from "../../components/Footer";
import HomeSection from '../../components/Home_hero';
import WhyChooseUs from '../../components/whyChooseUs';
import OurServices from '../../components/OurServices';
import Feedbacks from '../../components/Feedbacks';
import { Container, Box, Button } from "@mui/material";
import Login from "../Auth/Login"; // import the Login modal

export default function PublicHome() {
  const [openLogin, setOpenLogin] = useState(false);

  const handleLogin = (data) => {
    // comment: called after successful (mock) login, data contains form values
    console.log("Logged in user:", data);
  };


  return (
    <>
      <ResponsiveAppBar isUserLoggedIn={false} onSignInClick={() => setOpenLogin(true)} />

      <Container sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          {/* Button: open login popup */}
          <Button variant="outlined" onClick={() => setOpenLogin(true)}>
            Login
          </Button>
        </Box>
      </Container>

      <HomeSection />
      <WhyChooseUs />
      <OurServices />
      <Feedbacks />
      <Footer />

      <Login open={openLogin} onClose={() => setOpenLogin(false)} onLogin={handleLogin} />
    
    </>
  );
}