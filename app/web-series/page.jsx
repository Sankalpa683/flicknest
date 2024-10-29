import React from 'react'
import Navbar from '../components/navbar'
import { Button } from 'antd';
import Link from 'next/link'
import { HomeOutlined } from '@ant-design/icons';
import Footer from '../components/footer'

const page = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full mx-auto p-4 py-8 bg-white">
                <div className="text-center">
                    <h1 className="text-[90px] font-extrabold text-indigo-600 mb-2">Coming Soon</h1>
                    <p className="text-2xl font-semibold text-gray-800">Web Series Coming Soon!</p><br />
                    <p className="text-md text-gray-500 mb-6">Exciting web series are on the way. Stay tuned for our upcoming content!</p>
                    <Link href="/" passHref>
                        <Button type="primary" icon={<HomeOutlined />}>Go Home</Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page
