import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "David Akpom – Frontend Developer & Brand Website Builder | Dahvidweb",
  description = "Discover Dahvidweb — the creative hub of Frontend Developer David Akpom. I build fast, modern, responsive websites that convert visitors into clients.",
  keywords = "frontend developer portfolio, modern web developer, React developer, TailwindCSS portfolio, UI/UX frontend engineer, responsive web design",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://dahvidweb.com"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "David Akpom",
          "jobTitle": "Frontend Developer",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com/dahvidweb",
            "https://linkedin.com/in/dahvidweb",
            "https://x.com/dahvidweb"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;