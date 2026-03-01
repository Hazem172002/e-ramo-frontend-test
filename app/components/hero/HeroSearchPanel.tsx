import Image from "next/image";
import {Button} from "@/components/ui/button";
import {getTranslations} from "next-intl/server";

const spaceTypes = [
  {key: "sharedSpace", icon: "/sharedSpace.svg"},
  {key: "privateOffices", icon: "/privateOffices.svg"},
  {key: "meetingRooms", icon: "/meetingRooms.svg"},
  {key: "virtualOffices", icon: "/virualOffices.svg"}
] as const;

export default async function HeroSearchPanel() {
  const t = await getTranslations("HeroSection");

  const spaces = {
    sharedSpace: t("spaces.sharedSpace"),
    privateOffices: t("spaces.privateOffices"),
    meetingRooms: t("spaces.meetingRooms"),
    virtualOffices: t("spaces.virtualOffices")
  };

  return (
    <div className="relative z-20 mx-3 -mt-8 rounded-[37px] bg-[#f4f4f3]  shadow-xl md:mx-20 md:-mt-28 pt-[30px]">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 xl:px-[86px] px-[20px]">
        {spaceTypes.map((item) => {
          const isActive = item.key === "meetingRooms";
          return (
            <Button
              key={item.key}
              type="button"
              variant="ghost"
              className={`inline-flex items-center justify-center gap-2 rounded-main  px-3 py-2 text-sm ${
                isActive
                  ? "border-b-green border-b-[0.5px] bg-[#FAFFF7] font-medium text-write-main shadow-[0_1px_0_0_rgba(54,83,39,0.35)] hover:bg-[#edf4ea]"
                  : "border-transparent border bg-[#F7F8F9] text-sub-write hover:bg-[#e6e6e6]"
              }`}
            >
              <Image src={item.icon} alt={spaces[item.key]} width={16} height={16} />
              <span>{spaces[item.key]}</span>
            </Button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-[29px] rounded-main bg-[#efebe7] p-3 md:mt-6 md:flex-row md:items-center md:gap-4 md:p-5 xl:px-[86px] px-[20px] xl:pb-[32px]">
        <div className="flex flex-1 items-center justify-between gap-3 rounded-main bg-white px-4 py-3">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <Image src="/searchIcon.svg" alt="search" width={16} height={16} />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full border-none bg-transparent xl:h-[35px] text-sm text-write-main outline-none placeholder:text-sub-write"
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            className="h-auto shrink-0 p-0 text-sm font-medium text-write-main hover:bg-transparent"
          >
            <Image src="/location.svg" alt="location" width={16} height={16} />
            {t("searchNearby")}
          </Button>
        </div>
        <Button className="h-12 min-w-36 xl:w-[209px] xl:h-[60px]  text-[20px] rounded-main font-medium rounded-main bg-green text-white hover:bg-green/90">
          {t("search")}
        </Button>
      </div>
    </div>
  );
}
