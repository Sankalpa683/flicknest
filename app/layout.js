import { NextSeo } from 'next-seo';
import localFont from 'next/font/local';
import Head from 'next/head';
import { siteConfig } from './config/siteConfig';
import './globals.css';

// Import local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Global SEO metadata configuration
const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

export const metadata = {
  title: `${siteName} | Watch Bollywood Movies Online For Free`,
  description,
  keywords: [
    'watch Bollywood movies online for free',
    'watch Bollywood movies free',
    'movie watch online',
    'watch online Bollywood movie free websites',
    'streaming Bollywood movies',
    'free movie streaming',
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteURL,
    title: `${siteName} | Watch Free Bollywood Movies Online`,
    description,
    images: [
      {
        url: `${siteURL}/images/og-image.jpg`,
        width: 800,
        height: 600,
        alt: `${siteName} - Watch Bollywood Movies Online For Free`,
      },
    ],
    siteName: siteName,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bollycinemahub',
    title: `${siteName} | Watch Bollywood Movies Online For Free`,
    description,
    images: [`${siteURL}/images/og-image.jpg`],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <NextSeo
          title={`${siteName} | Watch Bollywood Movies Online For Free`}
          description={description}
          canonical={siteURL}
          openGraph={{
            url: siteURL,
            title: `${siteName} | Watch Free Bollywood Movies Online`,
            description,
            images: [
              {
                url: `${siteURL}/images/og-image.jpg`,
                width: 800,
                height: 600,
                alt: `${siteName} - Watch Bollywood Movies Online For Free`,
              },
            ],
            site_name: siteName,
          }}
          twitter={{
            handle: '@bollycinemahub',
            site: '@bollycinemahub',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'watch Bollywood movies online for free, watch Bollywood movies free, movie watch online, watch online Bollywood movie free websites, streaming Bollywood movies, free movie streaming',
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
            url: siteURL,
            logo: `${siteURL}/logo.png`,
            name: siteName,
            sameAs: [
              'https://www.facebook.com/bollycinemahub',
              'https://www.instagram.com/bollycinemahub',
              'https://www.twitter.com/bollycinemahub',
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
              'url': siteURL,
              'potentialAction': {
                '@type': 'SearchAction',
                'target': `${siteURL}/search/{search_term_string}`,
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
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': siteURL,
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Movies',
                  'item': `${siteURL}/movies`,
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Action Movies',
                  'item': `${siteURL}/category/action`,
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Comedy Movies',
                  'item': `${siteURL}/category/comedy`,
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Drama',
                  'item': `${siteURL}/category/drama`,
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
              'name': 'Watch Bollywood Movies Online',
              'description': description,
              'thumbnailUrl': `${siteURL}/images/og-image.jpg`,
              'uploadDate': '2024-01-01T08:00:00+08:00',
              'duration': 'PT2H30M', // Example duration
              'contentUrl': `${siteURL}/movie-url`,
              'embedUrl': `${siteURL}/embed/movie-url`,
              'publisher': {
                '@type': 'Organization',
                'name': siteName,
                'logo': {
                  '@type': 'ImageObject',
                  'url': `${siteURL}/logo.png`,
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
              'name': `${siteName} | Watch Bollywood Movies Online`,
              'description': description,
              'url': siteURL,
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
