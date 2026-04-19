import { COLORS } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { fadeUpStyle } from "../utils/helpers";
import { CORE_TEAM } from "../constants/data";
import SectionHeader from "../components/ui/SectionHeader";
import CoreTeamCard from "../components/ui/CoreTeamCard";

export default function CoreTeamSection() {
  const [ref, inView] = useInView();
  return (
    <section id="core-team" style={{ padding: "100px clamp(16px, 5vw, 80px)", background: COLORS.dark, borderTop: `1px solid ${COLORS.darkBorder}` }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={fadeUpStyle(inView)}><SectionHeader label="LEGAL PROFESSIONALS" heading="Core Team" /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {CORE_TEAM.map((member, i) => (
            <CoreTeamCard key={member.name} member={member} style={fadeUpStyle(inView, i * 0.15)} />
          ))}
        </div>
      </div>
    </section>
  );
}
