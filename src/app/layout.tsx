import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Footer } from "@/components";
import I18nProvider from "@/providers/I18nProvider";
import { brand } from "@/theme/brand.config";
import { BuildSiteMap } from "@/utils/sitemap/sitemap.builder";
import { SiteHead } from "@/providers/headLinks";
import { theme } from "@/constants/theme"
// import { Disclaimer } from "@/components/disclaimer/Disclaimer";

BuildSiteMap()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang={brand.defaultLanguage}>
      <SiteHead />
      <body>
        <I18nProvider>
          <Theme {...theme}>
            <Box>
              <Flex direction="column" minHeight="100vh">
                {/* <Navbar /> */}

                <Box flexGrow="1">{children}
                  {/* <Disclaimer /> */}
                  <SpeedInsights />
                  <Analytics />
                </Box>


                <Footer />
              </Flex>
            </Box>
          </Theme>
        </I18nProvider>
      </body>
    </html >
  );
}


