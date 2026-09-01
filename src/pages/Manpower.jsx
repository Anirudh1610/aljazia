import { Link } from "react-router-dom";
import Blueprint from "../components/Blueprint";
import { whyStaffing } from "../data/staffing";
import { useLang, withLang } from "../i18n/lang";
import { strings } from "../i18n/strings";

export default function Manpower() {
  const lang = useLang();
  const t = strings[lang].manpower;

  return (
    <>
      <section className="ajz-page">
        <div style={{ padding: "72px 0 44px" }}>
          <span className="ajz-kicker">{t.kicker}</span>
          <hr className="ajz-rule" style={{ marginBottom: 24 }} />
          <h1 className="ajz-h1">
            <span style={{ display: "block" }}>{t.headingLine1}</span>
            <span style={{ display: "block", color: "var(--color-accent-700)" }}>{t.headingLine2}</span>
          </h1>
          <p className="ajz-lead" style={{ fontSize: 17, lineHeight: "28px" }}>
            {t.lead}
          </p>
        </div>

        <div
          className="ajz-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 6fr) minmax(0, 6fr)",
            gap: "44px clamp(24px, 5vw, 80px)",
            paddingBottom: 60,
          }}
        >
          <div>
            <h2 style={{ fontSize: 28, lineHeight: "30px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {t.itTitle}
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "16px 0 0" }}>
              {t.itBody}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {t.itTags.map((tag) => (
                <span key={tag} className="tag tag-outline" style={{ fontSize: 12, padding: "4px 10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 28, lineHeight: "30px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {t.nonItTitle}
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "16px 0 0" }}>
              {t.nonItBody}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {t.nonItTags.map((tag) => (
                <span key={tag} className="tag tag-outline" style={{ fontSize: 12, padding: "4px 10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingBottom: 72 }}>
          <span className="ajz-kicker">{t.whyKicker}</span>
          <hr className="ajz-rule" />
          <div
            className="ajz-grid3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 48px)" }}
          >
            {whyStaffing.map((w) => (
              <Blueprint key={w.title.en} className="ajz-panel">
                <h3 style={{ fontSize: 20, lineHeight: "24px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {w.title[lang]}
                </h3>
                <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "12px 0 0" }}>
                  {w.body[lang]}
                </p>
              </Blueprint>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: "var(--color-accent-900)", color: "var(--color-bg)" }}>
        <div
          className="ajz-page"
          style={{
            padding: "60px clamp(20px, 5vw, 72px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 40px)",
              lineHeight: 1.08,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              maxWidth: "26ch",
            }}
          >
            {t.ctaHeading}
          </h2>
          <Link
            to={withLang("/contact", lang)}
            className="btn"
            style={{
              minHeight: 40,
              paddingInline: 20,
              background: "var(--color-bg)",
              color: "var(--color-accent-900)",
              borderColor: "var(--color-bg)",
            }}
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </>
  );
}
