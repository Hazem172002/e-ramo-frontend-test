import {getTranslations} from "next-intl/server";

export default async function PricingHeader() {
  const t = await getTranslations("PricingSection");

  return (
    <div className="mx-auto max-w-[760px] text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
        {t("eyebrow")}
      </p>
      <h2 className="mt-2 text-4xl font-bold text-write-main md:text-6xl">
        {t("title")}
      </h2>
      <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-7 text-sub-write">
        {t("description")}
      </p>

      <div className="mt-6 inline-flex items-center gap-4 text-[14px] text-write-main">
        <span>{t("billing.monthly")}</span>
        <span className="relative inline-flex h-8 w-16 items-center rounded-full bg-green px-1">
          <span className="size-6 rounded-full bg-white" />
        </span>
        <span>{t("billing.annually")}</span>
      </div>
    </div>
  );
}

