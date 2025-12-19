import {Dialog,DialogTitle,DialogContent,DialogActions,TextField,Button,} from "@mui/material";
import { useState } from "react";

export default function UpdatePopup({ open, onClose, allergies, conditions, onUpdate }) {
  const [newAllergies, setNewAllergies] = useState(allergies);
  const [newConditions, setNewConditions] = useState(conditions);

  const handleUpdate = () => {
    onUpdate({
      allergies: newAllergies,
      conditions: newConditions,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle >Update Allergies & Conditions</DialogTitle>

      <DialogContent sx={{ mt: 2}}>
        <TextField
          label="Allergies (comma separated)"
          fullWidth
          multiline
          rows={2}
          value={newAllergies}
          onChange={(e) => setNewAllergies(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          label="Medical Conditions (comma separated)"
          fullWidth
          multiline
          rows={2}
          value={newConditions}
          onChange={(e) => setNewConditions(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
