import { COLORS, FONTS } from "../../constants/theme";

export default function GoldButton({ onClick, children, variant = "solid", type = "button" }) {
  const solid = variant === "solid";

  const style = {
    padding: "14px 40px",
    fontFamily: FONTS.heading,
    fontSize: 12, letterSpacing: 3, fontWeight: 700,
    cursor: "pointer",
    border: solid ? "none" : `1px solid ${COLORS.gold}`,
    background: solid ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})` : "transparent",
    color: solid ? COLORS.dark : COLORS.gold,
    transition: "transform 0.2s, box-shadow 0.2s, background 0.3s",
  };

  return (
    <button type={type} onClick={onClick} style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        if (solid) e.currentTarget.style.boxShadow = `0 8px 30px ${COLORS.gold}40`;
        else e.currentTarget.style.background = `${COLORS.gold}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        if (!solid) e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}
