const DEFAULT_SITE_URL = 'https://pacificmule.com';

export const contactEmail = 'trotzuk.stanislav@gmail.com';

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, '');
}
