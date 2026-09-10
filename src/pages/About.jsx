import { whyUs } from "../data/about";
import { useLang } from "../i18n/lang";
import { strings } from "../i18n/strings";

export default function About() {
  const lang = useLang();
  const t = strings[lang].about;

  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">{t.kicker}</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">{t.heading}</h1>
        <p className="ajz-lead">{t.lead}</p>
      </div>

      <div style={{ paddingBottom: 72 }}>
        <span className="ajz-kicker">{t.whyKicker}</span>
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
              <span style={{ fontSize: 15, lineHeight: "24px" }}>{w.text[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
