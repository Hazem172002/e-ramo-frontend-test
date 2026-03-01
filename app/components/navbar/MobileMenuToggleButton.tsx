'use client';

import {useTranslations} from "next-intl";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function MobileMenuToggleButton({isOpen, onToggle}: Props) {
  const t = useTranslations("Navbar");

  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sub-write/30 bg-white text-write-main lg:hidden"
      onClick={onToggle}
      aria-label={t("toggleMenu")}
    >
      <span className="text-lg">{isOpen ? "×" : "☰"}</span>
    </button>
  );
}

