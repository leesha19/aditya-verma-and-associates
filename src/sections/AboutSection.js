import { COLORS } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { fadeUpStyle } from "../utils/helpers";
import { PATRON } from "../constants/data";
import SectionHeader from "../components/ui/SectionHeader";
import ProfileCard from "../components/ui/ProfileCard";

export default function AboutSection() {
  const [ref, inView] = useInView();
  return (
    <section id="about" style={{ padding: "100px clamp(16px, 5vw, 80px)", borderTop: `1px solid ${COLORS.darkBorder}`, background: `linear-gradient(180deg, ${COLORS.dark}, #0D0D10)` }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={fadeUpStyle(inView)}><SectionHeader label="ABOUT US" heading="Our Distinguished Patron" /></div>
        <div style={fadeUpStyle(inView, 0.2)}><ProfileCard person={PATRON} flip={false} /></div>
      </div>
    </section>
  );
}
