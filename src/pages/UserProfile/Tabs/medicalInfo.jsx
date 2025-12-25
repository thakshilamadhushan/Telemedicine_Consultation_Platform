import { Box, Button, Paper, Typography, } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import { useState } from "react";
import AddMedicationPopup from "../../../components/AddMedicationPopup";
import UpdatePopup from "../../../components/AllergiesCOnditionsUpdatePopup";
const importAll = (context) => context.keys().map(context);
const icons = importAll(require.context("../../../assets/icons/UserProfile", false, /\.(png|jpe?g|svg)$/));

const medicalInfo = [
  {BloodType: "A+",
  Height: "5'6\" (168cm)",
  Weight: "145 lbs (66 kg)",
  Allergies: "Peanuts, Penicillin, Latex",
  MedicalConditions: "Hypertension, Seasonal Allergies",
  CurrentMedications: "Lisinopril, Cetirizine",
  }
];

const currentmedications = [
  {
    Lisinopril: "10mg - Once Daily",
    Cetirizine: "10mg - As Needed" 
  }
]

export default function MedicalInfo() {
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
  return (
    <Box>
      {/* Vital Information*/}
      <Paper
          elevation={0}
          sx={{
            border: "1px solid #c0c0c0ff",
            p: 3,
            mb: 3,
            borderRadius: 4,
          }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Vital Information
            </Typography>
            
          <Box display="flex" gap={2} justifyContent="center" flexWrap="center">
          {medicalInfo.map((mi, index) => {
            return (
              <Box key={index} display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} width={"100%"}>

                {/* Blood Type */}
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: "#f1f1f1ff",
                    p: 2,
                    borderRadius: 4,
                    width: {xs: 250, md:400},
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2} ml={2}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#fdb9b9ff",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      
                      <img
                        src={icons[1]}
                        alt="Blood Icon"
                        style={{ width: 40, height: 40 }}
                      />
                    </Box >
                    <Box>
                      <Typography color="gray"> Blood Type</Typography>
                      <Typography>{mi.BloodType}</Typography>
                    </Box>
                  </Box>
                </Paper>

                {/* Height */}
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: "#f1f1f1ff",
                    p: 2,
                    borderRadius: 4,
                    width: {xs: 250, md:400},
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2} ml={2}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#b9c3fdff",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      
                      <img
                        src={icons[0]}
                        alt="Blood Icon"
                        style={{ width: 40, height: 40 }}
                      />
                    </Box >
                    <Box>
                      <Typography color="gray"> Height </Typography>
                      <Typography>{mi.Height}</Typography>
                    </Box>
                  </Box>
                </Paper>

                {/* Weight */}
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: "#f1f1f1ff",
                    p: 2,
                    borderRadius: 4,
                    width: {xs: 250, md:400},
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2} ml={2}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#b9fdbcff",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      
                      <img
                        src={icons[2]}
                        alt="Blood Icon"
                        style={{ width: 40, height: 40 }}
                      />
                    </Box >
                    <Box>
                      <Typography color="gray"> Weight</Typography>
                      <Typography>{mi.Weight}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Paper>

      {/* Allergies & Conditions */}
      {medicalInfo.map((mi, index) => (
        <Box key={index}>
          <Paper
            elevation={0}
            sx={{
              border: "1px solid #c0c0c0ff",
              p: 3,
              mb: 3,
              borderRadius: 4,
            }}
          >
            <Typography display="flex" justifyContent="space-between" variant="h6" sx={{ mb: 2 }}  gap={3}>
              Allergies & Conditions
              <Button variant="outlined" onClick={() => setOpenUpdate(true)}> UPDATE </Button>
            </Typography>

            <Typography display="flex" variant="h6" sx={{ mb: 2 }} gap={1}>
              <ErrorIcon sx={{ color: "red", fontSize: 30 }} /> Allergies
            </Typography>
            
            <Box display="flex" gap={3} mb={3}>
            {mi.Allergies.split(",").map((item, i) => (
            <Box
              sx={{
                px: 1,
                py: 0.2,
                fontSize: 11,
                borderRadius: 1,
                width: "fit-content",
                backgroundColor: "#c6fdcfff",
                color: "#0ea800ff",
                fontWeight: 500,
                
              }}
            >
              {item.trim()}
            </Box>
          ))}
          </Box>

          <Typography display="flex" variant="h6" sx={{ mb: 2 }} gap={1}>
              <img src={icons[0]} alt=" " width="30" height="30"/> Medical Conditions
            </Typography>
            
            <Box display="flex" gap={3}>
            {mi.MedicalConditions.split(",").map((item, i) => (
            <Box
              sx={{
                px: 1,
                py: 0.2,
                fontSize: 11,
                borderRadius: 1,
                width: "fit-content",
                backgroundColor: "#c6d5fdff",
                color: "#000ba8ff",
                fontWeight: 500,
                
              }}
            >
              {item.trim()}
            </Box>
          ))}
          </Box>
          </Paper>
        </Box>
      ))}  

      <Box>
        {/* Current Medications */}
        {currentmedications.map((cm, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              border: "1px solid #c0c0c0ff",
              p: 3,
              mb: 3,
              borderRadius: 4,
            }}
          >
            <Typography display="flex" justifyContent="space-between" variant="h6" sx={{ mb: 2 }} gap={3}> 
              Current Medications
              <Button variant="outlined" onClick={() => setOpenAdd(true)}> Add Medication </Button>
            </Typography>

            <Paper
              elevation={0}
              sx={{
                border: "1px solid #ddddddff",
                p: 2,
                mb: 2,
                borderRadius: 4,
              }}
            >
              <Box display="flex" alignItems="center" ml={2}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#e4b9fdff",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={icons[3]}
                        alt="Blood Icon"
                        style={{ width: 40, height: 40 }}
                      />
                    </Box>

                    <Box>
                      <Typography color="gray">Lisinopril</Typography>
                      <Typography>{cm.Lisinopril}</Typography>
                    </Box>
                  </Box>
              </Box>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                border: "1px solid #ddddddff",
                p: 2,
                borderRadius: 4,
              }}
            >
              <Box display="flex" alignItems="center" gap={2} ml={2}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        backgroundColor: "#e4b9fdff",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={icons[3]}
                        alt="Blood Icon"
                        style={{ width: 40, height: 40 }}
                      />
                    </Box>

                    <Box>
                      <Typography color="gray">Cetirizine</Typography>
                      <Typography>{cm.Cetirizine}</Typography>
                    </Box>
                  </Box>
              </Box>
            </Paper>

          </Paper>
      ))}
      </Box>

      <AddMedicationPopup
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onAdd={(data) => console.log("New Medication Added:", data)}
      />

      <UpdatePopup
        open={openUpdate}
        onClose={() => setOpenUpdate(false)}
        allergies={medicalInfo[0].Allergies}
        conditions={medicalInfo[0].MedicalConditions}
        onUpdate={(data) => console.log("Updated info:", data)}
      />

    </Box>
  );
}
