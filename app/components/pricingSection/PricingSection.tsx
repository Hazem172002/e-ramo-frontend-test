import PricingHeader from "./PricingHeader";
import PricingPlanCard from "./PricingPlanCard";
import PricingSidebar from "./PricingSidebar";

export default async function PricingSection() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pb-12 pt-8 md:px-6 md:pb-20">
      <PricingHeader />

      <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[280px_1fr_1fr_1fr]">
        <PricingSidebar />
        <PricingPlanCard planKey="basic" />
        <PricingPlanCard planKey="pro" highlighted />
        <PricingPlanCard planKey="enterprise" />
      </div>
    </section>
  );
}
