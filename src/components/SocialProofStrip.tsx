'use client';

import AnimatedSection from './AnimatedSection';
import { Star, ExternalLink } from 'lucide-react';

const MIODOTTORE_URL =
  'https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia#opinions';

export default function SocialProofStrip() {
  return (
    <section className="py-8 sm:py-12">
      <div className="section-container">
        <AnimatedSection>
          <a
            href={MIODOTTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8
                       card-base card-hover card-glow py-5 sm:py-6 px-6 sm:px-8 transition-shadow duration-300"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-amber-400 fill-amber-400 transition-transform duration-300 group-hover:scale-110"
                />
              ))}
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-[0.95rem] font-semibold text-primary">
                Valutazione eccellente su MioDottore
              </p>
              <p className="text-xs sm:text-[0.82rem] text-primary/50 mt-1">
                Leggi le recensioni dei pazienti
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:underline">
              Vedi tutte
              <ExternalLink size={12} />
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
