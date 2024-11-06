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
];

const Action = () => {
    const [loading, setLoading] = useState(false); // State to manage loading

    const generateSlug = (title) => {
        return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

    return (
        <>
            {loading && <LoadingSpinner />} {/* Show spinner when loading */}
            <section className="py-16 ">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className="">
                        <div className='flex flex-wrap justify-between'>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Action
                            </h2>
                            <Link href='/category/action' onClick={handleLinkClick}>
                                <p className='text-blue-700 cursor-pointer'>See all</p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.map((movie, index) => {
                                const slug = generateSlug(movie.title, movie.id);
                                return (
                                    <Link key={index} href={`/movies/${slug}`} onClick={handleLinkClick} className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                                        
                                        <MovieCard key={index} movie={movie} />
                                        
                                        
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

export default Action;
