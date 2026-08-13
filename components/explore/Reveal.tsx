'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal wrapper for the Explore feature rows.
 *
 * Content renders visible and is only hidden once JS has confirmed motion is
 * wanted, so the page still reads with JS off or under prefers-reduced-motion.
 * The hide/show runs on the DOM node directly — it never feeds back into
 * React state, so there is no cascading render.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(34px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)';

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.disconnect();
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
