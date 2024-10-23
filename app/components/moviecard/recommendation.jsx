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
];

const Recommendations = () => {
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
            <section className="">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className="">
                        <div className='flex flex-wrap justify-between'>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Recommendations
                            </h2>
                            <Link href='/category/recommendations' onClick={handleLinkClick}>
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

export default Recommendations;

{/* <div className="">
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
                                        </div> */}
