'use client'
import Image from "next/image";
import { useTranslations } from "next-intl";

export default  function ContactUs() {
  const t = useTranslations("ContactUsSection");

  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pb-12 pt-8 md:px-6 md:pb-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-write-main md:text-7xl">{t("title")}</h2>
        <p className="mt-3 text-[18px] text-write-main">{t("subtitle")}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[1.02fr_1.1fr]">
        <div className="relative grid grid-cols-[1fr_1fr] gap-4">
          <div className="flex flex-col gap-4">
            <div className="relative h-[290px] overflow-hidden rounded-main">
              <Image
                src="/contactUsLEftTopImage.png"
                alt={t("images.leftTopAlt")}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[190px] overflow-hidden rounded-main">
              <Image
                src="/contactUsBottomLeftImage.png"
                alt={t("images.leftBottomAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative h-[496px] overflow-hidden rounded-main">
            <Image
              src="/contactUsRightImage.jpg"
              alt={t("images.rightAlt")}
              fill
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute start-[41%] top-[50%] z-10 flex size-[96px] -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-[3px] md:size-[120px]" />
        </div>

        <div>
          <p className="text-[35px] font-medium text-write-main md:text-[38px]">
            {t("form.helperTitle")}
            <span className="text-[#cc3d3d]">*</span>
          </p>

          <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={t("form.placeholders.fullName")}
              className="h-[56px] w-full rounded-main border border-[#edf0ee] bg-white px-5 text-[18px] text-write-main outline-none transition-colors placeholder:text-[#9ea49f] focus:border-green"
            />
            <input
              type="email"
              placeholder={t("form.placeholders.email")}
              className="h-[56px] w-full rounded-main border border-[#edf0ee] bg-white px-5 text-[18px] text-write-main outline-none transition-colors placeholder:text-[#9ea49f] focus:border-green"
            />
            <input
              type="tel"
              placeholder={t("form.placeholders.phone")}
              className="h-[56px] w-full rounded-main border border-[#edf0ee] bg-white px-5 text-[18px] text-write-main outline-none transition-colors placeholder:text-[#9ea49f] focus:border-green"
            />
            <input
              type="text"
              placeholder={t("form.placeholders.city")}
              className="h-[56px] w-full rounded-main border border-[#edf0ee] bg-white px-5 text-[18px] text-write-main outline-none transition-colors placeholder:text-[#9ea49f] focus:border-green"
            />
            <textarea
              placeholder={t("form.placeholders.message")}
              className="h-[150px] w-full resize-none rounded-main border border-[#edf0ee] bg-white px-5 py-4 text-[18px] text-write-main outline-none transition-colors placeholder:text-[#9ea49f] focus:border-green"
            />

            <button
              type="submit"
              className="mx-auto block h-[56px] w-full rounded-main bg-green px-8 text-[30px] font-medium text-white transition-colors hover:bg-green/90 md:w-[320px]"
            >
              {t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
