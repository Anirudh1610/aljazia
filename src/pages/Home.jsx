import { Link } from "react-router-dom";
import Blueprint from "../components/Blueprint";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { divisions } from "../data/divisions";
import { useLang, withLang } from "../i18n/lang";
import { strings } from "../i18n/strings";
import warehousePhoto from "../assets/warehouse.jpg";

export default function Home() {
  const lang = useLang();
  const t = strings[lang].home;

  return (
    <>
      <section className="ajz-page">
        <div style={{ padding: "96px 0 72px" }}>
          <h1 className="ajz-h1" style={{ fontSize: "clamp(44px, 6.4vw, 92px)" }}>
            <span style={{ display: "block" }}>{t.heroLine1}</span>
            <span style={{ display: "block" }}>{t.heroLine2}</span>
            <span style={{ display: "block", color: "var(--color-accent-700)" }}>{t.heroLine3}</span>
          </h1>
          <p className="ajz-lead" style={{ fontSize: 17, lineHeight: "28px" }}>
            {t.lead}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link to={withLang("/contact", lang)} className="btn btn-primary" style={{ minHeight: 40, paddingInline: 20 }}>
              {t.ctaPrimary}
            </Link>
            <Link to={withLang("/divisions", lang)} className="btn btn-secondary" style={{ minHeight: 40, paddingInline: 20 }}>
              {t.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* procurement sheet */}
        <div style={{ paddingBottom: 72 }}>
          <Blueprint>
            <header
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                borderBottom: "1px solid var(--color-divider)",
              }}
            >
              <span
                style={{
                  flex: 1,
                  minWidth: "16ch",
                  padding: "12px 24px",
                  fontSize: 13,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {t.tableTitle}
              </span>
              <span
                style={{
                  padding: "12px 24px",
                  borderInlineStart: "1px solid var(--color-divider)",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                }}
              >
                {t.tableCycle}
              </span>
              <span
                style={{
                  padding: "12px 24px",
                  borderInlineStart: "1px solid var(--color-divider)",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                }}
              >
                {t.tableSheet}
              </span>
            </header>
            <div style={{ overflowX: "auto" }}>
            <table className="table" style={{ tableLayout: "fixed", minWidth: 560 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: 72, padding: "12px 24px", fontSize: 13 }}>
                    {t.colStep}
                  </th>
                  <th scope="col" style={{ paddingBlock: 12, paddingInlineEnd: 24, paddingInlineStart: 0, fontSize: 13 }}>
                    {t.colStage}
                  </th>
                  <th scope="col" style={{ width: "22%", paddingBlock: 12, paddingInlineEnd: 24, paddingInlineStart: 0, fontSize: 13 }}>
                    {t.colTurnaround}
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
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          fontSize: 22,
                          lineHeight: "24px",
                          whiteSpace: "nowrap",
                          borderBottom: last ? 0 : undefined,
                        }}
                      >
                        {row.turnaround}
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
            <p
              style={{
                margin: 0,
                padding: "12px 24px",
                borderTop: "1px solid var(--color-divider)",
                fontSize: 13,
                lineHeight: "24px",
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
              }}
            >
              {t.footnote}
            </p>
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

        {/* split */}
        <div
          className="ajz-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "24px clamp(24px, 5vw, 96px)",
            alignItems: "center",
            paddingBottom: 72,
          }}
        >
          <div>
            <span className="ajz-kicker">{t.kicker3}</span>
            <hr className="ajz-rule" style={{ marginBottom: 24 }} />
            <h2 style={{ fontSize: 32, lineHeight: "36px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {t.groundTitle}
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "20px 0 0", maxWidth: "48ch" }}>
              {t.groundBody}
            </p>
          </div>
          <ImagePlaceholder
            src={warehousePhoto}
            alt={t.groundPhotoCaption}
            placeholder={t.groundPhotoCaption}
            style={{ width: "100%", aspectRatio: "16 / 10" }}
          />
        </div>
      </section>

      {/* steel field CTA */}
      <div style={{ background: "var(--color-accent-900)", color: "var(--color-bg)" }}>
        <div className="ajz-page" style={{ padding: "72px clamp(20px, 5vw, 72px)" }}>
          <span className="ajz-kicker" style={{ color: "var(--color-accent-300)" }}>
            {t.kicker4}
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
