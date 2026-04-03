import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contatti e primo colloquio | Psicologa Credaro e Castenedolo',
  description:
    'Contatti per primo colloquio psicologico a Credaro o Castenedolo: telefono, email e modulo per indicare sede, fascia oraria e richiesta.',
  alternates: { canonical: '/contatti' },
  openGraph: {
    title: 'Contatti \u2013 Psicologa Lago d\'Iseo e Sarnico | Gaia Bresciani',
    description:
      'Contatti rapidi per primo colloquio psicologico con studio a Credaro e Castenedolo, anche con possibilit\u00e0 di percorso online.',
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 340 8389 958',
    href: 'tel:+393408389958',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gaia.bresciani23@gmail.com',
    href: 'mailto:gaia.bresciani23@gmail.com',
  },
  {
    icon: Clock,
    label: 'Orari',
    value: 'Lun\u2013Ven 9\u201318, Sab 9\u201313',
  },
];

const studios = [
  {
    name: 'Credaro (BG)',
    address: 'Via Piave 7, 24060',
    area: 'Area Sarnico, Lago d\'Iseo, Grumello, Paratico, Capriolo, Villongo',
    mapSrc: 'https://maps.google.com/maps?q=Via%20Piave%207,%20Credaro%20BG&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Castenedolo (BS)',
    address: 'Piazza Martiri della Libert\u00e0 7, 25014',
    area: 'Area Brescia, Montichiari, Rezzato, Ghedi, Prevalle, Mazzano',
    mapSrc: 'https://maps.google.com/maps?q=45.4710,10.3005&z=11&output=embed',
  },
];

export default function ContattiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contatti' }]} />
      <PageHeader
        eyebrow="Contatti"
        title="Contatti e primo colloquio"
        subtitle="Per aiutarti in modo preciso, indica sede preferita, fascia oraria e una breve descrizione della situazione."
      />

      <section className="section-container pb-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="heading-md mb-6">Informazioni di contatto</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon size={18} strokeWidth={1.6} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-primary/45 uppercase tracking-wider font-medium mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-primary">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-primary/[0.02] rounded-xl p-2 -m-2 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="p-2 -m-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-base p-5 bg-accent/[0.04]">
              <p className="text-sm text-primary/65 leading-relaxed">
                Disponibili anche colloqui online. Approfondisci:{' '}
                <Link href="/zona-sarnico" className="text-accent hover:underline">
                  zona Sarnico e Lago d&apos;Iseo
                </Link>{' '}
                e{' '}
                <Link href="/terapia" className="text-accent hover:underline">
                  terapia individuale e di coppia
                </Link>.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <div className="card-base p-6 sm:p-8" id="contact-form">
              <h2 className="heading-md mb-6">Scrivimi direttamente</h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container pb-16">
        <AnimatedSection>
          <h2 className="heading-lg mb-10">Posizione degli studi</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {studios.map((studio, i) => (
            <AnimatedSection key={studio.name} delay={i * 0.1}>
              <div className="space-y-4">
                <div className="card-base p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif font-semibold text-base mb-0.5">
                        {studio.name}
                      </h3>
                      <p className="text-sm text-primary/60">{studio.address}</p>
                      <p className="text-xs text-primary/45 mt-1">{studio.area}</p>
                    </div>
                  </div>
                </div>
                <iframe
                  src={studio.mapSrc}
                  title={`Mappa ${studio.name}`}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[300px] rounded-2xl border border-primary/[0.06]"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
