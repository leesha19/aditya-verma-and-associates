import { COLORS, FONTS } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/data";
import { scrollToSection } from "../../utils/helpers";
import ScaleIcon from "../ui/ScaleIcon";

export default function Footer() {
  return (
    <footer style={{ padding: "40px clamp(16px, 5vw, 80px)", borderTop: `1px solid ${COLORS.darkBorder}`, background: "#060607" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollToSection("hero")}>
          <ScaleIcon size={24} />
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: 13, color: COLORS.gold, letterSpacing: 3 }}>VERMA LAW ASSOCIATES</div>
            <div style={{ fontFamily: FONTS.heading, fontSize: 9, color: COLORS.textMuted, letterSpacing: 2 }}>INDORE, MADHYA PRADESH</div>
          </div>
        </div>
        <div style={{ color: COLORS.textMuted, fontSize: 12, fontFamily: FONTS.heading, letterSpacing: 1, textAlign: "center" }}>
          © {new Date().getFullYear()} Verma Law Associates. All rights reserved.<br />
          <span style={{ fontSize: 10 }}>302, Block B, Indavar House, Tukoganj, Indore – 452001</span>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => scrollToSection(id)}
              style={{ background: "none", border: "none", color: COLORS.textMuted, fontSize: 10, fontFamily: FONTS.heading, letterSpacing: 2, cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
            >{label.toUpperCase()}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
