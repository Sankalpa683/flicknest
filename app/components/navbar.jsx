"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, Dropdown, Input, Modal, Spin } from 'antd';
import { AppstoreOutlined, HomeOutlined, BookOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import Sankalpa from '@/public/user.png';

const Navbar = ({ active }) => {
    const router = useRouter();

    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const onSearch = async (value) => {
        if (value.trim()) {
            setLoading(true); // Set loading to true when search starts
            const formattedValue = value.trim().toLowerCase().replace(/\s+/g, '-');
            await router.push(`/search/${formattedValue}`);
        }
    };

    const links = (
        <Menu>
            <Menu.Item key="1" disabled>
                Welcome to
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                BollyCinemaHub
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <header className="py-2 sticky top-0 z-50 bg-white ">
                <nav className="flex justify-between items-center mx-4 md:mx-6">
                    <div className="flex items-center gap-4 md:gap-4">
                        <Link href="/">
                            <Image src={Logo} width={190} height={90} alt="Logo" />
                        </Link>

                        <div className="ml-8 hidden lg:flex">
                            <Menu
                                selectedKeys={[active]}
                                mode="horizontal"
                                className="flex space-x-5"
                            >
                                <Menu.Item key="home" icon={<HomeOutlined />}>
                                    <Link href="/">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="movies" icon={<AppstoreOutlined />}>
                                    <Link href="/movies">Movies</Link>
                                </Menu.Item>
                                <Menu.Item key="series" icon={<BookOutlined />}>
                                    <Link href="/web-series">Web Series</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>

                    <div className="flex items-center text-black gap-4">
                        <SearchOutlined
                            className="cursor-pointer text-black text-xl"
                            onClick={() => setIsSearchVisible(true)}
                        />
                        <Dropdown overlay={links} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Image src={Sankalpa} width={35} height={35} className="rounded-full cursor-pointer" />
                            </a>
                        </Dropdown>
                    </div>
                </nav>
            </header>

            <Modal
                visible={isSearchVisible}
                footer={null}
                onCancel={() => setIsSearchVisible(false)}
                closable={true}
                title="Search Movies"
            >
                {loading && (
                    <div className="flex justify-center my-4">
                        <Spin size="small" />
                    </div>
                )}
                <Input.Search
                    placeholder="Search for movies..."
                    enterButton
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onSearch={onSearch}
                />

            </Modal>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed -bottom-1 z-50 py-1 left-0 right-0 text-black bg-white shadow-lg border-t border-gray-300">
                <nav className="flex justify-around py-2">
                    <Link href="/" className="flex flex-col items-center text-center">
                        <HomeOutlined className="text-xl" />
                        <span className="text-xs">Home</span>
                    </Link>
                    <div onClick={() => setIsSearchVisible(true)} className="flex flex-col items-center text-center cursor-pointer">
                        <SearchOutlined className="text-xl" />
                        <span className="text-xs">Search</span>
                    </div>
                    <Link href="/movies" className="flex flex-col items-center text-center">
                        <AppstoreOutlined className="text-xl" />
                        <span className="text-xs">Movies</span>
                    </Link>
                    <Link href="" className="flex flex-col items-center text-center">
                        <BookOutlined className="text-xl" />
                        <span className="text-xs">FAQs</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
