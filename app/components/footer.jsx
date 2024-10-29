import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const footer = () => {
  return (
    <>

      <footer className="w-full border-t border-gray-300 bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 py-10">
            <div className="col-span-full mb-10 2xl:col-span-2 lg:mb-0 flex items-center flex-col 2xl:items-start">
              <div className="flex items-center justify-between w-full max-w-xl mx-auto flex-col 2xl:flex-col 2xl:items-start">
                <Image src='/logo.png' width={190} height={90} />
                <p className="2xl:py-8 py-4 text-sm text-gray-400 2xl:max-w-xs text-center lg:text-left">
                  Streaming your favorite movies and TV shows worldwide. Questions?
                  We're here to help!
                </p>
                <Link
                  href="/contact"
                  className="py-2 px-5 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
                >
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-800 font-medium mb-7">Quick Links</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/movies"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Movies
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/web-series"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Web series
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center lg:text-left">
              <h4 className="text-lg text-black font-medium mb-7">Top Categories</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/category/action"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Action
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/category/horror"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Horror
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/category/drama"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Drama
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/romance"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Romance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-black font-medium mb-7">Support</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/support/faqs"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/support/help"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/support/privacy"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support/terms"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center lg:text-left">
              <h4 className="text-lg text-black font-medium mb-7">Support</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/support/faqs"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/support/help"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/support/privacy"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support/terms"
                    className="text-gray-400 text-sm font-normal hover:text-black"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex flex-col p-4  text-gray-600 flex-wrap justify-center items-center text-center'>
          <p>Copyright &copy; 2024 BollyCinema Hub</p>
        </div>

        <br className='block lg:hidden' />
        <br className='block lg:hidden' />


      </footer>




    </>
  )
}

export default footer
