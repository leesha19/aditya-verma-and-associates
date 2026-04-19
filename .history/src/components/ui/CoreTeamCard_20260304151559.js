import { COLORS, FONTS } from "../../constants/theme";
import Avatar from "./Avatar";

export default function CoreTeamCard({ member, style = {} }) {
  return (
    <div style={{
      background: COLORS.darkCard, border: `1px solid ${COLORS.darkBorder}`,
      overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
      cursor: "default", ...style,
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 20px 40px ${COLORS.gold}15`;
        e.currentTarget.style.borderColor = `${COLORS.gold}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = COLORS.darkBorder;
      }}
    >
      <div style={{ height: 6, background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldLight})` }} />
      <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, background: `linear-gradient(180deg, #141418, ${COLORS.darkCard})` }}>
        <Avatar initials={member.initials} size={100} />
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: FONTS.display, fontSize: 20, color: COLORS.cream, fontWeight: 700, marginBottom: 6 }}>{member.name}</h3>
          <div style={{ fontFamily: FONTS.heading, fontSize: 10, color: COLORS.gold, letterSpacing: 3, marginBottom: 16 }}>{member.role.toUpperCase()}</div>
          <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.8 }}>{member.desc}</p>
        </div>
      </div>
    </div>
  );
}
