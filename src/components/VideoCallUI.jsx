import React from "react";
import { Box } from "@mui/material";


export default function VideoCallLayout({ header, mainVideo, selfPreview, controls, sidePanel }) {
return (
<Box sx={{ height: "100vh", display: "flex", bgcolor: "#0f1c2e" }}>
<Box sx={{ flex: 1, position: "relative" }}>
{header}
{mainVideo}
{selfPreview}
{controls}
</Box>
{sidePanel}
</Box>
);
}