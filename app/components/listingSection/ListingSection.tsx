import {getTranslations} from "next-intl/server";
import ListingCard from "./ListingCard";

export default async function ListingSection() {
  const t = await getTranslations("ListingSection");

  const items = [
    {
      key: "one",
      available: true,
      open: true
    },
    {
      key: "two",
      available: false,
      open: false
    },
    {
      key: "three",
      available: true,
      open: false
    },
    {
      key: "four",
      available: true,
      open: false
    }
  ] as const;

  return (
    <section className=" xl:px-[10px] px-[5px] pt-[43px]">
      <div className="mb-7 text-center">
        <h2 className="text-4xl font-bold text-write-main md:text-6xl">{t("title")}</h2>
        <p className="mt-2 text-xl text-write-main">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <ListingCard
            key={item.key}
            imageAlt={t("imageAlt")}
            category={t(`cards.${item.key}.category`)}
            ratingText={t("rating")}
            title={t("cardTitle")}
            description={t("description")}
            pricePer={t("pricePer")}
            statusText={item.open ? t("status.open") : t("status.closed")}
            startsFrom={t("startsFrom")}
            availabilityText={item.available ? t("availability.available") : t("availability.notAvailable")}
            available={item.available}
            open={item.open}
          />
        ))}
      </div>
    </section>
  );
}
