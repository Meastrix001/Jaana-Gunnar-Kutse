"use client";
import React, { useState } from "react";
import { Box, Button, Flex } from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavLinks } from "@/components";
import useViewportWidth from "@/hooks/useViewportWidth";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";

const Nav: React.FC = () => {
  const isMobile = useViewportWidth(768);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <Box className="navigation_mobile">
          <Flex justify="between" align="center">
            <Button variant="soft" onClick={toggleNav}>
              <HamburgerMenuIcon />
            </Button>
          </Flex>

          {isOpen && (
            <Box
              position="fixed"
              top={"0"}
              left={"0"}
              width={"100%"}
              inset="0"
              style={{ backgroundColor: "white" }}
            >
              <Flex direction="column" p="4" gap="5" height="100%">
                <Flex justify="end">
                  <Button variant="soft" onClick={toggleNav}>
                    <Cross1Icon />
                  </Button>
                </Flex>

                <Flex
                  direction="column"
                  gap="6"
                  align="center"
                  py="8"
                  height="100%"
                  justify="between"
                >
                  <Flex
                    direction="column"
                    gap="6"
                    align="center"
                    py="8"
                    height="100%"
                  >
                    <NavLinks onClick={toggleNav} />
                  </Flex>

                  <LanguageSwitcher />
                </Flex>
              </Flex>
            </Box>
          )}
        </Box>
      )}

      {!isMobile && (
        <Flex justify="end" align="center" gap="6">
          <NavLinks />
        </Flex>
      )}
    </>
  );
};

export default Nav;
