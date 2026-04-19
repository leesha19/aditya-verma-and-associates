import { COLORS, FONTS } from "../../constants/theme";
import Avatar from "./Avatar";

export default function CoreTeamCard({ member, style = {} }) {
  return (
    <div
      style={{
        background: COLORS.darkCard,
        border: `1px solid ${COLORS.darkBorder}`,
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        cursor: "default",
        ...style,
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
      {/* Full width photo panel */}
      <div style={{ width: "100%", height: 280, position: "relative", overflow: "hidden" }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(145deg, #EDE8DF, #E0D9CE)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Avatar initials={member.initials} size={100} />
          </div>
        )}

        {/* Gold line at top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldLight})`,
        }} />

        {/* Fade at bottom of photo into card */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 70,
          background: `linear-gradient(0deg, ${COLORS.darkCard}, transparent)`,
        }} />
      </div>

      {/* Text content */}
      <div style={{
        padding: "24px 32px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}>
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontFamily: FONTS.display,
            fontSize: 20,
            color: COLORS.cream,
            fontWeight: 700,
            marginBottom: 6,
          }}>
            {member.name}
          </h3>
          <div style={{
            fontFamily: FONTS.heading,
            fontSize: 10,
            color: COLORS.gold,
            letterSpacing: 3,
            marginBottom: 16,
          }}>
            {member.role.toUpperCase()}
          </div>
          <p style={{
            color: COLORS.textMuted,
            fontSize: 14,
            lineHeight: 1.8,
          }}>
            {member.desc}
          </p>
        </div>
      </div>
    </div>
  );
}