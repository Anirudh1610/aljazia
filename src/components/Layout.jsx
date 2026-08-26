import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/divisions", label: "Divisions" },
  { to: "/manpower", label: "Manpower" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
            to="/"
            style={{
              marginRight: "auto",
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Al-Jazia
            </span>
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
              Int'l General Trading Co.
            </span>
          </Link>
          <nav className="ajz-navlinks" style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} style={navLinkStyle}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="ajz-header-cta btn btn-primary"
            style={{ letterSpacing: "0.04em", whiteSpace: "nowrap" }}
          >
            Request a quote
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
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={mobileNavLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
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
              Al-Jazia International General Trading
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
              Office 1, Floor 6, Bader Lafi Khaled Al-Mutairi Building · Eqaila, Block 5 · Ahmadi 54205, Kuwait ·
              info@al-jazia.com
            </span>
          </div>
          <span
            style={{
              fontSize: 13,
              lineHeight: "24px",
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            }}
          >
            © 2026 Al-Jazia International General Trading Co. W.L.L.
          </span>
        </div>
      </footer>
    </div>
  );
}
