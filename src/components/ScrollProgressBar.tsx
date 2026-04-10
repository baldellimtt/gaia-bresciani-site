'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';

function getScrollRoot(): Element {
  return document.scrollingElement ?? document.documentElement;
}

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      rafRef.current = 0;
      const root = getScrollRoot();
      const scrollTop = Math.max(0, root.scrollTop);
      const scrollable = root.scrollHeight - root.clientHeight;
      if (scrollable < 80) {
        setShow(false);
        setProgress(0);
        return;
      }
      setShow(true);
      const p = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
      setProgress(p);
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    vv?.addEventListener('resize', onScrollOrResize);
    vv?.addEventListener('scroll', onScrollOrResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      vv?.removeEventListener('resize', onScrollOrResize);
      vv?.removeEventListener('scroll', onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed top-16 lg:top-20 left-0 right-0 z-40 h-[2px] pointer-events-none overflow-hidden bg-primary/[0.08] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-accent ${
          prefersReducedMotion ? '' : 'transition-[width] duration-150 ease-out'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
