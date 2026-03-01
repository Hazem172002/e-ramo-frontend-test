import ServiceDetailsPanel from "./ServiceDetailsPanel";
import ServicesNavigation from "./ServicesNavigation";

export default async function OurServicesSection() {
  return (
    <section className="pt-[54px]">
      <div className="space-y-6">
        <ServicesNavigation />
        <ServiceDetailsPanel />
      </div>
    </section>
  );
}
