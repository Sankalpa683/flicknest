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
