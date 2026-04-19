import { COLORS, FONTS } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { fadeUpStyle, scrollToSection } from "../utils/helpers";
import ScaleIcon from "../components/ui/ScaleIcon";
import GoldButton from "../components/ui/GoldButton";

export default function HeroSection() {
  const [ref, inView] = useInView(0.1);

  return (
<section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 24px 60px", background: `linear-gradient(160deg, #FAFAF8 0%, #F2EDE3 60%, #EDE5D6 100%)` }}>      {/* BG lines */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", top: `${10 + i * 12}%`, left: "-10%", right: "-10%", height: 1, background: COLORS.gold, transform: `rotate(${-3 + i * 0.8}deg)` }} />
        ))}
      </div>
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.gold}08, transparent 70%)`, pointerEvents: "none" }} />

      <div ref={ref} style={{ textAlign: "center", maxWidth: 900, position: "relative", zIndex: 1, ...fadeUpStyle(inView) }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24, animation: "fadeInDown 1s ease" }}>
          <ScaleIcon size={56} />
        </div>
        <div style={{ fontFamily: FONTS.heading, fontSize: "clamp(16px, 1.5vw, 13px)", letterSpacing: 6, color: COLORS.gold, marginBottom: 20 }}>
          ESTABLISHED WITH INTEGRITY
        </div>
        <h1 style={{ fontFamily: FONTS.display, fontSize: "clamp(42px, 7vw, 96px)", fontWeight: 900, lineHeight: 1.05, color: COLORS.cream, marginBottom: 8 }}>ADITYA VERMA </h1>
        <h1 style={{ fontFamily: FONTS.display, fontSize: "clamp(42px, 7vw, 96px)", fontWeight: 900, lineHeight: 1.05, background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 32 }}>AND ASSOCIATES</h1>
        <div style={{ width: 80, height: 1, background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`, margin: "0 auto 32px" }} />
        <p style={{ fontSize: "clamp(15px, 2vw, 20px)", color: COLORS.textMuted, maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300 }}>
          Dedicated legal counsel rooted in integrity, precision, and unwavering commitment to justice. Serving clients across Madhya Pradesh High Court jurisdiction.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <GoldButton onClick={() => scrollToSection("contact")} variant="solid">CONSULT NOW</GoldButton>
          <GoldButton onClick={() => scrollToSection("about")} variant="outline">LEARN MORE</GoldButton>
        </div>
      </div>
    </section>
  );
}
