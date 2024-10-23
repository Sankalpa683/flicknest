"use client"

import React, { useState } from 'react';
import MovieCard from './moviecard';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import LoadingSpinner from '../LoadingSpinner';


const movies = [
    {
        id: '01',
        title: 'Sholay',
        release_year: '1975',
        description: 'Action & Adventure',
        img: 'https://m.media-amazon.com/images/I/61NhAcNBC+L._AC_UF894,1000_QL80_.jpg',
    },
    {
        id: '02',
        title: 'Dilwale Dulhania Le Jayenge',
        release_year: '1995',
        description: 'Romance',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg',
    },
    {
        id: '03',
        title: '3 Idiots',
        release_year: '2009',
        description: 'Comedy & Drama',
        img: 'https://i.pinimg.com/550x/58/58/5d/58585d6284adf70525240fba5f4c5ff8.jpg',
    },
    {
        id: '04',
        title: 'Ek Tha Tiger',
        release_year: '2012',
        description: 'Drama',
        img: 'https://pbs.twimg.com/media/ET5NuUoUUAAjuGm.jpg',
    },
    {
        id: '05',
        title: 'Lagaan',
        release_year: '2001',
        description: 'Historical Drama',
        img: 'https://www.tallengestore.com/cdn/shop/products/7381744713908A_12c0d02b-1017-4503-919b-f0f4a503b387.jpg?v=1683929384',
    },
    {
        id: '06',
        title: 'Chak De! India',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM2MjgyNDE5Nl5BMl5BanBnXkFtZTcwMzM1MDc4MQ@@._V1_.jpg',
    },
];

const Drama = () => {

    const [loading, setLoading] = useState(false); // State to manage loading

    const generateSlug = (title, id) => {
        return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };


    return (
        <>
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}
            <section className="py-16">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className=''>
                        <div className='flex flex-wrap justify-between'>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Drama
                            </h2>
                            <Link href='/category/drama' onClick={handleLinkClick}>
                                <p className='text-blue-700 cursor-pointer'>See all</p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.map((movie, index) => {
                                const slug = generateSlug(movie.title, movie.id);
                                return (
                                    <Link key={index} href={`/movies/${slug}`} onClick={handleLinkClick} className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                                        <MovieCard key={index} movie={movie} /> {/* Change 'comedy' to 'movie' */}
                                    </Link>
                                );
                            })}

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Drama;
