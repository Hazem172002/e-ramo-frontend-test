import Image from "next/image";

type HowItWorksCardProps = {
  stepNumber: string;
  stepTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HowItWorksCard({
  stepNumber,
  stepTitle,
  description,
  imageSrc,
  imageAlt
}: HowItWorksCardProps) {
  return (
    <article className="rounded-[18px] p-4">
      <h3 className="inline-flex items-center gap-3 text-[22px] font-semibold text-write-main">
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#dcc6a5] text-[18px] font-medium text-green">
          {stepNumber}
        </span>
        <span>{stepTitle}</span>
      </h3>

      <div className="relative mt-4 h-[250px] overflow-hidden rounded-main xl:h-[358px]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      <p className="mt-5 max-w-[340px] text-[14px] leading-[1.6] text-write-main">
        {description}
      </p>
    </article>
  );
}
