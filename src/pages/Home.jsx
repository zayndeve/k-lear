import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import CoursesPreview from "../components/CoursesPreview";
import Advertisement from "../components/Advertisement";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import "./../styles/pages/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-bg">
        <Navbar />
        <div className="hero-container">
          <Hero />
        </div>
      </div>

      <main className="home-main-section">
        <BenefitsSection />
        <CoursesPreview />
      </main>
 <Advertisement />

      <main className="home-main-section">
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
         {/* Full width section */}
     
      </main>
      <Footer />
    </div>
  );
}
