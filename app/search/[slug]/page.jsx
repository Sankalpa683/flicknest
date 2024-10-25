"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { PlayCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { siteConfig } from '@/app/config/siteConfig';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

const Search = () => {
    const { slug } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('/movies.json');
            const filteredMovies = response.data.filter((movie) =>
                movie.title.toLowerCase().includes(slug.toLowerCase())
            );
            setMovies(filteredMovies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchMovies();
        }
    }, [slug]);

    const searchTerm = params.slug || '';

    <NextSeo
        title={`${siteName} | Search Results`}
        description={description}
        canonical={`${siteURL}/search/${searchTerm}`}
        openGraph={{
            url: `${siteURL}/search/${searchTerm}`,
            title: `${siteName} | Search Results`,
            description,
            images: [
                {
                    url: `${siteURL}/images/og-image.jpg`,
                    width: 800,
                    height: 600,
                    alt: `${siteName} - Search Results`,
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
            name: `${siteName} | Search Results`,
            description,
            url: `${siteURL}/search/${searchTerm}`,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${siteURL}/search/{search_term_string}`,
                queryinput: 'required name=search_term_string',
            },
        }}
    />

    return (
        <>
            <Navbar active="movies" />
            {loading ? <LoadingSpinner /> : (
                <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">

                        {movies.length > 0 && (
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Search Results
                            </h2>
                        )}

                        {movies.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                                {movies.map((movie, index) => (
                                    <Link key={index} href={`/movies/${movie.slug}`} className="group cursor-pointer transition-all duration-500">
                                        <div className="mx-auto sm:mr-0 lg:mx-auto bg-white">
                                            <img
                                                src={movie.movie_poster_img}
                                                alt={`${movie.title} image`}
                                                className="w-full aspect-square rounded-2xl object-cover"
                                            />
                                            <div className="mt-5">
                                                <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                                                    {movie.title}
                                                </h6>
                                                <p className="font-normal text-sm leading-6 text-gray-500">
                                                    {movie.genres.join(', ')}
                                                </p>
                                                <p className="font-normal text-sm leading-6 text-gray-500">
                                                    {movie.year}
                                                </p>
                                            </div>
                                            <div className="hidden gap-1 flex-wrap justify-center lg:justify-start items-center mt-3">
                                                <Button type="primary">
                                                    <PlayCircleOutlined /> Watch Now
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full mx-auto p-4 bg-white">
                                <div className="text-center">
                                    <h1 className="text-[120px] font-extrabold text-indigo-600 mb-2">404</h1>
                                    <p className="text-2xl font-semibold text-gray-800">No movies found</p><br />
                                    <p className="text-md text-gray-500 mb-6">Oops! We couldn't find any movies for "{slug}".</p>
                                    <Link href="/" passHref>
                                        <Button type="primary" icon={<HomeOutlined />}>Go Home</Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
};

export default Search;
