import type { Metadata } from 'next';
import Website from '@/components/Website';
import { getContent, locales, Locale } from '@/lib/content';
import { notFound } from 'next/navigation';
import { getSiteUrl } from '@/lib/site';

const base = getSiteUrl();
const languageAlternates = {
  'ru-RU': `${base}/ru`,
  'en-US': `${base}/en`,
  'x-default': `${base}/ru`,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = getContent(locale as Locale);
  const ogLocale = locale === 'ru' ? 'ru_RU' : 'en_US';
  const alternateLocale = locale === 'ru' ? ['en_US'] : ['ru_RU'];
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: { canonical: `${base}/${locale}`, languages: languageAlternates },
    openGraph: {
      type: 'website',
      url: `${base}/${locale}`,
      title: t.seoTitle,
      description: t.seoDescription,
      siteName: 'BrimSystems',
      locale: ogLocale,
      alternateLocale,
      images: [{ url: '/og.svg', width: 1200, height: 630, alt: t.seoImageAlt }],
    },
    twitter: { card: 'summary_large_image', title: t.seoTitle, description: t.seoDescription, images: ['/og.svg'] },
    robots: { index: true, follow: true },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getContent(locale as Locale);
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${base}/#organization`,
      name: 'BrimSystems',
      url: base,
      description: t.seoDescription,
      knowsAbout: t.knowsAbout,
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: base,
      name: 'BrimSystems',
      inLanguage: ['ru-RU', 'en-US'],
      publisher: { '@id': `${base}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${base}/#service`,
      name: 'BrimSystems',
      url: base,
      description: t.seoDescription,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital services',
        itemListElement: t.services.map((s) => ({ '@type': 'OfferCatalog', name: s.title, description: s.desc })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: t.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />
      <Website locale={locale as Locale} />
    </>
  );
}
