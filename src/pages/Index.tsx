
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InteractiveMap from "../components/InteractiveMap";
import StorytellingDashboard from "../components/StorytellingDashboard";
import WildlifeGallery from "../components/WildlifeGallery";
import Innovation from "../components/Innovation";
import GetInvolved from "../components/GetInvolved";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveMap />
      <StorytellingDashboard />
      <WildlifeGallery />
      <Innovation />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
