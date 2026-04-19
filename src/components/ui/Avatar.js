import { COLORS, FONTS } from "../../constants/theme";

export default function Avatar({ initials, size = 120, gold = false }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: gold
        ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`
        : `linear-gradient(135deg, #1a1a1f, #2a2a30)`,
      border: `2px solid ${COLORS.gold}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.3, fontFamily: FONTS.display,
      color: gold ? COLORS.dark : COLORS.gold,
      fontWeight: 700, flexShrink: 0,
      boxShadow: `0 0 30px ${COLORS.gold}22`,
    }}>
      {initials}
    </div>
  );
}
