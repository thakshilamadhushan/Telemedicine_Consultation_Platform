import React, { useState } from "react";
import {Dialog,DialogContent,Avatar,Box,Typography,Button,Grid,Rating,TextField,Chip,Divider,Paper} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MessageIcon from '@mui/icons-material/Message';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import DrMichael from "../../assets/DoctorsImages/Dr.Michael_Chen.jpg";

const ratingConfig = [
  {
    label: "Overall Experience",
    subtitle: "Rate Your Overall Consultation Experience",
    key: "overall",
    icon: <StarBorderIcon />,
  },
  {
    label: "Doctor's Professionalism",
    subtitle: "How Professional Was The Doctor?",
    key: "professionalism",
    icon: <MedicalServicesIcon />,
  },
  {
    label: "Communication Quality",
    subtitle: "How Clear Was The Doctor's Explanation?",
    key: "communication",
    icon: <ChatBubbleOutlineIcon />,
  },
  {
    label: "Attentiveness & Listening",
    subtitle: "Did The Doctor Listen To Your Concerns?",
    key: "attentiveness",
    icon: <GroupsIcon />,
  },
  {
    label: "Technical Quality",
    subtitle: "Quality Of Video/Audio Connection",
    key: "technical",
    icon: <VideocamOutlinedIcon />,
  },
];

const options = [
  {
    key: "yes",
    title: "Yes, Definitely",
    subtitle: "I Would Recommend This Doctor",
    icon: <ThumbUpIcon sx={{ fontSize: 40 }} />,
    color: "#2E7D32",
    bg: "#E8F5E9",
  },
  {
    key: "maybe",
    title: "Maybe",
    subtitle: "I'm Not Sure",
    icon: <HelpOutlineIcon sx={{ fontSize: 40 }} />,
    color: "#EF6C00",
    bg: "#FFF3E0",
  },
  {
    key: "no",
    title: "No",
    subtitle: "I Would Not Recommend This Doctor",
    icon: <ThumbDownIcon sx={{ fontSize: 40 }} />,
    color: "#D32F2F",
    bg: "#FDECEA",
  },
];

