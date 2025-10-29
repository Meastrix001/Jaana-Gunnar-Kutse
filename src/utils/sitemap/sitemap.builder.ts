import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { brand } from '@/theme/brand.config';
import { siteRoutesEn } from '@/routes/siteRoutes.en';

export const BuildSiteMap = () => {
    // Your live site domain
    const SITE_URL = brand.company.site;



    // @ts-expect-error ignore
    function flattenRoutes(routes) {
        const paths: string[] = [];
        for (const key in routes) {
            if (routes[key]?.path) {
                paths.push(routes[key].path);
            }
            // // recursively check nested objects (like siteRoutes.nav)
            // if (typeof routes[key] === "object" && !routes[key].path) {
            //     paths.push(...flattenRoutes(routes[key]));
            // }
        }
        return paths;
    }

    async function generateSitemap() {
        const sitemap = new SitemapStream({ hostname: SITE_URL });

        const routesEn = flattenRoutes(siteRoutesEn);

        routesEn.forEach((path) => {
            sitemap.write({
                url: path,
                changefreq: "monthly",
                priority: path === "/" ? 1.0 : 0.8,
                lastmod: new Date().toISOString().split("T")[0], // YYYY-MM-DD
            });
        });


        const routesEst = flattenRoutes(siteRoutesEn);

        routesEst.forEach((path) => {
            sitemap.write({
                url: path,
                changefreq: "monthly",
                priority: path === "/" ? 1.0 : 0.8,
                lastmod: new Date().toISOString().split("T")[0], // YYYY-MM-DD
            });

        });

        sitemap.end();

        const xml = await streamToPromise(sitemap);
        createWriteStream("./public/sitemap.xml").write(xml);
        console.log("✅ Sitemap generated at /public/sitemap.xml");
    }

    generateSitemap().catch(console.error);
}