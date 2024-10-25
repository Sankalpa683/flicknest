"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

            <Navbar active='movies' />
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}

            {/* Movies List */}
            <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2 pb-5">
                    <div className=''>
                        <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                            All Bollywood Movies
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.slice(0, visibleMovies).map((movie, index) => {
                                return (
                                    <Link key={index} href={`/movies/${movie.slug}`} onClick={handleLinkClick} className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                                        <div className="">
                                            <img
                                                src={movie.movie_poster_img}
                                                alt={`${movie.title} poster`}
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
                                                {movie.genres.join(', ')}
                                            </p>
                                            <p className="font-normal text-sm leading-6 text-gray-500">
                                                {movie.year}
                                            </p>
                                        </div>
                                        <div className='hidden gap-1 flex-wrap justify-center lg:justify-start items-center lg:items-start mt-3'>
                                            <Button type="primary"><PlayCircleOutlined /> Watch Now</Button>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Load More Button */}
                        {visibleMovies < movies.length && (
                            <div className="flex justify-center mt-8">
                                <Button type="primary" onClick={loadMoreMovies} loading={loading}>
                                    Load More
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <br className='block lg:hidden bg-white' />
            <br className='block lg:hidden bg-white' />

            <Footer />
        </>
    );
}

export default Movies;
