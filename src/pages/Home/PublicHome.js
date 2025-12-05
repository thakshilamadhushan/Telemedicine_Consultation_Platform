import React, { useState } from "react";
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from "../../components/Footer";
import HomeSection from '../../components/Home_hero';
import WhyChooseUs from '../../components/whyChooseUs';
import OurServices from '../../components/OurServices';
import Feedbacks from '../../components/Feedbacks';
import { Container, Box, Button } from "@mui/material";
import Login from "../Auth/Login"; // import the Login modal
import RegisterUser from "../Auth/RegisterUser"; // CHANGED: import RegisterUser modal

export default function PublicHome() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false); // CHANGED: register dialog state

  const handleLogin = (data) => {
    // comment: called after successful (mock) login, data contains form values
    console.log("Logged in user:", data);
  };

  const handleRegistered = (user) => {
    // CHANGED: called after successful registration
    console.log("Registered user:", user);
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

      {/* CHANGED: Login modal with onOpenRegister handler */}
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onLogin={handleLogin}
        onOpenRegister={() => {
          setOpenLogin(false);
          setOpenRegister(true);
        }}
      />

      {/* CHANGED: RegisterUser modal with onOpenLogin handler */}
      <RegisterUser
        open={openRegister}
        onClose={() => setOpenRegister(false)}
        onRegistered={handleRegistered}
        onOpenLogin={() => {
          setOpenRegister(false);
          setOpenLogin(true);
        }}
      />
    </>
  );
}