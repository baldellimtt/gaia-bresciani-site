interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaJsonLdProps {
  items: FaqItem[];
}

export default function FaqSchemaJsonLd({ items }: FaqSchemaJsonLdProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
