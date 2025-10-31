import { ThemeProps } from "@radix-ui/themes";

export const brand = {
  defaultLanguage: "en",
  company: {
    site: "https://jaana-gunnar-kutse.vercel.app/",
    name: "Company name",
    logo: {
      src: "/static/logos/logo_demo.jpg",
      alt: "Your Company Logo",
      width: 50,
      height: 50,
    },
    colorPrimary: "#eedec5",
    colorSecondary: "#f7b1b0"
  },

  theme: {
    appearance: "dark",
    accentColor: "blue",
    grayColor: "slate",
    panelBackground: "solid",
    scaling: "100%",
    radius: "none",
  } as ThemeProps,
};
