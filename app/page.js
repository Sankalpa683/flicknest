import React from 'react'
import { siteConfig } from './config/siteConfig'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cult_classic from './components/moviecard/cult_classic'
import Recommendations from './components/moviecard/recommendation'
import Comedy from './components/moviecard/comedy'
import Action from './components/moviecard/action'
import Drama from './components/moviecard/drama'
import Footer from './components/footer'

// Global SEO metadata configuration
const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

export const metadata = {
  title: `${siteName} | Watch Bollywood Movies Online for Free`,
  description: `Welcome to ${siteName}, your ultimate destination to watch Bollywood movies online for free! Discover the latest releases, classics, and hidden gems from the vibrant world of Bollywood cinema.`,
  keywords: [
    'Bollywood movies online',
    'watch Bollywood movies for free',
    'free Bollywood movie streaming',
    'latest Bollywood movies',
    'watch online Bollywood movies',
    'Bollywood cinema',
    'Bollywood films online'
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
    description: `Enjoy a vast collection of Bollywood movies at ${siteName}. Watch the latest blockbusters and timeless classics for free!`,
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
    site: '@flicknest',
    title: `${siteName} | Watch Bollywood Movies Online for Free`,
    description: `Explore Bollywood movies on ${siteName}. Stream for free and enjoy endless entertainment!`,
    images: [`${siteURL}/images/og-image.jpg`],
  },
  // JSON-LD Schema Markup
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteURL,
    description: `A comprehensive platform to watch Bollywood movies online for free. Enjoy the latest releases, classic hits, and discover hidden gems.`,
    sameAs: ['https://www.facebook.com/yourpage', 'https://twitter.com/yourpage', 'https://www.instagram.com/yourpage'],
  },
};



const page = () => {
  return (
    <>
      <Navbar active='home' />
      <Hero />
      <main className='mb-10 bg-white'>
        <Cult_classic />
        <Recommendations />
        <Comedy />
        <Action />
        <Drama />
      </main>
      <Footer />
    </>
  )
}

export default page