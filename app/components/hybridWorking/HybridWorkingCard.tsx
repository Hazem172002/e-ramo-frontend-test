import Image from "next/image";

type HybridWorkingCardProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function HybridWorkingCard({
  imageSrc,
  imageAlt
}: HybridWorkingCardProps) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[24px] md:h-[320px]">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
}

