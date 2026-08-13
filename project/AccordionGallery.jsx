// Adapted from React Bits <AccordionGallery /> — plain JSX, inline styles, gsap from window.gsap
const { useRef, useEffect, useState, useCallback } = React;

const hexRgba = (hex, a) => {
  let h = String(hex || '').replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h || '000000', 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
};

function AccordionGallery({
  items, defaultIndex = 2, accentColor = '#ffffff', overlayColor = '#060010', textColor = '#ffffff',
  height = 460, gap = 10, radius = 16, expandRatio = 0.52, orientation = 'horizontal',
  duration = 0.6, ease = 'power3.out', parallax = 0.5, tilt = 8, stagger = 0.06,
  trigger = 'hover', showLabels = true, grayscale = true, className = '',
}) {
  const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
  const bool = (v, d) => (v === undefined || v === null || v === '' ? d : v === true || v === 'true');
  defaultIndex = num(defaultIndex, 2); height = num(height, 460); gap = num(gap, 10);
  radius = num(radius, 16); expandRatio = num(expandRatio, 0.52); duration = num(duration, 0.6);
  parallax = num(parallax, 0.5); tilt = num(tilt, 8); stagger = num(stagger, 0.06);
  showLabels = bool(showLabels, true); grayscale = bool(grayscale, true);

  const list = Array.isArray(items) && items.length ? items : [];
  const count = list.length;
  const vertical = orientation === 'vertical';

  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), Math.max(count - 1, 0)));
  const [focusIdx, setFocusIdx] = useState(-1);
  const [narrow, setNarrow] = useState(false);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 520px)');
    const on = () => setNarrow(mq.matches);
    mq.addEventListener('change', on); on();
    return () => mq.removeEventListener('change', on);
  }, []);

  const stack = vertical || narrow;

  const applyLayout = useCallback((animate) => {
    const gsap = window.gsap;
    const panels = panelRefs.current;
    if (!panels.length || !gsap || !count) return;
    const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
    const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
    const mediaSize = mediaSizeRef.current;
    if (tlRef.current) tlRef.current.kill();
    const dur = animate && !prefersReduced ? duration : 0;
    const tl = gsap.timeline();

    panels.forEach((panel, i) => {
      if (!panel) return;
      const isActive = i === active;
      const media = mediaRefs.current[i];
      const bar = barRefs.current[i];
      const text = textRefs.current[i];
      const rot = isActive ? 0 : i < active ? tilt : -tilt;
      const rotProp = stack ? { rotateX: 0, rotateY: 0 } : (vertical ? { rotateX: -rot } : { rotateY: rot });
      tl.to(panel, Object.assign({ flexGrow: isActive ? grow : 1, duration: dur, ease }, rotProp), 0);

      if (media) {
        const drift = Math.max(-1.5, Math.min(1.5, active - i));
        const shift = drift * parallax * mediaSize * 0.06;
        tl.to(media, {
          xPercent: -50, yPercent: -50,
          x: stack ? 0 : (isActive ? 0 : shift),
          y: stack ? (isActive ? 0 : shift) : 0,
          filter: 'grayscale(' + (grayscale ? (isActive ? 0 : 1) : 0) + ')',
          duration: dur, ease,
        }, 0);
        const dim = media.parentElement && media.parentElement.querySelector('[data-ag-dim]');
        if (dim) tl.to(dim, { opacity: isActive ? 0 : 0.35, duration: dur, ease }, 0);
      }

      if (showLabels && bar && text) {
        if (isActive) tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
        else tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
      }
    });
    tlRef.current = tl;
  }, [active, count, expandRatio, duration, ease, vertical, stack, tilt, parallax, grayscale, showLabels, stagger, prefersReduced]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = (vertical || narrow) ? rect.height : rect.width;
      const usable = Math.max(total - gap * Math.max(count - 1, 0), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      applyLayout(!firstRunRef.current);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical, narrow]);

  useEffect(() => { applyLayout(!firstRunRef.current); firstRunRef.current = false; }, [applyLayout]);
  useEffect(() => () => { if (tlRef.current) tlRef.current.kill(); }, []);

  const handleClick = (i, e) => { if (i !== active) { e.preventDefault(); setActive(i); } };
  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setActive((i + 1) % count); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); setActive((i - 1 + count) % count); }
  };

  const overlayGradient = 'linear-gradient(180deg, transparent 45%, ' + hexRgba(overlayColor, 0.78) + ' 100%)';
  const abs = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

  return React.createElement('div', {
    ref: rootRef, className, role: 'list', 'aria-label': 'Portfolio gallery',
    style: {
      display: 'flex', flexDirection: stack ? 'column' : 'row', width: '100%', maxWidth: '100%',
      perspective: stack ? 'none' : '1400px', gap: gap + 'px',
      height: stack ? 'auto' : (vertical ? Math.round(height * 1.6) + 'px' : height + 'px'),
    },
  }, list.map((item, i) => {
    const isActive = i === active;
    const Tag = item.link ? 'a' : 'div';
    return React.createElement(Tag, {
      key: i,
      ref: (el) => { panelRefs.current[i] = el; },
      href: item.link || undefined,
      onClick: (e) => handleClick(i, e),
      onMouseEnter: () => { if (trigger === 'hover' && !stack) setActive(i); },
      onFocus: () => { setFocusIdx(i); setActive(i); },
      onBlur: () => setFocusIdx(-1),
      onKeyDown: (e) => handleKeyDown(i, e),
      role: 'listitem', tabIndex: 0,
      'aria-current': isActive ? 'true' : undefined,
      'aria-label': item.label,
      style: {
        position: 'relative', display: 'block', minWidth: 0, minHeight: stack ? '96px' : 0,
        flex: '1 1 0', cursor: 'pointer', overflow: 'hidden', background: '#1A1A1A',
        textDecoration: 'none', outline: 'none', borderRadius: radius + 'px',
        transformStyle: 'preserve-3d', transformOrigin: 'center',
        boxShadow: focusIdx === i
          ? '0 0 0 3px ' + accentColor + ', 0 10px 30px -18px rgba(0,0,0,0.8)'
          : '0 10px 30px -18px rgba(0,0,0,0.8)',
        willChange: 'flex-grow, transform',
      },
    },
      React.createElement('span', { style: Object.assign({}, abs, { overflow: 'hidden', borderRadius: 'inherit' }) },
        React.createElement('span', {
          ref: (el) => { mediaRefs.current[i] = el; },
          style: {
            position: 'absolute', top: '50%', left: '50%',
            width: stack ? '100%' : 'var(--ag-media-size, 320px)',
            height: stack ? 'var(--ag-media-size, 320px)' : '100%',
            filter: 'grayscale(1)', willChange: 'transform, filter',
          },
        },
          React.createElement('img', {
            src: item.image, alt: item.alt || item.label || '', draggable: false,
            style: { display: 'block', width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' },
          })
        ),
        React.createElement('span', { 'data-ag-dim': 'true', 'aria-hidden': 'true', style: Object.assign({}, abs, { pointerEvents: 'none', background: overlayColor, opacity: 0.35 }) }),
        React.createElement('span', { 'aria-hidden': 'true', style: Object.assign({}, abs, { pointerEvents: 'none', background: overlayGradient }) })
      ),
      showLabels ? React.createElement('span', {
        'aria-hidden': 'true',
        style: { position: 'absolute', bottom: 20, left: 20, right: 20, zIndex: 2, display: 'flex', alignItems: 'center', gap: 12, pointerEvents: 'none' },
      },
        React.createElement('span', {
          ref: (el) => { barRefs.current[i] = el; },
          style: { height: 26, width: 3, flex: 'none', borderRadius: 3, opacity: 0, background: accentColor, boxShadow: '0 0 12px ' + hexRgba(accentColor, 0.6) },
        }),
        React.createElement('span', {
          ref: (el) => { textRefs.current[i] = el; },
          style: {
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            fontSize: 'clamp(15px,1.4vw,20px)', fontWeight: 700, letterSpacing: '0.01em',
            opacity: 0, color: textColor, textShadow: '0 2px 14px rgba(0,0,0,0.55)',
          },
        }, item.label)
      ) : null
    );
  }));
}

module.exports = { AccordionGallery };
window.AccordionGallery = AccordionGallery;
