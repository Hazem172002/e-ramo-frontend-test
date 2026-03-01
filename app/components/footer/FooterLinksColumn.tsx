'use client';

import { Link } from "@/i18n/navigation";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterLinksColumnProps {
    title: string;
    links: FooterLink[];
}

export default function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
    return (
        <div className="flex flex-col gap-6 items-center md:items-start w-full">
            <h3 className="text-[20px] font-bold text-green">{title}</h3>
            <ul className="flex flex-col gap-4 items-center md:items-start w-full">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="text-sub-write hover:text-green transition-colors flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 bg-[#7C9A82] rounded-full shrink-0" />
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
