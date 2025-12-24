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
import ConsultationSelect_1 from './pages/BookConsultation/Consultation_select_1';
import ConsultationSelect_2 from "./pages/BookConsultation/Consultation_select_2";
import ConsultationSelect_3 from "./pages/BookConsultation/Consultation_select_3";


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
        <Route path="/consultationselect_1" element={<ConsultationSelect_1/>}/>
        <Route path="/consultationselect_2" element={<ConsultationSelect_2/>}/>
        <Route path="/consultationselect_3" element={<ConsultationSelect_3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
