import { Link } from "react-router-dom";
import Blueprint from "../components/Blueprint";
import { whyStaffing } from "../data/staffing";

const IT_TAGS = ["Software engineers", "Network & infrastructure", "Cloud & DevOps", "Cybersecurity", "DBA", "Service desk"];
const NON_IT_TAGS = [
  "Technicians",
  "Warehouse & logistics",
  "Drivers (light & heavy)",
  "Administration",
  "Facility & cleaning",
  "Hospitality",
];

export default function Manpower() {
  return (
    <>
      <section className="ajz-page">
        <div style={{ padding: "72px 0 44px" }}>
          <span className="ajz-kicker">Manpower · IT &amp; Non-IT</span>
          <hr className="ajz-rule" style={{ marginBottom: 24 }} />
          <h1 className="ajz-h1">
            <span style={{ display: "block" }}>Staff who are cleared,</span>
            <span style={{ display: "block", color: "var(--color-accent-700)" }}>badged and on site.</span>
          </h1>
          <p className="ajz-lead" style={{ fontSize: 17, lineHeight: "28px" }}>
            Contract, outsourced, temporary or permanent — from cloud engineers to warehouse crews, mobilised under
            Kuwaiti labour law with visas, medicals and residency handled by us.
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
              IT manpower
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "16px 0 0" }}>
              Technically screened specialists across software development, networking, cloud, cybersecurity,
              database administration, DevOps, systems engineering and service desk. Every candidate passes a
              practical assessment and background verification before the CV reaches you — short-term project cover
              or long-term strategic hires.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {IT_TAGS.map((tag) => (
                <span key={tag} className="tag tag-outline" style={{ fontSize: 12, padding: "4px 10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 28, lineHeight: "30px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              Non-IT workforce
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "16px 0 0" }}>
              Administrative staff, technicians, storekeepers, drivers, logistics and warehouse crews, sales
              executives, cleaners, security and hospitality personnel. Medically cleared, background-verified and
              trained to the site's standard, with supervision and replacement cover written into the contract.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {NON_IT_TAGS.map((tag) => (
                <span key={tag} className="tag tag-outline" style={{ fontSize: 12, padding: "4px 10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingBottom: 72 }}>
          <span className="ajz-kicker">Why clients place manpower with us</span>
          <hr className="ajz-rule" />
          <div
            className="ajz-grid3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 48px)" }}
          >
            {whyStaffing.map((w) => (
              <Blueprint key={w.title} className="ajz-panel">
                <h3 style={{ fontSize: 20, lineHeight: "24px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {w.title}
                </h3>
                <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "12px 0 0" }}>
                  {w.body}
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
            Tell us the roles and the start date.
          </h2>
          <Link
            to="/contact"
            className="btn"
            style={{
              minHeight: 40,
              paddingInline: 20,
              background: "var(--color-bg)",
              color: "var(--color-accent-900)",
              borderColor: "var(--color-bg)",
            }}
          >
            Request manpower
          </Link>
        </div>
      </div>
    </>
  );
}
