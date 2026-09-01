import Blueprint from "../components/Blueprint";
import { partnerGroups } from "../data/partners";
import { useLang } from "../i18n/lang";
import { strings } from "../i18n/strings";

export default function Partners() {
  const lang = useLang();
  const t = strings[lang].partners;

  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">{t.kicker}</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">{t.heading}</h1>
        <p className="ajz-lead">{t.lead}</p>
      </div>

      <div style={{ paddingBottom: 72, display: "grid", gap: "clamp(24px, 3vw, 40px)" }}>
        {partnerGroups.map((group) => (
          <Blueprint key={group.category.en} className="ajz-panel">
            <h2 style={{ fontSize: 22, lineHeight: "26px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {group.category[lang]}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
              {group.partners.map((partner) => (
                <a
                  key={partner.url}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag tag-outline"
                  style={{ fontSize: 14, padding: "8px 16px", textDecoration: "none" }}
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}
