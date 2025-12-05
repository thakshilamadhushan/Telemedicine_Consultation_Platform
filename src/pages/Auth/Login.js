import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Avatar
} from "@mui/material";

/*
  Login modal component (MUI Dialog).
  Props:
    - open: boolean to show/hide dialog
    - onClose: function to close dialog
    - onLogin: callback called with form data after successful login (mock)
*/
export default function Login({ open, onClose, onLogin }) {
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
      // mock API delay
      await new Promise((r) => setTimeout(r, 600));

      // on successful login notify parent
      if (onLogin) onLogin(form);
      onClose();
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ textAlign: "center" }}>
        {/* Text label: Dialog title */}
        <Typography variant="h6">User Login</Typography>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            {/* Left side: login form */}
            <Grid item xs={12} md={6}>
              {/* Text label: Section heading */}
              <Typography variant="subtitle1" gutterBottom>
                {/* Text label: form subtitle */}
                Sign in to your account
              </Typography>

              {/* Field: Email input */}
              <TextField
                label="Email"                // comment: Email field label
                name="email"                 // comment: Email field name (for state)
                type="email"                 // comment: Email input type
                value={form.email}
                onChange={handleChange}
                required                     // comment: required flag
                fullWidth
                margin="normal"
              />

              {/* Field: Password input */}
              <TextField
                label="Password"             // comment: Password field label
                name="password"              // comment: Password field name (for state)
                type="password"              // comment: Password input type
                value={form.password}
                onChange={handleChange}
                required                     // comment: required flag
                fullWidth
                margin="normal"
              />

              {/* Button: primary login submit */}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button
                  type="submit"             // comment: submit button (logs in)
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                {/* Button: cancel/close */}
                <Button
                  variant="outlined"
                  onClick={onClose}         // comment: close button (closes dialog)
                  disabled={loading}
                >
                  Cancel
                </Button>
              </Box>

              {/* Button: Google login (visual placeholder only) */}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    // comment: Google sign-in placeholder (replace with real OAuth)
                    console.log("Google sign-in clicked");
                  }}
                  startIcon={<Avatar sx={{ width: 24, height: 24 }}>G</Avatar>}
                >
                  {/* Text label: Google login button */}
                  Continue with Google
                </Button>
              </Box>

              {/* Optional inline error message */}
              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                  {/* Text label: error message */}
                  {error}
                </Typography>
              )}
            </Grid>

            {/* Right side: picture / illustration placeholder */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 220,
                  borderRadius: 1,
                  bgcolor: "grey.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2
                }}
              >
                {/* Text label: image placeholder */}
                <Typography color="text.secondary">
                  {/* Text label: replace this with an <img> or illustration */}
                  Picture / Illustration
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        {/* Button: close footer (duplicate close, optional) */}
        <Button onClick={onClose} disabled={loading}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}