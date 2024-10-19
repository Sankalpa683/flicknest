import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';


const movies = [
    {
        title: 'Maharaja',
        release_year: '2024',
        description: 'Action & Adventure',
        img: 'https://preview.redd.it/watched-maharaja-such-a-fantastic-screenplay-after-long-v0-ovmi808v77cd1.jpeg?auto=webp&s=004a4d77ec07ecadcb389b3b6298e68f83c38d3d',
    },
    {
        title: 'Paa',
        release_year: '2009',
        description: 'Romance',
        img: 'https://m.media-amazon.com/images/M/MV5BMDIzNWI1YTUtZmFjNy00ZjZhLTk1ZDItOTU3YjNhZWUxMjJhXkEyXkFqcGc@._V1_.jpg',
    },
    {
        title: 'Tumbbad',
        release_year: '2018',
        description: 'Comedy & Drama',
        img: 'https://lh6.googleusercontent.com/proxy/b-Dj8RlGblXtO43JnUmixYgyuJS427Wg-eKga1mvZp5_zrXPUB4xPjwG5g6OASSk45PF5LSgsi7iDSa3JEfrEFrQ9S7iFwvbb0kpzfxjBf2WOya6',
    },
    {
        title: 'Ratsasan',
        release_year: '2018',
        description: 'Drama',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/77/Ratsasan_poster.jpg',
    },
    {
        title: 'Swadesh',
        release_year: '2004',
        description: 'Historical Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_.jpg',
    },
    {
        title: 'Taare Zameen Par',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png',
    },
];

const Action = () => {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className=''>
                        <div className='flex flex-wrap justify-between'>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Action
                            </h2>
                            <p className='text-blue-700 cursor-pointer'>See all</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                            {movies.map((movie, index) => (
                                <a
                                    key={index}
                                    href="javascript:;"
                                    className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
                                >
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
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Action;
