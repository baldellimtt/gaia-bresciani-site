import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { ArrowUpRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Approfondimenti Psicologia Sarnico e Lago d\'Iseo | Gaia Bresciani',
  description:
    'Approfondimenti su ansia, panico, autostima, adolescenza e terapia di coppia. Guide pratiche per orientarti prima di iniziare un percorso psicologico.',
  alternates: { canonical: '/approfondimenti' },
  openGraph: {
    title: 'Approfondimenti | Psicologa Sarnico e Lago d\'Iseo | Gaia Bresciani',
    description:
      'Articoli pratici su ansia, relazioni, autostima e adolescenza per capire meglio i sintomi e quando chiedere supporto psicologico.',
  },
};

const articles = [
  {
    href: '/approfondimenti',
    date: '7 aprile 2026',
    readTime: '7 min',
    title: 'Dipendenza affettiva: quando l&apos;amore diventa un bisogno',
    excerpt: 'Riconoscere i segnali della dipendenza affettiva, capire da dove nasce e quali sono i primi passi per ritrovare un equilibrio nelle relazioni.',
    tags: ['Relazioni', 'Dipendenza affettiva'],
  },
  {
    href: '/approfondimenti',
    date: '24 marzo 2026',
    readTime: '6 min',
    title: 'Ruminazione mentale e overthinking: segnali e come fermarsi',
    excerpt: 'Il rimuginio mentale pu\u00f2 consumare energie e lucidit\u00e0. Una guida pratica per riconoscerlo e interrompere il circolo.',
    tags: ['Benessere emotivo', 'Overthinking'],
  },
  {
    href: '/approfondimenti',
    date: '2 marzo 2026',
    readTime: '6 min',
    title: 'Stanchezza emotiva: segnali, cause e primi passi utili',
    excerpt: 'Quando la fatica emotiva dura da tempo, pu\u00f2 influenzare sonno, relazioni e lucidit\u00e0.',
    tags: ['Benessere emotivo', 'Stress'],
  },
  {
    href: '/approfondimenti',
    date: '16 febbraio 2026',
    readTime: '7 min',
    title: 'Autostima bassa: segnali, errori comuni e percorso psicologico',
    excerpt: 'Come riconoscere autosvalutazione e paura del giudizio, con primi passi concreti.',
    tags: ['Autostima', 'Benessere emotivo'],
  },
  {
    href: '/approfondimenti',
    date: '9 febbraio 2026',
    readTime: '6 min',
    title: 'Social network e adolescenza: rischi, segnali e strategie',
    excerpt: 'Come i social influenzano autostima, relazioni e sonno nei pi\u00f9 giovani.',
    tags: ['Adolescenza', 'Social network'],
  },
  {
    href: '/approfondimenti',
    date: '6 febbraio 2026',
    readTime: '6 min',
    title: 'Ansia e attacchi di panico: quando chiedere aiuto',
    excerpt: 'Segnali, falsi miti e primi passi concreti per capire quando \u00e8 utile un supporto psicologico.',
    tags: ['Ansia', 'Attacchi di panico'],
  },
  {
    href: '/approfondimenti',
    date: '6 febbraio 2026',
    readTime: '5 min',
    title: 'Terapia di coppia: segnali precoci e cosa aspettarsi dal primo colloquio',
    excerpt: 'Quando \u00e8 utile chiedere un supporto di coppia e come si svolge il primo incontro.',
    tags: ['Coppia', 'Relazioni'],
  },
];

export default function ApprofondimentiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Approfondimenti' }]} />
      <PageHeader
        eyebrow="Risorse e guide"
        title="Approfondimenti"
        subtitle="Articoli pratici su ansia, attacchi di panico, autostima, relazioni e adolescenza. Per capire meglio cosa stai vivendo e come muovere il primo passo."
      />

      <section className="section-container pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 0.06}>
              <a
                href={article.href}
                className="group card-base card-hover p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 text-xs text-primary/45 mb-4">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-serif font-semibold text-base leading-snug mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-primary/60 leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-medium uppercase tracking-wider text-accent/70 bg-accent/[0.07] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Leggi l&apos;articolo
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <InlineCta
        title="Vuoi capire quale percorso è più adatto?"
        subtitle="Scrivimi senza impegno: nel primo colloquio definiamo obiettivi e modalità."
      />
    </>
  );
}
