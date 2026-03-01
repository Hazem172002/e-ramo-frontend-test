'use client';

import { Link } from "@/i18n/navigation";

interface FooterBottomProps {
    privacyText: string;
    termsText: string;
    copyrightText: string;
}

export default function FooterBottom({ privacyText, termsText, copyrightText }: FooterBottomProps) {
    return (
        <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                    <Link href="/privacy" className="text-sub-write hover:text-green transition-colors text-[14px]">
                        {privacyText}
                    </Link>
                    <Link href="/terms" className="text-sub-write hover:text-green transition-colors text-[14px]">
                        {termsText}
                    </Link>
                </div>
                <p className="text-sub-write text-[14px] text-center md:text-right">
                    {copyrightText}
                </p>
            </div>
        </div>
    );
}
