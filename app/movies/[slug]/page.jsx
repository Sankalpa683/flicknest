import React from 'react'

const movies = ({ params }) => {
  const slugurl = params.slug;
  return (
    <div>movies: {slugurl} </div>
  )
}

export default movies
