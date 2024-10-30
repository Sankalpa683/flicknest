import { Button, Card, Badge } from "antd";
import { LikeOutlined, BookOutlined, ShareAltOutlined, StarFilled, HomeOutlined } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import axios from 'axios';
import Link from "next/link";

// Error handling and caching in API fetch
async function fetchMovieData(slug) {
  try {
    const response = await axios.get('https://www.bollycinemahub.in/movies.json', { cache: 'no-store' });
    const movies = response.data;
    return movies.find((movie) => movie.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return null;
  }
}

// Dynamic metadata with refined keywords
export async function generateMetadata({ params }) {
  const { slug } = params;
  const movie = await fetchMovieData(slug);

  if (!movie) {
    return {
      title: "Movie not found",
      description: "Requested movie is not available.",
    };
  }

  const keywords = `${movie.title}, ${movie.year}, ${movie.language}, watch online, free streaming, HD Bollywood`;

  return {
    title: `${movie.title} (${movie.year}) | Bolly Cinema Hub`,
    description: `${movie.meta_description}. Watch ${movie.title} online on Bolly Cinema Hub.`,
    keywords,
    openGraph: {
      title: `${movie.title} (${movie.year})`,
      description: movie.meta_description,
      url: `https://www.bollycinemahub.in/movies/${slug}`,
      images: [{ url: movie.movie_poster_img, alt: `${movie.title} Poster` }],
      type: "video.movie",
    },
    twitter: {
      card: "summary_large_image",
      title: `${movie.title}`,
      description: movie.meta_description,
      images: [movie.movie_poster_img],
    },
  };
}

// Improved structured data
const MoviePage = async ({ params }) => {
  const { slug } = params;
  const movie = await fetchMovieData(slug);

  if (!movie) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full mx-auto p-4 bg-white">
          <div className="text-center">
            <h1 className="text-[120px] font-extrabold text-indigo-600">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-2">No movies found</p>
            <Link href="/" passHref>
              <Button type="primary" icon={<HomeOutlined />}>Go Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.title,
    description: movie.meta_description,
    image: movie.movie_poster_img,
    director: { "@type": "Person", name: movie.director },
    actor: movie.actors.map((actor) => ({ "@type": "Person", name: actor })),
    genre: movie.genres,
    dateCreated: movie.year,
    duration: `PT${movie.duration}M`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: movie.rating, reviewCount: 50 },
    video: {
      "@type": "VideoObject",
      name: movie.title,
      description: movie.meta_description,
      thumbnailUrl: movie.movie_poster_img,
      uploadDate: movie.year,
      duration: `PT${movie.duration}M`,
      embedUrl: movie.embedUrl,
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: { "@type": "WatchAction" },
        userInteractionCount: 500,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bollycinemahub.in/" },
        { "@type": "ListItem", position: 2, name: "Movies", item: "https://www.bollycinemahub.in/movies" },
        { "@type": "ListItem", position: 3, name: movie.title, item: `https://www.bollycinemahub.in/movies/${movie.slug}` },
      ],
    },
  };

  return (
    <>
      <Navbar active="movies" />
      <div className="container mx-auto p-4 space-y-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div className="lg:col-span-2 bg-white">
            <div className="aspect-video bg-white bg-muted rounded-lg overflow-hidden">
              <iframe
                src={movie.embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={`Watch ${movie.title} Full Movie Online`}
              ></iframe>
            </div>
            <div className="my-5 text-[#171717] bg-white space-y-2">
              <h1 className="text-2xl text-[#171717] font-bold">{movie.title} - ({movie.year})</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{movie.year}</span><span>•</span>
                <span>{movie.language}</span><span>•</span>
                <span>{movie.duration} min</span><span>•</span>
                <div className="flex items-center"><StarFilled style={{ color: "#fadb14" }} /><span className="ml-1">{movie.rating}/10</span></div>
              </div>
              <p className="text-muted-foreground mt-2 text-[#727272]">{movie.movie_description}</p>
              <div className="flex space-x-2 py-3">
                {movie.genres.map((genre) => <Badge key={genre} color="blue">{genre}</Badge>)}
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <Card title="Cast">
              {movie.actors.map((actor) => (
                <div key={actor} className="flex items-center space-x-2 mb-4">
                  <p className="font-medium">{actor}</p>
                  <p className="text-sm text-muted-foreground">Actor</p>
                </div>
              ))}
            </Card>
            <Card title="Director">
              <div className="flex bg-white items-center space-x-4">
                <p className="font-medium">{movie.director}</p>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
            </Card>
          </div>
        </div>
        <h2 className="text-2xl text-[#171717] font-semibold mb-4">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedMovies.map((relatedMovie) => (
            <Card key={relatedMovie.name} hoverable>
              <img src={relatedMovie.image} alt={relatedMovie.name} className="object-cover w-full h-full rounded-lg" />
              <h3 className="font-medium">{relatedMovie.name}</h3>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default MoviePage;
