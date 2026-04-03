import type { MetadataRoute } from 'next';

const BASE = 'https://www.gaiabrescianipsicologa.it';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/chi-sono/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/terapia/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/emdr/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/approfondimenti/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contatti/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/zona-sarnico/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/esperienza/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy/', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy/', priority: 0.2, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
