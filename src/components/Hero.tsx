'use client';

import { motion } from '@/lib/motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="section-container w-full pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="eyebrow flex items-center gap-2"
            >
              <MapPin size={14} strokeWidth={2.5} />
              Psicologa e Psicoterapeuta a Sarnico e Lago d&apos;Iseo
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="heading-xl text-balance"
            >
              Trova il tuo equilibrio,
              <span className="block text-accent"> un passo alla volta</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="body-lg max-w-xl"
            >
              Percorsi di psicoterapia personalizzati per ansia, relazioni,
              autostima e traumi. In uno spazio protetto tra le colline
              del Lago d&apos;Iseo.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contatti" className="btn-primary gap-2">
                Prenota un colloquio
                <ArrowRight size={16} />
              </a>
              <a href="#metodo" className="btn-outline">
                Scopri il percorso
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-primary/50"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Disponibilit&agrave; questa settimana
              </span>
              <span>Credaro (BG) &middot; Castenedolo (BS)</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-[260px] mx-auto lg:max-w-[300px] rounded-3xl overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/psicologa-gaia-bresciani.webp"
                alt="Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta a Sarnico e Lago d'Iseo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 260px, 300px"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 card-base py-4 px-5 max-w-[220px]">
              <p className="text-xs text-primary/50 font-medium uppercase tracking-wider">Albo Psicologi</p>
              <p className="text-sm font-semibold text-primary mt-0.5">N. 22433 &mdash; Lombardia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
