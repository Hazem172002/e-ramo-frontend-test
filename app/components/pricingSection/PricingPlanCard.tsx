import {getTranslations} from "next-intl/server";
import {Button} from "@/components/ui/button";

type PlanKey = "basic" | "pro" | "enterprise";

type PricingPlanCardProps = {
  planKey: PlanKey;
  highlighted?: boolean;
};

export default async function PricingPlanCard({
  planKey,
  highlighted = false
}: PricingPlanCardProps) {
  const t = await getTranslations("PricingSection");

  const features = [
    t(`plans.${planKey}.features.one`),
    t(`plans.${planKey}.features.two`),
    t(`plans.${planKey}.features.three`),
    t(`plans.${planKey}.features.four`)
  ];

  return (
    <article
      className={`rounded-[20px] border p-5 shadow-[0_4px_10px_rgba(0,0,0,0.06)] md:p-6 ${
        highlighted
          ? "border-green bg-green text-white"
          : "border-[#dcdedd] bg-[#f6f6f5] text-write-main"
      }`}
    >
      {highlighted && (
        <div className="mb-4 inline-flex rounded-main bg-white/20 px-4 py-2 text-[12px] font-medium">
          {t("popular")}
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className={`size-12 rounded-[14px] ${highlighted ? "bg-[#cce7a3]" : "bg-[#d8ebc5]"}`} />
        <div>
          <p className={`text-[14px] ${highlighted ? "text-white/85" : "text-sub-write"}`}>
            {t(`plans.${planKey}.audience`)}
          </p>
          <h3 className="text-4xl font-bold">{t(`plans.${planKey}.name`)}</h3>
        </div>
      </div>

      <p className={`mt-4 text-[14px] leading-7 ${highlighted ? "text-white/85" : "text-sub-write"}`}>
        {t(`plans.${planKey}.description`)}
      </p>

      <div className="mt-5">
        <p className="text-[46px] font-bold leading-none">
          {t(`plans.${planKey}.price`)}
          <span className={`ms-1 text-[16px] font-normal ${highlighted ? "text-white/85" : "text-sub-write"}`}>
            {t("perMonth")}
          </span>
        </p>
      </div>

      <p className="mt-6 text-[22px] font-semibold md:text-2xl">{t("included")}</p>
      <ul className="mt-4 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-[14px]">
            <span
              className={`inline-flex size-6 items-center justify-center rounded-full text-[11px] ${
                highlighted ? "bg-white/25 text-white" : "bg-green text-white"
              }`}
            >
              ✓
            </span>
            <span className={highlighted ? "text-white/90" : "text-write-main"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`mt-7 h-12 w-full rounded-full text-[16px] font-semibold ${
          highlighted
            ? "bg-white text-green hover:bg-white/90"
            : "bg-green text-white hover:bg-green/90"
        }`}
      >
        {t("getStarted")}
      </Button>
    </article>
  );
}
