import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/login_picture.png"; //importing side picture
import {Dialog,DialogTitle,DialogContent,DialogActions,TextField,Button,Box,Grid,Typography,Avatar} from "@mui/material";

/*
  Login modal component (MUI Dialog).
  Props:
    - open: boolean to show/hide dialog
    - onClose: function to close dialog
    - onLogin: callback called with form data after successful login (mock)
    - onOpenRegister: callback to toggle to register modal
*/

const MOCK_USER = {
  email: "user@example.com",
  password: "1234",
};

const MOCK_DOCTOR = {
  email: "doctor@example.com",
  password: "abcd",
}

export default function Login({ open, onClose, onLogin, onOpenRegister }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.email.trim() || !form.password) return "Email and password are required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email address.";
    if (form.password.length < 4) return "Password is too short.";
    return "";
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 600)); // fake API delay

      // ✅ CHECK EMAIL & PASSWORD
      if (
        form.email === MOCK_USER.email &&
        form.password === MOCK_USER.password
      ) {
        // SUCCESS LOGIN
        if (onLogin) onLogin(form); // pass user data
        onClose();
        navigate("/home");
      } else if (
        form.email === MOCK_DOCTOR.email &&
        form.password === MOCK_DOCTOR.password
      ) {
        // SUCCESS LOGIN FOR DOCTOR
        if (onLogin) onLogin(form); // pass doctor data
        onClose();
        navigate("/doctorhome");
      } else {
        // ❌ WRONG CREDENTIALS
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={false} PaperProps={{ sx: {
                                                                                          width: {
                                                                                            xs: "95%",
                                                                                            sm: "85%",
                                                                                            md: "900px",
                                                                                            lg: "860px", // width of the dialog box
                                                                                          }, }}}>
      <DialogTitle
        sx={{
          textAlign: "center",
          bgcolor: "#f5f5f5",
          color: "#333",
          fontWeight: 700,
          py: 2,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6">User Login</Typography>
      </DialogTitle>

      <DialogContent sx={{ px: 4, py: 3 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            {/* LEFT SIDE — Login form */}
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", fontSize: "1.05rem", mb: 2 }}>
                Sign in to your account
              </Typography>

              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                sx={{ "& .MuiInputBase-root": { borderRadius: 2 } }}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                sx={{ "& .MuiInputBase-root": { borderRadius: 2 } }}
              />

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{ px: 3, py: 1, textTransform: "none", fontWeight: "bold", minWidth: 120 }}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <Button
                  variant="outlined"
                  onClick={onClose}
                  disabled={loading}
                  sx={{ textTransform: "none", fontWeight: "bold", minWidth: 120 }}
                >
                  Cancel
                </Button>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<Avatar sx={{ width: 26, height: 26 }}>G</Avatar>}
                  onClick={() => console.log("Google sign-in clicked")}
                  sx={{ textTransform: "none", fontWeight: 600, py: 1.2, borderRadius: 2 }}
                >
                  Continue with Google
                </Button>
              </Box>

              <Box sx={{ mt: 3, mb: 1, display: "flex", alignItems: "center" }}>
                <Box sx={{ flexGrow: 1, height: 1, bgcolor: "grey.300" }} />
                <Typography sx={{ mx: 2, color: "text.secondary", fontSize: "0.85rem" }}>or</Typography>
                <Box sx={{ flexGrow: 1, height: 1, bgcolor: "grey.300" }} />
              </Box>

              <Button
                fullWidth
                variant="text"
                onClick={() => {
                  onClose?.();
                  onOpenRegister?.();
                }}
                sx={{ textTransform: "none", fontWeight: "bold", py: 1, color: "black" }}
              >
                Create an Account
              </Button>

              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
                  {error}
                </Typography>
              )}
            </Grid>

            {/* RIGHT SIDE — Illustration */}
            <Grid item xs={12} md={6}>
                <Box
                       sx={{
                       height: "100%",
                        minHeight: 320,
                       borderRadius: 3,
                       overflow: "hidden", // IMPORTANT
                       border: "1px dashed #ccc", }}
                     >
                  <Box
                    component="img"
                    src={loginImage}
                    alt="Login Illustration"
                    sx={{
                      width: "100%",
                      maxWidth: 320,
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}