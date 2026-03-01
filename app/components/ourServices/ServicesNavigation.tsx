import Image from "next/image";
import {getTranslations} from "next-intl/server";

const navItems = [
  {key: "sharedSpace", icon: "/sharedSpace.svg"},
  {key: "privateOffices", icon: "/privateOffices.svg"},
  {key: "meetingRooms", icon: "/meetingRooms.svg"},
  {key: "virtualOffices", icon: "/virualOffices.svg"}
] as const;

export default async function ServicesNavigation() {
  const t = await getTranslations("OurServicesSection");

  return (
    <div className="mx-auto h-[92px] w-full max-w-[748px] rounded-full bg-green p-2">
      <div className="grid h-full grid-cols-2 items-center gap-2 md:grid-cols-4">
        {navItems.map((item) => {
          const isActive = item.key === "sharedSpace";

          return (
            <button
              key={item.key}
              type="button"
              className={`inline-flex self-center items-center justify-center gap-2 rounded-full px-3 text-sm ${
                isActive
                  ? "h-[52px] bg-white font-medium text-write-main"
                  : "h-full bg-green/60 text-white/90"
              }`}
            >
              <Image src={item.icon} alt="" width={14} height={14} />
              <span>{t(`nav.${item.key}`)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
