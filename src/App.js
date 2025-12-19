import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/Home/PublicHome";
import UserHome from "./pages/Home/UserHome";
import UserProfile from "./pages/UserProfile/userProfile";
import DoctorProfile from "./pages/DoctorProfile/doctorProfile";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/doctor" element={<DoctorProfile/>}/>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
