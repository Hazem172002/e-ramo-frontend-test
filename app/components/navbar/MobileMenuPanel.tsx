'use client';

import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export type NavItem = {
  key: string;
  href: string;
};

type Props = {
  isOpen: boolean;
  pathname: string;
  navItems: NavItem[];
  onNavigate: () => void;
};

export default function MobileMenuPanel({
  isOpen,
  pathname,
  navItems,
  onNavigate
}: Props) {
  const t = useTranslations("Navbar");

  if (!isOpen) return null;

  return (
    <div className="border-t border-black/10 bg-light-gray px-4 py-4 lg:hidden">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`block text-sm ${active ? "font-semibold text-green" : "text-sub-write"}`}
              >
                {t(`links.${item.key}`)}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex flex-col gap-2">
        <button className="rounded-md bg-green px-5 py-3 text-sm font-semibold text-white">{t("createAccount")}</button>
        <button className="rounded-md border border-green/30 bg-white px-5 py-3 text-sm font-semibold text-write-main">
          {t("login")}
        </button>
      </div>
    </div>
  );
}
