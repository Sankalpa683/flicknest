"use client";

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Navbar from '../components/navbar';
import { siteConfig } from '../config/siteConfig';
import Footer from '../components/footer';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';

const siteName = siteConfig.name;
const siteURL = siteConfig.url;
const description = siteConfig.description;

const MoviesPage = () => {
    const [movies, setMovies] = useState([]); // State to hold movie data
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Replace with your actual API URL
                const response = await axios.get('https://www.bollycinemahub.in/movies.json'); // Update with your actual API endpoint
                setMovies(response.data); // Assuming the API returns an array of movies
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchMovies();
    }, []);

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

    return (
        <>
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
                // JSON-LD for Organization structured data
                jsonLd={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    url: siteURL,
                    logo: `${siteURL}/images/logo.png`,
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
            <Navbar active='movies' />
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}

            {/* Movies List */}
            <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div>
                        <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                            All Bollywood Movies
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.map((movie, index) => (
                                <Link
                                    key={index}
                                    href={`/movies/${movie.slug}`}
                                    onClick={handleLinkClick}
                                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
                                >
                                    <div>
                                        <img
                                            src={movie.movie_poster_img}
                                            alt={`${movie.title} image`}
                                            className="w-full aspect-square rounded-2xl object-cover"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex items-center justify-between">
                                            <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                                                {movie.title}
                                            </h6>
                                        </div>
                                        <p className="font-normal text-sm leading-6 text-gray-500">
                                            {movie.genres}
                                        </p>
                                        <p className="font-normal text-sm leading-6 text-gray-500">
                                            {movie.release_year}
                                        </p>
                                    </div>
                                    <div className='hidden gap-1 flex-wrap justify-center lg:justify-start items-center lg:items-start mt-3'>
                                        <Button type="primary"><PlayCircleOutlined /> Watch Now</Button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <br className='block lg:hidden bg-white' />
            <br className='block lg:hidden bg-white' />
            <Footer />
        </>
    );
};

export default MoviesPage;
