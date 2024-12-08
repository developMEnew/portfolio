import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author = 'Hasitha Sandakelum'
}: SEOProps) {
  const siteUrl = 'https://hasitha.dev';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const finalImage = image || defaultImage;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Hasitha Sandakelum Portfolio" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hasitha_san" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <link rel="canonical" href={url || siteUrl} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hasitha Sandakelum",
          "url": siteUrl,
          "image": finalImage,
          "sameAs": [
            "https://github.com/hasitha-san",
            "https://linkedin.com/in/hasitha-san",
            "https://twitter.com/hasitha_san"
          ],
          "jobTitle": "Full-Stack Developer",
          "description": description
        })}
      </script>
    </Helmet>
  );
}