import { COLORS, FONTS } from "../../constants/theme";
import Avatar from "./Avatar";

export default function CoreTeamCard({ member, style = {} }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: `1px solid ${COLORS.darkBorder}`,
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
        cursor: "default",
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = `0 24px 50px rgba(0,0,0,0.13)`;
        e.currentTarget.style.borderColor = `${COLORS.gold}70`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
        e.currentTarget.style.borderColor = COLORS.darkBorder;
      }}
    >
      {/* Photo panel — fixed square crop centered on face */}
      <div style={{
        width: "100%",
        height: 320,
        position: "absolute",
        overflow: "hidden",
        background: `linear-gradient(145deg, #EDE8DF, #E0D9CE)`,
      }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              display: "block",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Avatar initials={member.initials} size={110} />
          </div>
        )}

        {/* Top gold bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldLight})`,
        }} />

        {/* Bottom fade into white card */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 10,
          background: "linear-gradient(0deg, #FFFFFF 0%, transparent 100%)",
        }} />
      </div>

      {/* Divider line */}
      <div style={{
        width: 40, height: 1,
        background: COLORS.gold,
        margin: "0 auto",
        marginTop: -1,
      }} />

      {/* Text content */}
      <div style={{
        padding: "20px 28px 36px",
        textAlign: "center",
      }}>
        <h3 style={{
          fontFamily: FONTS.display,
          fontSize: 21,
          color: COLORS.cream,
          fontWeight: 700,
          marginBottom: 6,
          lineHeight: 1.3,
        }}>
          {member.name}
        </h3>

        <div style={{
          fontFamily: FONTS.heading,
          fontSize: 10,
          color: COLORS.gold,
          letterSpacing: 4,
          marginBottom: 16,
        }}>
          {member.role.toUpperCase()}
        </div>

        {/* Small gold rule */}
        <div style={{
          width: 30, height: 1,
          background: `${COLORS.gold}60`,
          margin: "0 auto 16px",
        }} />

        <p style={{
          color: COLORS.textMuted,
          fontSize: 14,
          lineHeight: 1.9,
          fontFamily: FONTS.body,
        }}>
          {member.desc}
        </p>
      </div>
    </div>
  );
}