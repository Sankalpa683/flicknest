"use client";

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { PlayCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { NextSeo } from "next-seo";
import { siteConfig } from "@/app/config/siteConfig";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const siteName = `helloworld`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

const Category = ({ params }) => {
    const category = params.slug;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading
    const [noMoviesFound, setNoMoviesFound] = useState(false); // State for 404

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("https://www.bollycinemahub.in/movies.json");
                const data = await res.json();
                const filteredMovies = data.filter((movie) =>
                    movie.genres.some((genre) =>
                        genre.toLowerCase() === category.toLowerCase()
                    )
                );

                if (filteredMovies.length === 0) {
                    setNoMoviesFound(true); // Trigger 404 if no movies are found
                } else {
                    setMovies(filteredMovies);
                    setNoMoviesFound(false);
                }
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [category]);

    const handleLinkClick = () => {
        setLoading(true); // Set loading to true when link is clicked
    };

    return (
        <>

            <Navbar active="movies" />
            {loading ? (
                <LoadingSpinner />
            ) : noMoviesFound ? (
                // 404 Error Display
                <div className="flex flex-col items-center justify-center w-full mx-auto p-4 bg-white">
                    <div className="text-center">
                        <h1 className="text-[120px] font-extrabold text-indigo-600 mb-2">
                            404
                        </h1>
                        <p className="text-2xl font-semibold text-gray-800">No movies found</p>
                        <br />
                        <p className="text-md text-gray-500 mb-6">
                            Oops! We couldn't find any movies for "{category}".
                        </p>
                        <Link href="/" passHref>
                            <Button type="primary" icon={<HomeOutlined />}>
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                // Movies List Display
                <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                        <div>
                            <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                                {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()} Genre
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                                {movies.map((movie, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/movies/${movie.slug}`}
                                            onClick={handleLinkClick}
                                            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
                                        >
                                            <div>
                                                <img
                                                    src={movie.movie_poster_img}
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
                                                    {movie.genres.join(', ')}
                                                </p>
                                                <p className="font-normal text-sm leading-6 text-gray-500">
                                                    {movie.year}
                                                </p>
                                            </div>
                                            <div className="hidden gap-1 flex-wrap justify-center lg:justify-start items-center lg:items-start mt-3">
                                                <Button type="primary">
                                                    <PlayCircleOutlined /> Watch Now
                                                </Button>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
};

export default Category;
