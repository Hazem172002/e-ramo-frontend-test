import { getTranslations } from "next-intl/server";
import HowItWorksCard from "./HowItWorksCard";

export default async function HowItWorks() {
  const t = await getTranslations("HowItWorksSection");

  const items = [
    {
      key: "one",
      image: "/howItWorksFirstImage.jpg"
    },
    {
      key: "two",
      image: "/howItWorksSecoundImage.jpg"
    },
    {
      key: "three",
      image: "/howItWorksThirdImage.jpg"
    }
  ] as const;

  return (
    <section className="xl:px-[100px] pt-[60px]">
      <div className=" text-center">
        <h2 className="text-5xl font-bold text-write-main md:text-7xl">{t("title")}</h2>
        <p className="mt-3 text-[16px] leading-[1.45] text-write-main md:text-[20px]">{t("subtitle")}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 xl:gap-[95px] lg:grid-cols-3">
        {items.map((item, index) => (
          <HowItWorksCard
            key={item.key}
            stepNumber={String(index + 1)}
            stepTitle={t(`steps.${item.key}.title`)}
            description={t(`steps.${item.key}.description`)}
            imageSrc={item.image}
            imageAlt={t(`steps.${item.key}.imageAlt`)}
          />
        ))}
      </div>
    </section>
  );
}
