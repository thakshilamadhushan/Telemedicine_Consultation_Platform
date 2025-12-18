import React, { useEffect, useRef, useState } from "react";
import {Box,AppBar,Toolbar,Typography,Avatar,IconButton,Drawer,TextField,Paper,Stack,Button,} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ChatIcon from "@mui/icons-material/Chat";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function VideoCallUI() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [videoOn, setVideoOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      });

    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const toggleVideo = () => {
    stream.getVideoTracks().forEach((t) => (t.enabled = !videoOn));
    setVideoOn(!videoOn);
  };

  const toggleMic = () => {
    stream.getAudioTracks().forEach((t) => (t.enabled = !micOn));
    setMicOn(!micOn);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", bgcolor: "#0f1c2e" }}>
      {/* MAIN AREA */}
      <Box sx={{ flex: 1, position: "relative" }}>
        {/* HEADER */}
        <AppBar position="static" sx={{ bgcolor: "#142338" }}>
          <Toolbar>
            <Avatar sx={{ mr: 2 }} />
            <Box>
              <Typography variant="h6">Dr. Michael Chen</Typography>
              <Typography variant="caption" color="lime">Connected</Typography>
            </Box>
            <Box>
              
            </Box>
          </Toolbar>
        </AppBar>

        {/* DOCTOR VIDEO (STATIC IMAGE / PLACEHOLDER) */}
        <Box
          sx={{
            height: "calc(100% - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography variant="h4">Doctor Video Feed</Typography>
        </Box>

        {/* SELF PREVIEW */}
        <Paper
          sx={{
            position: "absolute",
            bottom: 120,
            right: 20,
            width: 220,
            height: 150,
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>

        {/* CONTROLS */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <IconButton onClick={toggleVideo} sx={{ bgcolor: "white" }}>
            {videoOn ? <VideocamIcon /> : <VideocamOffIcon />}
          </IconButton>
          <IconButton onClick={toggleMic} sx={{ bgcolor: "white" }}>
            {micOn ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          <IconButton sx={{ bgcolor: "white" }}>
            <VolumeUpIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "white" }} onClick={() => setChatOpen(true)}>
            <ChatIcon />
          </IconButton>
          <Button
            variant="contained"
            color="error"
            startIcon={<CallEndIcon />}
          >
            End Call
          </Button>
        </Stack>
      </Box>

      {/* CHAT DRAWER */}
      <Drawer
        anchor="right"
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        PaperProps={{ sx: { width: 350, bgcolor: "#142338", color: "white" } }}
      >
        <Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" mb={2}>Chat</Typography>
          <Box sx={{ flex: 1 }} />
          <TextField
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            InputProps={{ sx: { bgcolor: "white", borderRadius: 2 } }}
          />
        </Box>
      </Drawer>
    </Box>
  );
}
