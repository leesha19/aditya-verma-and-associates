import { COLORS } from "../../constants/theme";

export default function ScaleIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Scales of Justice">
      <line x1="20" y1="4"  x2="20" y2="36" stroke={COLORS.gold} strokeWidth="1.5" />
      <line x1="4"  y1="10" x2="36" y2="10" stroke={COLORS.gold} strokeWidth="1.5" />
      <circle cx="9"  cy="18" r="5" stroke={COLORS.gold} strokeWidth="1.2" fill="none" />
      <circle cx="31" cy="18" r="5" stroke={COLORS.gold} strokeWidth="1.2" fill="none" />
      <line x1="4"  y1="10" x2="9"  y2="18" stroke={COLORS.gold} strokeWidth="1.2" />
      <line x1="36" y1="10" x2="31" y2="18" stroke={COLORS.gold} strokeWidth="1.2" />
      <line x1="14" y1="36" x2="26" y2="36" stroke={COLORS.gold} strokeWidth="1.5" />
    </svg>
  );
}
