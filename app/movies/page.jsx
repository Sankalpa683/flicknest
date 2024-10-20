"use client"

import React, { useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Navbar from '../components/navbar';
import { siteConfig } from '../config/siteConfig';
import Footer from '../components/footer';
import LoadingSpinner from '../components/LoadingSpinner';

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
    {
        id: '04',
        title: 'Ratsasan',
        release_year: '2018',
        description: 'Drama',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/77/Ratsasan_poster.jpg',
    },
    {
        id: '05',
        title: 'Swadesh',
        release_year: '2004',
        description: 'Historical Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_.jpg',
    },
    {
        id: '06',
        title: 'Taare Zameen Par',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png',
    },
    {
        id: '07',
        title: 'Sholay',
        release_year: '1975',
        description: 'Action & Adventure',
        img: 'https://m.media-amazon.com/images/I/61NhAcNBC+L._AC_UF894,1000_QL80_.jpg',
    },
    {
        id: '08',
        title: 'DDLJ',
        release_year: '1995',
        description: 'Romance',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg',
    },
    {
        id: '09',
        title: '3 Idiots',
        release_year: '2009',
        description: 'Comedy & Drama',
        img: 'https://i.pinimg.com/550x/58/58/5d/58585d6284adf70525240fba5f4c5ff8.jpg',
    },
    {
        id: '10',
        title: 'Ek Tha Tiger',
        release_year: '2012',
        description: 'Drama',
        img: 'https://pbs.twimg.com/media/ET5NuUoUUAAjuGm.jpg',
    },
    {
        id: '11',
        title: 'Lagaan',
        release_year: '2001',
        description: 'Historical Drama',
        img: 'https://www.tallengestore.com/cdn/shop/products/7381744713908A_12c0d02b-1017-4503-919b-f0f4a503b387.jpg?v=1683929384',
    },
    {
        id: '12',
        title: 'Chak De! India',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM2MjgyNDE5Nl5BMl5BanBnXkFtZTcwMzM1MDc4MQ@@._V1_.jpg',
    },

];

const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;


const MoviesPage = () => {

    const [loading, setLoading] = useState(false); // State to manage loading

    const generateSlug = (title, id) => {
        return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`;
    };

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

    <NextSeo
        title={`${siteName} | Watch Bollywood Movies Online For Free `}
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
                    alt: `${siteName} - Watch Bollywood Movies Online For Free `,
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
                content: 'watch Bollywood movies online for free,watch Bollywood movies free, movie watch online, watch online Bollywood movie free websites, streaming Bollywood movies, free movie streaming',
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
                'https://www.facebook.com/flicknest',
                'https://www.instagram.com/flicknest',
                'https://www.twitter.com/flicknest',
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-555-5555',
                contactType: 'Customer Support',
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
                            All Bollywood Movies
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

            <br className='block lg:hidden bg-white' />
            <br className='block lg:hidden bg-white' />
            <Footer />
        </>
    );
};

export default MoviesPage;
