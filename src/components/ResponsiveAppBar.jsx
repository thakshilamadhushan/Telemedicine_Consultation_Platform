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

const pages = ['Home', 'Services', 'Feedbacks', 'About Us'];


// CHANGED: added onSignInClick prop so parent can open the Login dialog
function ResponsiveAppBar({ isUserLoggedIn, isDoctorLoggedIn, onSignInClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const navigate = useNavigate();
  const handleOpenUserDashboard = () => {
    navigate("/user");
  };


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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              {/* Sign In button (inside menu)
                  CHANGED: call handleCloseNavMenu then onSignInClick from parent to open Login dialog */}
              <MenuItem>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black" }}
                  onClick={() => {
                    handleCloseNavMenu();        // close the mobile menu first
                    onSignInClick?.();           // notify parent to open Login dialog
                  }}
                >
                  Sign In
                </Button>
              </MenuItem>

              {/* Book Consultation button (inside menu) */}
              <MenuItem>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "black" }}>
                  Book Consultation
                </Button>
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
            <Avatar alt="User" src="/static/images/avatar/2.jpg" />
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
            
            {!isUserLoggedIn && (
            // CHANGED: desktop Sign In now calls onSignInClick to open Login dialog
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              onClick={() => onSignInClick?.()}
            >
              Sign In
            </Button> )}

            {!isDoctorLoggedIn && (
            <Button variant="contained" sx={{ backgroundColor: "black" }}>
              Book Consultation
            </Button> 
          )}

            { isUserLoggedIn && (
            <IconButton onClick={handleOpenUserDashboard} sx={{ p: 0 }}>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </IconButton> )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
