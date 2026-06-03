import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingContact from '@/components/FloatingContact';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2D464C',
};

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
  description:
    'Gaia Bresciani, psicologa e psicoterapeuta a Credaro, vicino a Sarnico e Lago d\'Iseo. Percorsi in presenza per ansia, relazioni, autostima e traumi.',
  metadataBase: new URL('https://www.gaiabrescianipsicologa.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
    description:
      'Studio di psicologia a Credaro, comodo per Sarnico e basso Lago d\'Iseo. Primo colloquio per ansia, relazioni, autostima e traumi.',
    url: 'https://www.gaiabrescianipsicologa.it/',
    siteName: 'Gaia Bresciani Psicologa',
    images: [
      {
        url: '/assets/og-share.webp',
        width: 1200,
        height: 630,
        alt: 'Gaia Bresciani, psicologa e psicoterapeuta a Credaro vicino Sarnico e Lago d\'Iseo',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicologa a Credaro vicino Sarnico e Lago d\'Iseo | Gaia Bresciani',
    description:
      'Percorsi psicologici in presenza a Credaro, vicino a Sarnico e Lago d\'Iseo, con primo colloquio orientativo.',
    images: ['/assets/og-share.webp'],
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
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <SchemaOrgJsonLd />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://platform.docplanner.com; style-src 'self' 'unsafe-inline' https://platform.docplanner.com; img-src 'self' data: https:; font-src 'self' https://platform.docplanner.com; frame-src https://www.google.com https://maps.google.com https://www.miodottore.it; connect-src 'self' https://formspree.io https://platform.docplanner.com; form-action 'self' https://formspree.io https://www.miodottore.it; object-src 'none'; base-uri 'self'; upgrade-insecure-requests; block-all-mixed-content" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="preconnect" href="https://formspree.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://platform.docplanner.com" />
        <link rel="preconnect" href="https://platform.docplanner.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body className="bg-background text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Vai al contenuto principale
        </a>
        <Navbar />
        <ScrollProgressBar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
        <CookieBanner />
      </body>
    </html>
  );
}
