import { COLORS, FONTS } from "../../constants/theme";

export default function SectionHeader({ label, heading, style = {} }) {
  return (
    <div className="gold-line" style={{ marginBottom: 64, ...style }}>
      <div style={{ fontFamily: FONTS.heading, fontSize: 11, letterSpacing: 5, color: COLORS.gold, marginBottom: 12 }}>
        {label}
      </div>
      <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(28px, 4vw, 52px)", color: COLORS.cream, fontWeight: 700 }}>
        {heading}
      </h2>
    </div>
  );
}
