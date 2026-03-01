import {getTranslations} from "next-intl/server";
import AboutActions from "./AboutActions";
import AboutFeatureList from "./AboutFeatureList";
import AboutImageStack from "./AboutImageStack";

export default async function AboutSection() {
  const t = await getTranslations("AboutSection");

  return (
    <section className=" w-full pt-[80px]">
      <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold text-write-main md:text-4xl">
              {t("title")}
            </h2>
            <p className="max-w-xl text-base pt-[10px] pb-[34px] leading-7 text-sub-write">
              {t("description")}
            </p>
          </div>

          <div className="">
            <h3 className="text-2xl pb-[24px] font-semibold text-write-main">
              {t("subtitle")}
            </h3>
            <AboutFeatureList
              items={[
                t("features.moreLocations"),
                t("features.amenities"),
                t("features.support")
              ]}
            />
          </div>

          <AboutActions
            primaryLabel={t("actions.viewProducts")}
            secondaryLabel={t("actions.bookNow")}
          />
        </div>

        <AboutImageStack imageAlt={t("imageAlt")} />
      </div>
    </section>
  );
}
