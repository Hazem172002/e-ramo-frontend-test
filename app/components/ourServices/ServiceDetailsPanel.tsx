import Image from "next/image";
import {getTranslations} from "next-intl/server";
import {Button} from "@/components/ui/button";

export default async function ServiceDetailsPanel() {
  const t = await getTranslations("OurServicesSection");

  return (
    <div className="rounded-[24px] bg-[#FDF8F2] p-5 md:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h3 className="text-5xl font-bold leading-[1.05] text-write-main md:text-7xl">
            {t("selected.title")}
          </h3>
          <p className="mt-2 text-4xl text-write-main/95">
            {t("selected.subtitle")}
          </p>

          <p className="mt-6 max-w-[560px] text-[17px] leading-7 text-write-main">
            {t("selected.description")}
          </p>

          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3 text-[16px] text-write-main/85">
              <span className="mt-2 size-2 rounded-full bg-[#B49D97]" />
              <span>{t("selected.bullets.one")}</span>
            </li>
            <li className="flex items-start gap-3 text-[16px] text-write-main/85">
              <span className="mt-2 size-2 rounded-full bg-[#B49D97]" />
              <span>{t("selected.bullets.two")}</span>
            </li>
            <li className="flex items-start gap-3 text-[16px] text-write-main/85">
              <span className="mt-2 size-2 rounded-full bg-[#B49D97]" />
              <span>{t("selected.bullets.three")}</span>
            </li>
            <li className="flex items-start gap-3 text-[16px] text-write-main/85">
              <span className="mt-2 size-2 rounded-full bg-[#B49D97]" />
              <span>{t("selected.bullets.four")}</span>
            </li>
          </ul>

          <div className="mt-7 border-t border-[#ddd9d7] pt-5 text-[17px] text-write-main">
            <p className="inline-flex items-center gap-2">
              <Image src="/priceIcon.svg" alt="" width={16} height={16} />
              {t("selected.priceLabel")}{" "}
              <span className="font-semibold">{t("selected.priceValue")}</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="h-12 rounded-main bg-green px-10 text-white hover:bg-green/90">
              {t("selected.actions.bookNow")}
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-main border-green/30 bg-transparent px-10 text-green hover:bg-off-white hover:text-green"
            >
              {t("selected.actions.learnMore")}
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[20px] md:h-[520px]">
          <Image
            src="/ourServiceImage.png"
            alt={t("selected.imageAlt")}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
