import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/Home/PublicHome";
import UserHome from "./pages/Home/UserHome";
import BookConsultation from "./pages/Book consultation/book_consultation_home"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/Book_consultation_home" element={<BookConsultation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
