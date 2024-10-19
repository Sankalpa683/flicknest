import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';


const movies = [
    {
        title: 'Sholay',
        release_year: '1975',
        description: 'Action & Adventure',
        img: 'https://m.media-amazon.com/images/I/61NhAcNBC+L._AC_UF894,1000_QL80_.jpg',
    },
    {
        title: 'DDLJ',
        release_year: '1995',
        description: 'Romance',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg',
    },
    {
        title: '3 Idiots',
        release_year: '2009',
        description: 'Drama & Drama',
        img: 'https://i.pinimg.com/550x/58/58/5d/58585d6284adf70525240fba5f4c5ff8.jpg',
    },
    {
        title: 'Ek Tha Tiger',
        release_year: '2012',
        description: 'Drama',
        img: 'https://pbs.twimg.com/media/ET5NuUoUUAAjuGm.jpg',
    },
    {
        title: 'Lagaan',
        release_year: '2001',
        description: 'Historical Drama',
        img: 'https://www.tallengestore.com/cdn/shop/products/7381744713908A_12c0d02b-1017-4503-919b-f0f4a503b387.jpg?v=1683929384',
    },
    {
        title: 'Chak De! India',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM2MjgyNDE5Nl5BMl5BanBnXkFtZTcwMzM1MDc4MQ@@._V1_.jpg',
    },
];

const Drama = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className=''>
                        <div className='flex flex-wrap justify-between'>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                Drama
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

export default Drama;
