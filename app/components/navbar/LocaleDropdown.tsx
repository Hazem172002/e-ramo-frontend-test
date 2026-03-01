'use client';

import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function LocaleDropdown() {
  const locale = useLocale();
  const pathname = usePathname() ?? "/";
  const t = useTranslations("Navbar");
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setIsLocaleOpen((prev) => !prev)}
        className="px-0 text-sm font-medium text-write-main hover:bg-transparent hover:text-write-main"
        aria-label={t("toggleLocaleMenu")}
      >
        {locale === "ar" ? t("switchToArabic") : t("switchToEnglish")}
        <span className="text-xs">{locale === "ar" ? "🇸🇦" : "🇺🇸"}</span>
        <span className={`text-[10px] transition-transform ${isLocaleOpen ? "rotate-180" : ""}`}>▼</span>
      </Button>

      {isLocaleOpen && (
        <div className="absolute end-0 top-8 z-30 min-w-28 rounded-main border border-sub-write/20 bg-white p-1 shadow-lg">
          <Link
            href={pathname}
            locale="ar"
            onClick={() => setIsLocaleOpen(false)}
            className={`block rounded-main px-3 py-2 text-sm ${
              locale === "ar" ? "bg-off-white font-semibold text-green" : "text-write-main hover:bg-off-white"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <span>العربية</span>
              <span className="text-xs">🇸🇦</span>
            </span>
          </Link>
          <Link
            href={pathname}
            locale="en"
            onClick={() => setIsLocaleOpen(false)}
            className={`block rounded-main px-3 py-2 text-sm ${
              locale === "en" ? "bg-off-white font-semibold text-green" : "text-write-main hover:bg-off-white"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <span>English</span>
              <span className="text-xs">🇺🇸</span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

