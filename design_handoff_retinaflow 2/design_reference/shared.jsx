// Shared utilities & primitive components for the RetinaFlow design system page

const Section = ({ id, eyebrow, title, description, children, style }) => (
  <section id={id} style={{ padding: "96px 0 48px", borderTop: "1px solid var(--rule)", ...style }}>
    {eyebrow && (
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--muted)",
        marginBottom: 16,
      }}>{eyebrow}</div>
    )}
    {title && (
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: 56,
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        margin: 0,
        color: "var(--ink)",
        fontWeight: 500,
        maxWidth: 900,
      }}>{title}</h2>
    )}
    {description && (
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 18,
        lineHeight: 1.55,
        color: "var(--muted-strong)",
        maxWidth: 720,
        marginTop: 20,
      }}>{description}</p>
    )}
    <div style={{ marginTop: 48 }}>{children}</div>
  </section>
);

const Label = ({ children, mono = true, style }) => (
  <div style={{
    fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)",
    ...style,
  }}>{children}</div>
);

// Minimal placeholder for imagery — striped SVG with mono caption.
const Placeholder = ({ height = 180, label = "image", color = "var(--ink)" }) => (
  <div style={{
    height,
    border: "1px solid var(--rule)",
    background: `repeating-linear-gradient(135deg, transparent 0 11px, color-mix(in oklch, ${color} 6%, transparent) 11px 12px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted)",
  }}>{label}</div>
);

// Color swatch with token name + value
const Swatch = ({ name, value, token, ink = "white" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
    <div style={{
      background: value,
      height: 96,
      border: "1px solid var(--rule)",
      borderBottom: "none",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      padding: 12,
      color: ink,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
    }}>
      {token && <span style={{ opacity: 0.85 }}>{token}</span>}
    </div>
    <div style={{
      borderTop: "none",
      border: "1px solid var(--rule)",
      padding: "10px 12px",
      background: "var(--bg)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
    }}>
      <span style={{ color: "var(--ink)" }}>{name}</span>
      <span style={{ color: "var(--muted)" }}>{value}</span>
    </div>
  </div>
);

// Spec row used for type specimens
const TypeSpec = ({ name, sample, fontSize, lineHeight, weight, tracking, fontFamily }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    gap: 32,
    padding: "32px 0",
    borderTop: "1px solid var(--rule)",
    alignItems: "baseline",
  }}>
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{name}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink)", marginTop: 8, lineHeight: 1.6 }}>
        {fontSize}px / {lineHeight}<br />
        weight {weight}<br />
        track {tracking}
      </div>
    </div>
    <div style={{
      fontFamily,
      fontSize,
      lineHeight: typeof lineHeight === "number" ? lineHeight : 1.2,
      fontWeight: weight,
      letterSpacing: tracking,
      color: "var(--ink)",
    }}>{sample}</div>
  </div>
);

// Icon stub: simple geometric mark (not pictographic).
// Each "icon" is a deterministic geometric composition — we keep them abstract on purpose.
const IconStub = ({ kind = "circle", size = 24, stroke = 1.5, color = "currentColor" }) => {
  const s = size;
  const c = s / 2;
  const r = s / 2 - stroke;
  const props = { fill: "none", stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "iris":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <circle cx={c} cy={c} r={r} {...props} />
          <circle cx={c} cy={c} r={r * 0.55} {...props} />
          <circle cx={c} cy={c} r={r * 0.18} fill={color} stroke="none" />
        </svg>
      );
    case "scan":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${stroke + 2} ${stroke + 2} L${stroke + 2} ${s/3} M${s - stroke - 2} ${stroke + 2} L${s - stroke - 2} ${s/3} M${stroke + 2} ${s - s/3} L${stroke + 2} ${s - stroke - 2} M${s - stroke - 2} ${s - s/3} L${s - stroke - 2} ${s - stroke - 2}`} {...props} />
          <circle cx={c} cy={c} r={r * 0.5} {...props} />
        </svg>
      );
    case "drop":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${c} ${stroke + 2} C ${c + r * 0.8} ${c}, ${c + r * 0.5} ${s - stroke - 2}, ${c} ${s - stroke - 2} C ${c - r * 0.5} ${s - stroke - 2}, ${c - r * 0.8} ${c}, ${c} ${stroke + 2} Z`} {...props} />
        </svg>
      );
    case "cross":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${c} ${stroke + 2} L${c} ${s - stroke - 2} M${stroke + 2} ${c} L${s - stroke - 2} ${c}`} {...props} />
        </svg>
      );
    case "lens":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <ellipse cx={c} cy={c} rx={r} ry={r * 0.65} {...props} />
          <path d={`M${stroke + 2} ${c} Q${c} ${c - r * 0.4} ${s - stroke - 2} ${c}`} {...props} />
        </svg>
      );
    case "wave":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${stroke + 2} ${c} Q${s/4} ${c - r * 0.6}, ${c} ${c} T ${s - stroke - 2} ${c}`} {...props} />
        </svg>
      );
    case "doc":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <rect x={s * 0.22} y={s * 0.12} width={s * 0.56} height={s * 0.76} {...props} />
          <path d={`M${s * 0.32} ${s * 0.36} L${s * 0.68} ${s * 0.36} M${s * 0.32} ${s * 0.5} L${s * 0.68} ${s * 0.5} M${s * 0.32} ${s * 0.64} L${s * 0.55} ${s * 0.64}`} {...props} />
        </svg>
      );
    case "calendar":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <rect x={stroke + 2} y={s * 0.2} width={s - 2 * (stroke + 2)} height={s * 0.65} {...props} />
          <path d={`M${s * 0.3} ${s * 0.1} L${s * 0.3} ${s * 0.3} M${s * 0.7} ${s * 0.1} L${s * 0.7} ${s * 0.3} M${stroke + 2} ${s * 0.4} L${s - stroke - 2} ${s * 0.4}`} {...props} />
        </svg>
      );
    case "alert":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${c} ${stroke + 2} L${s - stroke - 2} ${s - stroke - 2} L${stroke + 2} ${s - stroke - 2} Z`} {...props} />
          <path d={`M${c} ${s * 0.42} L${c} ${s * 0.62}`} {...props} />
          <circle cx={c} cy={s * 0.74} r={stroke * 0.7} fill={color} stroke="none" />
        </svg>
      );
    case "user":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <circle cx={c} cy={s * 0.36} r={r * 0.42} {...props} />
          <path d={`M${stroke + 4} ${s - stroke - 2} Q${c} ${s * 0.55}, ${s - stroke - 4} ${s - stroke - 2}`} {...props} />
        </svg>
      );
    case "check":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <path d={`M${s * 0.2} ${c} L${s * 0.42} ${s * 0.7} L${s * 0.8} ${s * 0.3}`} {...props} />
        </svg>
      );
    case "search":
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <circle cx={s * 0.42} cy={s * 0.42} r={r * 0.55} {...props} />
          <path d={`M${s * 0.65} ${s * 0.65} L${s - stroke - 2} ${s - stroke - 2}`} {...props} />
        </svg>
      );
    default:
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
          <circle cx={c} cy={c} r={r} {...props} />
        </svg>
      );
  }
};

// Renders an icon name + the icon centered in a tile
const IconCell = ({ kind, name }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    border: "1px solid var(--rule)",
    background: "var(--bg)",
  }}>
    <div style={{
      height: 88,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <IconStub kind={kind} size={28} stroke={1.5} />
    </div>
    <div style={{
      padding: "10px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--muted)",
    }}>{name}</div>
  </div>
);

// Pretty rule with a label centered or left-aligned
const SubRule = ({ children }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 16,
    margin: "48px 0 24px",
  }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>{children}</div>
    <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
  </div>
);

Object.assign(window, { Section, Label, Placeholder, Swatch, TypeSpec, IconStub, IconCell, SubRule });
