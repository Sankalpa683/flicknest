"use client"

import { useSearchParams } from 'next/navigation';
import { NextSeo } from 'next-seo';
import localFont from 'next/font/local';
import Head from 'next/head';
import '../globals.css';
import { siteConfig } from '../config/siteConfig';

// Import local fonts
const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Global SEO metadata configuration
const defaultTitle = `Watch Bollywood Movies Online For Free at ${siteConfig.name}`;
const defaultDescription = `${siteConfig.description}`;
// Utility function to handle dynamic SEO based on search terms
const getDynamicSEO = (query) => {
  if (query.includes('Bollywood movies watch online')) {
    return {
      title: 'Watch Bollywood Movies Online for Free | Flick Nest',
      description: `Looking to watch Bollywood movies online? Flick Nest offers a massive collection of Bollywood movies you can stream for free! Watch your favorite movies from anywhere, no registration needed.`,
      keywords:
        'Bollywood movies watch online, free Bollywood streaming, watch Bollywood movies for free, Bollywood movies online',
      url: `${siteConfig.url}/movies`,
    };
  }
  // Add more dynamic conditions here for other keywords
  return {
    title: defaultTitle,
    description: defaultDescription,
    keywords:
      'watch Bollywood movies online for free, Bollywood streaming, watch Bollywood movies free, movie watch online',
    url: `${siteConfig.url}`,
  };
};

export default function RootLayout({ children }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || ''; // Get the search query from the URL

  // Get dynamic SEO based on search query
  const { title, description, keywords, url } = getDynamicSEO(searchQuery);

  return (
    <html lang="en">
      <Head>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url: url,
            title: title,
            description: description,
            images: [
              {
                url: `${url}/images/og-image.jpg`,
                width: 800,
                height: 600,
                alt: `${title} - Watch Bollywood Movies Online`,
              },
            ],
            site_name: 'Flick Nest',
          }}
          twitter={{
            handle: '@flicknest',
            site: '@flicknest',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: keywords,
            },
            {
              name: 'robots',
              content: 'index, follow',
            },
          ]}
          // JSON-LD Structured Data for Website, Organization, and SearchAction
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: url,
            logo: `${url}/logo.png`,
            name: 'Flick Nest',
            sameAs: [
              'https://www.facebook.com/flicknest',
              'https://www.instagram.com/flicknest',
              'https://www.twitter.com/flicknest',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-800-555-5555',
              contactType: 'Customer Support',
            },
          }}
        />

        {/* SearchAction Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: url,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${url}/search/{search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Action Movies',
                  item: `${url}/category/action`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Comedy Movies',
                  item: `${url}/category/comedy`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Romantic Movies',
                  item: `${url}/category/romance`,
                },
              ],
            }),
          }}
        />

        {/* VideoObject Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: 'Watch Bollywood Movies Online',
              description: description,
              thumbnailUrl: `${url}/images/og-image.jpg`,
              uploadDate: '2024-01-01T08:00:00+08:00',
              duration: 'PT2H30M',
              contentUrl: `${url}/movie-url`,
              embedUrl: `${url}/embed/movie-url`,
              publisher: {
                '@type': 'Organization',
                name: 'Flick Nest',
                logo: {
                  '@type': 'ImageObject',
                  url: `${url}/logo.png`,
                },
              },
            }),
          }}
        />

        {/* WebPage Schema for enhancing general page understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: title,
              description: description,
              url: url,
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
