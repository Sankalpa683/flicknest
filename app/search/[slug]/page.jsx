import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const movies = [
    
    {
        title: 'Chak De! India',
        release_year: '2007',
        description: 'Sports Drama',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM2MjgyNDE5Nl5BMl5BanBnXkFtZTcwMzM1MDc4MQ@@._V1_.jpg',
    },
    {
        title: 'DDLJ',
        release_year: '1995',
        description: 'Romance',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg',
    },
    {
        title: 'Lagaan',
        release_year: '2001',
        description: 'Historical Drama',
        img: 'https://www.tallengestore.com/cdn/shop/products/7381744713908A_12c0d02b-1017-4503-919b-f0f4a503b387.jpg?v=1683929384',
    },

];

const siteName = 'FlickNest';
const siteURL = 'https://flicknest.com';
const description = "Welcome to FlickNest, the best site to Watch Bollywood Movies Online For Free ! Enjoy a vast collection of your favorite films from the latest blockbusters to timeless classics, all available for streaming at no cost. Our user-friendly platform makes it easy to watch online Bollywood movies for free without any registration required. Whether you're looking for action, romance, or drama, FlickNest is your go-to destination for watching movies online. Join us now to explore and indulge in a cinematic experience like no other!";

export const metadata = {
    title: `${siteName} | Watch Bollywood Movies Online For Free `,
    description,
};

const search = ({ params }) => {

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
            {/* Movies List */}
            <section className="py-6 sm:py-6 md:py-8 lg:py-12 bg-white">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-2">
                    <div className=''>
                        <h2 className="font-manrope font-semibold text-2xl text-black mb-8 max-lg:text-center">
                            Search Results
                        </h2>
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

            <Footer />
        </>
    )
}

export default search