import Image from "next/image";

type AboutFeatureListProps = {
  items: string[];
};

const aboutIcons = [
  "/aboutLocation.svg",
  "/aboutOffer.svg",
  "/aboutSupport.svg"
] as const;

export default function AboutFeatureList({items}: AboutFeatureListProps) {
  return (
    <ul className="space-y-4 pb-[30px] xl:pb-[61px]">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-3 text-sm text-write-main">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#e7e4da]">
            <Image src={aboutIcons[index] ?? "/aboutLocation.svg"} alt="" width={14} height={14} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
