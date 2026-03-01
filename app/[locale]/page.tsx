import AboutSection from "../components/aboutSection/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import ListingSection from "../components/listingSection/ListingSection";

export default async function HomePage() {
  return (
   <div>
     <HeroSection />
     <AboutSection/>
     <ListingSection />
   </div>
  );
}
