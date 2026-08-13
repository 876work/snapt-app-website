// Adapted from React Bits <MaskedHeading /> — plain JSX, inline styles, gsap from window.gsap
const { useCallback, useEffect, useMemo, useRef } = React;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
let __mhSeq = 0;

function MaskedHeading({
  text = 'Designed in the details', tag = 'h2', mediaType = 'image', src = '', poster = '',
  fillScale = 1.25, parallax = 26, drift = 18, brightness = 1, saturation = 1, grayscale = false,
  reveal = 'rise', duration = 1.1, stagger = 0.09, trigger = 'view', align = 'center', plate = '', mediaOpacity = 1,
  weight = 700, tracking = -0.03, lineHeight = 1.06, textScale = 0.115, className = '', style, ...rest
}) {
  fillScale = Number(fillScale); parallax = Number(parallax); drift = Number(drift);
  brightness = Number(brightness); saturation = Number(saturation); duration = Number(duration);
  stagger = Number(stagger); tracking = Number(tracking); lineHeight = Number(lineHeight);
  textScale = Number(textScale); weight = Number(weight); mediaOpacity = Number(mediaOpacity);
  grayscale = grayscale === true || grayscale === 'true';

  const rootRef = useRef(null), measureRef = useRef(null), revealRef = useRef(null), mediaRef = useRef(null);
  const wordRefs = useRef([]), baseRefs = useRef([]), glyphRefs = useRef([]);
  const tweenRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const clipId = useMemo(() => 'mh-' + (++__mhSeq) + '-' + Math.random().toString(36).slice(2, 7), []);
  const words = useMemo(() => String(text).split(/\s+/).filter(Boolean), [text]);

  const settingsRef = useRef({});
  settingsRef.current = { fillScale, parallax, drift, brightness, saturation, grayscale, textScale };

  const place = useCallback(() => {
    const root = rootRef.current, media = mediaRef.current;
    if (!root || !media) return;
    const s = settingsRef.current, W = root.clientWidth, H = root.clientHeight, off = offsetRef.current;
    const maxX = Math.max(0, ((s.fillScale - 1) / 2) * W), maxY = Math.max(0, ((s.fillScale - 1) / 2) * H);
    media.style.transform = 'translate3d(' + clamp(off.x, -maxX, maxX).toFixed(2) + 'px, ' + clamp(off.y, -maxY, maxY).toFixed(2) + 'px, 0) scale(' + s.fillScale + ')';
    media.style.filter = 'brightness(' + s.brightness + ') saturate(' + s.saturation + ')' + (s.grayscale ? ' grayscale(1)' : '');
  }, []);

  const sync = useCallback(() => {
    const root = rootRef.current, measure = measureRef.current;
    if (!root || !measure) return;
    const s = settingsRef.current;
    root.style.fontSize = clamp(root.clientWidth * s.textScale, 20, 200).toFixed(1) + 'px';
    const cs = window.getComputedStyle(measure);
    for (let i = 0; i < wordRefs.current.length; i += 1) {
      const box = wordRefs.current[i], base = baseRefs.current[i], glyph = glyphRefs.current[i];
      if (!box || !base || !glyph) continue;
      glyph.setAttribute('x', String(box.offsetLeft));
      glyph.setAttribute('y', String(base.offsetTop));
      glyph.style.fontFamily = cs.fontFamily; glyph.style.fontSize = cs.fontSize;
      glyph.style.fontWeight = cs.fontWeight; glyph.style.fontStyle = cs.fontStyle;
      glyph.style.letterSpacing = cs.letterSpacing;
    }
    place();
  }, [place]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(root);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync).catch(() => {});
    let raf = 0, last = performance.now(), clock = 0;
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now; clock += dt;
      const s = settingsRef.current, off = offsetRef.current;
      const dx = Math.sin(clock * 0.21) * s.drift, dy = Math.cos(clock * 0.17) * s.drift * 0.6;
      const ease = 1 - Math.exp(-dt / 0.18);
      off.x += (off.tx + dx - off.x) * ease;
      off.y += (off.ty + dy - off.y) * ease;
      place();
      raf = requestAnimationFrame(frame);
    };
    const onMove = (e) => {
      const s = settingsRef.current;
      if (s.parallax <= 0) return;
      const r = root.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / (r.width || 1)) * 2 - 1;
      const ny = ((e.clientY - r.top) / (r.height || 1)) * 2 - 1;
      offsetRef.current.tx = clamp(nx, -1, 1) * -s.parallax;
      offsetRef.current.ty = clamp(ny, -1, 1) * -s.parallax;
    };
    const onLeave = () => { offsetRef.current.tx = 0; offsetRef.current.ty = 0; };
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, [place, sync]);

  useEffect(() => { sync(); }, [sync, words, tag, align, weight, tracking, lineHeight, textScale]);

  useEffect(() => {
    const root = rootRef.current, layer = revealRef.current;
    if (!root || !layer) return;
    const glyphs = glyphRefs.current.filter(Boolean);
    if (!glyphs.length) return;
    const gsap = window.gsap;
    const riseDistance = () => (parseFloat(window.getComputedStyle(root).fontSize) || 48) * 1.15;
    const settle = () => {
      if (gsap) { gsap.set(glyphs, { y: 0 }); gsap.set(layer, { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }); }
      else { layer.style.opacity = '1'; layer.style.clipPath = 'inset(0% 0% 0% 0%)'; }
    };
    const rest = () => {
      if (!gsap) return;
      if (reveal === 'rise') gsap.set(glyphs, { y: riseDistance() });
      else if (reveal === 'wipe') gsap.set(layer, { clipPath: 'inset(0% 100% 0% 0%)' });
      else if (reveal === 'fade') gsap.set(layer, { opacity: 0, scale: 1.08 });
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reveal === 'none' || reduce || !gsap) { settle(); return; }
    const play = () => {
      if (tweenRef.current) tweenRef.current.kill();
      if (reveal === 'rise') {
        gsap.set(layer, { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        tweenRef.current = gsap.fromTo(glyphs, { y: riseDistance() }, { y: 0, duration, stagger, ease: 'power4.out', overwrite: 'auto' });
      } else if (reveal === 'wipe') {
        gsap.set(glyphs, { y: 0 });
        const state = { p: 100 };
        tweenRef.current = gsap.to(state, { p: 0, duration, ease: 'power3.inOut', overwrite: 'auto',
          onUpdate: () => { layer.style.clipPath = 'inset(0% ' + state.p + '% 0% 0%)'; } });
      } else {
        gsap.set(glyphs, { y: 0 });
        tweenRef.current = gsap.fromTo(layer, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration, ease: 'power3.out', overwrite: 'auto' });
      }
    };
    if (trigger === 'hover') {
      settle();
      root.addEventListener('pointerenter', play);
      return () => { root.removeEventListener('pointerenter', play); if (tweenRef.current) tweenRef.current.kill(); };
    }
    if (trigger === 'view') {
      settle(); rest();
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { play(); io.disconnect(); }
      }, { threshold: 0.25 });
      io.observe(root);
      return () => { io.disconnect(); if (tweenRef.current) tweenRef.current.kill(); };
    }
    play();
    return () => { if (tweenRef.current) tweenRef.current.kill(); };
  }, [reveal, trigger, duration, stagger, words]);

  const TagAny = tag || 'h2';
  const abs = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'block' };
  return React.createElement(TagAny, {
    ref: rootRef,
    className,
    style: Object.assign({
      position: 'relative', width: '100%', margin: 0, padding: 0, WebkitFontSmoothing: 'antialiased',
      textWrap: 'balance', textAlign: align, fontWeight: weight, letterSpacing: tracking + 'em', lineHeight,
    }, style),
    ...rest,
  },
    React.createElement('span', { ref: measureRef, style: { color: 'transparent' } },
      words.map((word, i) => React.createElement('span', {
        key: word + '-' + i,
        ref: (el) => { wordRefs.current[i] = el; },
        style: { display: 'inline-block', whiteSpace: 'pre' },
      },
        word + (i < words.length - 1 ? '\u00a0' : ''),
        React.createElement('i', { ref: (el) => { baseRefs.current[i] = el; }, style: { display: 'inline-block', width: 0, height: 0 } })
      ))
    ),
    React.createElement('svg', { style: { position: 'absolute', width: 0, height: 0, overflow: 'hidden' }, 'aria-hidden': 'true', focusable: 'false' },
      React.createElement('defs', null,
        React.createElement('clipPath', { id: clipId, clipPathUnits: 'userSpaceOnUse' },
          words.map((word, i) => React.createElement('text', { key: word + '-' + i, ref: (el) => { glyphRefs.current[i] = el; } }, word))
        )
      )
    ),
    React.createElement('span', { ref: revealRef, style: Object.assign({}, abs, { pointerEvents: 'none' }) },
      React.createElement('span', { style: Object.assign({}, abs, { clipPath: 'url(#' + clipId + ')', background: plate || undefined }) },
        React.createElement('span', { ref: mediaRef, style: Object.assign({}, abs, { willChange: 'transform, filter', opacity: mediaOpacity }) },
          mediaType === 'video'
            ? React.createElement('video', { style: { display: 'block', width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }, src, poster, autoPlay: true, muted: true, loop: true, playsInline: true })
            : React.createElement('img', { style: { display: 'block', width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }, src, alt: '', draggable: false })
        )
      )
    )
  );
}

module.exports = { MaskedHeading };
window.MaskedHeading = MaskedHeading;
