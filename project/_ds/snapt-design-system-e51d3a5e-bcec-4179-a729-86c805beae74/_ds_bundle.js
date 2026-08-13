/* @ds-bundle: {"format":4,"namespace":"SnaptDesignSystem_e51d3a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CodeInput","sourcePath":"components/core/CodeInput.jsx"},{"name":"NavPill","sourcePath":"components/core/NavPill.jsx"},{"name":"RadioDot","sourcePath":"components/core/RadioDot.jsx"},{"name":"ScreenHeader","sourcePath":"components/core/ScreenHeader.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"TextField","sourcePath":"components/core/TextField.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"InfoBanner","sourcePath":"components/display/InfoBanner.jsx"},{"name":"MonthCalendar","sourcePath":"components/display/MonthCalendar.jsx"},{"name":"SectionTitle","sourcePath":"components/display/SectionTitle.jsx"},{"name":"SlideToConfirm","sourcePath":"components/display/SlideToConfirm.jsx"},{"name":"StatusTag","sourcePath":"components/display/StatusTag.jsx"},{"name":"VerifiedBadge","sourcePath":"components/display/VerifiedBadge.jsx"},{"name":"BoltIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"HomeIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"BookingsIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"MessagesIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"ProfileIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"BackChevron","sourcePath":"components/icons/Icons.jsx"},{"name":"ArrowRight","sourcePath":"components/icons/Icons.jsx"},{"name":"OccasionIcon","sourcePath":"components/icons/Icons.jsx"},{"name":"Icons","sourcePath":"components/icons/Icons.jsx"}],"sourceHashes":{"components/core/Button.jsx":"4443e5d9e39e","components/core/CodeInput.jsx":"fae6f05627a5","components/core/NavPill.jsx":"5904bf371536","components/core/RadioDot.jsx":"7c39cf99bb12","components/core/ScreenHeader.jsx":"112e1e86224d","components/core/SegmentedControl.jsx":"16c3162c9c88","components/core/TextField.jsx":"a993f2a11154","components/display/Avatar.jsx":"1215a33826ca","components/display/Card.jsx":"ebf9b9d92856","components/display/Divider.jsx":"bdaf6b46ac60","components/display/InfoBanner.jsx":"4410951119c1","components/display/MonthCalendar.jsx":"d368eaee1e84","components/display/SectionTitle.jsx":"306c7db9cfa6","components/display/SlideToConfirm.jsx":"23b9ebfe6eac","components/display/StatusTag.jsx":"82b5de3c4606","components/display/VerifiedBadge.jsx":"b642766b18e4","components/icons/Icons.jsx":"0ced31f27443","ui_kits/snapt-app/HomeScreen.jsx":"194165394b70","ui_kits/snapt-app/LoginScreen.jsx":"023943deb2c1","ui_kits/snapt-app/OccasionScreen.jsx":"bdfd859dd63f","ui_kits/snapt-app/OnboardingScreen.jsx":"eeda8e25ed5c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SnaptDesignSystem_e51d3a = window.SnaptDesignSystem_e51d3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/CodeInput.jsx
try { (() => {
function CodeInput({
  length = 6,
  value = '',
  onChange
}) {
  const ref = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => ref.current && ref.current.focus(),
    style: {
      position: 'relative',
      cursor: 'text'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center'
    }
  }, Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      maxWidth: 58,
      height: 64,
      borderRadius: 14,
      border: '1.5px solid ' + (i === value.length ? 'var(--yellow)' : 'var(--border)'),
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)'
    }
  }, value[i] || ''))), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    value: value,
    onChange: e => onChange && onChange(e.target.value.replace(/\D/g, '').slice(0, length)),
    inputMode: "numeric",
    autoComplete: "one-time-code",
    style: {
      position: 'absolute',
      opacity: 0,
      height: 1,
      width: 1,
      left: 0,
      top: 0
    }
  }));
}
Object.assign(__ds_scope, { CodeInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeInput.jsx", error: String((e && e.message) || e) }); }

// components/core/RadioDot.jsx
try { (() => {
function RadioDot({
  selected
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 20,
      height: 20,
      borderRadius: 10,
      background: '#fff',
      boxSizing: 'border-box',
      border: selected ? '6px solid var(--yellow)' : '2px solid var(--grey-light)'
    }
  });
}
Object.assign(__ds_scope, { RadioDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RadioDot.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      background: 'var(--seg-bg)',
      borderRadius: 13,
      padding: 4
    }
  }, options.map(o => {
    const a = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => onChange && onChange(o.value),
      style: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        background: a ? 'var(--ink)' : 'transparent',
        color: a ? '#fff' : 'var(--grey)',
        fontSize: 13,
        fontWeight: a ? 800 : 600,
        boxShadow: a ? 'var(--shadow-seg)' : 'none'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      height: 52,
      borderRadius: 14,
      border: '1px solid var(--border)',
      background: '#fff',
      padding: '0 14px',
      fontSize: 14,
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextField.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function Avatar({
  tint = '#F1EEE7',
  name = '?',
  size = 46,
  photo
}) {
  const r = size * 0.3;
  if (photo) return /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: r,
      objectFit: 'cover',
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: r,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.4,
      fontWeight: 800,
      color: 'rgba(0,0,0,0.4)',
      fontFamily: 'var(--font-sans)'
    }
  }, (name || '?').charAt(0).toUpperCase()));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border)',
      padding: 16,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function Divider({
  label
}) {
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--divider)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--divider)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--grey-faint)',
      fontFamily: 'var(--font-sans)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--divider)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/InfoBanner.jsx
try { (() => {
function InfoBanner({
  text,
  tone = 'gold'
}) {
  const g = tone === 'gold';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      border: '1px solid ' + (g ? 'var(--yellow-soft-border)' : 'var(--error-soft-border)'),
      background: g ? 'var(--yellow-soft)' : 'var(--error-soft)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '17.5px',
      fontWeight: 600,
      color: g ? '#8A6800' : 'var(--error-dark)',
      fontFamily: 'var(--font-sans)'
    }
  }, text));
}
Object.assign(__ds_scope, { InfoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/InfoBanner.jsx", error: String((e && e.message) || e) }); }

// components/display/MonthCalendar.jsx
try { (() => {
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
function iso(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function MonthCalendar({
  flags = {},
  selected,
  onSelect
}) {
  const [month, setMonth] = React.useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });
  const weeks = React.useMemo(() => {
    const first = new Date(month.getFullYear(), month.getMonth(), 1);
    const dim = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    const cells = Array.from({
      length: first.getDay()
    }, () => null);
    for (let d = 1; d <= dim; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    while (cells.length % 7 !== 0) cells.push(null);
    const out = [];
    for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
    return out;
  }, [month]);
  const title = month.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric'
  });
  const nav = dir => /*#__PURE__*/React.createElement("button", {
    onClick: () => setMonth(m => new Date(m.getFullYear(), m.getMonth() + dir, 1)),
    style: {
      width: 34,
      height: 34,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "15",
    viewBox: "0 0 10 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir < 0 ? 'M8.5 1.5L2 8.5l6.5 7' : 'M1.5 1.5L8 8.5l-6.5 7',
    stroke: "#B4B1AA",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 14,
      boxShadow: 'var(--shadow-soft)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, nav(-1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.2
    }
  }, title), nav(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginBottom: 2
    }
  }, DOW.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--grey-light)'
    }
  }, d))), weeks.map((w, wi) => /*#__PURE__*/React.createElement("div", {
    key: wi,
    style: {
      display: 'flex'
    }
  }, w.map((day, di) => {
    if (!day) return /*#__PURE__*/React.createElement("span", {
      key: di,
      style: {
        flex: 1,
        padding: '3px 0'
      }
    });
    const k = iso(day),
      avail = flags[k],
      sel = selected === k;
    return /*#__PURE__*/React.createElement("button", {
      key: di,
      disabled: avail !== true,
      onClick: () => onSelect && onSelect(k),
      style: {
        flex: 1,
        padding: '3px 0',
        border: 'none',
        background: 'none',
        cursor: avail === true ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: sel ? '#FFB800' : 'none',
        fontSize: 13.5,
        fontWeight: sel ? 800 : avail === undefined ? 600 : 700,
        color: avail === undefined ? '#C6C3BC' : '#1A1A1A',
        fontFamily: 'var(--font-sans)'
      }
    }, day.getDate()), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 3,
        background: avail === true ? '#1B9A57' : avail === false ? '#D8D2C4' : 'transparent'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 10,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      background: '#1B9A57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--grey)'
    }
  }, "Creators available")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      background: '#D8D2C4'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--grey)'
    }
  }, "Fully booked"))));
}
Object.assign(__ds_scope, { MonthCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MonthCalendar.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.2,
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/display/SlideToConfirm.jsx
try { (() => {
const KNOB = 48,
  H = 58;
function SlideToConfirm({
  label,
  onConfirm,
  disabled,
  value,
  valueLabel
}) {
  const trackRef = React.useRef(null);
  const [x, setX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const drag = React.useRef(null);
  const max = () => {
    const w = trackRef.current ? trackRef.current.offsetWidth : 300;
    return Math.max(w - KNOB - 10, 1);
  };
  const onDown = e => {
    if (disabled || done) return;
    drag.current = {
      startX: e.clientX,
      base: x
    };
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);
  };
  const onMove = e => {
    if (!drag.current) return;
    setX(Math.min(Math.max(drag.current.base + e.clientX - drag.current.startX, 0), max()));
  };
  const onUp = () => {
    if (!drag.current) return;
    drag.current = null;
    setDragging(false);
    setX(v => {
      if (v > max() * 0.92) {
        setDone(true);
        onConfirm && onConfirm();
        return max();
      }
      return 0;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      opacity: disabled ? 0.45 : 1
    }
  }, value != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--ink)',
      borderRadius: 14,
      padding: '13px 16px',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.62)',
      fontFamily: 'var(--font-sans)'
    }
  }, valueLabel || "You're paying"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: '#fff',
      letterSpacing: -0.3,
      fontFamily: 'var(--font-sans)'
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    style: {
      position: 'relative',
      height: H,
      borderRadius: H / 2,
      background: '#fff',
      border: '1.5px solid var(--yellow-soft-border)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: x + KNOB + 10,
      borderRadius: H / 2,
      background: 'rgba(255,184,0,0.2)',
      transition: dragging ? 'none' : 'width .25s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--grey)',
      fontFamily: 'var(--font-sans)',
      zIndex: 1
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    style: {
      position: 'absolute',
      left: 5,
      transform: 'translateX(' + x + 'px)',
      width: KNOB,
      height: KNOB,
      borderRadius: KNOB / 2,
      background: 'var(--yellow)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'grab',
      touchAction: 'none',
      transition: dragging ? 'none' : 'transform .25s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    stroke: "#1A1A1A",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { SlideToConfirm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SlideToConfirm.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusTag.jsx
try { (() => {
const TONE = {
  live: {
    bg: '#E7F8EE',
    fg: '#1E7A45',
    dot: '#1EC46F'
  },
  soon: {
    bg: '#FFF9EC',
    fg: '#8A6800',
    dot: '#FFB800'
  },
  ready: {
    bg: '#E9F3FF',
    fg: '#1F5FA8',
    dot: '#3E8BE0'
  },
  calm: {
    bg: '#F1EEE7',
    fg: '#6F6A60',
    dot: '#B8B2A6'
  }
};
function StatusTag({
  tone = 'calm',
  label
}) {
  const t = TONE[tone] || TONE.calm;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      height: 24,
      padding: '0 9px',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: t.dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: 0.2,
      color: t.fg,
      fontFamily: 'var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusTag.jsx", error: String((e && e.message) || e) }); }

// components/display/VerifiedBadge.jsx
try { (() => {
function VerifiedBadge() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--yellow)',
      borderRadius: 6,
      padding: '2px 6px',
      fontSize: 9,
      fontWeight: 800,
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)'
    }
  }, "\u2713 VERIFIED");
}
Object.assign(__ds_scope, { VerifiedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/VerifiedBadge.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icons.jsx
try { (() => {
const S = p => ({
  width: p.size || 22,
  height: p.size || 22,
  viewBox: '0 0 24 24',
  fill: 'none'
});
function BoltIcon({
  size = 24,
  color = '#FFB800'
}) {
  return /*#__PURE__*/React.createElement("svg", S({
    size
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 2.5L5 13.2h5.6L9.4 21.5l9-11.2h-6.2l.8-7.8z",
    fill: color
  }));
}
function HomeIcon({
  color = '#1A1A1A',
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", S({
    size
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1v-9.5z",
    stroke: color,
    strokeWidth: "1.9",
    strokeLinejoin: "round"
  }));
}
function BookingsIcon({
  color = '#1A1A1A',
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", S({
    size
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3.4",
    y: "5.6",
    width: "17.2",
    height: "14.4",
    rx: "3",
    stroke: color,
    strokeWidth: "1.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.4 10h17.2",
    stroke: color,
    strokeWidth: "1.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v4M16 3v4",
    stroke: color,
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }));
}
function MessagesIcon({
  color = '#1A1A1A',
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", S({
    size
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6.5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H10.5L5 20.5V16.5H6a2 2 0 01-2-2v-8z",
    stroke: color,
    strokeWidth: "1.9",
    strokeLinejoin: "round"
  }));
}
function ProfileIcon({
  color = '#1A1A1A',
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", S({
    size
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8.5",
    r: "3.6",
    stroke: color,
    strokeWidth: "1.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20c.9-3.4 3.6-5.2 7-5.2s6.1 1.8 7 5.2",
    stroke: color,
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }));
}
function BackChevron({
  color = '#1A1A1A',
  w = 10,
  h = 17
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 10 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 1.5L2 8.5l6.5 7",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function ArrowRight({
  color = '#1A1A1A',
  size = 18,
  sw = 2.2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function OccasionIcon({
  occasion,
  size = 19
}) {
  const v = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none'
  };
  switch (occasion) {
    case 'Wedding':
      return /*#__PURE__*/React.createElement("svg", v, /*#__PURE__*/React.createElement("circle", {
        cx: "9.6",
        cy: "15",
        r: "4.6",
        stroke: "#E8A33D",
        strokeWidth: "2.2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "15.4",
        cy: "15",
        r: "4.6",
        stroke: "#F2C14E",
        strokeWidth: "2.2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12.5 4.2l2.1 2.6-2.1 2.3-2.1-2.3z",
        fill: "#6FD3E0"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10.4 6.8h4.2",
        stroke: "#fff",
        strokeWidth: "1",
        strokeLinecap: "round"
      }));
    case 'Events':
      return /*#__PURE__*/React.createElement("svg", v, /*#__PURE__*/React.createElement("rect", {
        x: "3.4",
        y: "5.6",
        width: "17.2",
        height: "14.4",
        rx: "3",
        fill: "#FFD98A"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3.4 8.6c0-1.7 1.3-3 3-3h11.2c1.7 0 3 1.3 3 3v1.8H3.4V8.6z",
        fill: "#E8863D"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "7.2",
        y: "2.8",
        width: "2",
        height: "4.2",
        rx: "1",
        fill: "#B96A20"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "14.8",
        y: "2.8",
        width: "2",
        height: "4.2",
        rx: "1",
        fill: "#B96A20"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "14.2",
        r: "1.5",
        fill: "#EF6F7E"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "15",
        cy: "14.2",
        r: "1.5",
        fill: "#6FD3E0"
      }));
    case 'Portraits':
      return /*#__PURE__*/React.createElement("svg", v, /*#__PURE__*/React.createElement("rect", {
        x: "2.6",
        y: "6.8",
        width: "18.8",
        height: "13.4",
        rx: "3.2",
        fill: "#F2C14E"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8.6 6.8l1.3-2.2h4.2l1.3 2.2H8.6z",
        fill: "#B96A20"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13.4",
        r: "4.4",
        fill: "#FFF3D0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "13.4",
        r: "2.5",
        fill: "#E8863D"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "10",
        r: "1",
        fill: "#fff"
      }));
    case 'Social':
      return /*#__PURE__*/React.createElement("svg", v, /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "2.4",
        width: "12",
        height: "19.2",
        rx: "3",
        fill: "#6FD3E0"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "7.8",
        y: "5.2",
        width: "8.4",
        height: "12.2",
        rx: "1.6",
        fill: "#EAFBFD"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 15.2s-3-1.9-3-3.9a1.6 1.6 0 013-.8 1.6 1.6 0 013 .8c0 2-3 3.9-3 3.9z",
        fill: "#EF6F7E"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "19.4",
        r: "1",
        fill: "#EAFBFD"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", v, /*#__PURE__*/React.createElement("circle", {
        cx: "7.4",
        cy: "8",
        r: "3",
        fill: "#E8863D"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2.6 19.4c.7-2.9 2.5-4.4 4.8-4.4s4.1 1.5 4.8 4.4H2.6z",
        fill: "#F2A05C"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "16.6",
        cy: "8",
        r: "3",
        fill: "#8ED7A6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12.2 19.4c.7-2.9 2.2-4.4 4.4-4.4s3.9 1.5 4.6 4.4h-9z",
        fill: "#A9E4BC"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12.6",
        r: "2.3",
        fill: "#F2C14E"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8.6 19.4c.5-2.1 1.7-3.2 3.4-3.2s2.9 1.1 3.4 3.2H8.6z",
        fill: "#FFD98A"
      }));
  }
}
const Icons = {
  BoltIcon,
  HomeIcon,
  BookingsIcon,
  MessagesIcon,
  ProfileIcon,
  BackChevron,
  ArrowRight,
  OccasionIcon
};
Object.assign(__ds_scope, { BoltIcon, HomeIcon, BookingsIcon, MessagesIcon, ProfileIcon, BackChevron, ArrowRight, OccasionIcon, Icons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icons.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  title,
  variant = 'primary',
  arrow,
  disabled,
  loading,
  onClick,
  style
}) {
  const bg = variant === 'primary' ? 'var(--yellow)' : variant === 'dark' ? 'var(--ink)' : variant === 'danger' ? 'var(--error)' : '#fff';
  const fg = variant === 'dark' || variant === 'danger' ? '#fff' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled || loading ? undefined : onClick,
    style: {
      height: 54,
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: '100%',
      background: bg,
      color: fg,
      border: variant === 'ghost' ? '1px solid var(--border)' : 'none',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 700,
      boxShadow: variant === 'primary' && !disabled ? 'var(--shadow-primary)' : 'none',
      opacity: disabled ? 0.4 : loading ? 0.75 : 1,
      ...style
    }
  }, title, arrow && !loading && /*#__PURE__*/React.createElement(__ds_scope.ArrowRight, {
    color: fg
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/NavPill.jsx
try { (() => {
const ICONS = {
  home: __ds_scope.HomeIcon,
  bookings: __ds_scope.BookingsIcon,
  messages: __ds_scope.MessagesIcon,
  profile: __ds_scope.ProfileIcon
};
const LABELS = {
  home: 'Home',
  bookings: 'Bookings',
  messages: 'Messages',
  profile: 'Profile'
};
function NavPill({
  active = 'home',
  onChange,
  unread = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      borderRadius: 28,
      padding: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      boxShadow: 'var(--shadow-nav)',
      ...style
    }
  }, Object.keys(ICONS).map(k => {
    const Icon = ICONS[k];
    const a = k === active;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onChange && onChange(k),
      style: {
        height: 42,
        minWidth: 42,
        borderRadius: 21,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        padding: '0 ' + (a ? 16 : 12) + 'px',
        border: 'none',
        cursor: 'pointer',
        background: a ? 'var(--yellow)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      color: a ? '#1A1A1A' : 'rgba(255,255,255,0.75)'
    }), k === 'messages' && unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -5,
        right: -7,
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        padding: '0 3px',
        background: 'var(--error)',
        border: '1.5px solid var(--ink)',
        color: '#fff',
        fontSize: 9,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        boxSizing: 'border-box'
      }
    }, unread > 9 ? '9+' : unread)), a && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: 'var(--ink)',
        fontFamily: 'var(--font-sans)'
      }
    }, LABELS[k]));
  }));
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavPill.jsx", error: String((e && e.message) || e) }); }

