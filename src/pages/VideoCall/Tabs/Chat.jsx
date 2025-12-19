import { useEffect, useRef, useState } from "react";
import {Box,Typography,TextField,IconButton,} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatTab({ isActive }) {
      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState([]);
      const hasWelcomedRef = useRef(false);

      useEffect(() => {
        if (isActive && !hasWelcomedRef.current) {
            setMessages((prev) => [
            ...prev,
            {
                text: "Hello! I can see you now. How are you feeling today?",
                sender: "you",
                time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                }),
            },
            ]);

            hasWelcomedRef.current = true;
        }
        }, [isActive]);

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
    <Box sx={{ p: 2, height: "95%", display: "flex", flexDirection: "column" }}>
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
  );
}
