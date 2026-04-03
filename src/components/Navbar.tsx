'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from '@/lib/motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const navLinks = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/terapia', label: 'Servizi' },
  { href: '/emdr', label: 'EMDR' },
  { href: '/approfondimenti', label: 'Approfondimenti' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'glass-solid border-b border-primary/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="section-container flex items-center justify-between h-16 lg:h-20"
          aria-label="Navigazione principale"
        >
          <Link
            href="/"
            className="font-serif text-primary font-bold text-lg lg:text-xl tracking-tight"
          >
            <span className="hidden sm:inline">Psicologa e Psicoterapeuta </span>Gaia Bresciani
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary/70 hover:text-primary transition-colors duration-200 text-[0.9rem] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+393408389958"
              className="btn-accent gap-2 py-2.5 px-5 text-[0.85rem]"
            >
              <Phone size={15} strokeWidth={2.2} />
              Prenota
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center -mr-1"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 flex flex-col items-end gap-[5px]">
              <span
                className={`h-[2px] bg-primary rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-primary rounded-full transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`h-[2px] bg-primary rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5'
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-primary/60 backdrop-blur-md z-[55] lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu di navigazione"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background z-[58] lg:hidden
                         flex flex-col pt-24 px-8 pb-8 shadow-soft-xl overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-primary py-3 text-lg font-medium border-b border-primary/[0.06]
                                 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a href="tel:+393408389958" className="btn-accent text-center">
                  <Phone size={16} className="mr-2" />
                  Chiamami
                </a>
                <a
                  href="mailto:gaia.bresciani23@gmail.com"
                  className="btn-outline text-center"
                >
                  Scrivi una email
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