// components/core/ScreenHeader.jsx
try { (() => {
function ScreenHeader({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      background: '#fff',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BackChevron, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: -0.3,
      color: 'var(--ink)',
      flex: 1,
      fontFamily: 'var(--font-sans)'
    }
  }, title), right);
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/snapt-app/HomeScreen.jsx
try { (() => {
const OCC = ['Events', 'Portraits', 'Social', 'Family', 'Wedding'];
function GoldIcon({
  d,
  extra
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "#E0A400",
    strokeWidth: "1.7",
    strokeLinejoin: "round"
  }), extra);
}
function HomeScreen({
  onBook
}) {
  const NS = window.SnaptDesignSystem_e51d3a;
  const {
    NavPill,
    OccasionIcon,
    ArrowRight,
    StatusTag
  } = NS;
  const [mode, setMode] = React.useState('in-person');
  const [occ, setOcc] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--off-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 47,
      background: 'var(--yellow)',
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--yellow)',
      padding: '0 22px 154px',
      overflow: 'hidden',
      borderRadius: '0 0 34px 34px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/design/hero-creator-crop.webp",
    style: {
      position: 'absolute',
      top: 69,
      left: 151,
      width: 220,
      height: 175,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement(window.StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 2,
      marginTop: 17
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: -0.2,
      color: '#fff'
    }
  }, "Good morning, Maya ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 32,
      height: 32,
      borderRadius: 16,
      background: 'rgba(255,255,255,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z",
    stroke: "#1A1A1A",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 004 0",
    stroke: "#1A1A1A",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 7,
      width: 7,
      height: 7,
      borderRadius: 4,
      background: 'var(--error)',
      border: '1.5px solid #F7A701'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      lineHeight: '24px',
      letterSpacing: -0.5,
      marginTop: 14,
      maxWidth: '66%',
      color: 'var(--ink)',
      position: 'relative',
      zIndex: 2
    }
  }, "Be in the moment.", /*#__PURE__*/React.createElement("br", null), "We've got the rest.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      marginTop: -96,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: '16px 15px',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "In person or remote?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      color: 'var(--yellow-dark)'
    }
  }, "Sessions from $60")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--grey-warm)',
      margin: '3px 0 9px'
    }
  }, "Standard pricing. No haggling."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      background: 'var(--seg-bg)',
      borderRadius: 12,
      padding: 4
    }
  }, [['in-person', 'In person'], ['remote', 'Remote edit']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setMode(v),
    style: {
      flex: 1,
      height: 38,
      borderRadius: 9,
      border: 'none',
      cursor: 'pointer',
      background: mode === v ? 'var(--ink)' : 'transparent',
      color: mode === v ? '#fff' : 'var(--grey)',
      fontSize: 12.5,
      fontWeight: mode === v ? 800 : 600,
      boxShadow: mode === v ? 'var(--shadow-seg)' : 'none'
    }
  }, l))), mode === 'in-person' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '14px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "What's the moment?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--grey-light)'
    }
  }, "Optional")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      margin: '0 -15px',
      padding: '0 15px 4px'
    }
  }, OCC.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setOcc(o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      padding: '0 12px',
      height: 38,
      borderRadius: 12,
      border: '1px solid ' + (occ === o ? 'var(--ink)' : 'var(--border-warm)'),
      background: occ === o ? 'var(--ink)' : '#fff',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(OccasionIcon, {
    occasion: o
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: occ === o ? '#fff' : 'var(--ink)'
    }
  }, o)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: 14,
      border: '1px solid var(--border-warm)',
      borderRadius: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z",
    stroke: "#767676",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.3",
    stroke: "#767676",
    strokeWidth: "1.8"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12,
      fontWeight: 600,
      color: '#9A9A9A'
    }
  }, "Choose your area (optional)"), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "7",
    viewBox: "0 0 12 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    stroke: "#B4B1AA",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--grey-warm)',
      margin: '7px 2px 0'
    }
  }, "Currently serving northern Saint Lucia."), /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      width: '100%',
      height: 46,
      borderRadius: 12,
      background: 'var(--yellow)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Check availability"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      background: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    color: "#FFB800",
    size: 11,
    sw: 2.4
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9,
      background: 'var(--yellow-soft)',
      border: '1px solid var(--yellow-soft-border)',
      borderRadius: 13,
      padding: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 11,
      color: '#8A6800',
      lineHeight: '16px',
      fontWeight: 600
    }
  }, "No shoot needed \u2014 send us footage you already have and a Snapt editor takes it from there.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      height: 46,
      borderRadius: 12,
      background: 'var(--yellow)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Upload footage"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      background: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    color: "#FFB800",
    size: 11,
    sw: 2.4
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: '#fff',
      borderRadius: 14,
      padding: '12px 2px',
      marginTop: 10,
      boxShadow: 'var(--shadow-subtle)'
    }
  }, [{
    t: 'Verified creators',
    s: 'How we vet',
    icon: /*#__PURE__*/React.createElement(GoldIcon, {
      d: "M12 3l7 2.5v5.6c0 4.4-3 7.8-7 9.4-4-1.6-7-5-7-9.4V5.5L12 3z",
      extra: /*#__PURE__*/React.createElement("path", {
        d: "M9 12l2 2 4-4",
        stroke: "#E0A400",
        strokeWidth: "1.9",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    })
  }, {
    t: 'How matching works',
    s: 'Find out',
    icon: /*#__PURE__*/React.createElement(GoldIcon, {
      d: "M13 3L5 13h6l-1 8 8-11h-6l1-7z"
    })
  }, {
    t: 'Edited content',
    s: 'From $59',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "21",
      height: "21",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3.5",
      y: "5",
      width: "17",
      height: "14",
      rx: "3",
      stroke: "#E0A400",
      strokeWidth: "1.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 9.5l4.5 2.5L10 14.5v-5z",
      fill: "#E0A400"
    }))
  }].map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: '#F0EDE6',
      margin: '3px 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '0 6px'
    }
  }, f.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      textAlign: 'center'
    }
  }, f.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      color: 'var(--grey-warm)',
      marginTop: 2
    }
  }, f.s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      borderRadius: 18,
      border: '1px solid var(--border)',
      padding: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 14,
      background: 'var(--yellow-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117 9.5a3.5 3.5 0 011 6.9",
    stroke: "#1A1A1A",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12v6M9.5 14.2L12 11.7l2.5 2.5",
    stroke: "#1A1A1A",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "Already have footage?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--grey)',
      lineHeight: '17px',
      marginTop: 2
    }
  }, "Get it professionally edited, from $59. No shoot needed.")), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    stroke: "#B98600",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '26px 2px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: -0.4
    }
  }, "Creators"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      fontSize: 12.5,
      fontWeight: 800,
      color: 'var(--yellow-dark)'
    }
  }, "See all ", /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    stroke: "#B98600",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, [{
    img: '../../assets/design/bookings/p1.webp',
    n: 'Kayla J.',
    tags: ['Portraits', 'Family'],
    loc: 'Rodney Bay',
    shots: 4
  }, {
    img: '../../assets/design/bookings/p2.webp',
    n: 'Andre M.',
    tags: ['Events', 'Social'],
    loc: 'Gros Islet',
    shots: 6
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: '#EFEBE3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      bottom: 8,
      background: 'rgba(26,26,26,0.72)',
      borderRadius: 9,
      padding: '3px 8px',
      fontSize: 9.5,
      fontWeight: 800,
      color: '#fff'
    }
  }, c.shots, " shots")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 11,
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.n), /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.2 1.6 2.7-.2 1 2.5 2.3 1.4-.6 2.6.6 2.6-2.3 1.4-1 2.5-2.7-.2L12 21l-2.2-1.6-2.7.2-1-2.5L3.8 15.7l.6-2.6-.6-2.6 2.3-1.4 1-2.5 2.7.2L12 3z",
    fill: "#FFB800"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4",
    stroke: "#fff",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: '#F4F1EA',
      borderRadius: 7,
      padding: '3px 7px',
      fontSize: 9,
      fontWeight: 700,
      color: 'var(--grey-warm)'
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 10,
      color: '#8A8377'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z",
    stroke: "#8A8377",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.3",
    stroke: "#8A8377",
    strokeWidth: "1.8"
  })), c.loc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      marginBottom: 110,
      background: '#FFF8E9',
      border: '1px solid #F3E6C4',
      borderRadius: 16,
      padding: '16px 14px 17px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.3,
      marginBottom: 14
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, [{
    n: 1,
    t: 'Tell us what you need',
    s: "Book a creator to capture it live, or upload footage you've already got."
  }, {
    n: 2,
    t: 'We match or edit',
    s: 'A vetted local creator is matched to your session, or your footage goes straight to editing.'
  }, {
    n: 3,
    t: 'Get it delivered',
    s: 'Your final photos or video land in the app, ready to download and share.'
  }].map((st, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: st.n
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      borderTop: '2px dashed #E6D3A0',
      marginTop: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 42,
      height: 42
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 21,
      background: '#fff',
      border: '1px solid #F0E4C4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "5",
    width: "17",
    height: "14",
    rx: "3",
    stroke: "#1A1A1A",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.5l4.5 2.5L10 14.5v-5z",
    fill: "#1A1A1A"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      left: -4,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: 'var(--yellow)',
      border: '2px solid #FFF8E9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 800,
      boxSizing: 'border-box'
    }
  }, st.n)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 800,
      textAlign: 'center'
    }
  }, st.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'var(--grey-warm)',
      marginTop: 2,
      lineHeight: '12px',
      textAlign: 'center'
    }
  }, st.s))))))))), /*#__PURE__*/React.createElement(NavPill, {
    active: "home",
    unread: 2,
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 26,
      zIndex: 8
    }
  }), /*#__PURE__*/React.createElement(window.HomeIndicator, null));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/snapt-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/snapt-app/LoginScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AuthInput(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    style: {
      height: 52,
      borderRadius: 14,
      border: '1px solid #E4DFD4',
      background: '#fff',
      padding: '0 14px',
      fontSize: 14,
      color: 'var(--ink)',
      outline: 'none',
      width: '100%'
    }
  }));
}
function SocialBtn({
  label,
  icon
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      height: 48,
      borderRadius: 24,
      border: '1px solid #E4DFD4',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, icon, label);
}
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#F5F1E8',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(window.StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '10px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      background: '#fff',
      border: '1px solid #E4DFD4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "17",
    viewBox: "0 0 10 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 1.5L2 8.5l6.5 7",
    stroke: "#1A1A1A",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/design/snapt-icon.png",
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      marginTop: 16,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: -0.6,
      color: 'var(--ink)',
      marginTop: 14
    }
  }, "Welcome ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F2A93B'
    }
  }, "back")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--grey)',
      margin: '6px 0 18px',
      lineHeight: '19px'
    }
  }, "Log in to book creators, manage bookings, and pick up where you left off."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SocialBtn, {
    label: "Google",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 01-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z",
      fill: "#4285F4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0012 22z",
      fill: "#34A853"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.4 14a6 6 0 010-3.8V7.6H3.1a10 10 0 000 8.9L6.4 14z",
      fill: "#FBBC05"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 6c1.5 0 2.8.5 3.8 1.5L18.7 4.7A10 10 0 003.1 7.6L6.4 10c.8-2.3 3-4 5.6-4z",
      fill: "#EA4335"
    }))
  }), /*#__PURE__*/React.createElement(SocialBtn, {
    label: "Apple",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "#1A1A1A"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.7 12.9c0-2.4 2-3.6 2-3.6a4.4 4.4 0 00-3.5-1.9c-1.5-.1-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8A4.6 4.6 0 004.6 9.8c-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 2.9 2.4 1.2-.1 1.6-.8 3-.8s1.8.8 3 .8 2-1.1 2.8-2.3c.9-1.3 1.2-2.6 1.3-2.6a4.2 4.2 0 01-2.1-3.9zM14.3 5.6A4.2 4.2 0 0015.3 2.6a4.3 4.3 0 00-2.8 1.4 4 4 0 00-1 2.9 3.5 3.5 0 002.8-1.3z"
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AuthInput, {
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement(AuthInput, {
    placeholder: "Password",
    type: "password"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-end',
      fontSize: 12.5,
      fontWeight: 700,
      color: '#B98600',
      cursor: 'pointer'
    }
  }, "Forgot password?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px 40px',
      borderTop: '1px solid #E4DFD4'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: '100%',
      height: 54,
      borderRadius: 27,
      background: '#FFB800',
      border: 'none',
      fontSize: 16,
      fontWeight: 800,
      color: '#1A1A1A',
      cursor: 'pointer'
    }
  }, "Log in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: '#8A8377',
      textAlign: 'center',
      marginTop: 12
    }
  }, "New to Snapt? ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: '#B98600',
      cursor: 'pointer'
    }
  }, "Sign up"))), /*#__PURE__*/React.createElement(window.HomeIndicator, null));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/snapt-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/snapt-app/OccasionScreen.jsx
