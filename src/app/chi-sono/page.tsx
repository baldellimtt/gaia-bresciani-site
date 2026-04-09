import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { GraduationCap, Target, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chi sono | Psicologa vicino Sarnico con studio a Credaro',
  description:
    'Conosci Gaia Bresciani, psicologa e psicoterapeuta con studio a Credaro, punto di riferimento per chi vive tra Sarnico e basso Lago d\'Iseo.',
  alternates: { canonical: '/chi-sono' },
  openGraph: {
    title: 'Chi sono | Psicologa vicino Sarnico con studio a Credaro',
    description:
      'Approccio clinico adleriano ed EMDR, con percorsi personalizzati per ansia, relazioni, autostima e momenti di crisi.',
  },
};

export default function ChiSonoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Chi sono' }]} />
      <PageHeader
        eyebrow="Psicologa e Psicoterapeuta"
        title="Chi sono"
        subtitle="Metto al centro la persona, non la diagnosi. Ogni percorso parte da te, dalla tua storia e da quello che stai vivendo."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-3 space-y-12">
            <div className="space-y-4">
              <p className="body-md">
                Sono Gaia Bresciani, <strong>psicologa e psicoterapeuta</strong>.
                Ricevo a Credaro, in una sede facilmente raggiungibile anche da
                Sarnico e dai comuni vicini del Lago d&apos;Iseo.
              </p>
              <p className="body-md">
                Quando necessario, il percorso pu&ograve; proseguire anche online
                o essere organizzato nella sede secondaria di Castenedolo.
              </p>
            </div>

            <div className="card-base p-6 bg-accent/[0.04] border-l-4 border-accent/30 space-y-3">
              <h3 className="font-serif font-semibold text-base text-primary">
                Perch&eacute; faccio questo lavoro
              </h3>
              <p className="body-md">
                Ho scelto di diventare psicoterapeuta perch&eacute; credo che ognuno
                meriti uno spazio in cui sentirsi ascoltato senza giudizio.
                So che chiedere aiuto &egrave; difficile &mdash; spesso chi arriva in
                studio ci ha pensato a lungo prima di farlo.
              </p>
              <p className="body-md">
                Il mio obiettivo &egrave; creare le condizioni perch&eacute; quel
                primo passo non sia spaventoso, ma l&apos;inizio di un cambiamento
                reale e sostenibile.
              </p>
            </div>

            <div className="space-y-4">
              <p className="body-md">
                Mi sono formata in Psicologia Clinica e della Salute e sono
                iscritta all&apos;
                <a
                  href="https://www.opl.it/psicologi/22433/Bresciani-Gaia-Miriam-Teresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Albo Professionale degli Psicologi della Lombardia
                </a>{' '}
                (n. 22433).
              </p>
              <p className="body-md">
                La specializzazione in <strong>Psicoterapia Psicodinamica
                Adleriana</strong> presso l&apos;
                <a
                  href="https://www.scuolaadleriana.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Istituto Alfred Adler
                </a>{' '}
                orienta il mio metodo: ascolto clinico, obiettivi condivisi
                e rispetto dei tuoi tempi.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="relative aspect-[3/4] max-w-[220px] mx-auto lg:max-w-[240px] rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="/assets/studio-psicologia-lago-iseo-sarnico.webp"
                alt="Ritratto professionale Gaia Bresciani, psicologa psicoterapeuta a Sarnico e Lago d'Iseo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 220px, 240px"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-10">Come lavoro</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Handshake,
              title: 'Accoglienza',
              text: 'Il primo incontro serve a comprendere cosa stai vivendo: sintomi, contesto e bisogno principale.',
            },
            {
              icon: Target,
              title: 'Obiettivi concreti',
              text: 'Costruiamo un percorso sostenibile, con obiettivi realistici e una direzione clinica chiara.',
            },
            {
              icon: GraduationCap,
              title: 'Metodo integrato',
              text: 'Approccio psicodinamico adleriano, con possibilità di integrare EMDR quando indicato.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base p-7">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={22} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <h3 className="heading-md mb-2">{item.title}</h3>
                  <p className="body-md">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="max-w-3xl space-y-4">
            <h2 className="heading-lg mb-4">Per chi cerca un supporto in zona</h2>
            <p className="body-md">
              Se vivi tra Sarnico e il basso Lago d&apos;Iseo, puoi contare su
              un riferimento stabile in presenza a Credaro.
            </p>
            <p className="body-md">
              L&apos;obiettivo &egrave; aiutarti a <strong>ritrovare equilibrio</strong>,
              regolazione emotiva e un modo pi&ugrave; efficace di affrontare quello
              che stai attraversando.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi capire da dove iniziare?"
        subtitle="Scrivimi senza impegno: valutiamo insieme il primo colloquio e la modalità più adatta."
      />
    </>
  );
}
