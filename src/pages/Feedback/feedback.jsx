import React, { useState } from "react";
import {Dialog,DialogContent,DialogTitle,Box,Typography,Button,Grid,Rating,TextField,Chip,Divider,} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function SessionFeedbackDialog({ open, onClose }) {
  const [ratings, setRatings] = useState({
    overall: 5,
    professionalism: 5,
    communication: 5,
    attentiveness: 5,
    technical: 5,
  });

  const average = (
    ratings.overall +
    ratings.professionalism +
    ratings.communication +
    ratings.attentiveness +
    ratings.technical
  ) / 5;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Session Feedback</DialogTitle>
      <DialogContent>
        {/* Success Banner */}
        <Box
          sx={{
            backgroundColor: "#e8f5e9",
            p: 2,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <CheckCircleIcon color="success" />
          <Box>
            <Typography fontWeight={600}>
              Consultation Completed Successfully
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
              <Chip label="Prescription Sent" size="small" />
              <Chip label="Medical Notes Updated" size="small" />
              <Chip label="Follow-Up Scheduled" size="small" />
            </Box>
          </Box>
        </Box>

        {/* Doctor Info */}
        <Box sx={{ p: 2, backgroundColor: "#f5f8ff", borderRadius: 2, mb: 3 }}>
          <Typography fontWeight={600}>
            Consultation With Dr. Michael Chen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cardiologist & Cardiovascular Specialist • 30 Minutes • Video Call
          </Typography>
        </Box>

        {/* Ratings */}
        <Typography variant="h6" gutterBottom>
          Rate Your Experience
        </Typography>
        <Grid container spacing={2}>
          {[
            ["Overall Experience", "overall"],
            ["Doctor's Professionalism", "professionalism"],
            ["Communication Quality", "communication"],
            ["Attentiveness & Listening", "attentiveness"],
            ["Technical Quality", "technical"],
          ].map(([label, key]) => (
            <Grid item xs={12} key={key}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>{label}</Typography>
                <Rating
                  value={ratings[key]}
                  onChange={(e, val) =>
                    setRatings({ ...ratings, [key]: val })
                  }
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Average */}
        <Box
          sx={{
            backgroundColor: "#eef3ff",
            p: 2,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>Overall Average Rating</Typography>
          <Typography fontWeight={700}>{average.toFixed(1)}</Typography>
        </Box>

        {/* Recommendation */}
        <Box sx={{ mt: 3 }}>
          <Typography fontWeight={600} gutterBottom>
            Would You Recommend This Doctor?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ThumbUpIcon color="success" />}
              >
                Yes, Definitely
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<HelpOutlineIcon color="warning" />}
              >
                Maybe
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ThumbDownIcon color="error" />}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Feedback */}
        <Box sx={{ mt: 3 }}>
          <Typography fontWeight={600}>Your Feedback</Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Tell us about your consultation experience..."
            sx={{ mt: 1 }}
          />
        </Box>

        {/* Improvements */}
        <Box sx={{ mt: 3 }}>
          <Typography fontWeight={600}>How Can We Improve?</Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Any suggestions for improvement..."
            sx={{ mt: 1 }}
          />
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Button onClick={onClose} variant="outlined">
            Skip For Now
          </Button>
          <Button variant="contained">Submit Feedback</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
