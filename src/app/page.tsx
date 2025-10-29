import { Metadata } from "next";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { brand } from "@/theme/brand.config";
import { HomePage } from "@/pageComponents/home/page";

const pageLanguage = "en"


export default function LandingPageEn() {
  return <HomePage />
}


export const metadata: Metadata = {
  alternates: {
    canonical: `${brand.company.site}en/`,
    languages: {
      en: `${brand.company.site}en/`,
      et: `${brand.company.site}`,
    },
  },
  title: LanguageKeys[pageLanguage].SEO.landing.title,
  description: LanguageKeys[pageLanguage].SEO.landing.desc,
  openGraph: {
    title: LanguageKeys[pageLanguage].SEO.landing.title,
    description: LanguageKeys[pageLanguage].SEO.landing.desc,
    url: `${brand.company.site}en/`,
    siteName: brand.company.name,
    images: [
      {
        url: brand.company.logo.src,
        width: 1200,
        height: 630,
        alt: `${brand.company.name} hero image`,
      },
    ],
    type: "website",
  },
};
