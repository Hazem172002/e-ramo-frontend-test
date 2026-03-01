import AboutSection from "../components/aboutSection/AboutSection";
import ContactUs from "../components/contactUs/ContactUs";
import HeroSection from "../components/hero/HeroSection";
import HowItWorks from "../components/howItWorks/HowItWorks";
import HybridWorking from "../components/hybridWorking/HybridWorking";
import ListingSection from "../components/listingSection/ListingSection";
import NewsLetter from "../components/newsLetter/NewsLetter";
import OurServicesSection from "../components/ourServices/OurServicesSection";
import PricingSection from "../components/pricingSection/PricingSection";

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ListingSection />
      <OurServicesSection />
      <HowItWorks />
      <HybridWorking />
      {/* <ContactUs /> */}
      <PricingSection/>
      <NewsLetter />
    </div>
  );
}
