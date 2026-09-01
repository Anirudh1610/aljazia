import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useLang, withLang, toggleLangPath } from "../i18n/lang";
import { strings } from "../i18n/strings";
import logoFull from "../assets/logo-full.png";

const NAV_KEYS = [
  { path: "", key: "home", end: true },
  { path: "divisions", key: "divisions" },
  { path: "manpower", key: "manpower" },
  { path: "partners", key: "partners" },
  { path: "about", key: "about" },
  { path: "contact", key: "contact" },
];

const navLinkStyle = ({ isActive }) => ({
  fontSize: 13.5,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  textDecoration: "none",
  color: isActive ? "var(--color-accent-700)" : "inherit",
});

const mobileNavLinkStyle = ({ isActive }) => ({
  display: "block",
  padding: "14px 4px",
  fontSize: 15,
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  textDecoration: "none",
  borderBottom: "1px solid var(--color-divider)",
  color: isActive ? "var(--color-accent-700)" : "inherit",
});

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = useLang();
  const t = strings[lang].nav;
  const tFooter = strings[lang].footer;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const otherLangPath = toggleLangPath(pathname);
  const langLinkStyle = (active) => ({
    textDecoration: "none",
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: 12.5,
    letterSpacing: "0.04em",
    color: active ? "var(--color-accent-700)" : "inherit",
  });

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "color-mix(in srgb, var(--color-bg) 94%, transparent)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "14px clamp(16px, 5vw, 72px)",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Link
            to={withLang("/", lang)}
            style={{
              marginInlineEnd: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={logoFull} alt="Al-Jazia International" style={{ height: 46, width: "auto", flex: "none" }} />
            <span
              className="ajz-tagline"
              style={{
                fontSize: 11,
                lineHeight: 1,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              }}
            >
              {t.tagline}
            </span>
          </Link>
          <nav className="ajz-navlinks" style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {NAV_KEYS.map((link) => (
              <NavLink key={link.path} to={withLang("/" + link.path, lang)} end={link.end} style={navLinkStyle}>
                {t[link.key]}
              </NavLink>
            ))}
          </nav>
          <div className="ajz-lang-switch" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Link to={lang === "en" ? pathname : otherLangPath} style={langLinkStyle(lang === "en")}>
              EN
            </Link>
            <span style={{ color: "var(--color-divider)" }} aria-hidden="true">
              /
            </span>
            <Link to={lang === "ar" ? pathname : otherLangPath} style={langLinkStyle(lang === "ar")}>
              AR
            </Link>
          </div>
          <Link
            to={withLang("/contact", lang)}
            className="ajz-header-cta btn btn-primary"
            style={{ letterSpacing: "0.04em", whiteSpace: "nowrap" }}
          >
            {t.cta}
          </Link>
          <button
            type="button"
            className="ajz-menu-btn btn btn-secondary"
            aria-expanded={menuOpen}
            aria-controls="ajz-mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
            style={{ padding: 8, width: 36, height: 36 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {menuOpen ? (
                <path d="M4 4l10 10M14 4L4 14" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="ajz-mobile-nav"
            className="ajz-mobile-nav"
            style={{
              borderTop: "1px solid var(--color-divider)",
              padding: "4px clamp(16px, 5vw, 72px) 8px",
            }}
          >
            {NAV_KEYS.map((link) => (
              <NavLink
                key={link.path}
                to={withLang("/" + link.path, lang)}
                end={link.end}
                style={mobileNavLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                {t[link.key]}
              </NavLink>
            ))}
            <div style={{ display: "flex", gap: 14, padding: "14px 4px" }}>
              <Link
                to={lang === "en" ? pathname : otherLangPath}
                onClick={() => setMenuOpen(false)}
                style={langLinkStyle(lang === "en")}
              >
                EN
              </Link>
              <Link
                to={lang === "ar" ? pathname : otherLangPath}
                onClick={() => setMenuOpen(false)}
                style={langLinkStyle(lang === "ar")}
              >
                AR
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ borderTop: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "44px clamp(20px, 5vw, 72px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {tFooter.name}
            </span>
            <span
              style={{
                display: "block",
                fontSize: 13,
                lineHeight: "24px",
                marginTop: 6,
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
              }}
            >
              {tFooter.address}
            </span>
          </div>
          <span
            style={{
              fontSize: 13,
              lineHeight: "24px",
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            }}
          >
            {tFooter.copyright}
          </span>
        </div>
      </footer>
    </div>
  );
}
