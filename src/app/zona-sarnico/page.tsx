import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import InlineCta from '@/components/InlineCta';
import { MapPin, Users, Clock, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Psicologa vicino Sarnico | Studio a Credaro e colloqui online',
  description:
    'Informazioni pratiche per chi cerca una psicologa vicino Sarnico: studio a Credaro, aree servite nel basso Lago d\'Iseo e primo colloquio in presenza o online.',
  alternates: { canonical: '/zona-sarnico' },
  openGraph: {
    title: 'Psicologa vicino Sarnico | Studio a Credaro e online',
    description:
      'Sedi, aree servite e modalit\u00e0 del primo colloquio per chi vive tra Sarnico e basso Lago d\'Iseo.',
  },
};

const highlights = [
  {
    icon: MapPin,
    title: 'Comuni serviti',
    text: 'Sarnico, Paratico, Capriolo, Villongo, Credaro, Castelli Calepio, Grumello del Monte, Palazzolo sull\'Oglio.',
  },
  {
    icon: Users,
    title: 'Modalit\u00e0 di incontro',
    text: 'Primo colloquio in presenza a Credaro (BG) oppure online, in base alle esigenze organizzative.',
  },
  {
    icon: Target,
    title: 'Ambiti frequenti',
    text: 'Ansia, attacchi di panico, stress, difficolt\u00e0 relazionali, crisi di coppia, traumi e transizioni.',
  },
];

export default function ZonaSarnicoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Zona Sarnico e Lago d\'Iseo' }]} />
      <PageHeader
        eyebrow="Area servita"
        title="Psicologa vicino Sarnico: studio a Credaro e online"
        subtitle="Informazioni pratiche per chi vive tra Sarnico e basso Lago d'Iseo: sede, aree coperte, primo colloquio."
      />

      <section className="section-container pb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="card-base p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.6} className="text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-base mb-2">{item.title}</h3>
                  <p className="body-md">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="heading-lg">Un punto di riferimento vicino a Sarnico</h2>
              <p className="body-md">
                Lo studio di Credaro &egrave; facilmente raggiungibile da Sarnico e dai
                comuni del basso Lago d&apos;Iseo, con tempi di spostamento contenuti e
                possibilit&agrave; di organizzare appuntamenti in fasce orarie compatibili
                con lavoro e famiglia.
              </p>
              <p className="body-md">
                Le richieste pi&ugrave; frequenti riguardano ansia intensa, attacchi di panico,
                stress prolungato, difficolt&agrave; relazionali, cambiamenti familiari e fasi di
                stanchezza emotiva.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Come funziona il primo colloquio</h2>
              <p className="body-md">
                Il primo incontro serve a comprendere la domanda di aiuto e valutare la
                strada pi&ugrave; adatta. Raccogliamo i principali elementi del problema, la
                sua evoluzione e le risorse gi&agrave; presenti.
              </p>
              <p className="body-md">
                Si chiariscono anche aspetti pratici: frequenza, modalit&agrave; in presenza
                o online, e aspettative realistiche sul percorso. L&apos;obiettivo &egrave;
                ridurre l&apos;incertezza iniziale.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-lg">Obiettivi del percorso e tempi</h2>
              <p className="body-md">
                Il lavoro inizia con la riduzione dei sintomi pi&ugrave; urgenti: gestione
                dell&apos;ansia, miglioramento del sonno, regolazione emotiva. In una fase
                successiva si approfondiscono i nodi relazionali e gli schemi ricorrenti.
              </p>
              <p className="body-md">
                Quando indicato, pu&ograve; essere integrato un lavoro specifico sul
                trauma con{' '}
                <Link href="/emdr" className="text-accent hover:underline">
                  approccio EMDR
                </Link>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="card-base p-6 flex items-start gap-4">
            <Clock size={20} className="text-accent shrink-0 mt-0.5" />
            <p className="body-md">
              Approfondisci i trattamenti:{' '}
              <Link href="/terapia" className="text-accent hover:underline">
                terapia individuale e di coppia
              </Link>{' '}
              e{' '}
              <Link href="/emdr" className="text-accent hover:underline">
                terapia EMDR
              </Link>.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi verificare disponibilità e sede migliore?"
        subtitle="Indicami zona e fascia oraria preferita: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
