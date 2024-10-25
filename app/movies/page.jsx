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

const Movies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(12);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://www.bollycinemahub.in/movies.json');
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    const loadMoreMovies = () => {
        setTimeout(() => {
            setVisibleMovies(prevCount => prevCount + 12);
        }, 500);
    };

    return (
        <>
            <NextSeo
                title={`${siteConfig.name} | Watch Bollywood Movies Online For Free`}
                description={siteConfig.description}
                canonical={`${siteConfig.url}/movies`}
                openGraph={{
                    url: `${siteConfig.url}/movies`,
                    title: `${siteConfig.name} | Watch Bollywood Movies Online For Free`,
                    description: siteConfig.description,
                    images: [
                        {
                            url: `${siteConfig.url}/images/og-image.jpg`,
                            width: 800,
                            height: 600,
                            alt: `${siteConfig.name} - Watch Bollywood Movies Online For Free`,
                        },
                    ],
                    site_name: siteConfig.name,
                }}
                twitter={{
                    handle: '@bollycinemahub',
                    site: '@bollycinemahub',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    { name: 'keywords', content: 'search Bollywood movies, online streaming, watch movies free' },
                    { name: 'robots', content: 'index, follow' },
                ]}
            />

            <Navbar active="movies" />
            {loading && <LoadingSpinner />}

            <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2 pb-5">
                    <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                        All Bollywood Movies
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                        {movies.slice(0, visibleMovies).map((movie, index) => (
                            <Link key={index} href={`/movies/${movie.slug}`} className="group cursor-pointer bg-white transition-all duration-500">
                                <img src={movie.movie_poster_img} alt={`${movie.title} poster`} className="w-full aspect-square rounded-2xl object-cover" />
                                <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600 mt-5">
                                    {movie.title}
                                </h6>
                                <p className="font-normal text-sm leading-6 text-gray-500">
                                    {movie.genres.join(', ')}
                                </p>
                                <p className="font-normal text-sm leading-6 text-gray-500">
                                    {movie.year}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {visibleMovies < movies.length && (
                        <div className="flex justify-center mt-8">
                            <Button type="primary" onClick={loadMoreMovies} loading={loading}>
                                Load More
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Movies;
