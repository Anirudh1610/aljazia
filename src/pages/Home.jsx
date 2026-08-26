import { Link } from "react-router-dom";
import Blueprint from "../components/Blueprint";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { divisions } from "../data/divisions";
import warehousePhoto from "../assets/warehouse.jpg";

const PROCUREMENT_STEPS = [
  {
    step: "01",
    stage: "Enquiry & technical review",
    turnaround: "24 hrs",
    receive: "Clarifications, alternates, datasheets",
  },
  {
    step: "02",
    stage: "Priced quotation",
    turnaround: "48 hrs",
    receive: "Line-item pricing, KD, validity stated",
  },
  {
    step: "03",
    stage: "Order & documentation",
    turnaround: "Same day",
    receive: "PO acknowledgement, compliance file",
  },
  {
    step: "04",
    stage: "Delivery to site or store",
    turnaround: "Scheduled",
    receive: "Signed delivery note, warranty papers",
  },
];

export default function Home() {
  return (
    <>
      <section className="ajz-page">
        <div style={{ padding: "96px 0 72px" }}>
          <h1 className="ajz-h1" style={{ fontSize: "clamp(44px, 6.4vw, 92px)" }}>
            <span style={{ display: "block" }}>One supplier.</span>
            <span style={{ display: "block" }}>Ten divisions.</span>
            <span style={{ display: "block", color: "var(--color-accent-700)" }}>Kuwait, delivered.</span>
          </h1>
          <p className="ajz-lead" style={{ fontSize: 17, lineHeight: "28px" }}>
            Al-Jazia International General Trading supplies ministries, oil-sector operators, contractors and
            retailers across Kuwait — from building materials and safety equipment to certified IT and non-IT
            manpower. One vendor record, one point of contact, one delivery note.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link to="/contact" className="btn btn-primary" style={{ minHeight: 40, paddingInline: 20 }}>
              Submit an RFQ
            </Link>
            <Link to="/divisions" className="btn btn-secondary" style={{ minHeight: 40, paddingInline: 20 }}>
              See all divisions
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
                How we supply
              </span>
              <span
                style={{
                  padding: "12px 24px",
                  borderLeft: "1px solid var(--color-divider)",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                }}
              >
                Procurement cycle
              </span>
              <span
                style={{
                  padding: "12px 24px",
                  borderLeft: "1px solid var(--color-divider)",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                  lineHeight: "24px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                }}
              >
                Sheet 01
              </span>
            </header>
            <div style={{ overflowX: "auto" }}>
            <table className="table" style={{ tableLayout: "fixed", minWidth: 560 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: 72, padding: "12px 24px", fontSize: 13 }}>
                    Step
                  </th>
                  <th scope="col" style={{ padding: "12px 24px 12px 0", fontSize: 13 }}>
                    Stage
                  </th>
                  <th scope="col" style={{ width: "22%", padding: "12px 24px 12px 0", fontSize: 13 }}>
                    Turnaround
                  </th>
                  <th scope="col" style={{ padding: "12px 24px 12px 0", fontSize: 13 }}>
                    What you receive
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROCUREMENT_STEPS.map((row, i) => {
                  const last = i === PROCUREMENT_STEPS.length - 1;
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
                          padding: "12px 24px 12px 0",
                          fontSize: 15,
                          lineHeight: "24px",
                          borderBottom: last ? 0 : undefined,
                        }}
                      >
                        {row.stage}
                      </td>
                      <td
                        style={{
                          padding: "12px 24px 12px 0",
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
                          padding: "12px 24px 12px 0",
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
              Indicative cycle for stocked and agency lines; project and tender items are quoted to schedule.
              Placeholder figures — confirm before publishing.
            </p>
          </Blueprint>
        </div>

        {/* divisions grid */}
        <div style={{ paddingBottom: 72 }}>
          <span className="ajz-kicker">02 · What we supply</span>
          <hr className="ajz-rule" />
          <div
            className="ajz-grid3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(24px, 3vw, 48px)" }}
          >
            {divisions.map((d) => (
              <Link key={d.no} to="/divisions" style={{ textDecoration: "none", color: "inherit" }}>
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
                    {d.title}
                  </h2>
                  <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "12px 0 0" }}>
                    {d.blurb}
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
            <span className="ajz-kicker">03 · On the ground</span>
            <hr className="ajz-rule" style={{ marginBottom: 24 }} />
            <h2 style={{ fontSize: 32, lineHeight: "36px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              Warehoused in Kuwait, not on a waiting list
            </h2>
            <p className="ajz-muted" style={{ fontSize: 15, lineHeight: "24px", margin: "20px 0 0", maxWidth: "48ch" }}>
              Stock held at our Eqaila premises in Ahmadi with our own delivery fleet, so a site call in the morning
              is a signed delivery note in the afternoon. Project quantities are consolidated at origin and cleared
              through Shuaiba by our own documentation team.
            </p>
          </div>
          <ImagePlaceholder
            src={warehousePhoto}
            alt="Al-Jazia warehouse and delivery fleet"
            placeholder="Warehouse / fleet photo"
            style={{ width: "100%", aspectRatio: "16 / 10" }}
          />
        </div>
      </section>

      {/* steel field CTA */}
      <div style={{ background: "var(--color-accent-900)", color: "var(--color-bg)" }}>
        <div className="ajz-page" style={{ padding: "72px clamp(20px, 5vw, 72px)" }}>
          <span
            className="ajz-kicker"
            style={{ color: "var(--color-accent-300)" }}
          >
            04 · Next step
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
            Send the list. We'll price it.
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
            Email a BOQ, a tender schedule or a scribbled part number. Quotations in Kuwaiti Dinar with stated
            validity, delivery lead time and country of origin on every line.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
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
              Request a quotation
            </Link>
            <Link
              to="/manpower"
              className="btn"
              style={{
                minHeight: 40,
                paddingInline: 20,
                color: "var(--color-bg)",
                borderColor: "color-mix(in srgb, #f2f2f3 40%, transparent)",
              }}
            >
              Hiring manpower instead?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
