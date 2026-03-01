import Image from "next/image";

type AboutImageStackProps = {
  imageAlt: string;
};

const imageRows = [
  {key: "top", src: "/firstAboutImage.jpg"},
  {key: "middle", src: "/secoundAboutImage.jpg"},
  {key: "bottom", src: "/thirdAboutImage.jpg"}
] as const;

export default function AboutImageStack({imageAlt}: AboutImageStackProps) {
  return (
    <div className="space-y-4">
      {imageRows.map((row) => (
        <div key={row.key} className="relative h-[195px] overflow-hidden rounded-main">
          <Image
            src={row.src}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
