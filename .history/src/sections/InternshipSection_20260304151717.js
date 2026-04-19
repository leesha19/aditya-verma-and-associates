import { COLORS, FONTS } from "../constants/theme";
import { useInView } from "../hooks/useInView";
import { useForm } from "../hooks/useForm";
import { fadeUpStyle } from "../utils/helpers";
import { INTERNSHIP_YEAR_OPTIONS } from "../constants/data";
import SectionHeader from "../components/ui/SectionHeader";
import GoldButton from "../components/ui/GoldButton";

const INITIAL = { name: "", email: "", phone: "", university: "", year: "", message: "" };
const FIELDS = [
  { key: "name",       label: "Full Name",               type: "text",  placeholder: "Your full name" },
  { key: "email",      label: "Email Address",           type: "email", placeholder: "your@email.com" },
  { key: "phone",      label: "Phone Number",            type: "tel",   placeholder: "+91 XXXXX XXXXX" },
  { key: "university", label: "University / Law School", type: "text",  placeholder: "Name of institution" },
];

const inputStyle = { width: "100%", padding: "14px 16px", background: "#111214", border: "1px solid #1E1E22", color: "#D4CFC6", fontSize: 15, resize: "vertical" };

function Label({ children }) {
  return <div style={{ fontFamily: FONTS.heading, fontSize: 10, letterSpacing: 3, color: COLORS.gold, marginBottom: 8 }}>{children}</div>;
}

export default function InternshipSection() {
  const [ref, inView] = useInView();
  const { values, handleChange, handleSubmit, submitted } = useForm(INITIAL, async () => {
    await new Promise((r) => setTimeout(r, 400));
  });

  return (
    <section id="internship" style={{ padding: "100px clamp(16px, 5vw, 80px)", background: "#0D0D10", borderTop: `1px solid ${COLORS.darkBorder}` }}>
      <div ref={ref} style={{ maxWidth: 800, margin: "0 auto", ...fadeUpStyle(inView) }}>
        <SectionHeader label="JOIN OUR TEAM" heading="Internship Program" />
        <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.8, marginBottom: 48, marginTop: -32 }}>
          Gain practical experience under the guidance of an experienced judicial patron and a dynamic lead advocate.
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "60px 40px", background: COLORS.darkCard, border: `1px solid ${COLORS.gold}40` }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚖</div>
            <h3 style={{ fontFamily: FONTS.display, fontSize: 28, color: COLORS.cream, marginBottom: 12 }}>Application Received</h3>
            <p style={{ color: COLORS.textMuted, fontSize: 16 }}>Thank you. We will review your application and contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {FIELDS.map((f) => (
                <div key={f.key}>
                  <Label>{f.label.toUpperCase()}</Label>
                  <input type={f.type} name={f.key} placeholder={f.placeholder} required value={values[f.key]} onChange={handleChange} style={inputStyle} />
                </div>
              ))}
            </div>
            <div>
              <Label>YEAR OF STUDY</Label>
              <select name="year" value={values.year} onChange={handleChange} required style={{ ...inputStyle, color: values.year ? "#D4CFC6" : "#6B6760" }}>
                <option value="">Select year of study</option>
                {INTERNSHIP_YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <Label>WHY DO YOU WANT TO INTERN WITH US?</Label>
              <textarea name="message" rows={5} placeholder="Briefly describe your interest..." required value={values.message} onChange={handleChange} style={inputStyle} />
            </div>
            <GoldButton type="submit" variant="solid">SUBMIT APPLICATION</GoldButton>
          </form>
        )}
      </div>
    </section>
  );
}
