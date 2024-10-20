"use client"
import React, { useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const movies = [

    {
        id: '01',
        title: 'Maharaja',
        release_year: '2024',
        description: 'Action & Adventure',
        img: 'https://preview.redd.it/watched-maharaja-such-a-fantastic-screenplay-after-long-v0-ovmi808v77cd1.jpeg?auto=webp&s=004a4d77ec07ecadcb389b3b6298e68f83c38d3d',
    },
    {
        id: '02',
        title: 'Paa',
        release_year: '2009',
        description: 'Romance',
        img: 'https://m.media-amazon.com/images/M/MV5BMDIzNWI1YTUtZmFjNy00ZjZhLTk1ZDItOTU3YjNhZWUxMjJhXkEyXkFqcGc@._V1_.jpg',
    },
    {
        id: '03',
        title: 'Tumbbad',
        release_year: '2018',
        description: 'Comedy & Drama',
        img: 'https://image.tmdb.org/t/p/original/z1xOCxw780WFJC5uCTMfCkQ4Agi.jpg',
    },

];

const siteName = 'FlickNest';
const siteURL = 'https://flicknest.com';
const description = "Welcome to FlickNest, the best site to Watch Bollywood Movies Online For Free ! Enjoy a vast collection of your favorite films from the latest blockbusters to timeless classics, all available for streaming at no cost. Our user-friendly platform makes it easy to watch online Bollywood movies for free without any registration required. Whether you're looking for action, romance, or drama, FlickNest is your go-to destination for watching movies online. Join us now to explore and indulge in a cinematic experience like no other!";


const search = ({ params }) => {
    const [loading, setLoading] = useState(false); // State to manage loading

    const generateSlug = (title, id) => {
        return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`;
    };

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

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
            handle: '@flicknest',
            site: '@flicknest',
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
            <Navbar active='movies' />
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}

            {/* Movies List */}
            <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className=''>
                        <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                            Search Results
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.map((movie, index) => {
                                const slug = generateSlug(movie.title, movie.id);
                                return (
                                    <Link key={index} href={`/movies/${slug}`} onClick={handleLinkClick} className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                                        <div className="">
                                            <img
                                                src={movie.img}
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
                                                {movie.description}
                                            </p>
                                            <p className="font-normal text-sm leading-6 text-gray-500">
                                                {movie.release_year}
                                            </p>
                                        </div>
                                        <div className='hidden gap-1 flex-wrap justify-center lg:justify-start items-center lg:items-start mt-3'>

                                            <Button type="primary"><PlayCircleOutlined /> Watch Now</Button>

                                        </div>

                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <br className='block lg:hidden' />
            <br className='block lg:hidden' />

            <Footer />
        </>
    )
}

export default search