"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, Dropdown, Input, Modal } from 'antd';
import { AppstoreOutlined, HomeOutlined, BookOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import Sankalpa from '@/public/user.png';

const Navbar = ({ active }) => {
    const router = useRouter();
    
    // State to handle the visibility of the search modal and the search query
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search logic
    const onSearch = (value) => {
        if (value.trim()) {
            router.push(`/search/${value.trim()}`);
        }
    };

    // Links for the dropdown (Profile)
    const links = (
        <Menu>
            <Menu.Item key="1" disabled>
                My Account
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" icon={<BookOutlined />}>
                Bookmarks
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <header className="py-2 sticky top-0 z-50 bg-white text-black">
                <nav className="flex justify-between items-center mx-4 md:mx-6">
                    {/* Logo */}
                    <div className="flex items-center gap-4 md:gap-4">
                        <Link href="/">
                            <Image src={Logo} width={120} height={90} alt="Logo" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex">
                            <Menu
                                selectedKeys={[active]} // Dynamically highlight the active menu item
                                mode="horizontal"
                                className="flex space-x-4"
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

                    {/* Mobile Menu Icon (Hamburger) */}
                    <div className="flex items-center text-black gap-4">
                        <SearchOutlined
                            className="cursor-pointer text-black text-xl"
                            onClick={() => setIsSearchVisible(true)} // Open the search modal
                        />
                        <Dropdown overlay={links} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Image src={Sankalpa} width={35} height={35} className="rounded-full cursor-pointer" />
                            </a>
                        </Dropdown>
                    </div>
                </nav>
            </header>

            {/* Search Modal */}
            <Modal
                visible={isSearchVisible}
                footer={null}
                onCancel={() => setIsSearchVisible(false)} // Close the modal
                closable={true}
                title="Search Movies"
            >
                <Input.Search
                    placeholder="Search for movies..."
                    enterButton
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onSearch={onSearch}
                />
            </Modal>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed -bottom-1 py-1 left-0 right-0 text-black bg-white shadow-lg border-t border-gray-300">
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
                    <Link href="/bookmarks" className="flex flex-col items-center text-center">
                        <BookOutlined className="text-xl" />
                        <span className="text-xs">Bookmarks</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
