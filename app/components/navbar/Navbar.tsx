'use client';

import {useTranslations} from "next-intl";
import {useState} from "react";
import {Link, usePathname} from "@/i18n/navigation";
import MobileMenuPanel, {type NavItem} from "./MobileMenuPanel";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import LocaleDropdown from "./LocaleDropdown";
import Image from "next/image";

const navItems: NavItem[] = [
  {key: "home", href: "/"},
  {key: "about", href: "/about"},
  {key: "products", href: "/products"},
  {key: "howItWorks", href: "/how-it-works"},
  {key: "contactUs", href: "/contact"},
  {key: "membership", href: "/membership"}
];

function Navbar() {
  const pathname = usePathname() ?? "";
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="w-full pt-[20px] pb-[27px]">
      <nav className=" flex  w-full  items-center justify-between px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
      
            <div className="hidden sm:block">
            <Image src={'/logoChair.svg'} width={67} height={59} alt="logo" />
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-[48px] xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`text-[16px] transition-colors ${
                    active ? " font-extrabold text-green" : "text-sub-write hover:text-write-main"
                  }`}
                >
                  {t(`links.${item.key}`)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-[12px] lg:flex">
          <LocaleDropdown />
          <button className="rounded-[8px] bg-green px-[17px] h-[48px] text-[13px] font-semibold text-white hover:bg-green/90">
            {t("createAccount")}
          </button>
          <button className="rounded-[8px] bg-white border-green border-[1px]  px-[35px] h-[48px] text-[13px] font-semibold text-green flex items-center gap-[2px]">
            <Image src={'/userIcon.svg'} width={20} height={20} alt="user" />

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
