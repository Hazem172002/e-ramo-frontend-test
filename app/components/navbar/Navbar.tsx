'use client';

import {useLocale, useTranslations} from "next-intl";
import {useState} from "react";
import {Link, usePathname} from "@/i18n/navigation";
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
          <Link href={pathname} locale={locale === "ar" ? "en" : "ar"}>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-write-main">
              {locale === "ar" ? t("switchToEnglish") : t("switchToArabic")} <span className="text-xs">🌐</span>
            </span>
          </Link>
          <button className="rounded-[8px] bg-green px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            {t("createAccount")}
          </button>
          <button className="rounded-[8px] border border-green/30 bg-white px-5 py-3 text-sm font-semibold text-write-main transition-colors hover:bg-off-white">
            {t("login")}
          </button>
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
