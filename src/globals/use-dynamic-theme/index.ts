import { useLayoutEffect, useMemo } from "react";
import { useTheme } from "../theme";

const THEME_SCHEMA_REPLACE = "{{schema}}";
const BASE_THEME_URL = `https://unpkg.com/primereact@9.0.0/resources/themes/mdc-${THEME_SCHEMA_REPLACE}-indigo/theme.css`;

const DYNAMIC_THEME_KEY = "dynamicTheme";

export const useDynamicTheme = () => {
  const { isDark } = useTheme();

  const themeUrl = useMemo(
    () =>
      BASE_THEME_URL.replace(THEME_SCHEMA_REPLACE, isDark ? "dark" : "light"),
    [isDark]
  );

  useLayoutEffect(() => {
    let dynamicThemeTag: HTMLLinkElement | undefined;

    document.head.querySelectorAll("link").forEach((element) => {
      if (element.getAttribute(DYNAMIC_THEME_KEY) === "true") {
        if (dynamicThemeTag) document.removeChild(element);
        else dynamicThemeTag = element;
      }
    });

    if (!dynamicThemeTag) {
      dynamicThemeTag = document.createElement("link");
      dynamicThemeTag.setAttribute(DYNAMIC_THEME_KEY, "true");
      document.head.appendChild(dynamicThemeTag);
    }

    dynamicThemeTag.rel = "stylesheet";
    dynamicThemeTag.href = themeUrl;
  }, [themeUrl]);
};
