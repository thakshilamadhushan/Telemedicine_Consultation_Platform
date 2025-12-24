import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import loginImage from "../../assets/login_picture.png"; 
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {Dialog,DialogContent,TextField,Button,Box,Grid,Typography,Divider} from "@mui/material";

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
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Grid container minHeight={480} >

            {/* LEFT — LOGIN FORM */}
            <Grid
              item
              onSubmit={handleSubmit}
              component="form"
              xs={12}
              md={8}
              sx={{
                p: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" fontWeight={600} mb={1}>
                Log In
              </Typography>

              <Typography color="text.secondary" mb={1} fontSize={{xs: 14, md: 16}}>
                Welcome Back, Please Enter Your Details
              </Typography>

              <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
              <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} fullWidth margin="normal" />

              {error && (
                <Typography color="error" fontSize={14} mt={1}>
                  {error}
                </Typography>
              )}

              <Typography variant="body2" sx={{ mt: 1, mb: 2, cursor: "pointer" }}>
                Forgot Password?
              </Typography>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ py: 1.2, borderRadius: 3, textTransform: "none", mb: 3 }}
                onClick={handleSubmit}
                disabled={loading}                
              >
                {loading ? "Logging in..." : "Log In"}
              </Button>

              {/* Divider */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Divider sx={{ flex: 1,}} />
                <Typography mx={2} variant="body2">
                  Or Continue With
                </Typography>
                <Divider sx={{ flex: 1,}} />
              </Box>

              {/* Social Login */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<GoogleIcon sx={{ color: "#DB4437" }} />}
                  sx={{ textTransform: "none" }}
                >
                  Google
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<FacebookIcon sx={{ color: "#1877F2" }} />}
                  sx={{ textTransform: "none" }}
                >
                  Facebook
                </Button>
              </Box>

              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={3} >
              <Typography>Don't have account?</Typography>
              <Button
                variant="text"
                onClick={() => {
                  onClose?.();
                  onOpenRegister?.();
                }} 
              >
                Sign Up
              </Button>
              </Box>
            </Grid>

            {/* RIGHT — ILLUSTRATION (DESKTOP ONLY) */}
            <Grid
              item
              md={4}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-end",
                bgcolor: "#EAF8FF",
                position: "relative",
              }}
            >
              <IconButton
                onClick={onClose}
                sx={{ position: "absolute", top: 12, right: 12 }}
              >
                <CloseIcon />
              </IconButton>

              <Box sx={{ maxWidth: 400 }}>
                <img src={loginImage} alt="Doctor Illustration" style={{ width: "100%", display: "block" }} />
              </Box>
            </Grid>

          </Grid>
        </DialogContent>
      </Dialog>

  );
}