try { (() => {
const OCC2 = ['Events', 'Portraits', 'Social', 'Family', 'Wedding'];
const TIMES = ['9:00', '10:30', '12:00', '14:00', '15:30', '17:00'];
function OccasionScreen({
  onBack,
  onContinue
}) {
  const NS = window.SnaptDesignSystem_e51d3a;
  const {
    ScreenHeader,
    Button,
    OccasionIcon
  } = NS;
  const [occ, setOcc] = React.useState('Events');
  const [date, setDate] = React.useState(2);
  const [time, setTime] = React.useState(null);
  const days = Array.from({
    length: 15
  }, (_, i) => new Date(Date.now() + i * 86400000));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--off-white)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(window.StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Occasion & date",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.2,
      marginBottom: 12
    }
  }, "What's the moment?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, OCC2.map(o => {
    const a = occ === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => setOcc(o),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '0 13px',
        height: 40,
        borderRadius: 12,
        border: '1.5px solid ' + (a ? 'var(--yellow)' : 'var(--border-warm)'),
        background: a ? 'var(--yellow-soft)' : '#fff',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(OccasionIcon, {
      occasion: o
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, o));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.2,
      margin: '26px 0 12px'
    }
  }, "Pick a day"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--grey)',
      margin: '-6px 0 12px'
    }
  }, "Sessions can be booked up to 14 days ahead."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      overflowX: 'auto',
      margin: '0 -22px',
      padding: '0 22px 4px'
    }
  }, days.map((d, i) => {
    const a = date === i;
    const off = i % 5 === 4;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: off,
      onClick: () => setDate(i),
      style: {
        width: 62,
        flexShrink: 0,
        padding: '12px 0',
        borderRadius: 14,
        border: '1.5px solid ' + (a ? 'var(--yellow)' : 'var(--border-warm)'),
        background: a ? 'var(--yellow-soft)' : '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        cursor: off ? 'default' : 'pointer',
        opacity: off ? 0.45 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: a ? 'var(--ink)' : 'var(--grey)'
      }
    }, d.toLocaleDateString(undefined, {
      weekday: 'short'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        color: 'var(--ink)'
      }
    }, d.getDate()), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 3,
        background: off ? 'var(--border-warm)' : 'var(--success)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: -0.2,
      margin: '26px 0 12px'
    }
  }, "Pick a time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, TIMES.map(t => {
    const a = time === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTime(t),
      style: {
        padding: '0 16px',
        height: 40,
        borderRadius: 12,
        border: '1.5px solid ' + (a ? 'var(--yellow)' : 'var(--border-warm)'),
        background: a ? 'var(--yellow-soft)' : '#fff',
        fontSize: 13,
        fontWeight: 700,
        color: a ? 'var(--ink)' : 'var(--grey)',
        cursor: 'pointer'
      }
    }, t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 40px',
      borderTop: '1px solid #F0F0F0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    title: "Continue",
    arrow: true,
    disabled: !time,
    onClick: onContinue
  })), /*#__PURE__*/React.createElement(window.HomeIndicator, null));
}
window.OccasionScreen = OccasionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/snapt-app/OccasionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/snapt-app/OnboardingScreen.jsx
try { (() => {
const SLIDES = [{
  img: '../../assets/design/onboarding/s1.webp',
  title: 'Book a creator near you',
  sub: 'Vetted photographers and videographers across Saint Lucia, matched to your moment.'
}, {
  img: '../../assets/design/onboarding/s2.webp',
  title: 'Or send us your footage',
  sub: 'Already shot the moment? Upload it and a Snapt editor delivers a polished edit.'
}, {
  img: '../../assets/design/onboarding/s3.webp',
  title: 'Safe, simple, yours',
  sub: 'Verified creators, safety check-ins, and your photos delivered right in the app.'
}];
function OnboardingScreen({
  onDone
}) {
  const {
    Button
  } = window.SnaptDesignSystem_e51d3a;
  const [page, setPage] = React.useState(0);
  const s = SLIDES[page],
    last = page === SLIDES.length - 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#F5A93B'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '22% top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '72%',
      background: 'linear-gradient(to bottom, rgba(20,15,5,0) 0%, rgba(20,15,5,0.3) 28%, rgba(20,15,5,0.8) 48%, #140F05 60%)'
    }
  }), /*#__PURE__*/React.createElement(window.StatusBar, {
    light: true
  }), !last && /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      position: 'absolute',
      top: 53,
      right: 14,
      background: 'rgba(245,241,232,0.92)',
      border: 'none',
      borderRadius: 999,
      padding: '8px 16px',
      fontSize: 13.5,
      fontWeight: 800,
      color: 'var(--ink)',
      cursor: 'pointer',
      zIndex: 7
    }
  }, "Skip"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: -0.8,
      color: '#fff',
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: '21px',
      color: 'rgba(255,255,255,0.88)'
    }
  }, s.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 26,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      justifyContent: 'center'
    }
  }, SLIDES.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === page ? 22 : 7,
      height: 7,
      borderRadius: 4,
      background: i === page ? 'var(--yellow)' : '#E9E2D2',
      transition: 'all .25s'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    title: last ? 'Create my account' : 'Next',
    arrow: true,
    onClick: () => last ? onDone() : setPage(page + 1)
  })), /*#__PURE__*/React.createElement(window.HomeIndicator, {
    light: true
  }));
}
window.OnboardingScreen = OnboardingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/snapt-app/OnboardingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CodeInput = __ds_scope.CodeInput;

__ds_ns.NavPill = __ds_scope.NavPill;

__ds_ns.RadioDot = __ds_scope.RadioDot;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.InfoBanner = __ds_scope.InfoBanner;

__ds_ns.MonthCalendar = __ds_scope.MonthCalendar;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.SlideToConfirm = __ds_scope.SlideToConfirm;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.BoltIcon = __ds_scope.BoltIcon;

__ds_ns.HomeIcon = __ds_scope.HomeIcon;

__ds_ns.BookingsIcon = __ds_scope.BookingsIcon;

__ds_ns.MessagesIcon = __ds_scope.MessagesIcon;

__ds_ns.ProfileIcon = __ds_scope.ProfileIcon;

__ds_ns.BackChevron = __ds_scope.BackChevron;

__ds_ns.ArrowRight = __ds_scope.ArrowRight;

__ds_ns.OccasionIcon = __ds_scope.OccasionIcon;

__ds_ns.Icons = __ds_scope.Icons;

})();
