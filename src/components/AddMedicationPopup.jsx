import {Dialog,DialogTitle,DialogContent,DialogActions,TextField,Button,} from "@mui/material";
import { useState } from "react";

export default function AddMedicationPopup({ open, onClose, onAdd }) {
  const [medName, setMedName] = useState("");
  const [dose, setDose] = useState("");

  const handleAdd = () => {
    onAdd({ medName, dose });
    setMedName("");
    setDose("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Medication</DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <TextField
          label="Medication Name"
          fullWidth
          value={medName}
          onChange={(e) => setMedName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Dose (ex: 10mg - Once Daily)"
          fullWidth
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
