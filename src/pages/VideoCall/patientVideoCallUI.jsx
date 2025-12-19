import React, { useEffect, useRef, useState } from "react";
import {Box,AppBar,Toolbar,Typography,Avatar,IconButton,Drawer,TextField,Paper,Stack,Button,Chip,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ChatIcon from "@mui/icons-material/Chat";
import CallEndIcon from "@mui/icons-material/CallEnd";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import DrMichael from "../../assets/VideoCall/Dr.Michael_Chen.jpg";

const SIDE_PANEL_WIDTH = 350;

export default function VideoCallUI() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [videoOn, setVideoOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [screenOn, setScreenOn] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const hasWelcomedRef = useRef(false);
  

  useEffect(() => {
  let localStream;
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((mediaStream) => {
      localStream = mediaStream;
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    });

  return () => {
    localStream?.getTracks().forEach(track => track.stop());
  };
}, []);

const turnVideoOn = () => {
  if (!stream) return;

  stream.getVideoTracks().forEach(track => {
    track.enabled = true;
  });

  setVideoOn(true);
};

const turnVideoOff = () => {
  if (!stream) return;

  stream.getVideoTracks().forEach(track => {
    track.enabled = false;
  });

  setVideoOn(false);
};


  const toggleVideo = () => {
  if (!videoOn) {
    turnVideoOn();
  } else {
    turnVideoOff();
  }
};



  const toggleMic = () => {
    stream.getAudioTracks().forEach((t) => (t.enabled = !micOn));
    setMicOn(!micOn);
  };

  const [seconds, setSeconds] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (chatOpen && !hasWelcomedRef.current) {
    setMessages((prev) => [
      ...prev,
      {
        text: "Hello! I can see you now. How are you feeling today?",
        sender: "doctor",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    hasWelcomedRef.current = true;
  }
}, [chatOpen]);


const formatTime = (secs) => {
  const mins = String(Math.floor(secs / 60)).padStart(2, "0");
  const secsLeft = String(secs % 60).padStart(2, "0");
  return `${mins}:${secsLeft}`;
};

const toggleScreenShare = async () => {
  // STOP screen sharing
  if (screenOn && screenStream) {
    screenStream.getTracks().forEach(track => track.stop());
    setScreenStream(null);
    setScreenOn(false);

    // restore camera
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
    return;
  }

  // START screen sharing
  try {
    const displayStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    });

    setScreenStream(displayStream);
    setScreenOn(true);

    if (videoRef.current) {
      videoRef.current.srcObject = displayStream;
    }

    // auto stop when user clicks "Stop sharing"
    displayStream.getVideoTracks()[0].onended = () => {
      setScreenOn(false);
      setScreenStream(null);
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    };
  } catch (err) {
    console.error("Screen share cancelled", err);
  }
};

const endCall = () => {
  // Stop camera & microphone
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    setStream(null);
  }

  // Stop screen sharing if active
  if (screenStream) {
    screenStream.getTracks().forEach(track => track.stop());
    setScreenStream(null);
    setScreenOn(false);
  }

  // Reset video & mic states
  setVideoOn(false);
  setMicOn(false);

  // Optional: Close chat & settings
  setChatOpen(false);
  setSettingsOpen(false);


  // Optional: You can navigate to another page or show "Call ended" UI
  console.log("Call ended");
};

