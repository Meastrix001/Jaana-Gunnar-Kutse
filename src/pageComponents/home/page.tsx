
"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import React from "react";

export const HomePage = () => {
    const { slug } = useParams()

    const sterilizedSlug = (slug as string).replaceAll("%20", " ").replaceAll("%26", "&")
    return (
        <Flex align={"center"} justify={"center"} width={"100vw"} height={"100vh"}>
            <InViewWrapper>
                <Box className="cover">
                    <Box className="book">
                        <label htmlFor="page-1" className="book__page book__page--1">
                            <Box >
                                <Flex align={"center"} justify={"center"} direction={"column"} className="page__content" height={"100%"}>
                                    <Heading align={"center"} as="h1" size={{ initial: "2", lg: "9" }} >{sterilizedSlug}</Heading>
                                </Flex>
                            </Box>
                        </label>

                        <label htmlFor="page-2" className="book__page book__page--4">
                            <Box />
                        </label>

                        {/* <!-- Resets the page --> */}
                        <input type="radio" name="page" id="page-1" />

                        {/* <!-- Goes to the second page --> */}
                        <input type="radio" name="page" id="page-2" />
                        <label className="book__page book__page--2">
                            <Flex direction={"column"} align={"center"} className="book__page-front" justify={"between"}>
                                <Flex align={"center"} justify={"center"} direction={"column"} className="page__content" height={"100%"}>
                                    <Heading as="h2" size={{ initial: "2", lg: "9" }} >Invitation</Heading>
                                </Flex>
                                <Text>29/07/2025</Text>
                            </Flex>

                            <Box className="book__page-back" />
                        </label>
                    </Box>
                </Box>
            </InViewWrapper>
        </Flex>
    );
}
