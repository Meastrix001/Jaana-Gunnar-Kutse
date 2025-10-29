"use client"
import React from "react";
import { Container, Box, Grid, Flex, Button } from "@radix-ui/themes";
import { Nav } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/theme/brand.config";
import { pageRoutes } from "@/routes/siteRoutes.est";
import { useLanguageStore } from "@/store/appStore";

const Navbar: React.FC = () => {
  const language = useLanguageStore((s) => s.language)

  return (
    <Box className="navigation" position={"fixed"} top={"0"} width={"100%"}>
      <Container py={{ initial: "3", lg: "3" }} px={{ initial: "4", lg: "0" }} >
        <Grid align="center" py={"5"} columns={{ initial: "3", lg: "6" }} gap="4">
          <Flex gridColumn={{ initial: "1 / 2", lg: "1 / 2" }} gridRow="1" align={"center"}>
            <Link href={language === "en" ? pageRoutes(language).home.path : pageRoutes(language as "et").home.path} title={brand.company.logo.alt}>
              <Image
                src={brand.company.logo.src}
                alt={brand.company.logo.alt}
                width={brand.company.logo.width}
                height={brand.company.logo.height}
              />
            </Link>
          </Flex>

          <Flex
            justify={{ initial: "end", lg: "center" }}
            gridColumn={{ initial: "2 / 4", lg: "2 / 6" }}
            gridRow="1"
          >
            <Nav />
          </Flex>

          <Box display={{ initial: "none", lg: "block" }}>
            <Link href={`/${language}/contact`} >
              <Button size={"3"} className="cursor" variant="outline">
                Contact us
              </Button>
            </Link>

          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
