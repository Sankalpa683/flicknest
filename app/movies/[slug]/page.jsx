"use client";

import { Button, Card, Avatar, Badge } from "antd";
import { LikeOutlined, BookOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useRouter } from 'next/router'; // Import useRouter to get the slug from the URL

const MoviePage = ({ params }) => {
  // const router = useRouter(); // Get the router object
  const { slug } = params; // Extract the slug from the URL
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([
    {
      name: "Kuch Kuch Hota Hai",
      image: "https://m.media-amazon.com/images/I/81Z29KU-VSL.jpg"
    },
    {
      name: "Main Hoon Na",
      image: "https://i.ytimg.com/vi/Fzn15YxESCg/maxresdefault.jpg"
    },
    {
      name: "Bhagwan",
      image: "https://i.ytimg.com/vi/M6mcuySVazA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1xE9F-M8DWRmmCn4hHrTLYFRAlw"
    },
    {
      name: "Kal Ho Na Ho",
      image: "https://preview.redd.it/20-years-of-kal-ho-naa-ho-v0-pginhtp9qg2c1.jpeg?auto=webp&s=2c7aa9426c1e739121c1596c4fe448facf8801d6"
    }
  ]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get('/movies.json'); // Adjust the path as necessary
        const movies = response.data;
        const selectedMovie = movies.find(movie => movie.slug === slug); // Fetch movie details based on slug
        setMovie(selectedMovie);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    if (slug) { // Ensure slug is available before fetching
      fetchMovieData();
    }
  }, [slug]); // Dependency array includes slug

  if (!movie) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <>
      <Navbar active='movies' />
      <div className="container mx-auto p-4 space-y-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div className="lg:col-span-2 bg-white">
            <div className="aspect-video bg-white bg-muted rounded-lg overflow-hidden">
              <iframe
                src={movie.embedUrl} // Use the movie's embed URL
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="my-5 text-[#171717] bg-white space-y-2 rounded-lg">
              <h1 className="text-2xl text-[#171717] font-bold">{movie.title}</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.language}</span>
                <span>•</span>
                <span>{movie.duration} min</span>
                <span>•</span>
                <div className="flex items-center">
                  <StarFilled style={{ color: "#fadb14" }} />
                  <span className="ml-1">{movie.rating}/10</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 text-[#727272]">
                {movie.movie_description}
              </p>
              <div className="flex space-x-2 py-3">
                {movie.genres.map((genre) => (
                  <Badge key={genre} color="blue">{genre}</Badge>
                ))}
              </div>
            </div>
            <div className="flex bg-white space-x-2">
              <Button type="primary" icon={<LikeOutlined />}>Like</Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
              <Button icon={<BookOutlined />}>Bookmark</Button>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <Card title="Cast">
              {movie.actors.map((actor) => (
                <div key={actor} className="flex items-center space-x-2 mb-4">
                  <div>
                    <p className="font-medium">{actor}</p>
                    <p className="text-sm text-muted-foreground">Actor</p>
                  </div>
                </div>
              ))}
            </Card>
            <Card title="Director">
              <div className="flex bg-white items-center space-x-4">
                <div>
                  <p className="font-medium">{movie.director}</p>
                  <p className="text-sm text-muted-foreground">Director</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="bg-white">
          <h2 className="text-2xl text-[#171717] font-semibold mb-4">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedMovies.map((relatedMovie) => (
              <Card key={relatedMovie.name} hoverable>
                <div className="aspect-video bg-muted rounded-md mb-2 overflow-hidden">
                  <img src={relatedMovie.image} alt={relatedMovie.name} className="object-cover w-full h-full rounded-lg" />
                </div>
                <h3 className="font-medium">{relatedMovie.name}</h3>
                <p className="text-sm text-muted-foreground">Christopher Nolan</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoviePage;
