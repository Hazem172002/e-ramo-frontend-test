import { getTranslations } from "next-intl/server";
import HybridWorkingCard from "./HybridWorkingCard";

export default async function HybridWorking() {
  const t = await getTranslations("HybridWorkingSection");

  const images = [
    { key: "one", src: "/howItWorksFirstImage.jpg" },
    { key: "two", src: "/howItWorksSecoundImage.jpg" },
    { key: "three", src: "/howItWorksThirdImage.jpg" }
  ] as const;

  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pb-12 pt-8 md:px-6 md:pb-20">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-[20px] font-medium text-write-main md:text-6xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-[1020px] text-[16px] leading-[1.55] text-sub-write md:text-[18px]">
          {t("description")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {images.map((item) => (
          <HybridWorkingCard
            key={item.key}
            imageSrc={item.src}
            imageAlt={t(`images.${item.key}.alt`)}
          />
        ))}
      </div>
    </section>
  );
}
