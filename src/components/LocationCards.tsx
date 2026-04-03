'use client';

import { motion, useInView } from '@/lib/motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, Building2, Laptop } from 'lucide-react';

const locations = [
  {
    icon: MapPin,
    title: 'Credaro (BG)',
    subtitle: 'Area Sarnico e Lago d\'Iseo',
    description:
      'Via Piave 7 \u2014 comodo per Sarnico, Villongo, Paratico, Capriolo e Grumello del Monte.',
    link: '/zona-sarnico',
    linkLabel: 'Come raggiungermi',
    primary: true,
    image: '/assets/studio-psicologia-credaro.webp',
  },
  {
    icon: Building2,
    title: 'Castenedolo (BS)',
    subtitle: 'Area Brescia',
    description:
      'Piazza Martiri della Libert\u00e0 7 \u2014 riferimento per Brescia, Rezzato, Mazzano e dintorni.',
    link: '/contatti',
    linkLabel: 'Informazioni sede',
    image: '/assets/studio-psicologa-sarnico.webp',
  },
  {
    icon: Laptop,
    title: 'Online',
    subtitle: 'Ovunque tu sia',
    description:
      'Colloqui da remoto sicuri e riservati, per chi ha difficolt\u00e0 logistiche o vive fuori zona.',
    link: '#contatti',
    linkLabel: 'Prenota online',
    image: '/assets/consulenza-psicologica-online-bergamo.webp',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function LocationCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="dove-ricevo" className="section-padding section-lazy">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Dove ricevo</p>
          <h2 className="heading-lg mb-4">
            Due sedi e la possibilit&agrave; online
          </h2>
          <p className="body-lg">
            Per facilitare continuit&agrave;, organizzazione e
            accessibilit&agrave; del tuo percorso tra Bergamo e Brescia.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {locations.map((loc) => {
            const Icon = loc.icon;
            return (
              <motion.a
                key={loc.title}
                href={loc.link}
                variants={cardVariants}
                className={`group card-base card-hover flex flex-col overflow-hidden ${
                  loc.primary ? 'ring-2 ring-accent/20 relative' : ''
                }`}
              >
                {loc.image && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={loc.image}
                      alt={`Studio ${loc.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {loc.primary && (
                      <span className="absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-widest text-accent bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        Sede principale
                      </span>
                    )}
                  </div>
                )}

                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.6} className="text-accent" />
                  </div>

                  <h3 className="heading-md mb-1">{loc.title}</h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {loc.subtitle}
                  </p>
                  <p className="body-md flex-1">{loc.description}</p>

                  <span className="mt-5 text-sm font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-1.5">
                    {loc.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
