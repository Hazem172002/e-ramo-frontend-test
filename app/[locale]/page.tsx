import AboutSection from "../components/aboutSection/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import ListingSection from "../components/listingSection/ListingSection";
import NewsLetter from "../components/newsLetter/NewsLetter";
import OurServicesSection from "../components/ourServices/OurServicesSection";

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ListingSection />
      <OurServicesSection />
      <NewsLetter />
    </div>
  );
}
