'use client';

import { motion, useInView } from '@/lib/motion';
import { useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const MIODOTTORE_URL =
  'https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia#opinions';

/*
 * ISTRUZIONI: sostituisci il testo di queste recensioni con quelle reali
 * copiate dal tuo profilo MioDottore. Modifica nome (o iniziale), testo e rating.
 */
const reviews = [
  {
    name: 'S.',
    text: 'Gaia mi ha dato uno spazio sicuro per esprimermi e mi ha sempre lasciato il tempo per elaborare i miei pensieri. La sua attenzione e cura non mancano mai. Mi guida nel ragionamento per affrontare e capire le tematiche affrontate.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'C.C.',
    text: 'La dott.ssa Bresciani \u00e8 stata fin da subito molto paziente e disponibile, in grado di aiutarmi a superare ottimamente degli eventi importanti della mia vita riuscendo ad affrontarli al meglio.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'Anna',
    text: 'La Dottoressa \u00e8 molto gentile, mi ha fatta sentire sempre a mio agio. Ha sempre ascoltato in maniera attenta, intervenendo in modo opportuno e comprensivo.',
    rating: 5,
    source: 'MioDottore',
  },
  {
    name: 'Daniele',
    text: 'Grazie alla sua professionalit\u00e0 ed empatia, sono riuscito a gestire meglio ansia e stress, superare un lutto familiare e persino alleviare dolori che non avevano cause fisiche. La sua guida mi ha permesso di raggiungere una maggiore consapevolezza di me stesso.',
    rating: 5,
    source: 'MioDottore',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, willChange: 'transform, opacity' as const },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto' as const,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section-padding bg-white/50 section-lazy">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Recensioni</p>
          <h2 className="heading-lg mb-4">
            Cosa dicono i pazienti
          </h2>
          <p className="body-lg">
            Le esperienze di chi ha iniziato un percorso.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="card-base p-6 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-primary/70 leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-4 pt-4 border-t border-primary/[0.06] flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">
                  {review.name}
                </span>
                <span className="text-[0.65rem] text-primary/40 uppercase tracking-wider">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a
            href={MIODOTTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-3 px-6 text-sm gap-2 inline-flex"
          >
            Leggi tutte le recensioni su MioDottore
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