export default function SessionFeedbackDialog({ open, onClose }) {

  const [recommendation, setRecommendation] = useState("yes");

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

  const navigate = useNavigate();
  const showDashboard = () => {
    navigate("/user");
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <Box display={"flex"} alignItems="center" gap={2} px={3} pt={2} pb={1}>
            <Box
                sx={{
                width: 55,
                height: 55,
                backgroundColor: "#b9c5fdff",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <MessageIcon sx={{ color: "#2600ffff", fontSize: 30 }} />
            </Box >
            <Box justifyContent={"center"} textAlign={"left"}>
                <Typography variant="h6">Session Feedback</Typography>
                <Typography>Help us improve by sharing your consultation experience</Typography>
            </Box>
        </Box>
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
            <Typography fontWeight={600}>Consultation Completed Successfully</Typography>
            <Typography fontSize={15}>Your session with Dr. Michael Chen has ended. We'd love to hear about your experience!</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
              <Chip label="Prescription Sent" size="small" />
              <Chip label="Medical Notes Updated" size="small" />
              <Chip label="Follow-Up Scheduled" size="small" />
            </Box>
          </Box>
        </Box>

        {/* Doctor Info */}
        <Box display={"flex"} alignItems={"center"} sx={{ p: 2, backgroundColor: "#e3eafcff", borderRadius: 2, mb: 3 }}>
            <Avatar src={DrMichael} sx={{ width: 80, height: 80, }}/>
          <Box pl={2}>
          <Typography fontWeight={600}>
            Consultation With Dr. Michael Chen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cardiologist & Cardiovascular Specialist • 30 Minutes • Video Call
          </Typography>
          </Box>
        </Box>

        {/* Ratings */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <StarIcon
            sx={{ color: "#1E5BFF", mr: 1 }}
            />
            <Typography fontWeight={600}>
            Rate Your Experience
            </Typography>
        </Box>

        {ratingConfig.map((item, index) => (
        <Box key={item.key}>
            <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ py: 2 }}
            >
            {/* Left Icon */}
            <Grid item>
                <Box
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: "#E8F0FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1E5BFF",
                }}
                >
                {item.icon}
                </Box>
            </Grid>

            {/* Title & Rating */}
            <Grid item xs>
                <Typography fontWeight={600}>
                {item.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.subtitle}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Rating
                    value={ratings[item.key]}
                    onChange={(e, val) =>
                    setRatings({ ...ratings, [item.key]: val })
                    }
                />
                <Typography sx={{ ml: 1 }} color="text.secondary">
                    Excellent
                </Typography>
                </Box>
            </Grid>

            {/* Right Badge */}
            <Grid item>
                <Chip
                label="5 Stars"
                variant="outlined"
                sx={{
                    borderRadius: 2,
                    fontWeight: 500,
                    bgcolor: "#FFF7E0",
                    borderColor: "#E6B800",
                    color: "#9C6F00",
                }}
                />
            </Grid>
            </Grid>

            {/* Divider */}
            {index !== ratingConfig.length - 1 && (
            <Divider />
            )}
        </Box>
        ))}

        {/* Average */}
        <Box
          sx={{
            backgroundColor: "#eef3ff",
            p: 2,
            mb: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>Overall Average Rating</Typography>
          <Typography fontWeight={700}>{average.toFixed(1)}</Typography>
        </Box>

        {/* Recommendation */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <FavoriteIcon
            sx={{ color: "#1E5BFF", mr: 1 }}
            />
            <Typography fontWeight={600}>
            Recommendation
            </Typography>
        </Box>

        <Box mt={3}>
        <Typography fontWeight={600} gutterBottom>
            Would You Recommend This Doctor To Others?
        </Typography>

        {options.map((option) => {
            const selected = recommendation === option.key;

            return (
            <Paper
                key={option.key}
                onClick={() => setRecommendation(option.key)}
                elevation={0}
                sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                mb: 2,
                cursor: "pointer",
                borderRadius: 2,
                border: selected
                    ? `2px solid ${option.color}`
                    : "1px solid #E0E0E0",
                bgcolor: selected ? option.bg : "#fff",
                transition: "all 0.2s ease",
                "&:hover": {
                    borderColor: option.color,
                },
                }}
            >
                {/* Icon */}
                <Box sx={{ color: option.color, mr: 2 }}>
                {option.icon}
                </Box>

                {/* Text */}
                <Box>
                <Typography fontWeight={600}>
                    {option.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {option.subtitle}
                </Typography>
                </Box>
            </Paper>
            );
        })}
        </Box>

        {/* Your Feedback Section */}
        <Box sx={{ mt: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <ChatBubbleOutlineIcon
            sx={{ color: "#1E5BFF", mr: 1 }}
            />
            <Typography fontWeight={600}>
            Your Feedback
            </Typography>
        </Box>

        <Typography fontWeight={600} mb={1}>
            Share Your Experience (Optional)
        </Typography>

        <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Tell Us About Your Consultation Experience. What Went Well? What Could Be Improved?"
            variant="outlined"
            sx={{
            "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#F0F0F0",
                "& fieldset": {
                border: "none",
                },
            },
            }}
        />

        <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
        >
            Your Feedback Helps Us Improve Our Service And Helps Other
            Patients Make Informed Decisions.
        </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Improvements Section */}
        <Box>
        <Typography fontWeight={600} mb={1}>
            How Can We Improve?
        </Typography>

        <Typography fontWeight={600} mb={1}>
            Any Suggestions For Improvement? (Optional)
        </Typography>

        <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Tell Us How We Can Make Your Next Consultation Even Better..."
            variant="outlined"
            sx={{
            "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#F0F0F0",
                "& fieldset": {
                border: "none",
                },
            },
            }}
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
          <Button onClick={showDashboard} variant="outlined">
            Skip For Now
          </Button>
          <Button variant="contained">Submit Feedback</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
