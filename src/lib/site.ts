/** Base URL du site en production (sans slash final). Surcharge via VITE_SITE_URL. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://ferdjiouaplast.dz'
).replace(/\/$/, '');

/** URL complète de la page LinkedIn (à personnaliser via VITE_LINKEDIN_URL). */
export const LINKEDIN_PROFILE_URL = (
  import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/company/ferdjioua-plastique'
).trim();

export const COMPANY = {
  name: 'Ferdjioua Plastique',
  legalName: 'Sarl Ferdjioua Plastique',
  description:
    "Fabrication plastique et services : préformes PET, emballage industriel et injection sur mesure à Ferdjioua, Mila, Algérie.",
  email: 'contact@ferdjiouaplast.dz',
  phoneDisplay: '+213 31 00 00 00',
  phoneE164: '+21331000000',
  addressLocality: 'Ferdjioua',
  addressRegion: 'Mila',
  addressCountry: 'DZ',
  /** Libellé FR (UI / meta) */
  industry: 'Fabrication plastique et services',
  /** Secteur pour JSON-LD (anglais, demande SEO local) */
  industryEn: 'Plastics manufacturing',
  foundingYear: '1998',
} as const;

type BreadcrumbEntry = { name: string; path: string };

function breadcrumbTrail(routePath: string): BreadcrumbEntry[] {
  const home: BreadcrumbEntry = { name: 'Accueil', path: '/' };
  const normalized = routePath === '' ? '/' : routePath.startsWith('/') ? routePath : `/${routePath}`;

  if (normalized === '/') {
    return [home];
  }

  const segments: Record<string, string> = {
    '/about': 'À propos',
    '/services': 'Services',
    '/contact': 'Contact',
  };

  const label = segments[normalized];
  if (!label) {
    return [home];
  }

  return [home, { name: label, path: normalized }];
}

function buildBreadcrumbListJson(pageUrl: string, routePath: string): Record<string, unknown> {
  const trail = breadcrumbTrail(routePath);
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function absoluteUrl(path: string): string {
  const p = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function buildJsonLdGraph(page: {
  url: string;
  path: string;
  title: string;
  description: string;
}): Record<string, unknown> {
  const businessId = `${SITE_URL}/#business`;
  const websiteId = `${SITE_URL}/#website`;
  const ogImage = `${SITE_URL}/og.png`;

  const sameAs = LINKEDIN_PROFILE_URL ? [LINKEDIN_PROFILE_URL] : [];

  const localBusinessProfessionalService: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': businessId,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    image: [ogImage],
    url: SITE_URL,
    telephone: COMPANY.phoneE164,
    email: COMPANY.email,
    description: COMPANY.description,
    foundingDate: COMPANY.foundingYear,
    logo: { '@type': 'ImageObject', url: ogImage },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      addressCountry: COMPANY.addressCountry,
      addressCountryName: 'Algeria',
    },
    knowsAbout: [COMPANY.industryEn, COMPANY.industry, 'PET preforms', 'Industrial packaging'],
    sameAs,
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: COMPANY.name,
    description: COMPANY.description,
    publisher: { '@id': businessId },
    inLanguage: 'fr-DZ',
  };

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
    breadcrumb: { '@id': `${page.url}#breadcrumb` },
    primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
    inLanguage: 'fr-DZ',
  };

  const breadcrumbList = buildBreadcrumbListJson(page.url, page.path);

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusinessProfessionalService, website, webPage, breadcrumbList],
  };
}
