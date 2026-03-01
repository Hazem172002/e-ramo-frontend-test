'use client';

import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface FooterAppDownloadProps {
    title: string;
}

export default function FooterAppDownload({ title }: FooterAppDownloadProps) {
    return (
        <div className="flex flex-col gap-6 items-center md:items-start">
            <h3 className="text-[20px] font-bold text-green max-w-[250px]">{title}</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
                <Link href="#" className="w-[170px] h-[50px] relative hover:opacity-90 transition-opacity">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        fill
                        alt="Get it on Google Play"
                        className="object-contain"
                    />
                </Link>
                <Link href="#" className="w-[170px] h-[50px] relative hover:opacity-90 transition-opacity">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        fill
                        alt="Download on the App Store"
                        className="object-contain"
                    />
                </Link>
            </div>
        </div>
    );
}
