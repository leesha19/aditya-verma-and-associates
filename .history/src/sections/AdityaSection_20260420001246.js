import { useInView } from "../hooks/useInView";
import { fadeUpStyle } from "../utils/helpers";
import { LEAD_ADVOCATE } from "../constants/data";
import SectionHeader from "../components/ui/SectionHeader";
import ProfileCard from "../components/ui/ProfileCard";

export default function AdityaSection() {
  const [ref, inView] = useInView();
  return (
    <section id="aditya" style={{ padding: "100px clamp(16px, 5vw, 80px)", background: "#0D0D10" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={fadeUpStyle(inView)}><SectionHeader label="LEAD COUNSEL" heading="Principal Advocate" /></div>
        <div style={fadeUpStyle(inView, 0.2)}><ProfileCard person={LEAD_ADVOCATE} flip /></div>
      </div>
    </section>
  );
}
