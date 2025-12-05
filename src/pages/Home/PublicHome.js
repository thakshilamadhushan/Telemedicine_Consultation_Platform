import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from "../../components/Footer";
import HomeSection from '../../components/Home_hero';
import WhyChooseUs from '../../components/whyChooseUs';
import OurServices from '../../components/OurServices';
import Feedbacks from '../../components/Feedbacks';

export default function PublicHome() {
  return (
    <>
      <ResponsiveAppBar isUserLoggedIn={false}/>
      <HomeSection />
      <WhyChooseUs />
      <OurServices />
      <Feedbacks />
      <Footer />
    </>
  );
}