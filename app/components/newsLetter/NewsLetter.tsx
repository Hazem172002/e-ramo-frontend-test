'use client'
import { useTranslations } from "next-intl";
import { Clock, LifeBuoy } from "lucide-react";

export default function NewsLetter() {
    const t = useTranslations("NewsLetter");

    return (
        <section className="relative w-full py-16 px-4 md:px-6  overflow-hidden rounded-xl my-12">
            {/* Floating Icons */}
            <div className="absolute left-[5%] top-[20%] opacity-20 md:opacity-100 transition-opacity">
                <div className="p-4 bg-[#F2EADA] rounded-2xl rotate-[-15deg]">
                    <Clock size={32} className="text-green" />
                </div>
            </div>

            <div className="absolute right-[5%] top-[20%] opacity-20 md:opacity-100 transition-opacity">
                <div className="p-4 bg-[#F2EADA] rounded-2xl rotate-[15deg]">
                    <LifeBuoy size={32} className="text-green" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[32px] md:text-[40px] font-bold text-write-main mb-4">
                    {t("title")}
                </h2>
                <p className="text-sub-write text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto">
                    {t("description")}
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder={t("inputPlaceholder")}
                        className="flex-1 px-6 h-[60px] rounded-lg bg-white border border-gray-200 outline-none focus:border-green transition-colors text-write-main"
                        required
                    />
                    <button
                        type="submit"
                        className="px-10 h-[60px] bg-green text-white font-semibold rounded-lg hover:bg-green/90 transition-colors whitespace-nowrap"
                    >
                        {t("subscribe")}
                    </button>
                </form>
            </div>
        </section>
    );
}