const sendMessage = () => {
  if (!message.trim()) return;

  setMessages((prev) => [
    ...prev,
    {
      text: message,
      sender: "you",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  setMessage("");
};



  return (
    <Box sx={{ height: "100vh", display: "flex", bgcolor: "#0f1c2e" }}>
      {/* MAIN AREA */}
      <Box sx={{ flex: 1, position: "relative", transition: "margin-right 0.3s ease", marginRight: chatOpen || settingsOpen ? `${SIDE_PANEL_WIDTH}px` : 0,}}>
        {/* HEADER */}
        <AppBar position="static" sx={{ bgcolor: "#142338" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left Side: Avatar + Doctor Info */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ mr: 2 }} />
              <Box>
                <Box display={"flex"}>
                  <Typography variant="h6">Dr. Michael Chen</Typography>
                  <Chip label="Connected" size="small" color="success" sx={{ my: 0.5, ml: 1, fontSize: 10}} />
                </Box>
                <Typography >Cardiologist</Typography>
              </Box>
            </Box>
              <Typography sx={{fontWeight: 600 }}>
                ⏱ {formatTime(seconds)}
              </Typography>
          </Toolbar>
        </AppBar>

        {/* DOCTOR VIDEO (STATIC IMAGE / PLACEHOLDER) */}
        <Box
          sx={{
            height: "calc(100% - 64px)",
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          <img src={DrMichael} alt="Doctor" style={{ width: "100%", height: "90%", objectFit: "contain"}} />
          
          {/* Doctor Name Tag */}
          <Box
            sx={{
              position: "absolute",
              left: 30,
              top: 100,
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              bgcolor: "rgba(0,0,0,0.3)", // semi-transparent background
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {/* Green Dot */}
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "limegreen",
              }}
            />
            <Box sx={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>Dr. Michael Chen</Box>
          </Box>
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
          {/* "You" Tag */}
          <Box
            sx={{
              position: "absolute",
              left: 8,
              bottom: 8,
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              bgcolor: "rgba(0,0,0,0.3)", // semi-transparent black background
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            You
          </Box>
        </Paper>

        {/* CONTROLS */}
        <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          px: 3,
          display: "flex",
          alignItems: "center",
        }}
      >

        {/* CENTER CONTROLS */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >

        <Stack direction="row" spacing={2} alignItems="center">

          <IconButton onClick={toggleVideo}  sx={{ bgcolor: "white", "&:hover": { bgcolor: "white",},}} disabled={!stream}>
            {videoOn ? <VideocamIcon /> : <VideocamOffIcon />}
          </IconButton>
          <IconButton onClick={toggleMic} sx={{ bgcolor: "white", "&:hover": { bgcolor: "white",}, }} disabled={!stream}>
            {micOn ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          <IconButton sx={{ bgcolor: "white", "&:hover": { bgcolor: "white",},}}>
            <VolumeUpIcon />
          </IconButton>
          <IconButton onClick={toggleScreenShare} disabled={!stream} disableRipple sx={{ bgcolor: "white", "&:hover, &:active, &:focus": { bgcolor: "white" },}}>
            {screenOn ? <StopScreenShareIcon /> : <ScreenShareIcon />}
          </IconButton>
          <IconButton sx={{ bgcolor: "white", "&:hover": { bgcolor: "white",}, }} onClick={() => setChatOpen(true)}>
            <ChatIcon />
          </IconButton>
          <IconButton onClick={() => setSettingsOpen(true)} disableRipple sx={{ bgcolor: "white", "&:hover, &:active, &:focus": { bgcolor: "white" },}}>
            <SettingsIcon />
          </IconButton>
        </Stack>
        </Box>
        
        {/* END CALL BUTTON (RIGHT CORNER) */}
        <Box sx={{ marginLeft: "auto" }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<CallEndIcon />}
            onClick={() => setConfirmOpen(true)}
            sx={{ borderRadius: 3, px: 3 }}
          >
            End Call
          </Button>
         </Box>
        </Box>
      </Box>

      {/* CALL END CONFIRMATION DIALOG */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>End Call</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to end this call?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button color="error" onClick={() => { endCall(); setConfirmOpen(false); }}>End Call</Button>
        </DialogActions>
      </Dialog>

      {/* CHAT DRAWER */}
      <Drawer
          variant="persistent"
          anchor="right"
          open={chatOpen}
          PaperProps={{
            sx: {
              width: SIDE_PANEL_WIDTH,
              bgcolor: "#142338",
              color: "white",
              position: "fixed",
              right: 0,
              top: 0,
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* HEADER */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h6">Chat</Typography>
              <IconButton onClick={() => setChatOpen(false)} sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* CHAT MESSAGES */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                mb: 2,
                pr: 1,
              }}
            >
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 1.5,
                    display: "flex",
                    justifyContent: msg.sender === "you" ? "flex-end" : "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "75%",
                      px: 1.5,
                      py: 1,
                      borderRadius: 2,
                      bgcolor:
                        msg.sender === "you"
                          ? "#1976d2"
                          : "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Typography fontSize={14}>{msg.text}</Typography>
                    <Typography fontSize={10} color="rgba(255,255,255,0.7)" align="right">
                      {msg.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* INPUT + SEND */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Type a message..."
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                InputProps={{
                  sx: {
                    bgcolor: "white",
                    borderRadius: 2,
                  },
                }}
              />

              <IconButton
                onClick={sendMessage}
                disabled={!message.trim()}
                sx={{
                  bgcolor: "#1976d2",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#1565c0",
                  },
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Drawer>




      {/* SETTINGS DRAWER */}
      <Drawer
          variant="persistent"
          anchor="right"
          open={settingsOpen}
          PaperProps={{
            sx: {
              width: SIDE_PANEL_WIDTH,
              bgcolor: "#142338",
              color: "white",
              position: "fixed",
              right: 0,
              top: 0,
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h6">Settings</Typography>
              <IconButton
                onClick={() => setSettingsOpen(false)}
                sx={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2">Camera</Typography>
                <Typography variant="body2" color="gray">
                  Default Camera
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2">Microphone</Typography>
                <Typography variant="body2" color="gray">
                  Default Microphone
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2">Speaker</Typography>
                <Typography variant="body2" color="gray">
                  Default Speaker
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Drawer>

    </Box>
  );
}
