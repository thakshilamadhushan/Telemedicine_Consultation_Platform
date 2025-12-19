import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Alert,
  Typography,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// Icons for visual representation of the steps
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Stepper Configuration
const steps = [
  "Personal Information", // Step 1
  "Medical Information", // Step 2
  "Emergency & Lifestyle", // Step 3
];

// Initial state for the entire three-step form
const initialFormState = {
  // --- Step 1: Personal Information fields ---
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  bloodType: "",
  email: "",
  phone: "",
  alternatePhone: "",
  streetAddress: "",
  city: "",
  state: "",

  // --- Step 2: Medical Information fields ---
  height: "",
  weight: "",
  allergies: "",
  chronicConditions: "",
  currentMedications: "",
  pastSurgeries: "",
  familyMedicalHistory: "",

  // --- Step 3: Emergency & Lifestyle fields ---
  // Emergency Contact
  emergencyContactName: "",
  emergencyContactRelationship: "",
  emergencyContactPhone: "",
  emergencyContactEmail: "",
  // Lifestyle Information
  smokingStatus: "",
  alcoholConsumption: "",
  exerciseFrequency: "",
  dietaryRestrictions: "",
  // Acknowledgement
  acknowledgement: false,
};

/**
 * Renders the form content specific to the current active step.
 */
