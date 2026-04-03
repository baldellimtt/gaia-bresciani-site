import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Psicologa a Sarnico, Lago d\'Iseo e Castenedolo | Gaia Bresciani',
  description:
    'Psicologa e psicoterapeuta a Credaro e Castenedolo (vicino Sarnico e Lago d\'Iseo). Percorsi per ansia, relazioni, autostima e traumi con primo colloquio orientativo.',
  metadataBase: new URL('https://www.gaiabrescianipsicologa.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psicologa a Sarnico, Lago d\'Iseo e Castenedolo | Gaia Bresciani',
    description:
      'Percorsi psicologici a Credaro e Castenedolo per ansia, relazioni, autostima e traumi. Primo colloquio per capire come iniziare.',
    url: 'https://www.gaiabrescianipsicologa.it/',
    siteName: 'Gaia Bresciani Psicologa',
    images: [
      {
        url: '/assets/psicologa-gaia-bresciani.webp',
        width: 1200,
        height: 630,
        alt: 'Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicologa a Sarnico, Lago d\'Iseo e Castenedolo | Gaia Bresciani',
    description:
      'Percorso psicologico in presenza o online, con primo colloquio orientato ai tuoi obiettivi.',
    images: ['/assets/psicologa-gaia-bresciani.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/favicon.webp',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#F9F7F2',
    'color-scheme': 'light',
  },
};

function SchemaOrgJsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gaia Bresciani',
    jobTitle: 'Psicologa e Psicoterapeuta',
    description:
      'Psicologa e Psicoterapeuta specializzata in Psicoterapia Psicodinamica Adleriana e Terapia EMDR. Studio a Credaro (BG), servizio per Sarnico, Lago d\'Iseo e dintorni.',
    url: 'https://www.gaiabrescianipsicologa.it',
    image: 'https://www.gaiabrescianipsicologa.it/assets/psicologa-gaia-bresciani.webp',
    email: 'gaia.bresciani23@gmail.com',
    telephone: '+393408389958',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Piave 7',
      addressLocality: 'Credaro',
      addressRegion: 'BG',
      postalCode: '24060',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.facebook.com/StudioPrivatoViaPiave7CredaroBG/',
      'https://www.linkedin.com/in/gaia-bresciani-357aa8106/',
    ],
    knowsAbout: [
      'Psicoterapia',
      'Terapia EMDR',
      'Psicologia Clinica',
      'Terapia di Coppia',
      'Terapia Individuale',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Istituto Alfred Adler',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Albo Professionale degli Psicologi e Psicoterapeuti della Lombardia',
      identifier: '22433',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Psychologist', 'MedicalBusiness', 'LocalBusiness'],
    '@id': 'https://www.gaiabrescianipsicologa.it/#localbusiness',
    name: 'Gaia Bresciani \u2013 Psicologa e Psicoterapeuta',
    alternateName: 'Studio Psicologia Gaia Bresciani',
    image: [
      'https://www.gaiabrescianipsicologa.it/assets/psicologa-gaia-bresciani.webp',
      'https://www.gaiabrescianipsicologa.it/assets/psicologa-lago-iseo-sarnico.webp',
    ],
    logo: 'https://www.gaiabrescianipsicologa.it/assets/psicologa-gaia-bresciani.webp',
    description:
      'Psicologa e Psicoterapeuta specializzata in Psicoterapia Psicodinamica Adleriana e Terapia EMDR. Studio a Credaro (BG) e Castenedolo (BS), servizio per Sarnico, Lago d\'Iseo e zone limitrofe.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Via Piave 7',
        addressLocality: 'Credaro',
        addressRegion: 'BG',
        postalCode: '24060',
        addressCountry: 'IT',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Piazza Martiri della Libert\u00e0 7',
        addressLocality: 'Castenedolo',
        addressRegion: 'BS',
        postalCode: '25014',
        addressCountry: 'IT',
      },
    ],
    geo: { '@type': 'GeoCoordinates', latitude: '45.6337', longitude: '9.9328' },
    hasMap: 'https://www.google.com/maps/place/Gaia+Bresciani+Psicologa/',
    telephone: '+393408389958',
    email: 'gaia.bresciani23@gmail.com',
    url: 'https://www.gaiabrescianipsicologa.it',
    priceRange: '\u20ac70-\u20ac100',
    paymentAccepted: 'Cash, Bank Transfer',
    currenciesAccepted: 'EUR',
    sameAs: [
      'https://www.facebook.com/StudioPrivatoViaPiave7CredaroBG/',
      'https://www.linkedin.com/in/gaia-bresciani-357aa8106/',
      'https://www.google.com/maps/place/Gaia+Bresciani+Psicologa/',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Sarnico',
        sameAs: 'https://it.wikipedia.org/wiki/Sarnico',
        geo: { '@type': 'GeoCoordinates', latitude: '45.6690', longitude: '9.9615' },
      },
      ...['Lago d\'Iseo', 'Iseo', 'Paratico', 'Capriolo',
        'Villongo', 'Credaro', 'Castelli Calepio', 'Grumello del Monte',
        'Palazzolo sull\'Oglio', 'Bergamo', 'Brescia', 'Castenedolo',
      ].map((name) => ({ '@type': 'City', name })),
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: '45.6690', longitude: '9.9615' },
      geoRadius: '20000',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Psicologia e Psicoterapia',
      itemListElement: [
        { name: 'Terapia Individuale', description: 'Percorsi di psicoterapia individuale per adulti, adolescenti e bambini.' },
        { name: 'Terapia di Coppia', description: 'Supporto psicologico per coppie in difficolt\u00e0.' },
        { name: 'Terapia EMDR', description: 'Trattamento per traumi, ansia e blocchi emotivi con tecnica EMDR.' },
        { name: 'Consulenza Psicologica Online', description: 'Colloqui psicologici online sicuri ed efficaci.' },
      ].map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', ...s, provider: { '@type': 'Person', name: 'Gaia Bresciani' } },
        availability: 'https://schema.org/InStock',
      })),
    },
    medicalSpecialty: [
      'Psicologia Clinica',
      'Psicoterapia',
      'Terapia EMDR',
      'Psicoterapia Psicodinamica Adleriana',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Albo Professionale degli Psicologi e Psicoterapeuti della Lombardia',
        identifier: '22433',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '25',
      bestRating: '5',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        q: 'Dove trovo una psicologa a Sarnico',
        a: 'Sono una psicologa e psicoterapeuta con studio a Credaro (BG), facilmente raggiungibile da Sarnico e Lago d\'Iseo. Offro terapia individuale, di coppia e EMDR per ansia, attacchi di panico e traumi.',
      },
      {
        q: 'Quale psicoterapeuta tratta l\'ansia sul Lago d\'Iseo',
        a: 'Offro terapia per ansia e attacchi di panico a Sarnico e Lago d\'Iseo utilizzando approcci scientificamente validati, tra cui la Terapia EMDR.',
      },
      {
        q: 'Come posso prenotare una seduta con una psicologa vicino a Sarnico',
        a: 'Puoi contattarmi telefonicamente al +39 340 8389 958, via email a gaia.bresciani23@gmail.com, oppure prenotare online tramite MioDottore.',
      },
      {
        q: 'Quanto dura un percorso di psicoterapia',
        a: 'La durata varia in base alle esigenze individuali. Alcuni percorsi possono essere brevi (3-6 mesi), altri pi\u00f9 approfonditi. Durante il primo colloquio valutiamo insieme il percorso pi\u00f9 adatto.',
      },
      {
        q: '\u00c8 possibile fare terapia online con una psicologa di Sarnico',
        a: 'S\u00ec, offro colloqui psicologici online sicuri ed efficaci per chi ha difficolt\u00e0 logistiche o preferisce ricevere supporto da casa.',
      },
    ].map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.gaiabrescianipsicologa.it/#website',
    name: 'Gaia Bresciani Psicologa',
    url: 'https://www.gaiabrescianipsicologa.it',
    publisher: { '@id': 'https://www.gaiabrescianipsicologa.it/#localbusiness' },
    inLanguage: 'it-IT',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <SchemaOrgJsonLd />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; frame-src https://www.google.com https://maps.google.com https://www.miodottore.it; connect-src 'self' https://formspree.io; upgrade-insecure-requests" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="preconnect" href="https://formspree.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body className="bg-background text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Vai al contenuto principale
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
