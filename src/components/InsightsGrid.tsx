'use client';

import { motion, useInView } from '@/lib/motion';
import { useRef } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';

const insights = getAllArticles().slice(0, 4);

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

export default function InsightsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="approfondimenti" className="section-padding bg-white/50 section-lazy">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow">Risorse utili</p>
            <h2 className="heading-lg">Approfondimenti</h2>
          </div>
          <a
            href="/approfondimenti"
            className="text-accent hover:text-accent-dark font-medium text-sm transition-colors flex items-center gap-1 self-start sm:self-auto"
          >
            Vedi tutti
            <ArrowUpRight size={15} />
          </a>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {insights.map((article) => (
            <motion.a
              key={article.title}
              href={`/approfondimenti/${article.slug}`}
              variants={cardVariants}
              className="group card-base p-6 flex flex-col card-hover"
            >
              <div className="flex items-center gap-3 text-xs text-primary/45 mb-4">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif font-semibold text-base leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                {article.title}
              </h3>

              <p className="text-sm text-primary/60 leading-relaxed flex-1">
                {article.excerpt}
              </p>

              <span className="mt-4 text-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Leggi
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