function getStepContent(step, form, handleChange) {
  switch (step) {
    case 0: // Step 1: Personal Information (Fixed Layout)
      return (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom startIcon={<PersonIcon />}>
            Personal Information
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {/* Row 1: First Name and Last Name */}
            <TextField
              required
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              fullWidth
            />
            
            {/* Row 2: Date of Birth and Gender */}
            <TextField
              required
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              select
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            {/* Row 3: Blood Type and Email Address */}
            <TextField
              required
              select
              label="Blood Type"
              name="bloodType"
              value={form.bloodType}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">Select Blood Type</MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
            </TextField>

            <TextField
              required
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
            />
            
            {/* Row 4: Phone Numbers */}
            <TextField
              required
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              fullWidth
              placeholder="+94 7x xxx xxxx"
            />
            <TextField
              label="Alternate Phone Number"
              name="alternatePhone"
              type="tel"
              value={form.alternatePhone}
              onChange={handleChange}
              fullWidth
              placeholder="+94 7x xxx xxxx"
            />
            
            {/* Row 5: Street Address (Full Width) */}
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                required
                label="Street Address"
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                fullWidth
                placeholder="123 Main Street, Yakkala, Gampaha"
              />
            </Box>
            
            {/* Row 6: City and State */}
            <TextField
              required
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              fullWidth
            />
          </Box>
        </Box>
      );
    case 1: // Step 2: Medical Information
      return (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom startIcon={<FavoriteBorderIcon />}>
            Medical Information
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {/* Row 1: Height and Weight */}
            <TextField
              label="Height"
              name="height"
              value={form.height}
              onChange={handleChange}
              fullWidth
              placeholder="5'8'' or 173 cm"
            />
            <TextField
              label="Weight"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              fullWidth
              placeholder="150 lbs or 68 kg"
            />
            
            {/* Subsequent rows are full width */}
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Allergies"
                name="allergies"
                value={form.allergies}
                onChange={handleChange}
                fullWidth
                placeholder="e.g. penicillin, peanuts"
                helperText="List any known allergies"
              />
            </Box>
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Chronic Conditions"
                name="chronicConditions"
                value={form.chronicConditions}
                onChange={handleChange}
                fullWidth
                placeholder="e.g. diabetes, hypertension"
                helperText="List any chronic conditions"
              />
            </Box>
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Current Medications"
                name="currentMedications"
                value={form.currentMedications}
                onChange={handleChange}
                fullWidth
                placeholder="e.g. lisinopril 10mg"
                helperText="List current medications and dosages"
              />
            </Box>
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Past Surgeries"
                name="pastSurgeries"
                value={form.pastSurgeries}
                onChange={handleChange}
                fullWidth
                placeholder="List Any Previous Surgeries With Dates"
                multiline
                rows={2}
              />
            </Box>
            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Family Medical History"
                name="familyMedicalHistory"
                value={form.familyMedicalHistory}
                onChange={handleChange}
                fullWidth
                placeholder="List Any Relevant Family Medical History"
                multiline
                rows={2}
              />
            </Box>
          </Box>
        </Box>
      );
    case 2: // Step 3: Emergency & Lifestyle Information
      return (
        <Box sx={{ mt: 2 }}>
          {/* Emergency Contact Section */}
          <Typography variant="h6" gutterBottom startIcon={<ContactMailIcon />}>
            Emergency Contact
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {/* Row 1: Full Name and Relationship */}
            <TextField
              required
              label="Full Name"
              name="emergencyContactName"
              value={form.emergencyContactName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              label="Relationship"
              name="emergencyContactRelationship"
              value={form.emergencyContactRelationship}
              onChange={handleChange}
              fullWidth
            />
            
            {/* Row 2: Phone and Email */}
            <TextField
              required
              label="Phone Number"
              name="emergencyContactPhone"
              type="tel"
              value={form.emergencyContactPhone}
              onChange={handleChange}
              fullWidth
              placeholder="+94 7x xxx xxxx"
            />
            <TextField
              label="Email Address"
              name="emergencyContactEmail"
              type="email"
              value={form.emergencyContactEmail}
              onChange={handleChange}
              fullWidth
              placeholder="email@example.com"
            />
          </Box>

          {/* Lifestyle Information Section */}
          <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>
            Lifestyle Information
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {/* Row 3: Smoking and Alcohol */}
            <TextField
              select
              label="Smoking Status"
              name="smokingStatus"
              value={form.smokingStatus}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">Select status</MenuItem>
              <MenuItem value="never">Never Smoked</MenuItem>
              <MenuItem value="current">Current Smoker</MenuItem>
              <MenuItem value="former">Former Smoker</MenuItem>
            </TextField>

            <TextField
              select
              label="Alcohol Consumption"
              name="alcoholConsumption"
              value={form.alcoholConsumption}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">Select frequency</MenuItem>
              <MenuItem value="never">Never</MenuItem>
              <MenuItem value="rarely">Rarely</MenuItem>
              <MenuItem value="socially">Socially/Occasionally</MenuItem>
              <MenuItem value="regularly">Regularly</MenuItem>
            </TextField>
            
            {/* Row 4: Exercise and Diet */}
            <TextField
              select
              label="Exercise Frequency"
              name="exerciseFrequency"
              value={form.exerciseFrequency}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">Select frequency</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="3-4week">3-4 Times/Week</MenuItem>
              <MenuItem value="1-2week">1-2 Times/Week</MenuItem>
              <MenuItem value="rarely">Rarely/Never</MenuItem>
            </TextField>
            <TextField
              label="Dietary Restrictions"
              name="dietaryRestrictions"
              value={form.dietaryRestrictions}
              onChange={handleChange}
              fullWidth
              placeholder="E.G. Vegetarian, Gluten-Free"
            />
          </Box>

          {/* Important Information / Acknowledgement Section */}
          <Box sx={{ mt: 4, p: 2, bgcolor: "info.main", color: "white", borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Important Information
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              By Submitting This Form, You Consent To The Collection And Use Of Your Medical Information For Healthcare Purposes. All Information Is Kept Confidential And Secure In Accordance With **HIPAA Regulations**.
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                required
                name="acknowledgement"
                checked={form.acknowledgement}
                onChange={handleChange}
              />
            }
            label={
              <Typography sx={{ fontWeight: "bold" }}>
              I Acknowledge That The Information Provided Is Accurate And Complete To The Best Of My Knowledge. I Consent To The Use Of This Information For Medical Treatment And Care Coordination.
              </Typography>
            }
            sx={{ mt: 2 }}
          />
        </Box>
      );
    default:
      return "Unknown step";
  }
}

/*
 * RegisterUser modal component (MUI Dialog)
 */
export default function RegisterUser({ open, onClose, onRegistered }) {
  // State to track the current step (0, 1, or 2)
  const [activeStep, setActiveStep] = useState(0);
  // State to hold all form data
  const [form, setForm] = useState(initialFormState);
  // State for error messages
  const [error, setError] = useState("");
  // State for loading/submission status
  const [loading, setLoading] = useState(false);

  // General change handler for all form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkboxes correctly (using 'checked') and other inputs (using 'value')
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /**
   * Validation logic for required fields in each step.
   */
  const validateStep = (step) => {
    switch (step) {
      case 0: // Validate Step 1: Personal Information
        if (!form.firstName.trim() || !form.lastName.trim() || !form.dateOfBirth || !form.gender || !form.email.trim() || !form.phone.trim() || !form.streetAddress.trim() || !form.city.trim() || !form.state.trim()) {
          return "All required fields in Personal Information must be filled.";
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email in Step 1.";
        // Basic phone validation
        if (!/^\+?\d{7,15}$/.test(form.phone) && form.phone.length < 7) return "Enter a valid phone number in Step 1.";
        return "";
      case 1: // Validate Step 2: Medical Information (no required fields in this example)
        return "";
      case 2: // Validate Step 3: Emergency & Acknowledgement
        if (!form.emergencyContactName.trim() || !form.emergencyContactRelationship.trim() || !form.emergencyContactPhone.trim()) {
          return "Emergency Contact Name, Relationship, and Phone are required.";
        }
        if (!form.acknowledgement) {
          return "You must acknowledge and consent to proceed."; // Acknowledgement requirement, Step 3
        }
        return "";
      default:
        return "";
    }
  };

  // Handler for the "Next" button click
  const handleNext = () => {
    setError("");
    const validationError = validateStep(activeStep);
    if (validationError) {
      setError(validationError);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to the next step
  };

  // Handler for the "Back" button click
  const handleBack = () => {
    setError("");
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // Move to the previous step
  };

  // Handler for the final "Submit" button click (only on Step 3)
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");
    const validationError = validateStep(activeStep);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 700));

      if (onRegistered) onRegistered(form);
      onClose(); // Close the dialog on success
      // Reset state
      setForm(initialFormState);
      setActiveStep(0);
    } catch (err) {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Check if the current step is the last one
  const isLastStep = activeStep === steps.length - 1;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      {/* Dialog Title */}
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
        <Typography variant="h6">Patient Registration</Typography>
      </DialogTitle>

      <DialogContent sx={{ px: 4, py: 3 }}>
        {/* Stepper UI (Top Progress Bar) */}
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4, pt: 1 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Form Container */}
        <Box component="form" onSubmit={isLastStep ? handleSubmit : handleNext} noValidate>
          {/* Error Alert */}
          {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

          {/* Render content based on the active step */}
          {getStepContent(activeStep, form, handleChange)}

          {/* Navigation Buttons (Back/Next/Submit) */}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 5, justifyContent: "space-between" }}>
            <Button
              disabled={activeStep === 0 || loading} // Back button disabled on Step 1
              onClick={handleBack} // Back button
              variant="outlined"
              sx={{ minWidth: 100, textTransform: "none", fontWeight: "bold" }}
            >
              Back
            </Button>

            <Button
              variant="contained"
              onClick={isLastStep ? handleSubmit : handleNext}
              disabled={loading}
              sx={{ minWidth: 100, textTransform: "none", fontWeight: "bold" }}
            >
              {loading
                ? isLastStep ? "Submitting..." : "Saving..."
                : isLastStep
                ? "Submit" // Submit button, Step 3
                : "Next"}
            </Button>
          </Box>
        </Box>
      </DialogContent>

      {/* Dialog Footer Actions */}
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Close Form
        </Button>
      </DialogActions>
    </Dialog>
  );
}