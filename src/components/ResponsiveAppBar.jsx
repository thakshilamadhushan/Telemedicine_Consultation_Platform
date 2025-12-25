import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import User from "../assets/UserImages/Emily_chen.jpg"
import Doctor from "../assets/DoctorsImages/Dr.Michael_Chen.jpg"

const pages = ['Home', 'Services', 'Feedbacks', 'About Us'];


// CHANGED: added onSignInClick prop so parent can open the Login dialog
function ResponsiveAppBar({ isUserLoggedIn, isDoctorLoggedIn, onSignInClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const showSignIn = !isDoctorLoggedIn && !isUserLoggedIn;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const navigate = useNavigate();
  const handleOpenUserDashboard = () => {
    if (isDoctorLoggedIn) navigate("/doctor");
    else
    navigate("/user");
  };

const handlebookConsultation = () => {
  if (isUserLoggedIn) navigate("/bookconsultation");
  else onSignInClick?.();
}

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* LOGO (Desktop) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 20,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 800,
              color: '#009dff',
              textDecoration: 'none',
            }}
          >
            HealthLink
          </Typography>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            {/* MOBILE DROPDOWN MENU */}
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {/* Navigation pages */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  width: "100%",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    fullWidth
                    sx={{
                      my: 1,
                      px:2,
                      pr:12,
                      color: "black",
                      justifyContent: "left", 
                    }}
                    onClick={() => {
                      handleCloseNavMenu();
                      const section = document.getElementById(page.toLowerCase());
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Sign In button (inside menu)*/}
              <MenuItem>
              {showSignIn && (
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  onClick={() => {
                    handleCloseNavMenu();        // close the mobile menu first
                    onSignInClick?.();           // open Login dialog
                  }}
                >
                  Sign In
                </Button> )}
              </MenuItem>

              {/* Book Consultation button (inside menu) */}
              <MenuItem>
              {!isDoctorLoggedIn && (
                <Button fullWidth variant="contained" sx={{ backgroundColor: "black" }} onClick={() => {handlebookConsultation();}}>
                  Book Consultation
                </Button>
              )}
              </MenuItem>
            </Menu>
          </Box>

          {/* LOGO (Mobile) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 10,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Montserrat',
              fontWeight: 800,
              color: '#009dff',
              textDecoration: 'none',
            }}
          >
            HealthLink
          </Typography>
          <IconButton sx={{ 
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}>
            {isUserLoggedIn && (
            <IconButton onClick={handleOpenUserDashboard} sx={{ p: 0 }}>
              <Avatar alt="User" src={User} />
            </IconButton> )}
            
            {isDoctorLoggedIn && (
            <IconButton onClick={handleOpenUserDashboard} sx={{ p: 0 }}>
              <Avatar alt="User" src={Doctor} />
            </IconButton> )}
          </IconButton>

          {/* DESKTOP MENU ITEMS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: "black" }}
                onClick={() => {
                  const section = document.getElementById(page.toLowerCase());
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* RIGHT-SIDE BUTTONS + PROFILE (Desktop only) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 2 }}>
            
            {showSignIn && (
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              onClick={() => onSignInClick?.()}
            >
              Sign In
            </Button> )}

            {!isDoctorLoggedIn && (
            <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={() => {handlebookConsultation();}}>
              Book Consultation
            </Button> 
          )}

            {isUserLoggedIn && (
            <IconButton onClick={handleOpenUserDashboard} sx={{ p: 0 }}>
              <Avatar alt="User" src={User} />
            </IconButton> )}

            {isDoctorLoggedIn && (
            <IconButton onClick={handleOpenUserDashboard} sx={{ p: 0 }}>
              <Avatar alt="User" src={Doctor} />
            </IconButton> )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
