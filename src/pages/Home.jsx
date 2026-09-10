import { Link } from "react-router-dom";
import Blueprint from "../components/Blueprint";
import { divisions } from "../data/divisions";
import { useLang, withLang } from "../i18n/lang";
import { strings } from "../i18n/strings";
import heroPhoto from "../assets/petro-mono.jpg";

export default function Home() {
  const lang = useLang();
  const t = strings[lang].home;
  const scrimDirection = lang === "ar" ? "to left" : "to right";

  return (
    <>
      {/* hero */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(${scrimDirection}, rgba(13, 20, 28, 0.92) 0%, rgba(13, 20, 28, 0.72) 45%, rgba(13, 20, 28, 0.35) 100%)`,
          }}
        />
        <div className="ajz-page" style={{ position: "relative", padding: "120px 0 96px" }}>
          <h1 className="ajz-h1" style={{ fontSize: "clamp(44px, 6.4vw, 92px)", color: "var(--color-bg)" }}>
            <span style={{ display: "block" }}>{t.heroLine1}</span>
            <span style={{ display: "block" }}>{t.heroLine2}</span>
            <span style={{ display: "block", color: "var(--color-accent-300)" }}>{t.heroLine3}</span>
          </h1>
          <p
            className="ajz-lead"
            style={{ fontSize: 17, lineHeight: "28px", color: "color-mix(in srgb, #f2f2f3 85%, transparent)" }}
          >
            {t.lead}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link
              to={withLang("/contact", lang)}
              className="btn"
              style={{
                minHeight: 40,
                paddingInline: 20,
                background: "var(--color-accent-700)",
                color: "var(--color-bg)",
                borderColor: "var(--color-accent-700)",
              }}
            >
              {t.ctaPrimary}
            </Link>
            <Link
              to={withLang("/divisions", lang)}
              className="btn"
              style={{
                minHeight: 40,
                paddingInline: 20,
                color: "var(--color-bg)",
                borderColor: "color-mix(in srgb, #f2f2f3 40%, transparent)",
              }}
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <section className="ajz-page" style={{ paddingTop: 72 }}>
        {/* procurement sheet */}
        <div style={{ paddingBottom: 72 }}>
          <span className="ajz-kicker">{t.kicker1}</span>
          <hr className="ajz-rule" />
          <Blueprint>
            <div style={{ overflowX: "auto" }}>
              <table className="table" style={{ tableLayout: "fixed", minWidth: 480 }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: 72, padding: "12px 24px", fontSize: 13 }}>
                      {t.colStep}
                    </th>
                    <th scope="col" style={{ paddingBlock: 12, paddingInlineEnd: 24, paddingInlineStart: 0, fontSize: 13 }}>
                      {t.colStage}
                    </th>
                    <th scope="col" style={{ paddingBlock: 12, paddingInlineEnd: 24, paddingInlineStart: 0, fontSize: 13 }}>
                      {t.colReceive}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.steps.map((row, i) => {
                    const last = i === t.steps.length - 1;
                    return (
                      <tr key={row.step}>
                        <td
                          style={{
                            padding: "12px 24px",
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            color: "var(--color-accent-700)",
                            borderBottom: last ? 0 : undefined,
                          }}
                        >
                          {row.step}
                        </td>
                        <td
                          style={{
                            paddingBlock: 12,
                            paddingInlineEnd: 24,
                            paddingInlineStart: 0,
                            fontSize: 15,
                            lineHeight: "24px",
                            borderBottom: last ? 0 : undefined,
                          }}
                        >
                          {row.stage}
                        </td>
                        <td
                          style={{
                            paddingBlock: 12,
                            paddingInlineEnd: 24,
                            paddingInlineStart: 0,
                            fontSize: 15,
                            lineHeight: "24px",
                            color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
                            borderBottom: last ? 0 : undefined,
                          }}
                        >
                          {row.receive}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Blueprint>
        </div>

        {/* divisions grid */}
        <div style={{ paddingBottom: 72 }}>
          <span className="ajz-kicker">{t.kicker2}</span>
          <hr className="ajz-rule" />
          <div
            className="ajz-grid3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 48px)" }}
          >
            {divisions.map((d) => (
              <Link key={d.no} to={withLang("/divisions", lang)} style={{ textDecoration: "none", color: "inherit" }}>
                <Blueprint className="ajz-panel" style={{ cursor: "pointer" }}>
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
                  <h2
                    style={{
                      fontSize: 22,
                      lineHeight: "24px",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.title[lang]}
                  </h2>
                  <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "12px 0 0" }}>
                    {d.blurb[lang]}
                  </p>
                </Blueprint>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* steel field CTA */}
      <div style={{ background: "var(--color-accent-900)", color: "var(--color-bg)" }}>
        <div className="ajz-page" style={{ padding: "72px clamp(20px, 5vw, 72px)" }}>
          <span className="ajz-kicker" style={{ color: "var(--color-accent-300)" }}>
            {t.kicker3}
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.06,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              maxWidth: "24ch",
            }}
          >
            {t.ctaHeading}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: "26px",
              maxWidth: "56ch",
              margin: "20px 0 0",
              color: "color-mix(in srgb, #f2f2f3 82%, transparent)",
            }}
          >
            {t.ctaBody}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
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
              {t.ctaPrimary2}
            </Link>
            <Link
              to={withLang("/manpower", lang)}
              className="btn"
              style={{
                minHeight: 40,
                paddingInline: 20,
                color: "var(--color-bg)",
                borderColor: "color-mix(in srgb, #f2f2f3 40%, transparent)",
              }}
            >
              {t.ctaSecondary2}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
