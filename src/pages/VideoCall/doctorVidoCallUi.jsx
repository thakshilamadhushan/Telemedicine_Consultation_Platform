import React, { useEffect, useRef, useState } from "react";
import {Box,AppBar,Toolbar,Typography,Avatar,IconButton,Drawer,Paper,Stack,Button,Chip,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
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
import Emilychen from "../../assets/VideoCall/Emily_chen.jpg";
import ChatDrawer from "./ChatDrawer";
import HeartRate from "../../assets/icons/DoctorVideoCall/beat-blue.png";
import Heart from "../../assets/icons/DoctorVideoCall/heart-red.png";
import Thermometer from "../../assets/icons/DoctorVideoCall/thermometer-orange.png";
import Water from "../../assets/icons/DoctorVideoCall/water-blue.png";
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
  const [confirmOpen, setConfirmOpen] = useState(false);

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
                  <Typography variant="h6">Emily chen</Typography>
                  <Chip label="Connected" size="small" color="success" sx={{ my: 0.5, ml: 1, fontSize: 10}} />
                </Box>
                <Typography >34y • Female • O+</Typography>
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
          <img src={Emilychen} alt="Doctor" style={{ width: "100%", height: "90%", objectFit: "contain"}} />
          
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
            <Box sx={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>Emily chen</Box>
          </Box>

          {/* Medical Info */}
          <Box
            sx={{
              position: "absolute",
              right: 30,
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
            <Box sx={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <img src={Heart} alt="" height={20} width={20}/><Typography>72 bpm</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <img src={HeartRate} alt=" " height={20} width={20}/><Typography>120/80 mmHg</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <img src={Thermometer} alt=" " height={20} width={20}/><Typography>98.6°F</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <img src={Water} alt=" " height={20} width={20}/><Typography>98%</Typography>
                </Box>
            </Box>
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
            {"You (Dr.Chen)"}
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
      <ChatDrawer
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        SIDE_PANEL_WIDTH={SIDE_PANEL_WIDTH}
      />

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
