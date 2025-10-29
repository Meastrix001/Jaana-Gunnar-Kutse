"use client";

import { useLanguageStore } from "@/store/appStore";
import { Button, Flex, Spinner } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const language = useLanguageStore((s) => s.language)
  const setLanguage = useLanguageStore((s) => s.setLanguage)
  const [hydrated, setHydrated] = useState(false)

  const languages = [{
    key: "English",
    val: "en"
  },
  {
    key: "Eesti",
    val: "et"
  }
  ]

  const handleLanguageChange = async (lang: 'en' | 'et') => {
    if (typeof window === "undefined") return;

    let currentPath = window.location.pathname;
    setLanguage(lang)
    if (lang === "et" && window.location.pathname === "/") {
      return
    }
    if (lang === "en" && window.location.pathname === "/en") {
      return
    }

    if (window.location.pathname === "/et") {
      router.push(`/${lang}/`);
    }

    if (window.location.pathname === "/en" || window.location.pathname === "") {
      router.push(`/`);
    }

    else {
      currentPath = currentPath.replace("/et/", ``);
      currentPath = currentPath.replace("/en/", ``);

      currentPath = `/${lang}/${currentPath}/`;

      router.push(currentPath);

    }
  };


  // Wait until Zustand rehydrates from localStorage
  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return <Spinner />

  return (
    <Flex justify={{ initial: "center", lg: "end" }} gap="4">
      {languages.map((langObj) => {

        return <Button
          key={""}
          className="cursor"
          size="3"
          variant={"solid"}
          color={language === langObj.val ? "green" : "gold"}

          onClick={() => handleLanguageChange(langObj.val as "et")}
        >
          {langObj.key}
        </Button>
      })}
    </Flex>
  );
}
