import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import CustomizerSection from "@/components/CustomizerSection";
import FAQSection from "@/components/FAQSection";
import TailorComingSoonCard from "@/components/TailorComingSoonCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <CustomizerSection />
      <FAQSection />
      <TailorComingSoonCard />
      <Footer />
    </main>
  );
}
// Build trigger
