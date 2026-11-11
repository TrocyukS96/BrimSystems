import type { MetadataRoute } from 'next';
import { locales } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const languages = {
  ...Object.fromEntries(locales.map((locale) => [locale, `${base}/${locale}`])),
  'x-default': `${base}/ru`,
};
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }));
}
