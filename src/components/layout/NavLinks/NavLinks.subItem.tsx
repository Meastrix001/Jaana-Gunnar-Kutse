import { Route } from "@/models/Routes"
import { useLanguageStore } from "@/store/appStore"
import { getNestedValue } from "@/utils/getNestedValues"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { ChevronDownIcon, Flex, HoverCard, Text } from "@radix-ui/themes"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const NavLinksSubItem = ({ route, index, onClick }: { route: Route, index: number, onClick: (() => void) | undefined }) => {
    const pathname = usePathname();
    const language = useLanguageStore((s) => s.language)

    if (!route.subLinks || route.subLinks.length === 0) {
        return
    }

    return <HoverCard.Root key={""}>
        <HoverCard.Trigger>
            <Flex align={"center"} gap={"2"}>
                <Link
                    key={index}
                    href={route.path}
                    title={route.label}
                    onClick={onClick}

                >
                    <Text
                        as="p"
                        style={{
                            color: "black",
                            borderBottom:
                                pathname?.replaceAll("/", "").replaceAll("/et/", "").replaceAll("/en/", "") ===
                                    route.path.replaceAll("/", "").replaceAll("/et/", "").replaceAll("/en/", "")
                                    ? "2px solid var(--accent-a9)"
                                    : "",
                        }}
                        size="5"
                    >

                        {getNestedValue(LanguageKeys[language], route.label) || ""}

                    </Text>
                </Link>
                <ChevronDownIcon width={14} height={14} />
            </Flex>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="300px" align="center">
            <Flex direction={"column"} gap={"4"}>
                {route.subLinks.map((subRoute) => {
                    return <Link
                        key={index}
                        href={subRoute.path}
                        title={subRoute.label}
                        onClick={onClick}>
                        <Text
                            as="p"
                            size="5"
                            style={{
                                color: "black",
                            }}
                        >
                            {getNestedValue(LanguageKeys[language], subRoute.label) || ""}
                        </Text>
                    </Link>
                })}
            </Flex>
        </HoverCard.Content>
    </HoverCard.Root>
}