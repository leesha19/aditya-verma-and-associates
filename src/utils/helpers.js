export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function fadeUpStyle(inView, delay = 0) {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  };
}
