import { Helmet } from 'react-helmet-async';
import { COMPANY, SITE_URL, absoluteUrl, buildJsonLdGraph } from '@/lib/site';

type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  /** Chemin de route, ex. '/' ou '/about' */
  path: string;
};

const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

export function Seo({ title, description, keywords, path }: SeoProps) {
  const canonical = absoluteUrl(path);
  const jsonLd = buildJsonLdGraph({ url: canonical, path, title, description });

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={COMPANY.name} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="fr_DZ" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content={`${COMPANY.name} — ${COMPANY.industry}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content={`${COMPANY.name} — ${COMPANY.industry}`} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
