'use client';

import { motion, useInView } from '@/lib/motion';
import { useRef } from 'react';
import {
  Brain,
  Heart,
  Shield,
  Sparkles,
  Users,
  Monitor,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Ansia e Attacchi di Panico',
    description:
      'Strumenti concreti per gestire l\'ansia e ritrovare stabilit\u00e0 nel quotidiano.',
    span: 'md:col-span-2',
    accent: true,
  },
  {
    icon: Heart,
    title: 'Difficolt\u00e0 Relazionali',
    description:
      'Migliorare la comunicazione e costruire relazioni pi\u00f9 equilibrate e autentiche.',
    span: '',
  },
  {
    icon: Shield,
    title: 'Autostima e Identit\u00e0',
    description:
      'Riconoscere il proprio valore e superare la paura del giudizio.',
    span: '',
  },
  {
    icon: Sparkles,
    title: 'Terapia EMDR',
    description:
      'Elaborare traumi e blocchi emotivi con un metodo scientificamente validato.',
    span: 'md:col-span-2',
    accent: true,
  },
  {
    icon: Users,
    title: 'Terapia di Coppia',
    description:
      'Superare crisi, incomprensioni e ritrovare dialogo nella relazione.',
    span: '',
  },
  {
    icon: Monitor,
    title: 'Sedute Online',
    description:
      'Continuit\u00e0 e flessibilit\u00e0 per chi ha difficolt\u00e0 logistiche o di tempo.',
    span: '',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, willChange: 'transform, opacity' as const },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto' as const,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function ServicesBentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servizi" className="section-padding bg-white/50 section-lazy">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Aree di intervento</p>
          <h2 className="heading-lg mb-4">Come posso aiutarti</h2>
          <p className="body-lg">
            Ogni percorso nasce dalla tua storia e dal problema che stai
            vivendo, senza soluzioni preconfezionate.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative card-base p-7 lg:p-8 cursor-default hover:shadow-soft-lg hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300 ${service.span} ${
                  service.accent
                    ? 'bg-gradient-to-br from-primary to-primary-light text-white'
                    : ''
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    service.accent
                      ? 'bg-white/15'
                      : 'bg-accent/10'
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className={service.accent ? 'text-white' : 'text-accent'}
                  />
                </div>
                <h3
                  className={`heading-md mb-3 ${
                    service.accent ? 'text-white' : ''
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.accent ? 'text-white/80' : 'text-primary/65'
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500 ${
                    service.accent
                      ? 'bg-accent/40 group-hover:bg-accent/70'
                      : 'bg-accent/0 group-hover:bg-accent/30'
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
