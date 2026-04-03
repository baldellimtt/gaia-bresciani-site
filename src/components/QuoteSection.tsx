'use client';

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden section-lazy">
      <div className="section-container space-y-12">
        <AnimatedSection>
          <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="/assets/psicologa-lago-iseo-sarnico.webp"
              alt="Studio di psicologia Gaia Bresciani a Credaro, riferimento per percorsi psicologici vicino a Sarnico e Lago d'Iseo"
              width={450}
              height={200}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 80vw, 450px"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative max-w-3xl mx-auto text-center px-6 sm:px-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-accent/15 text-[8rem] font-serif leading-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-serif text-primary leading-relaxed italic">
                Non &egrave; ci&ograve; che vedi sul quadro l&apos;importante,
                ma ci&ograve; che riesci a vedere dentro di esso.
              </p>
              <footer className="mt-6">
                <cite className="not-italic text-sm text-primary/50 font-sans">
                  Wassily Kandinsky
                </cite>
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
