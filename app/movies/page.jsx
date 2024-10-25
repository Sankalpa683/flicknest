"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { siteConfig } from '@/app/config/siteConfig';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const siteName = `${siteConfig.name}`;
const siteURL = `${siteConfig.url}`;
const description = `${siteConfig.description}`;

const Movies = () => {

    return (
        <>
            <Head>
                {/* BreadcrumbList Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                { '@type': 'ListItem', position: 2, name: 'Movies', item: `${siteURL}/movies` },
                                { '@type': 'ListItem', position: 3, name: 'Action Movies', item: `${siteURL}/category/action` },
                                { '@type': 'ListItem', position: 3, name: 'Romantic Movies', item: `${siteURL}/category/romance` },
                                { '@type': 'ListItem', position: 4, name: 'Comedy Movies', item: `${siteURL}/category/comedy` },
                                { '@type': 'ListItem', position: 5, name: 'Drama', item: `${siteURL}/category/drama` },
                            ],
                        }),
                    }}
                />

                {/* WebPage Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: `${siteName} | List of Bollywood Movies to Watch Online for Free`,
                            description: description,
                            url: siteURL,
                        }),
                    }}
                />
            </Head>

            <Navbar active='movies' />

            {/* Movies List */}
            <h1>Helloworld</h1>

            <br className='block lg:hidden bg-white' />
            <br className='block lg:hidden bg-white' />

            <Footer />
        </>
    );
}

export default Movies;
