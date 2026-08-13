/**
 * Snapt Design System — StatusTag.
 * Ported verbatim from _ds_bundle.js (components/display/StatusTag.jsx).
 * Tinted capsule + dot + 800-weight label.
 */

export type StatusTone = 'live' | 'soon' | 'ready' | 'calm';

const TONE: Record<StatusTone, { bg: string; fg: string; dot: string }> = {
  live: { bg: '#E7F8EE', fg: '#1E7A45', dot: '#1EC46F' },
  soon: { bg: '#FFF9EC', fg: '#8A6800', dot: '#E0A400' },
  ready: { bg: '#E9F3FF', fg: '#1F5FA8', dot: '#3E8BE0' },
  calm: { bg: '#F1EEE7', fg: '#6F6A60', dot: '#B8B2A6' },
};

export default function StatusTag({ tone = 'calm', label }: { tone?: StatusTone; label: string }) {
  const t = TONE[tone] || TONE.calm;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: t.bg,
        height: 24,
        padding: '0 9px',
        borderRadius: 12,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 3, background: t.dot }} />
      <span
        style={{
          fontSize: 10.5,
          fontWeight: 800,
          letterSpacing: 0.2,
          color: t.fg,
          fontFamily: 'var(--font-sans)',
        }}
      >
        {label}
      </span>
    </span>
  );
}
