import Blueprint from "../components/Blueprint";
import { divisions } from "../data/divisions";

export default function Divisions() {
  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">Divisions</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">Ten supply lines, one vendor record</h1>
        <p className="ajz-lead">
          Each division runs its own buyers and its own supplier network, and all of them quote on one letterhead —
          so a mixed order does not become five vendor registrations.
        </p>
      </div>

      <div style={{ paddingBottom: 72, display: "grid", gap: "clamp(24px, 3vw, 40px)" }}>
        {divisions.map((d) => (
          <Blueprint
            key={d.no}
            className="ajz-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 4fr) minmax(0, 6fr)",
              gap: "20px 40px",
              padding: 28,
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  color: "var(--color-accent-700)",
                  marginBottom: 10,
                }}
              >
                {d.no}
              </span>
              <h2 style={{ fontSize: 26, lineHeight: "28px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                {d.title}
              </h2>
              <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "12px 0 0" }}>
                {d.blurb}
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  lineHeight: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                  margin: "0 0 10px",
                }}
              >
                Typical lines
              </span>
              <hr className="ajz-rule" style={{ marginBottom: 14 }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {d.items.map((item) => (
                  <span key={item} className="tag tag-outline" style={{ fontSize: 12, padding: "4px 10px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}
