
"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export const HomePage = () => {
    const { slug } = useParams()

    const sterilizedSlug = (slug as string).replaceAll("%20", " ").replaceAll("%26", "&")

    const [open, setOpen] = useState<boolean>(false)

    return (
        <Flex align={"center"} justify={"center"} width={"100vw"} height={"100vh"}>
            <InViewWrapper>
                <Box className={`cover ${open ? "open" : ""}`}>
                    <Box className="book">
                        <label htmlFor="page-1" className="book__page book__page--1" />
                        <label htmlFor="page-2" className="book__page book__page--4">
                            <Box />
                        </label>

                        {/* <!-- Resets the page --> */}
                        <input type="radio" name="page" id="page-1" onClick={() => setOpen(false)} />

                        {/* <!-- Goes to the second page --> */}
                        <input type="radio" name="page" id="page-2" onClick={() => setOpen(true)} />
                        <label className="book__page book__page--2" >
                            <Flex direction={"column"} align={"center"} className="book__page-front" justify={"between"} >
                                <Flex align={"center"} justify={"center"} direction={"column"} className="page__content" height={"100%"}>
                                    <Heading as="h1" size={{ initial: "2", lg: "9" }} >{sterilizedSlug}</Heading>
                                </Flex>
                            </Flex>

                            <Box className="book__page-back" />
                        </label>
                    </Box>
                </Box>
            </InViewWrapper>
        </Flex>
    );
}
