import { useState } from "react";
import Blueprint from "../components/Blueprint";
import ImagePlaceholder from "../components/ImagePlaceholder";

const DIVISION_OPTIONS = [
  "Manpower & staffing",
  "Building materials",
  "Oil & gas supplies",
  "Electrical & mechanical",
  "Safety & PPE",
  "Office supplies & printing",
  "Foodstuff",
  "Logistics & shipping",
  "General contracting",
  "Brand distribution",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="ajz-page">
      <div style={{ padding: "72px 0 44px" }}>
        <span className="ajz-kicker">Contact · RFQ</span>
        <hr className="ajz-rule" style={{ marginBottom: 24 }} />
        <h1 className="ajz-h1">Request a quotation</h1>
        <p className="ajz-lead" style={{ maxWidth: "60ch" }}>
          Attach a BOQ or tender schedule and we will come back with line pricing, lead time and origin. Urgent
          enquiries reach the desk faster on WhatsApp.
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
              <label htmlFor="ajz-name">Contact name</label>
              <input className="input" id="ajz-name" type="text" placeholder="Full name" />
            </div>
            <div className="field">
              <label htmlFor="ajz-org">Organisation</label>
              <input className="input" id="ajz-org" type="text" placeholder="Company / ministry" />
            </div>
            <div className="field">
              <label htmlFor="ajz-email">Email</label>
              <input className="input" id="ajz-email" type="email" placeholder="name@company.com.kw" />
            </div>
            <div className="field">
              <label htmlFor="ajz-phone">Phone / WhatsApp</label>
              <input className="input" id="ajz-phone" type="tel" placeholder="+965 0000 0000" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="ajz-div">Division</label>
            <select className="input" id="ajz-div">
              {DIVISION_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ajz-msg">Requirement</label>
            <textarea
              className="input"
              id="ajz-msg"
              placeholder="Describe the items, quantities, specifications and required delivery date."
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button type="submit" className="btn btn-primary" style={{ minHeight: 40, paddingInline: 20 }}>
              Send enquiry
            </button>
            {sent && (
              <span style={{ fontSize: 13, color: "var(--color-accent-700)" }}>
                Enquiry logged — the desk replies within one working day.
              </span>
            )}
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
              Head office
            </span>
            <p style={{ fontSize: 15, lineHeight: "26px", margin: 0 }}>
              Office 1, Floor 6, Bader Lafi Khaled Al-Mutairi Building
              <br />
              Eqaila, Block 5
              <br />
              Ahmadi 54205, Kuwait
              <br />
              Sun–Thu · 08:00–17:00
            </p>
            <hr className="ajz-rule" style={{ margin: "18px 0", marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: "26px", margin: 0 }}>
              T · +965 0000 0000
              <br />
              WhatsApp · +965 0000 0000
              <br />
              info@al-jazia.com
            </p>
            <p
              style={{
                fontSize: 12,
                lineHeight: "20px",
                margin: "14px 0 0",
                color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
              }}
            >
              Placeholder contact details.
            </p>
          </Blueprint>
          <ImagePlaceholder placeholder="Office or Kuwait City photo" style={{ width: "100%", aspectRatio: "4 / 3" }} />
        </div>
      </div>
    </section>
  );
}
