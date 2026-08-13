/**
 * Snapt Design System — VerifiedBadge.
 * Ported verbatim from _ds_bundle.js (components/display/VerifiedBadge.jsx).
 * The one place a ✓ glyph is allowed.
 */

export default function VerifiedBadge() {
  return (
    <span
      style={{
        background: 'var(--yellow)',
        borderRadius: 6,
        padding: '2px 6px',
        fontSize: 9,
        fontWeight: 800,
        color: 'var(--ink)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      ✓ VERIFIED
    </span>
  );
}
