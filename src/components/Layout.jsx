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

export default function Layout() {
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
            padding: "14px clamp(20px, 5vw, 72px)",
            display: "flex",
            alignItems: "center",
            gap: 28,
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
              }}
            >
              Al-Jazia
            </span>
            <span
              style={{
                fontSize: 11,
                lineHeight: 1,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
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
          <Link to="/contact" className="btn btn-primary" style={{ letterSpacing: "0.04em" }}>
            Request a quote
          </Link>
        </div>
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
