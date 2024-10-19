import { NextSeo } from 'next-seo';
import localFont from 'next/font/local';
import Head from 'next/head';
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
const siteName = 'FlickNest';
const siteURL = 'https://flicknest.com';
const description = "Welcome to FlickNest, the best site to Watch Bollywood Movies Online For Free ! Enjoy a vast collection of your favorite films from the latest blockbusters to timeless classics, all available for streaming at no cost. Our user-friendly platform makes it easy to watch online Bollywood movies for free without any registration required. Whether you're looking for action, romance, or drama, FlickNest is your go-to destination for watching movies online. Join us now to explore and indulge in a cinematic experience like no other!";

export const metadata = {
  title: `${siteName} | Watch Bollywood Movies Online For Free `,
  description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <NextSeo
          title={`${siteName} | Watch Bollywood Movies Online For Free `}
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
                alt: `${siteName} - Watch Bollywood Movies Online For Free `,
              },
            ],
            site_name: siteName,
          }}
          twitter={{
            handle: '@flicknest',
            site: '@flicknest',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'watch Bollywood movies online for free,watch Bollywood movies free, movie watch online, watch online Bollywood movie free websites, streaming Bollywood movies, free movie streaming',
            },
            {
              name: 'robots',
              content: 'index, follow',
            },
          ]}
          // JSON-LD for Organization structured data
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: siteURL,
            logo: `${siteURL}/logo.png`,
            name: siteName,
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
