'use client';

import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
      <h1 className="text-4xl font-bold text-write-main">{t("title")}</h1>
  );
}

