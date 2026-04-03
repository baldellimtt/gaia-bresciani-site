import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gaia Bresciani Psicologa',
  description:
    'Privacy policy del sito di Gaia Bresciani Psicologa: trattamento dati, finalità e diritti dell\'utente.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      <PageHeader title="Privacy Policy" />

      <section className="section-container pb-20">
        <div className="max-w-3xl mx-auto prose prose-primary">
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-primary/75">
            <div>
              <h2 className="heading-md mb-3">Titolare del Trattamento</h2>
              <p className="body-md">
                Dott.ssa Gaia Bresciani &ndash; Psicologa e Psicoterapeuta
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Tipologie di dati raccolti</h2>
              <p className="body-md">
                Il sito non raccoglie dati personali automaticamente. Qualsiasi dato
                personale fornito tramite modulo di contatto sar&agrave; utilizzato
                esclusivamente per rispondere alle richieste inviate.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Uso dei cookie</h2>
              <p className="body-md">
                Questo sito utilizza cookie tecnici necessari per il funzionamento del sito.
                Inoltre, possono essere utilizzati cookie di terze parti per il funzionamento
                di servizi esterni (come il widget di prenotazione MioDottore). Per informazioni
                dettagliate sui cookie utilizzati, sulle loro finalit&agrave; e su come gestirli,
                consulta la{' '}
                <Link href="/cookie-policy" className="text-accent hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Finalit&agrave; del trattamento</h2>
              <p className="body-md">
                I dati forniti saranno trattati unicamente per rispondere a richieste
                informative o per fornire il servizio richiesto.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Diritti dell&apos;utente</h2>
              <p className="body-md">
                L&apos;utente pu&ograve; richiedere in qualsiasi momento la cancellazione,
                modifica o accesso ai propri dati personali scrivendo all&apos;indirizzo email
                indicato sopra.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Modulo di contatto</h2>
              <p className="body-md">
                I dati inseriti nel modulo (nome, email, messaggio) vengono utilizzati
                esclusivamente per rispondere alle richieste dell&apos;utente. Non vengono
                conservati n&eacute; condivisi con terze parti. Il consenso al trattamento
                dei dati &egrave; richiesto tramite apposita casella obbligatoria prima
                dell&apos;invio del modulo.
              </p>
            </div>

            <div>
              <p className="body-md">
                Per ulteriori informazioni sul trattamento dei dati personali, puoi contattare
                il Titolare del Trattamento all&apos;indirizzo{' '}
                <a
                  href="mailto:gaia.bresciani23@gmail.com"
                  className="text-accent hover:underline"
                >
                  gaia.bresciani23@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
