import ServiceDetailsPanel from "./ServiceDetailsPanel";
import ServicesNavigation from "./ServicesNavigation";

export default async function OurServicesSection() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pb-12 pt-8 md:px-6 md:pb-20">
      <div className="space-y-6">
        <ServicesNavigation />
        <ServiceDetailsPanel />
      </div>
    </section>
  );
}
