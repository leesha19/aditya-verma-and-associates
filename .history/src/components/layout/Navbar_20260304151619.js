import { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/data";
import { useScrolled } from "../../hooks/useScrolled";
import { scrollToSection } from "../../utils/helpers";
import ScaleIcon from "../ui/ScaleIcon";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => { scrollToSection(id); setMenuOpen(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? `${COLORS.dark}F0` : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.darkBorder}` : "none",
      transition: "all 0.4s ease",
      padding: "0 clamp(16px, 4vw, 60px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollToSection("hero")}>
          <ScaleIcon size={32} />
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: 15, color: COLORS.gold, letterSpacing: 3, lineHeight: 1.2 }}>VERMA</div>
            <div style={{ fontFamily: FONTS.heading, fontSize: 10, color: COLORS.textMuted, letterSpacing: 4 }}>LAW ASSOCIATES</div>
          </div>
        </div>

        {/* Desktop */}
        <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="nav-link" onClick={() => handleNav(id)}
              style={{ background: "none", border: "none", color: COLORS.text, fontSize: 13, letterSpacing: 2, fontFamily: FONTS.heading, cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.text)}
            >{label.toUpperCase()}</button>
          ))}
        </div>

        {/* Hamburger */}
        <button id="hamburger" onClick={() => setMenuOpen((p) => !p)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5 }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map((i) => <div key={i} style={{ width: 24, height: 1.5, background: COLORS.gold }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: `${COLORS.darkCard}F8`, backdropFilter: "blur(20px)", padding: "20px 24px 30px", borderTop: `1px solid ${COLORS.darkBorder}` }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => handleNav(id)}
              style={{ display: "block", background: "none", border: "none", borderBottom: `1px solid ${COLORS.darkBorder}`, color: COLORS.text, fontSize: 14, letterSpacing: 2, fontFamily: FONTS.heading, cursor: "pointer", padding: "12px 0", width: "100%", textAlign: "left" }}
            >{label.toUpperCase()}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
