import { COLORS, FONTS } from "../../constants/theme";

export default function ContactCard({ icon, title, lines, style = {} }) {
  return (
    <div style={{
      background: COLORS.darkCard, border: `1px solid ${COLORS.darkBorder}`,
      padding: "36px 32px", transition: "border-color 0.3s", ...style,
    }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${COLORS.gold}40`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.darkBorder)}
    >
      <div style={{ fontFamily: FONTS.display, fontSize: 28, marginBottom: 16 }}>{icon}</div>
      <h4 style={{ fontFamily: FONTS.heading, fontSize: 12, letterSpacing: 2, color: COLORS.gold, marginBottom: 16 }}>{title.toUpperCase()}</h4>
      {lines.map((line, i) => (
        <p key={i} style={{ color: i === 0 ? COLORS.cream : COLORS.textMuted, fontSize: 14, lineHeight: 1.8, fontWeight: i === 0 ? 500 : 300 }}>
          {line}
        </p>
      ))}
    </div>
  );
}
