import localFont from 'next/font/local';
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
    site: '@flicknest',
    title: `${siteName} | Watch Bollywood Movies Online For Free`,
    description,
    images: [`${siteURL}/images/og-image.jpg`],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
