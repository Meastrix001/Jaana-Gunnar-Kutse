"use client";
import { names } from "@/constants/names";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { useLanguageStore } from "@/store/appStore";
import { Button, Container, Flex, Heading, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { HomePage } from "../home/page";

export const SearchPage = () => {
    const [search, setSearch] = useState<string>("");

    const { setName, name } = useLanguageStore();
    const namesToShow = names.filter((name) =>
        name.trim().toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (name) {
        return <HomePage slug={name} />;
    }

    return (
        <Flex width={"100vw"} height={"100vh"}>
            <Container width={"100vw"} height={"100vh"}>
                <Flex
                    height={"100vh"}
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                    gap={"9"}
                >
                    <InViewWrapper>
                        <Heading as="h2" m={"0"} mb={"2"} size={"9"}>
                            Sinu nimi
                        </Heading>
                        <TextField.Root
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            radius="full"
                            size={"3"}
                            placeholder="Mis sinu nimi on"
                        ></TextField.Root>
                    </InViewWrapper>

                    <Flex wrap={"wrap"} gap={"2"} align={"center"} justify={"center"}>
                        {search &&
                            search.length > 2 &&
                            namesToShow.map((name) => {
                                return (
                                    <Button
                                        onClick={() => {
                                            setName(name);
                                        }}

                                        variant="soft"
                                        size={{ initial: "2", lg: "4" }}
                                        key={name}
                                    >
                                        {name}
                                    </Button>
                                );
                            })}
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};
