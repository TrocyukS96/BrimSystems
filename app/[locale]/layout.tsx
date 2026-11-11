import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, locales } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';
import '../globals.css';
import '../v2.css';
export const metadata: Metadata = { metadataBase: new URL(getSiteUrl()), applicationName: 'BrimSystems', icons: { icon: '/favicon.svg' } };
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode,params:Promise<{locale:string}>}){const {locale}=await params;if(!locales.includes(locale as Locale))notFound();return <html lang={locale}><body>{children}</body></html>;}
