import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { PlayCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

const Hero = () => {
  return (
    <section className="relative h-[550px] w-full overflow-hidden">
      {/* Carousel with images */}
      <Carousel autoplay effect="fade" className="absolute inset-0 z-0">
        <div>
          <img
            src="https://images.daznservices.com/di/library/DAZN_News/1f/48/jake-paul-and-mike-tyson14052024_1dzrzyxkxe9bd1p8sef16z0351.jpg?t=-837581552"
            alt="Pathaan promotional image 1"
            className="object-cover w-full h-[550px]"
          />
        </div>
        <div>
          <img
            src="https://d.newsweek.com/en/full/2522089/mike-tyson-vs-jake-paul.jpg?w=1600&h=900&q=88&f=b2922651188557f7078ffc70fe2b38b9"
            alt="Pathaan promotional image 2"
            className="object-cover w-full h-[550px]"
          />
        </div>
        <div>
          <img
            src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0531%2Fr1339911_1296x729_16%2D9.jpg"
            alt="Pathaan promotional image 3"
            className="object-cover w-full h-[550px]"
          />
        </div>
      </Carousel>

      {/* Gradient and content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-20">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Mike Tyson V/S Jake Paul</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Pathaan, an exiled secret agent returns to protect his nation from a deadly threat, leading to high-octane action, thrilling chases, and a battle against a rogue enemy.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">
              2024
            </span>
            {/* <span className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">
              2+ hr
            </span> */}
            <span className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">
              boxing
            </span>
            <span className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">
              27min+
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.bollycinemahub.in/boxing/tyson-vs-jake-paul-full-fight-2024-live-stream-winner-results"
              className="inline-flex items-center justify-center px-5 gap-1 py-2 text-lg font-medium text-white bg-[#1677FF] rounded-md hover:bg-[#8733dc] focus:outline-none"
            >
              <PlayCircleOutlined /> Watch Now
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Jake_Paul_vs._Mike_Tyson"
              target='_blank'
              className="inline-flex gap-2 items-center justify-center px-5 py-2 text-lg font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <InfoCircleOutlined /> More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
