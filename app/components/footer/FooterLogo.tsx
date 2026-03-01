'use client';

import Image from "next/image";
import { Facebook, Youtube, Linkedin, Twitter } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function FooterLogo() {
    return (
        <div className="flex flex-col gap-6 items-center md:items-start">
            <Link href="/">
                <Image src="/logoChair.svg" width={126} height={110} alt="Chair Location Logo" className="w-[126px] h-[110px]" />
            </Link>
            <div className="grid grid-cols-2 lg:flex gap-4">
                <Link href="#" className="p-2 bg-white rounded-full text-green shadow-sm hover:bg-green hover:text-white transition-colors">
                    <Facebook size={20} />
                </Link>
                <Link href="#" className="p-2 bg-white rounded-full text-green shadow-sm hover:bg-green hover:text-white transition-colors">
                    <Youtube size={20} />
                </Link>
                <Link href="#" className="p-2 bg-white rounded-full text-green shadow-sm hover:bg-green hover:text-white transition-colors">
                    <Linkedin size={20} />
                </Link>
                <Link href="#" className="p-2 bg-white rounded-full text-green shadow-sm hover:bg-green hover:text-white transition-colors">
                    <Twitter size={20} />
                </Link>
            </div>
        </div>
    );
}
