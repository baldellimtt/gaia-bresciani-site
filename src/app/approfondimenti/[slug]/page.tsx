import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { getAllSlugs, getArticleBySlug } from '@/lib/articles';
import { Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Gaia Bresciani Psicologa`,
    description: article.excerpt,
    alternates: { canonical: `/approfondimenti/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'Gaia Bresciani',
      jobTitle: 'Psicologa e Psicoterapeuta',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gaia Bresciani Psicologa',
      url: 'https://www.gaiabrescianipsicologa.it',
    },
    datePublished: article.date,
    mainEntityOfPage: `https://www.gaiabrescianipsicologa.it/approfondimenti/${article.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'Approfondimenti', href: '/approfondimenti' },
          { label: article.title },
        ]}
      />

      <article className="section-container pt-8 pb-16 lg:pb-24">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-medium uppercase tracking-wider text-accent/70 bg-accent/[0.07] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="heading-lg mb-5 text-balance">{article.title}</h1>

            <div className="flex items-center gap-4 text-sm text-primary/45 mb-10 pb-8 border-b border-primary/[0.08]">
              <span>{article.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readTime} di lettura
              </span>
              <span>Dott.ssa Gaia Bresciani</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="body-md leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-12 pt-8 border-t border-primary/[0.08]">
              <div className="card-base p-6 mb-6 bg-accent/[0.04]">
                <p className="text-sm text-primary/65 leading-relaxed">
                  Se ti riconosci in quello che hai letto, puoi approfondire{' '}
                  <Link href="/terapia" className="text-accent hover:underline">
                    terapia individuale e di coppia
                  </Link>
                  , valutare se puo esserti utile un lavoro{' '}
                  <Link href="/emdr" className="text-accent hover:underline">
                    EMDR
                  </Link>{' '}
                  oppure vedere come raggiungere lo studio dalla{' '}
                  <Link href="/psicologa-sarnico" className="text-accent hover:underline">
                    zona di Sarnico e del basso Lago d&apos;Iseo
                  </Link>
                  .
                </p>
              </div>
              <Link
                href="/approfondimenti"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-accent transition-colors"
              >
                <ArrowLeft size={15} />
                Tutti gli approfondimenti
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>

      <InlineCta
        title="Vuoi parlare di quello che stai vivendo?"
        subtitle="Il primo colloquio serve a capire insieme da dove partire, senza impegno. Se arrivi da Sarnico o dal basso Lago d'Iseo, ricevo a Credaro."
      />
    </>
  );
}
