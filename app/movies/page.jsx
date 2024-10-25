"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { siteConfig } from '@/app/config/siteConfig';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

export const metadata = {
    title: `${siteName} | List of Bollywood Movies to Watch Online for Free`,
    description,
    keywords: [
        'list of bollywood movies to watch online',
        'list of bollywood movies to watch online for free',
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
        title: `${siteName} | List of Bollywood Movies to Watch Online for Free`,
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
        title: `${siteName} | List of Bollywood Movies to Watch Online for Free`,
        description,
        images: [`${siteURL}/images/og-image.jpg`],
    },
};

const Movies = ({ params }) => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(12); // Number of movies to show initially

    useEffect(() => {
        // Fetch movie data from API
        axios.get('https://www.bollycinemahub.in/movies.json')
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching movies:", error);
                setLoading(false);
            });
    }, []);

    const loadMoreMovies = () => {
        setLoading(true); // Show loading spinner while fetching more movies
        setTimeout(() => {
            setVisibleMovies(prevCount => prevCount + 12); // Increase the visible movies count by 12
            setLoading(false); // Hide loading spinner once movies are added
        }, 500); // Mock load time
    };

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

    return (
        <>
            <Head>
                <NextSeo
                    title={`${siteName} | Watch Bollywood Movies online For Free`}
                    description={description}
                    canonical={`${siteURL}/movies`}
                    openGraph={{
                        url: `${siteURL}/movies`,
                        title: `${siteName} | Watch Bollywood Movies online For Free`,
                        description,
                        images: [
                            {
                                url: `${siteURL}/images/og-image.jpg`,
                                width: 800,
                                height: 600,
                                alt: `${siteName} - Watch Bollywood Movies online For Free`,
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
                            content: 'search Bollywood movies, online streaming, watch movies free',
                        },
                        {
                            name: 'robots',
                            content: 'index, follow',
                        },
                    ]}
                    jsonLd={{
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: `${siteName} | Watch Bollywood Movies online For Free`,
                        description,
                        url: `${siteURL}/movies`,
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: `${siteURL}/search/{search_term_string}`,
                            queryinput: 'required name=search_term_string',
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
                                { '@type': 'ListItem', position: 2, name: 'Movies', item: `${siteURL}/movies` },
                                { '@type': 'ListItem', position: 3, name: 'Action Movies', item: `${siteURL}/category/action` },
                                { '@type': 'ListItem', position: 3, name: 'Romantic Movies', item: `${siteURL}/category/romance` },
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
                            name: `${siteName} | List of Bollywood Movies to Watch Online for Free`,
                            description: description,
                            url: siteURL,
                        }),
                    }}
                />
            </Head>

            <Navbar active='movies' />
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}

            {/* Movies List */}
            <h1>Helloworld</h1>

            <br className='block lg:hidden bg-white' />
            <br className='block lg:hidden bg-white' />

            <Footer />
        </>
    );
}

export default Movies;
