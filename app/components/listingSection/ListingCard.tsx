import Image from "next/image";

type ListingCardProps = {
  imageAlt: string;
  category: string;
  ratingText: string;
  title: string;
  description: string;
  pricePer: string;
  statusText: string;
  startsFrom: string;
  availabilityText: string;
  available: boolean;
  open: boolean;
};

export default function ListingCard({
  imageAlt,
  category,
  ratingText,
  title,
  description,
  pricePer,
  statusText,
  startsFrom,
  availabilityText,
  available,
  open
}: ListingCardProps) {
  return (
    <article className="overflow-hidden rounded-[16px]  border-[2px] border-[#EFF0F6] shadow-[0_2px_8px_rgba(22,29,26,0.05)]">
      <div className="relative m-2 h-[188px] overflow-hidden rounded-[10px]">
        <Image src="/modernOfficeImage.png" alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/45" />

        <div
          className={`absolute -left-9 top-4 w-32 -rotate-45 py-1 text-center text-[11px] font-medium text-white ${
            available ? "bg-green/80" : "bg-[#c56363]"
          }`}
        >
          {availabilityText}
        </div>

        <div className="absolute right-2 top-2 flex items-center gap-2">
          <span className="inline-flex size-7 items-center justify-center rounded-full border border-[#d9ded7] bg-white text-xs text-write-main">
            <Image src="/shareIcon.svg" alt="share" width={14} height={14} />
          </span>
          <span className="inline-flex size-7 items-center justify-center rounded-full border border-[#d9ded7] bg-white text-xs text-red-500">
            <Image src="/heartIcon.svg" alt="favorite" width={14} height={14} />
          </span>
        </div>
      </div>

      <div className="px-4 pb-3 pt-1.5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-md bg-[#e6e9df] px-2.5 py-1 text-xs text-write-main">{category}</span>
          <span className="text-xs text-write-main/90">
            <span className="text-yellow-500">★</span> {ratingText}
          </span>
        </div>

        <h3 className="text-[20px] font-semibold leading-[1.2] tracking-tight text-write-main">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-sub-write">{description}</p>

        <div className="mt-6 space-y-2 text-[14px] flex flex-col text-write-main">
          <p className="inline-flex items-center gap-2 text-write-main/80">
            <Image src="/perIcon.svg" alt="" width={14} height={14} />
            {pricePer}
          </p>
          <p className={`inline-flex items-center gap-2 ${open ? "text-write-main/80" : "text-[#d66262]"}`}>
            <Image src={open ? "/openIcon.svg" : "/closedIcon.svg"} alt="" width={14} height={14} />
            {statusText}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#d8dcde] pt-4 text-[14px] text-sub-write">
          <p>
            {startsFrom} <span className="font-semibold text-write-main">20SAR</span> /HOUR
          </p>
          <span className="inline-flex size-[32px] p-2 items-center justify-center rounded-full bg-[#F8FFF3]">
            <Image src="/arrowIcon.svg" alt="" width={14} height={7} />
          </span>
        </div>
      </div>
    </article>
  );
}
