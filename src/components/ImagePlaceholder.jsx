import Blueprint from "./Blueprint";

/** Static stand-in for the design canvas's <image-slot> — that element's
 * drag-and-drop editing only exists inside the design tool, so a filled
 * slot becomes a plain <img> and an empty one becomes a captioned box. */
export default function ImagePlaceholder({ src, alt = "", placeholder, style }) {
  return (
    <Blueprint as="figure" duotone style={{ margin: 0, ...style }}>
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            minHeight: 160,
            padding: 12,
            textAlign: "center",
            fontSize: 13,
            color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            background: "color-mix(in srgb, var(--color-text) 4%, transparent)",
          }}
        >
          {placeholder}
        </div>
      )}
    </Blueprint>
  );
}
