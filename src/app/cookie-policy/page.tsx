import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Gaia Bresciani Psicologa',
  description:
    'Cookie policy del sito di Gaia Bresciani Psicologa: tipi di cookie, gestione e consenso.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Cookie Policy' }]} />
      <PageHeader title="Cookie Policy" />

      <section className="section-container pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-primary/75">
            <p className="body-md italic">Ultimo aggiornamento: 27 gennaio 2025</p>

            <div>
              <h2 className="heading-md mb-3">Cosa sono i cookie</h2>
              <p className="body-md">
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo
                dell&apos;utente (computer, tablet, smartphone) quando si visita un sito web.
                I cookie permettono al sito di ricordare le azioni e le preferenze
                dell&apos;utente per un determinato periodo di tempo, cos&igrave; non
                &egrave; necessario reinserirle ogni volta che si torna sul sito o si naviga
                da una pagina all&apos;altra.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Tipologie di cookie utilizzati</h2>

              <h3 className="font-serif font-semibold text-lg mt-5 mb-2">Cookie tecnici (necessari)</h3>
              <p className="body-md mb-3">
                Questo sito utilizza cookie tecnici strettamente necessari per il funzionamento
                del sito e per garantire la navigazione e l&apos;utilizzo delle funzionalit&agrave;
                di base. Questi cookie non richiedono il consenso dell&apos;utente ai sensi
                della normativa vigente.
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md">
                <li><strong>Cookie di sessione:</strong> utilizzati per mantenere la sessione durante la navigazione</li>
                <li><strong>Cookie di preferenze:</strong> utilizzati per ricordare le preferenze dell&apos;utente (es. consenso cookie)</li>
              </ul>

              <h3 className="font-serif font-semibold text-lg mt-6 mb-2">Cookie di terze parti</h3>
              <p className="body-md mb-3">
                Il sito pu&ograve; utilizzare servizi di terze parti che potrebbero impostare
                cookie sul dispositivo dell&apos;utente:
              </p>

              <h4 className="font-semibold text-base mt-4 mb-1">MioDottore / Docplanner</h4>
              <p className="body-md mb-3">
                Il widget di prenotazione visite online &egrave; fornito da MioDottore (Docplanner).
                Questo servizio pu&ograve; utilizzare cookie per il corretto funzionamento del widget
                di prenotazione. Per maggiori informazioni, consulta la{' '}
                <a href="https://www.miodottore.it/informativa-privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Privacy Policy di MioDottore
                </a>.
              </p>

              <h4 className="font-semibold text-base mt-4 mb-1">Elfsight Platform</h4>
              <p className="body-md">
                Il sito pu&ograve; utilizzare servizi forniti da Elfsight Platform per
                funzionalit&agrave; aggiuntive. Per maggiori informazioni, consulta la{' '}
                <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Privacy Policy di Elfsight
                </a>.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Gestione dei cookie</h2>
              <p className="body-md mb-3">
                L&apos;utente pu&ograve; gestire le preferenze relative ai cookie attraverso
                le impostazioni del proprio browser. &Egrave; possibile:
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md mb-4">
                <li>Visualizzare i cookie memorizzati sul dispositivo</li>
                <li>Eliminare i cookie esistenti</li>
                <li>Bloccare l&apos;installazione di nuovi cookie</li>
                <li>Ricevere una notifica prima dell&apos;installazione di un nuovo cookie</li>
              </ul>
              <p className="body-md mb-3">
                Le istruzioni per la gestione dei cookie variano a seconda del browser utilizzato.
                Di seguito i link alle guide dei browser pi&ugrave; comuni:
              </p>
              <ul className="list-disc pl-6 space-y-1 body-md">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-9956-218d1d5a4d49" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="body-md mt-3">
                <strong>Nota:</strong> La disattivazione dei cookie tecnici potrebbe compromettere
                il corretto funzionamento del sito.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Consenso</h2>
              <p className="body-md">
                Continuando a navigare su questo sito dopo aver visualizzato il banner informativo
                sui cookie, l&apos;utente accetta l&apos;utilizzo dei cookie tecnici necessari al
                funzionamento del sito. Per i cookie di terze parti, il consenso viene richiesto
                esplicitamente tramite il banner cookie.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Aggiornamenti</h2>
              <p className="body-md">
                Questa Cookie Policy pu&ograve; essere aggiornata periodicamente. Si consiglia
                di consultare regolarmente questa pagina per essere informati su eventuali
                modifiche. La data dell&apos;ultimo aggiornamento &egrave; indicata all&apos;inizio
                del documento.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Contatti</h2>
              <p className="body-md">
                Per domande o richieste relative all&apos;utilizzo dei cookie su questo sito,
                &egrave; possibile contattare il Titolare del Trattamento:
              </p>
              <p className="body-md mt-2">
                <strong>Dott.ssa Gaia Bresciani &ndash; Psicologa e Psicoterapeuta</strong><br />
                Email: <a href="mailto:gaia.bresciani23@gmail.com" className="text-accent hover:underline">gaia.bresciani23@gmail.com</a><br />
                Telefono: <a href="tel:+393408389958" className="text-accent hover:underline">+39 340 8389 958</a>
              </p>
            </div>

            <div className="pt-4">
              <Link href="/privacy-policy" className="text-accent hover:underline font-medium">
                &larr; Torna alla Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
