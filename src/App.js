import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/Home/PublicHome";
import UserHome from "./pages/Home/UserHome";
import UserProfile from "./pages/UserProfile/userProfile";
import DoctorProfile from "./pages/DoctorProfile/doctorProfile";
import PatientVideoCall from "./pages/VideoCall/patientVideoCallUI";
import DoctorVideoCall from "./pages/VideoCall/doctorVidoCallUi";
=========
>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/doctor" element={<DoctorProfile/>}/>
        <Route path="/patientvideocall" element={<PatientVideoCall/>}/>
        <Route path="/doctorvideocall" element={<DoctorVideoCall/>}/>
=========
>>>>>>>>> Temporary merge branch 2
      </Routes>
    </BrowserRouter>
  );
}

export default App;
