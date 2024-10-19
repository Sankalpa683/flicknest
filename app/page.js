import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cult_classic from './components/moviecard/cult_classic'
import Recommendations from './components/moviecard/recommendation'
import Comedy from './components/moviecard/comedy'
import Action from './components/moviecard/action'
import Drama from './components/moviecard/drama'
import Footer from './components/footer'


const page = () => {
  return (
    <>
      <Navbar active='home'/>
      <Hero />
      <main className='mb-10 bg-white'>
        <Cult_classic />
        <Recommendations />
        <Comedy />
        <Action />
        <Drama />
      </main>
      <Footer />
      <br className='block sm:hidden'/>
      <br className='block sm:hidden'/>
    </>
  )
}

export default page