'use client';

import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function MobileMenuToggleButton({isOpen, onToggle}: Props) {
  const t = useTranslations("Navbar");

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className="border-sub-write/30 bg-white text-write-main hover:bg-off-white lg:hidden"
      onClick={onToggle}
      aria-label={t("toggleMenu")}
    >
      <span className="text-lg">{isOpen ? "×" : "☰"}</span>
    </Button>
  );
}
