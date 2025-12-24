import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookingSuccessPopup({ open, setOpen, doctorName, date, time }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/user");
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"auto"}>
      <DialogTitle>Consultation Booked Successfully!</DialogTitle>
      <DialogContent>
        <Typography>
          Your Appointment With <strong>{doctorName}</strong> Is Confirmed For <strong>{date}</strong> At <strong>{time}</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
