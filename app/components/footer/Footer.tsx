import { useTranslations } from "next-intl";
import FooterLogo from "./FooterLogo";
import FooterLinksColumn from "./FooterLinksColumn";
import FooterAppDownload from "./FooterAppDownload";
import FooterBottom from "./FooterBottom";

export default function Footer() {
    const t = useTranslations("Footer");

    const mainPagesLinks = [
        { label: t("mainPages.home"), href: "/" },
        { label: t("mainPages.about"), href: "/about" },
        { label: t("mainPages.howItWorks"), href: "/how-it-works" },
        { label: t("mainPages.contactUs"), href: "/contact" },
        { label: t("mainPages.membership"), href: "/membership" },
    ];

    const productsLinks = [
        { label: t("products.sharedSpace"), href: "/shared-space" },
        { label: t("products.privateOffices"), href: "/private-offices" },
        { label: t("products.meetingRooms"), href: "/meeting-rooms" },
        { label: t("products.virtualOffices"), href: "/virtual-offices" },
    ];

    return (
        <footer className="w-full bg-light-gray pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left">
                    {/* Logo and Social Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <FooterLogo />
                    </div>

                    {/* Main Pages Section */}
                    <div className="flex flex-col items-center md:items-start lg:pl-8">
                        <FooterLinksColumn
                            title={t("mainPages.title")}
                            links={mainPagesLinks}
                        />
                    </div>

                    {/* Products Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <FooterLinksColumn
                            title={t("products.title")}
                            links={productsLinks}
                        />
                    </div>

                    {/* App Download Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <FooterAppDownload title={t("downloadApp.title")} />
                    </div>
                </div>

                {/* Bottom Section */}
                <FooterBottom
                    privacyText={t("bottom.privacy")}
                    termsText={t("bottom.terms")}
                    copyrightText={t("bottom.copyright")}
                />
            </div>
        </footer>
    );
}
