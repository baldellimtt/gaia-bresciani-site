import { reviews } from '@/lib/reviews';

const BUSINESS_ID = 'https://www.gaiabrescianipsicologa.it/#localbusiness';

export default function ReviewSchemaJsonLd() {
  const reviewSchema = reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': BUSINESS_ID },
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    publisher: { '@type': 'Organization', name: review.source },
  }));

  return (
    <>
      {reviewSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
