import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ 
  title, 
  description, 
  keywords, 
  image, 
  article = false, 
  pathname = "/" 
}) => {
  const siteUrl = "https://briannabums.com"
  const fullUrl = `${siteUrl}${pathname}`
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/images/profil.jpg`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Brianna Bums" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Brianna Bums - Premium Content Creator" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Brianna Bums" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Brianna Bums - Premium Content Creator" />
      <meta name="twitter:creator" content="@briannabums" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4A90E2" />
      <meta name="msapplication-TileColor" content="#4A90E2" />
      <meta name="application-name" content="Brianna Bums" />
      <meta name="apple-mobile-web-app-title" content="Brianna Bums" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://onlyfans.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4A90E2" />
      
      {/* Language and content */}
      <html lang="en" />
      <meta httpEquiv="content-language" content="en" />
      <meta name="content-language" content="en" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Structured Data - Alternative approach */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": fullUrl,
          "image": imageUrl,
          "mainEntity": {
            "@type": "Person",
            "name": "Brianna Bums",
            "description": "Premium content creator offering exclusive subscription content",
            "image": imageUrl,
            "url": fullUrl,
            "sameAs": [
              "https://onlyfans.com/briannabums"
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "Brianna Bums",
            "logo": {
              "@type": "ImageObject",
              "url": imageUrl
            }
          }
        })}
      </script>
    </Helmet>
  )
}

export default Seo