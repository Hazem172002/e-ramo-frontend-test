'use client';

import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";

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
    <div className="border-t mt-1 border-black/10 bg-light-gray px-4 py-4 lg:hidden">
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
        <Button className="rounded-main bg-green text-white hover:bg-green/90">{t("createAccount")}</Button>
        <Button variant="outline" className="rounded-main border-green/30 bg-white text-write-main hover:bg-off-white hover:text-write-main">
          {t("login")}
        </Button>
      </div>
    </div>
  );
}
