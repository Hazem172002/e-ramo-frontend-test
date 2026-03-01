'use client';

import {useLocale, useTranslations} from "next-intl";
import {useState} from "react";
import {Link, usePathname} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";
import MobileMenuPanel, {type NavItem} from "./MobileMenuPanel";
import MobileMenuToggleButton from "./MobileMenuToggleButton";

const navItems: NavItem[] = [
  {key: "home", href: "/"},
  {key: "about", href: "/about"},
  {key: "products", href: "/products"},
  {key: "howItWorks", href: "/how-it-works"},
  {key: "contactUs", href: "/contact"},
  {key: "membership", href: "/membership"}
];

function Navbar() {
  const locale = useLocale();
  const pathname = usePathname() ?? "";
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="w-full">
      <nav className="mx-auto flex h-20 w-full  items-center justify-between px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sub-write/40 bg-white">
              <span className="text-sm font-semibold text-green">DL</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold tracking-[0.12em] text-write-main">DIAR LOCATION</p>
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    active ? "font-semibold text-green" : "text-sub-write hover:text-write-main"
                  }`}
                >
                  {t(`links.${item.key}`)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
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
          <Button className="rounded-main bg-green px-5 py-3 text-sm font-semibold text-white hover:bg-green/90">
            {t("createAccount")}
          </Button>
          <Button variant="outline" className="rounded-main border-green/30 bg-white px-5 py-3 text-sm font-semibold text-write-main hover:bg-off-white hover:text-write-main">
            {t("login")}
          </Button>
        </div>

        <MobileMenuToggleButton isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      </nav>

      <MobileMenuPanel
        isOpen={isOpen}
        pathname={pathname}
        navItems={navItems}
        onNavigate={() => setIsOpen(false)}
      />
    </header>
  );
}

export default Navbar;
