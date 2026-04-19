import { COLORS, FONTS } from "../../constants/theme";

export default function Tag({ label }) {
  return (
    <span style={{
      padding: "4px 14px",
      border: `1px solid ${COLORS.gold}50`,
      color: COLORS.gold,
      fontSize: 11,
      fontFamily: FONTS.heading,
      letterSpacing: 1,
    }}>
      {label}
    </span>
  );
}
