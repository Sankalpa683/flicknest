import React from 'react';
import { siteConfig } from './config/siteConfig';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Horror from './components/moviecard/horror';
import Thriller from './components/moviecard/thriller';
import Romance from './components/moviecard/romance';
import Action from './components/moviecard/action';
import Drama from './components/moviecard/drama';
import Footer from './components/footer';

const { name: siteName, url: siteURL, description } = siteConfig;

// Global metadata for SEO
const seoConfig = {
  title: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
  description,
  canonical: siteURL,
  openGraph: {
    type: 'website',
    url: siteURL,
    title: `${siteName} | Watch Free Bollywood Movies Online`,
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
    images: [
      {
        url: `${siteURL}/images/og-image.jpg`,
        width: 800,
        height: 600,
        alt: `${siteName} - #1 Platform to Watch Bollywood Movies Online for Free`,
      },
    ],
    site_name: siteName,
  },
  twitter: {
    handle: '@flicknest',
    site: '@flicknest',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'watch Bollywood movies online for free, #1 platform to watch bollywood movies online for free, watch Bollywood movies free, movie watch online, watch online Bollywood movie free websites, streaming Bollywood movies, free movie streaming',
    },
    { name: 'robots', content: 'index, follow' },
  ],
};

// JSON-LD Structured Data
const jsonLdSchemas = {
  organization: {
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
  },
  websiteSearchAction: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteURL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteURL}/search/{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  breadcrumbList: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteURL },
      { '@type': 'ListItem', position: 2, name: 'Movies', item: `${siteURL}/movies` },
      { '@type': 'ListItem', position: 3, name: 'Action Movies', item: `${siteURL}/category/action` },
      { '@type': 'ListItem', position: 4, name: 'Comedy Movies', item: `${siteURL}/category/comedy` },
      { '@type': 'ListItem', position: 5, name: 'Romantic Movies', item: `${siteURL}/category/romance` },
      { '@type': 'ListItem', position: 6, name: 'Horror Movies', item: `${siteURL}/category/horror` },
    ],
  },
  videoObject: {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Dilwale Dulhania Li Jayenge Full Movie - Kajol, Shahrukh Khan DDLJ',
    description,
    thumbnailUrl: 'https://i.pinimg.com/564x/08/87/42/088742e99fc18926b0fd3625b10ae213.jpg',
    uploadDate: '2024-01-01T08:00:00+08:00',
    duration: 'PT2H30M', // Example duration
    contentUrl: `${siteURL}/dilwale-dulhania-le-jayenge`,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: { '@type': 'ImageObject', url: `${siteURL}/logo.png` },
    },
  },
  webPage: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${siteName} | #1 Platform to Watch Bollywood Movies Online for Free`,
    description,
    url: siteURL,
  },
};

const Page = () => {
  return (
    <>
      <Head>
        <NextSeo {...seoConfig} jsonLd={jsonLdSchemas.organization} />
        {Object.values(jsonLdSchemas).map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active="home" />
      <Hero />
      <main className="mb-10 bg-white">
        <Action />
        <Romance />
        <br />
        <Thriller />
        <br />
        <Drama />
        <br />
        <Horror />
      </main>
      <Footer />
    </>
  );
};

export default Page;
