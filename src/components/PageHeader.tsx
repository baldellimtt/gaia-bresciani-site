'use client';

import { motion } from '@/lib/motion';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="section-container pb-10 lg:pb-14">
      <div className="max-w-3xl">
        {eyebrow && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="heading-xl mb-5"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="body-md max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
