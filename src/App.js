import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/Home/PublicHome";
import UserHome from "./pages/Home/UserHome";
import DoctorHome from "./pages/Home/DoctorHome";
import UserProfile from "./pages/UserProfile/userProfile";
import DoctorProfile from "./pages/DoctorProfile/doctorProfile";
import PatientVideoCall from "./pages/VideoCall/patientVideoCallUI";
import DoctorVideoCall from "./pages/VideoCall/doctorVidoCallUi";
import BookConsultationHome from './pages/BookConsultation/BookConsultation_Home';
import ConsultationSelect from './pages/BookConsultation/Consultation_select';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/doctorhome" element={<DoctorHome />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/doctor" element={<DoctorProfile />} />
        <Route path="/patientvideocall" element={<PatientVideoCall/>}/>
        <Route path="/doctorvideocall" element={<DoctorVideoCall/>}/>
        <Route path="/bookconsultation" element={<BookConsultationHome/>}/>
        <Route path="/consultationselect" element={<ConsultationSelect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
