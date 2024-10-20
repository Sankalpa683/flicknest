import React from 'react'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const movie = ({params}) => {
    const movie_slug = params.slug;
  return (
    <>
    <p>Movie name: {movie_slug}</p>
    </>
  )
}

export default movie