import { CalendarCheck, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/393408389958?text=' +
  encodeURIComponent(
    'Salve, vorrei informazioni per un primo colloquio.'
  );

const MIODOTTORE_BOOKING_URL =
  'https://www.miodottore.it/gaia-miriam-teresa-bresciani/psicoterapeuta-psicologo-clinico-psicologo/brescia';

export default function FloatingContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-primary/10 bg-white/95 px-3 py-2.5 backdrop-blur-sm shadow-soft-lg lg:hidden"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={MIODOTTORE_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white active:scale-[0.98] transition-transform"
        aria-label="Prenota una visita con la Dott.ssa Gaia Bresciani su MioDottore"
      >
        <CalendarCheck size={17} strokeWidth={2} />
        Prenota
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white active:scale-[0.98] transition-transform"
        aria-label="Scrivi su WhatsApp alla Dott.ssa Gaia Bresciani"
      >
        <MessageCircle size={17} strokeWidth={2} />
        WhatsApp
      </a>
    </div>
  );
}
