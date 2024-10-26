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
const siteName = siteConfig.name;
const siteURL = siteConfig.url;
const description = siteConfig.description;

export const metadata = {
  title: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
  description,
  keywords: [
    'watch Bollywood movies online for free',
    'best site to watch Bollywood movies for free',
    'stream free Bollywood movies in HD',
    'Bollywood movie streaming site',
    'latest Bollywood blockbusters online',
    'free online movie streaming without registration',
    'watch free Hindi movies online',
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteURL,
    title: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
    description,
    images: [
      {
        url: `${siteURL}/images/og-image.jpg`,
        width: 800,
        height: 600,
        alt: `${siteName} - Watch Bollywood Movies Online for Free`,
      },
    ],
    siteName: siteName,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bollycinemahub',
    title: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
    description,
    images: [`${siteURL}/images/og-image.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <NextSeo
          title={`${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`}
          description={description}
          canonical={siteURL}
          openGraph={{
            url: siteURL,
            title: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
            description,
            images: [
              {
                url: `${siteURL}/images/og-image.jpg`,
                width: 800,
                height: 600,
                alt: `${siteName} - Watch Bollywood Movies Online for Free`,
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
              content: 'watch Bollywood movies online for free, best site to watch Bollywood movies for free, stream free Bollywood movies in HD, Bollywood movie streaming site, latest Bollywood blockbusters online, free online movie streaming without registration, watch free Hindi movies online',
            },
            {
              name: 'robots',
              content: 'index, follow',
            },
          ]}
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
              url: siteURL,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteURL}/search/{search_term_string}`,
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteURL },
                { '@type': 'ListItem', position: 2, name: 'Movies', item: `${siteURL}/movies` },
                { '@type': 'ListItem', position: 3, name: 'Action Movies', item: `${siteURL}/category/action` },
                { '@type': 'ListItem', position: 4, name: 'Comedy Movies', item: `${siteURL}/category/comedy` },
                { '@type': 'ListItem', position: 5, name: 'Drama', item: `${siteURL}/category/drama` },
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
              description: description,
              url: siteURL,
            }),
          }}
        />
        
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8549676155360581"
             crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8549676155360581"
             data-ad-slot="6318032388"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="KlSihWZhJzDiIksOwRjrzQMQGvvDoNTIsY8xkf_akFw" />
        <meta name="google-adsense-account" content="ca-pub-8549676155360581"></meta>
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
