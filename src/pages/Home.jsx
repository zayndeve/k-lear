import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import CoursesPreview from "../components/CoursesPreview";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <BenefitsSection />
        <CoursesPreview />
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
