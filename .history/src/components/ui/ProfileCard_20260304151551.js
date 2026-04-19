import { COLORS, FONTS } from "../../constants/theme";
import Avatar from "./Avatar";
import Tag from "./Tag";

export default function ProfileCard({ person, flip = false }) {
  const photoPanel = (
    <div key="photo" style={{
      background: `linear-gradient(145deg, #1a1510, #0e0b06)`,
      padding: 60, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 40%, ${COLORS.gold}10, transparent 70%)` }} />
      <div style={{ position: "absolute", [flip ? "top" : "bottom"]: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
      <Avatar initials={person.initials} size={160} gold={!flip} />
      <div style={{ marginTop: 24, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: FONTS.heading, fontSize: 11, letterSpacing: 4, color: COLORS.gold }}>{person.role.toUpperCase()}</div>
      </div>
    </div>
  );

  const infoPanel = (
    <div key="info" style={{ padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ width: 40, height: 1, background: COLORS.gold, marginBottom: 20 }} />
      <h3 style={{ fontFamily: FONTS.display, fontSize: "clamp(22px, 3vw, 34px)", color: COLORS.cream, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
        {person.name}
      </h3>
      <div style={{ fontFamily: FONTS.heading, fontSize: 12, color: COLORS.gold, letterSpacing: 2, marginBottom: 16 }}>
        {person.role.toUpperCase()}
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {person.tags.map((t) => <Tag key={t} label={t} />)}
      </div>
      {person.experience && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, padding: "12px 16px", background: `${COLORS.gold}10`, border: `1px solid ${COLORS.gold}20` }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONTS.display, fontSize: 18, color: COLORS.dark, fontWeight: 700, flexShrink: 0 }}>
            {person.experience}
          </div>
          <div>
            <div style={{ color: COLORS.cream, fontSize: 14, fontWeight: 600 }}>Years of Experience</div>
            <div style={{ color: COLORS.textMuted, fontSize: 12 }}>{person.university}</div>
          </div>
        </div>
      )}
      {person.bio.map((para, i) => (
        <p key={i} style={{ color: COLORS.textMuted, lineHeight: 1.9, fontSize: 16, marginBottom: i < person.bio.length - 1 ? 16 : 0 }}>{para}</p>
      ))}
      {person.quote && (
        <div style={{ marginTop: 32, padding: "20px 24px", borderLeft: `2px solid ${COLORS.gold}`, background: `${COLORS.gold}08` }}>
          <p style={{ color: COLORS.cream, fontStyle: "italic", fontSize: 15, lineHeight: 1.7 }}>"{person.quote}"</p>
        </div>
      )}
      {person.email && (
        <div style={{ marginTop: 28 }}>
          <a href={`mailto:${person.email}`} style={{ color: COLORS.gold, fontSize: 14, textDecoration: "none", letterSpacing: 1, fontFamily: FONTS.heading }}>
            ✉ {person.email}
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", background: COLORS.darkCard, border: `1px solid ${COLORS.darkBorder}`, overflow: "hidden" }}>
      {flip ? [infoPanel, photoPanel] : [photoPanel, infoPanel]}
    </div>
  );
}
