// MovieCard.jsx

import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const MovieCard = ({ movie }) => {
    return (

        <>
            <div>
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
                <Button type="primary">
                    <PlayCircleOutlined /> Watch Now
                </Button>
            </div>
        </>
    );
};

export default MovieCard;
