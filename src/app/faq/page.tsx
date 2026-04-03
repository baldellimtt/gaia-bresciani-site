import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import Accordion from '@/components/Accordion';
import InlineCta from '@/components/InlineCta';

export const metadata: Metadata = {
  title: 'FAQ Psicologa a Sarnico e Lago d\'Iseo | Gaia Bresciani',
  description:
    'FAQ su primo colloquio, durata sedute, terapia online e problematiche trattate. Risposte chiare per chi cerca una psicologa tra Sarnico, Lago d\'Iseo e Brescia.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ - Domande su psicoterapia e primo colloquio | Gaia Bresciani',
    description:
      'Risposte pratiche su psicoterapia: sedi, primo incontro, approccio clinico, durata del percorso e modalit\u00e0 online.',
  },
};

const faqItems = [
  {
    question: 'Dove si trova lo studio?',
    answer:
      'Ricevo in due sedi per offrire maggiore flessibilit\u00e0: Credaro (BG), Via Piave 7, comodo per Sarnico, Villongo, Paratico, Capriolo e basso Lago d\'Iseo; Castenedolo (BS), Piazza Martiri della Libert\u00e0 7, pratico per Brescia, Montichiari, Rezzato, Mazzano, Ghedi e dintorni. In entrambe le sedi ricevo su appuntamento.',
  },
  {
    question: '\u00c8 previsto un primo incontro conoscitivo?',
    answer:
      'S\u00ec. Il primo incontro \u00e8 conoscitivo: ci aiuta a chiarire la richiesta, definire gli obiettivi e capire quale percorso pu\u00f2 essere davvero utile per te.',
  },
  {
    question: 'Quali approcci psicoterapeutici utilizza?',
    answer:
      'Il mio metodo integra psicoterapia psicodinamica adleriana e, quando necessario, terapia EMDR per traumi, blocchi emotivi ed eventi ad alto impatto.',
  },
  {
    question: 'Con quali problematiche pu\u00f2 aiutarmi la psicoterapia?',
    answer:
      'La psicoterapia pu\u00f2 aiutare in caso di ansia e attacchi di panico, stress e difficolt\u00e0 relazionali, autostima fragile e insicurezza, crisi personali, separazioni e lutti, traumi e ricordi emotivamente invasivi.',
  },
  {
    question: '\u00c8 possibile fare terapia online?',
    answer:
      'S\u00ec, sono disponibili colloqui online in videochiamata. \u00c8 una modalit\u00e0 efficace per chi ha tempi stretti, spostamenti complessi o vive lontano.',
  },
  {
    question: 'Lavora solo con adulti o anche con bambini e adolescenti?',
    answer:
      'Offro supporto anche a bambini e adolescenti, costruendo il lavoro in modo coordinato con i genitori e, quando utile, con il contesto scolastico.',
  },
  {
    question: 'Quanto dura un percorso psicologico?',
    answer:
      'La durata dipende dagli obiettivi e dalla complessit\u00e0 della situazione. In alcuni casi bastano pochi incontri, in altri serve pi\u00f9 tempo: lo definiamo insieme in modo trasparente.',
  },
  {
    question: 'Quanto dura una seduta di psicoterapia?',
    answer:
      'Una seduta dura circa 50 minuti. Anche nel percorso EMDR la durata standard resta di 50 minuti.',
  },
  {
    question: 'Quanto costa una seduta?',
    answer:
      'Il costo di una seduta è compreso tra 70 e 100 euro, a seconda del tipo di percorso (individuale, di coppia, EMDR). Il compenso viene concordato nel primo colloquio. Le spese per sedute psicologiche e psicoterapeutiche sono detraibili al 19% nella dichiarazione dei redditi (modello 730 o Redditi PF), come previsto dalla normativa fiscale italiana. È sufficiente conservare la fattura rilasciata.',
  },
  {
    question: 'Quali sono le modalità di pagamento?',
    answer:
      'È possibile pagare in contanti o tramite bonifico bancario. Ad ogni seduta viene rilasciata regolare fattura sanitaria, valida per la detrazione fiscale.',
  },
  {
    question: 'Come posso fissare un appuntamento?',
    answer:
      'Puoi contattarmi via telefono, email, modulo nella sezione Contatti o tramite MioDottore. Indica sede preferita e fascia oraria: ricevi una risposta entro 24 ore lavorative.',
  },
  {
    question: 'Lavori anche nel weekend o in orari serali?',
    answer:
      'Sono disponibili alcune fasce flessibili, comprese opzioni serali e, quando possibile, il sabato mattina.',
  },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'FAQ' }]} />
      <PageHeader
        eyebrow="Domande frequenti"
        title="Tutto quello che devi sapere"
        subtitle="Risposte chiare su primo colloquio, sedi, durata del percorso e modalità di lavoro."
      />

      <section className="section-container pb-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </AnimatedSection>
      </section>

      <InlineCta
        title="Vuoi chiarire dubbi prima di iniziare?"
        subtitle="Scrivimi dal modulo contatti: ti rispondo entro 24 ore lavorative."
      />
    </>
  );
}
