import React from "react";
import {Box,Paper,Typography,Avatar,Chip,Stack,LinearProgress,Button,Divider,} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const ratingSummary = {
  average: 4.9,
  total: 248,
  breakdown: {
    5: 4,
    4: 1,
    3: 0,
    2: 0,
    1: 0,
  },
};

const reviews = [
  {
    name: "Sarah Johnson",
    date: "November 10, 2025",
    rating: 5,
    tag: "Heart Failure Management",
    helpful: 24,
    comment:
      "Dr. Chen is exceptional! He took the time to thoroughly explain my heart condition and treatment options. His compassionate approach and expertise made me feel confident in my care.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Robert Martinez",
    date: "November 05, 2025",
    rating: 4,
    tag: "Preventive Cardiology",
    helpful: 18,
    comment:
      "Outstanding cardiologist! Dr. Chen identified issues that previous doctors had missed. His preventive approach has significantly improved my heart health.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Chen",
    date: "October 28, 2025",
    rating: 5,
    tag: "Arrhythmia Management",
    helpful: 15,
    comment:
      "Dr. Chen is the best! He helped me manage my arrhythmia with a combination of medication and lifestyle changes.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Kim",
    date: "October 20, 2025",
    rating: 4,
    tag: "Coronary Artery Disease",
    helpful: 12,
    comment:
      "Very knowledgeable and professional. The wait time was a bit long, but Dr. Chen made up for it with detailed explanations.",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "Lisa Anderson",
    date: "October 15, 2025",
    rating: 5,
    tag: "Hypertension Control",
    helpful: 20,
    comment:
      "I've been seeing Dr. Chen for 3 years now, and he's been instrumental in managing my high blood pressure.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const Stars = ({ value }) => (
  <Stack direction="row" spacing={0.3}>
    {[1, 2, 3, 4, 5].map((i) => (
      <StarIcon
        key={i}
        fontSize="small"
        sx={{ color: i <= value ? "#fbc02d" : "#e0e0e0" }}
      />
    ))}
  </Stack>
);

export default function PatientReviewsPage() {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid #d1d1d1" }}>
      <Typography variant="h6" mb={2}>
        Patient Reviews
      </Typography>

      {/* Summary */}
      <Paper variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={7}                    
          alignItems="center"
          
        >
          {/* LEFT */}
          <Box textAlign="center" minWidth={220}>
            <Typography variant="h4" fontWeight={600} mb={0.5}>
              {ratingSummary.average}
            </Typography>
            <Box display="flex" justifyContent="center">
            <Stars value={Math.round(ratingSummary.average)} />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.8}                   // ⬅ tighter spacing like image
            >
              Based On {ratingSummary.total} Reviews
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box flex={1} pl={2}>          {/* ⬅ shift bars right */}
            {[5, 4, 3, 2, 1].map((star) => (
              <Stack
                key={star}
                direction="row"
                alignItems="center"
                spacing={1.5}            // ⬅ consistent row spacing
                mb={1.2}
              >
                <Typography width={14}>{star}</Typography>
                
                <StarIcon fontSize="small" sx={{ color: "#fbc02d" }} />

                <LinearProgress
                  variant="determinate"
                  value={(ratingSummary.breakdown[star] / 5) * 100}
                  sx={{
                    flex: 1,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#000",
                    },
                  }}
                />

                <Typography width={18} textAlign="right">
                  {ratingSummary.breakdown[star]}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Paper>


      {/* Reviews List */}
      <Stack spacing={3}>
        {reviews.map((r, i) => (
          <Box key={i}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar src={r.avatar} sx={{ width: 56, height: 56 }} />

              <Box flex={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography fontWeight={600}>{r.name}</Typography>
                  <Chip
                    label="Verified Patient"
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
                  <Stars value={r.rating} />
                  <Typography variant="body2" color="text.secondary">
                    • {r.date}
                  </Typography>
                </Stack>

                <Chip
                  label={r.tag}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />

                <Typography variant="body2" mt={1.5}>
                  {r.comment}
                </Typography>

                <Stack direction="row" spacing={1} mt={2}>
                  <Button
                    size="small"
                    startIcon={<ThumbUpAltOutlinedIcon />}
                    variant="outlined"
                  >
                    Helpful ({r.helpful})
                  </Button>
                  <Button
                    size="small"
                    startIcon={<ChatBubbleOutlineIcon />}
                    variant="outlined"
                  >
                    Reply
                  </Button>
                </Stack>
              </Box>
            </Stack>

            {i !== reviews.length - 1 && <Divider sx={{ mt: 3 }} />}
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
