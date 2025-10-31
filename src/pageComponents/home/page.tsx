
"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Box, Flex, Heading } from "@radix-ui/themes";
import React, { useState } from "react";

export const HomePage = ({ slug }: { slug: string }) => {
    // const { slug } = useParams()


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
                        <label className={`book__page book__page--2 ${open ? "open" : ""}`} >
                            <Flex position={"relative"} className="book__page-front" justify={"between"} >
                                <Flex position={"absolute"} top={{ initial: "19%", lg: "16.8%" }} width={{ initial: "61%", lg: "80%" }} left={"40%"} className="page__content" height={"100%"}>
                                    <Heading style={{ color: "#c18e39", width: "100%" }} wrap={"wrap"} as="h1" weight={"light"}  >{slug}</Heading>
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
