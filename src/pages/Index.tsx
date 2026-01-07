import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import AboutCourseSection from "@/components/AboutCourseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMeSection />
      <AboutCourseSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
