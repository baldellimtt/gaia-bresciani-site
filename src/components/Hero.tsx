'use client';

import { motion } from '@/lib/motion';
import { ArrowRight, Clock3, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30, willChange: 'transform, opacity' as const },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    willChange: 'auto' as const,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-3xl gpu"
          style={{ y: offsetY * 0.08 }}
        />
        <motion.div
          className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl gpu"
          style={{ y: -offsetY * 0.05 }}
        />
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
              Studio a Credaro
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="heading-xl text-balance"
            >
              So che chiedere aiuto
              <span className="block text-accent">non &egrave; facile</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="body-lg max-w-xl"
            >
              Ricevo a Credaro, vicino a Sarnico, e lavoro con adulti e coppie
              che stanno attraversando ansia, difficoltà relazionali, momenti di
              blocco o esperienze traumatiche. Il mio approccio unisce ascolto
              clinico, chiarezza e obiettivi condivisi già dal primo colloquio.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.5}
              className="grid gap-3 max-w-2xl sm:grid-cols-3"
            >
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <ShieldCheck size={16} className="text-accent shrink-0" />
                  Approccio chiaro
                </div>
                <p className="mt-2 text-sm text-primary/65">
                  Psicoterapia psicodinamica adleriana, con integrazione EMDR
                  quando indicata.
                </p>
              </div>
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin size={16} className="text-accent shrink-0" />
                  Studio comodo
                </div>
                <p className="mt-2 text-sm text-primary/65">
                  Credaro, vicino a Sarnico, con parcheggio privato presso lo
                  studio.
                </p>
              </div>
              <div className="card-base p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Clock3 size={16} className="text-accent shrink-0" />
                  Primo passo semplice
                </div>
                <p className="mt-2 text-sm text-primary/65">
                  Un primo contatto chiaro, senza pressione, per capire se questo
                  percorso è adatto a te.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contatti" className="btn-primary btn-shine gap-2">
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
                Primo colloquio orientativo
              </span>
              <span>Credaro (BG) &middot; Vicino a Sarnico</span>
              <span>Parcheggio privato &middot; Online quando utile</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative aspect-[3/4] w-[300px] lg:w-[350px] rounded-3xl overflow-hidden shadow-soft-lg">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }} className="absolute inset-0">
                <Image
                  src="/assets/psicologa-sarnico-gaia-bresciani.webp"
                  alt="Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta a Sarnico e Lago d'Iseo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, 350px"
                  fetchPriority="high"
                />
                </motion.div>
              </div>

              <a
                href="https://www.opl.it/psicologi/22433/Bresciani-Gaia-Miriam-Teresa"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 md:bottom-5 md:left-5 lg:-left-7 lg:bottom-6 lg:max-w-[240px] card-base card-glow py-3 px-4 shadow-soft block no-underline hover:shadow-soft-lg transition-shadow duration-300"
              >
                <p className="text-[0.65rem] text-primary/50 font-medium uppercase tracking-wider">Albo Psicologi</p>
                <p className="text-sm font-semibold text-primary mt-0.5">N. 22433 &mdash; Lombardia</p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
