import { useState } from "react";
import {Drawer,Box,Tabs,Tab,IconButton,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ChatTab from "./Tabs/Chat";
import InfoTab from "./Tabs/info";
import NotesTab from "./Tabs/Notes";

export default function ChatDrawer({open,onClose,SIDE_PANEL_WIDTH,}) {

  const [tab, setTab] = useState(2); // 0=Info, 1=Notes, 2=Chat (default)
  const [chatOpen,setChatOpen] = useState(false);
  const handleTabChange = (_, newTab) => {
    setTab(newTab);

    // If Chat tab clicked
    if (newTab === 2) {
        setChatOpen(true);
    }
  };


  return (
    <Drawer
      variant="persistent"
      anchor="right"
      setChatOpen={setChatOpen}
      open={open}
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
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* TOP TABS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            px: 1,
          }}
        >
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "#1976d2" } }}
            sx={{ flex: 1 }}
          >
            <Tab label="Info" />
            <Tab label="Notes" />
            <Tab label="Chat" />
          </Tabs>

          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* TAB CONTENT */}
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          {tab === 0 && <InfoTab />}
          {tab === 1 && <NotesTab />}
          {tab === 2 && <ChatTab isActive={true}/>}
        </Box>
      </Box>
    </Drawer>
  );
}
