import HeroSection from "@/features/public/components/HeroSection";
import AboutSection from "@/features/public/components/AboutSection";
import UPTSection from "@/features/public/components/UPTSection";
import NewsSection from "@/features/public/components/NewsSection";
import ComplaintSection from "@/features/public/components/ComplaintSection";

export default function HomePage() {
  return (
    <main>
        <HeroSection />
        <AboutSection />
        <UPTSection />
        <NewsSection />
        <ComplaintSection />
      </main>
  );
}
