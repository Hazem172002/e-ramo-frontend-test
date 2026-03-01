'use client';

import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen items-center justify-center bg-off-white px-6">
      <h1 className="text-4xl font-bold text-write-main">{t("title")}</h1>
    </main>
  );
}

