import Blueprint from "../components/Blueprint";
import { whyUs } from "../data/about";

export default function About() {
  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">About</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">A Kuwaiti trading house built on repeat orders</h1>
        <p className="ajz-lead">
          Al-Jazia began as a single-counter supply business and grew the way trading houses in Kuwait do: one
          client asks for something outside the catalogue, you source it properly, and the next enquiry arrives. Ten
          divisions later the discipline is unchanged — quote honestly, deliver on the date, keep the paperwork
          clean.
        </p>
      </div>

      <div
        className="ajz-grid3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 48px)", paddingBottom: 60 }}
      >
        <Blueprint className="ajz-panel">
          <span
            style={{
              display: "block",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 10,
            }}
          >
            Vision
          </span>
          <p style={{ fontSize: 16, lineHeight: "26px", margin: 0 }}>
            To be the supplier Kuwaiti buyers call first — because the answer is usually yes, and always honest.
          </p>
        </Blueprint>
        <Blueprint className="ajz-panel">
          <span
            style={{
              display: "block",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 10,
            }}
          >
            Mission
          </span>
          <p style={{ fontSize: 16, lineHeight: "26px", margin: 0 }}>
            Consolidate ten supply categories and a manpower desk under one accountable vendor, so our clients spend
            less time procuring and more time operating.
          </p>
        </Blueprint>
        <Blueprint className="ajz-panel">
          <span
            style={{
              display: "block",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 10,
            }}
          >
            Values
          </span>
          <p style={{ fontSize: 16, lineHeight: "26px", margin: 0 }}>
            Say the real lead time. Price the same for everyone. Stand behind the origin certificate. Answer the
            phone after the invoice.
          </p>
        </Blueprint>
      </div>

      <div style={{ paddingBottom: 72 }}>
        <span className="ajz-kicker">Why buyers choose Al-Jazia</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0 40px" }}>
          {whyUs.map((w) => (
            <div
              key={w.no}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "baseline",
                padding: "14px 0",
                borderBottom: "1px solid var(--color-divider)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-accent-700)", flex: "none" }}>
                {w.no}
              </span>
              <span style={{ fontSize: 15, lineHeight: "24px" }}>{w.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
