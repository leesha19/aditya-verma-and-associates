import { COLORS, FONTS } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { fadeUpStyle } from "../utils/helpers";
import { PATRON, LEAD_ADVOCATE, CONTACT } from "../constants/data";
import SectionHeader from "../components/ui/SectionHeader";
import ContactCard from "../components/ui/ContactCard";

const CARDS = [
  { icon: "⚖", title: PATRON.name,         lines: [PATRON.phone, "Patron & Former Judge, MP High Court"] },
  { icon: "⚖", title: LEAD_ADVOCATE.name,  lines: [LEAD_ADVOCATE.phone, LEAD_ADVOCATE.email] },
  { icon: "📍", title: "Office Address",    lines: [CONTACT.address.line1, CONTACT.address.line2, CONTACT.address.line3, CONTACT.address.line4] },
];

export default function ContactSection() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" style={{ padding: "100px clamp(16px, 5vw, 80px)", background: COLORS.dark, borderTop: `1px solid ${COLORS.darkBorder}` }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", ...fadeUpStyle(inView) }}>
        <SectionHeader label="REACH US" heading="Contact Us" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
          {CARDS.map((card, i) => (
            <ContactCard key={card.title} {...card} style={fadeUpStyle(inView, i * 0.1)} />
          ))}
        </div>

        <div style={fadeUpStyle(inView, 0.3)}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: COLORS.gold }} />
            <span style={{ fontFamily: FONTS.heading, fontSize: 11, letterSpacing: 4, color: COLORS.gold }}>FIND US ON MAP</span>
          </div>
          <div style={{ border: `1px solid ${COLORS.darkBorder}`, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${COLORS.gold}, #E8C97A, ${COLORS.gold})`, zIndex: 1 }} />
            <iframe title="Office Location" src={CONTACT.mapEmbedUrl} width="100%" height="420"
              style={{ border: 0, display: "block", filter: "grayscale(100%) invert(90%) contrast(85%)" }}
              allowFullScreen loading="lazy"
            />
          </div>
          <div style={{ marginTop: 12, textAlign: "right" }}>
            <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer"
              style={{ color: COLORS.gold, fontSize: 13, fontFamily: FONTS.heading, letterSpacing: 2, textDecoration: "none" }}>
              OPEN IN GOOGLE MAPS →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
