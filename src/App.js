import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from "./components/Footer";
import HomeSection from './components/Home_hero';
import WhyChooseUs from './components/whyChooseUs';
import OurServices from './components/OurServices';

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      
      <ResponsiveAppBar />
      <HomeSection />
      <WhyChooseUs />
      <OurServices />

      {/* Main page content */}
      <div style={{ flex: 1 }}>
        {/* All your pages/content go here */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
