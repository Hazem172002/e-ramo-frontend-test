import AboutSection from "../components/aboutSection/AboutSection";
import HeroSection from "../components/hero/HeroSection";

export default async function HomePage() {
  return (
   <div>
     <HeroSection />
     <AboutSection/>
   </div>
  );
}
