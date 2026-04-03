'use client';

import { motion, useInView } from '@/lib/motion';
import { useRef } from 'react';
import { MessageCircle, Compass, ClipboardList, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Primo Contatto',
    description:
      'Scrivimi o chiamami per un confronto informale. Capiamo insieme se il percorso pu\u00f2 essere utile.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Colloquio Conoscitivo',
    description:
      'Ci incontriamo per esplorare la tua situazione attuale e definire gli obiettivi del lavoro.',
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Piano Personalizzato',
    description:
      'Costruiamo un percorso su misura, con tempi, modalit\u00e0 e frequenza chiari fin dall\'inizio.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Percorso Terapeutico',
    description:
      'Lavoriamo con regolarit\u00e0, verificando i progressi e adattando il percorso ad ogni tappa.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function MethodologySteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="metodo" className="section-padding section-lazy">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Il percorso</p>
          <h2 className="heading-lg mb-4">
            Come funziona la terapia
          </h2>
          <p className="body-lg">
            Un percorso strutturato e trasparente, pensato per
            accompagnarti con chiarezza in ogni fase.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px] bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative text-center lg:text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10">
                      <Icon size={24} strokeWidth={1.6} className="text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="heading-md mb-3">{step.title}</h3>
                  <p className="body-md max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
