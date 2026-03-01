import Image from "next/image";
import {getTranslations} from "next-intl/server";

const options = [
  {key: "sharedSpace", icon: "/sharedSpace.svg"},
  {key: "meetingRooms", icon: "/meetingRooms.svg"},
  {key: "privateOffices", icon: "/privateOffices.svg"},
  {key: "virtualOffices", icon: "/virualOffices.svg"}
] as const;

export default async function PricingSidebar() {
  const t = await getTranslations("PricingSection");

  return (
    <aside className="rounded-[18px] bg-[#f6f6f5] p-4 md:p-6">
      <h3 className="max-w-[230px] text-2xl font-semibold leading-[1.3] text-write-main">
        {t("sidebar.title")}
      </h3>

      <div className="mt-5 space-y-3">
        {options.map((option) => {
          const isActive = option.key === "meetingRooms";
          return (
            <button
              key={option.key}
              type="button"
              className={`flex h-12 w-full items-center gap-3 rounded-main px-4 text-left text-[14px] ${
                isActive
                  ? "bg-[#e8dbc9] font-medium text-write-main"
                  : "bg-[#eceeed] text-sub-write"
              }`}
            >
              <Image src={option.icon} alt="" width={14} height={14} />
              <span>{t(`sidebar.options.${option.key}`)}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 border-t border-[#e0e2e0] pt-6">
        <p className="text-2xl font-medium text-write-main">{t("sidebar.helpTitle")}</p>
        <p className="mt-2 text-[14px] text-sub-write">{t("sidebar.helpDescription")}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-[16px] font-medium text-write-main">{t("sidebar.available")}</p>
          <button type="button" className="text-[16px] font-medium text-green underline underline-offset-4">
            {t("sidebar.contactUs")}
          </button>
        </div>
      </div>
    </aside>
  );
}
