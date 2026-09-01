import { useState } from "react";
import Blueprint from "../components/Blueprint";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { divisions } from "../data/divisions";
import { useLang } from "../i18n/lang";
import { strings } from "../i18n/strings";

export default function Contact() {
  const lang = useLang();
  const t = strings[lang].contact;
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">{t.kicker}</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">{t.heading}</h1>
        <p className="ajz-lead" style={{ maxWidth: "60ch" }}>
          {t.lead}
        </p>
      </div>

      <div
        className="ajz-split"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
          gap: "44px clamp(24px, 5vw, 72px)",
          paddingBottom: 72,
          alignItems: "start",
        }}
      >
        <Blueprint as="form" onSubmit={handleSubmit} style={{ padding: 28, display: "grid", gap: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
            <div className="field">
              <label htmlFor="ajz-name">{t.labelName}</label>
              <input className="input" id="ajz-name" type="text" placeholder={t.placeholderName} />
            </div>
            <div className="field">
              <label htmlFor="ajz-org">{t.labelOrg}</label>
              <input className="input" id="ajz-org" type="text" placeholder={t.placeholderOrg} />
            </div>
            <div className="field">
              <label htmlFor="ajz-email">{t.labelEmail}</label>
              <input className="input" id="ajz-email" type="email" placeholder={t.placeholderEmail} />
            </div>
            <div className="field">
              <label htmlFor="ajz-phone">{t.labelPhone}</label>
              <input className="input" id="ajz-phone" type="tel" placeholder={t.placeholderPhone} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="ajz-div">{t.labelDivision}</label>
            <select className="input" id="ajz-div">
              {divisions.map((d) => (
                <option key={d.no}>{d.title[lang]}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ajz-msg">{t.labelRequirement}</label>
            <textarea className="input" id="ajz-msg" placeholder={t.placeholderRequirement} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button type="submit" className="btn btn-primary" style={{ minHeight: 40, paddingInline: 20 }}>
              {t.submit}
            </button>
            {sent && <span style={{ fontSize: 13, color: "var(--color-accent-700)" }}>{t.confirmation}</span>}
          </div>
        </Blueprint>

        <div style={{ display: "grid", gap: 24 }}>
          <Blueprint className="ajz-panel">
            <span
              style={{
                display: "block",
                fontSize: 12,
                letterSpacing: "0.1em",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "var(--color-accent-700)",
                marginBottom: 14,
              }}
            >
              {t.officeLabel}
            </span>
            <p style={{ fontSize: 15, lineHeight: "26px", margin: 0 }}>
              {t.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < t.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <hr className="ajz-rule" style={{ margin: "18px 0", marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: "26px", margin: 0 }}>
              {t.phoneLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < t.phoneLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p
              style={{
                fontSize: 12,
                lineHeight: "20px",
                margin: "14px 0 0",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              {t.placeholderNote}
            </p>
          </Blueprint>
          <ImagePlaceholder placeholder={t.photoCaption} style={{ width: "100%", aspectRatio: "4 / 3" }} />
        </div>
      </div>
    </section>
  );
}
