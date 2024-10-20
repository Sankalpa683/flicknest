import React from 'react'

const movie = ({params}) => {
    const movie_slug = params.slug;
  return (
    <>
    <p>Movie name: {movie_slug}</p>
    </>
  )
}

export default movie