import { useLocation } from "react-router-dom";

export function useLang() {
  const { pathname } = useLocation();
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function withLang(path, lang) {
  if (lang !== "ar") return path;
  return path === "/" ? "/ar" : "/ar" + path;
}

export function toggleLangPath(pathname) {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    const rest = pathname.slice(3);
    return rest || "/";
  }
  return pathname === "/" ? "/ar" : "/ar" + pathname;
}
