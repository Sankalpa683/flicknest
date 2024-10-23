import { Button, Card, Avatar, Badge } from "antd";
import { LikeOutlined, BookOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import axios from "axios";
import moviesData from '@/public/movies.json';

// Generate static paths for SEO
export async function generateStaticParams() {
  const movies = moviesData; // Load movie data from local JSON
  return movies.map(movie => ({
    slug: movie.slug,
  }));
}

// Fetch movie data and render the page
const MoviePage = async ({ params }) => {
  const { slug } = params;
  const movies = moviesData; // Load movie data from local JSON

  const movie = movies.find(movie => movie.slug === slug);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  // Related movies for recommendations
  const relatedMovies = [
    { name: "Kuch Kuch Hota Hai", image: "https://m.media-amazon.com/images/I/81Z29KU-VSL.jpg" },
    { name: "Main Hoon Na", image: "https://i.ytimg.com/vi/Fzn15YxESCg/maxresdefault.jpg" },
    { name: "Bhagwan", image: "https://i.ytimg.com/vi/M6mcuySVazA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1xE9F-M8DWRmmCn4hHrTLYFRAlw" },
    { name: "Kal Ho Na Ho", image: "https://preview.redd.it/20-years-of-kal-ho-naa-ho-v0-pginhtp9qg2c1.jpeg?auto=webp&s=2c7aa9426c1e739121c1596c4fe448facf8801d6" },
  ];

  return (
    <>
      <Navbar active='movies' />
      <div className="container mx-auto p-4 space-y-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div className="lg:col-span-2 bg-white">
            <div className="aspect-video bg-white bg-muted rounded-lg overflow-hidden">
              <iframe
                src={movie.embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="my-5 text-[#171717] bg-white space-y-2">
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
              <p className="text-muted-foreground mt-2 text-[#727272]">{movie.movie_description}</p>
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

// Adding structured data for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const movie = moviesData.find(movie => movie.slug === slug);

  // Ensure you have keywords relevant to your content
  const keywords = [
    movie.title,
    movie.year,
    movie.language,
    ...movie.genres,
    "watch online",
    "full movie",
    "free streaming",
    "HD",
  ].join(', ');

  return {
    title: `Watch ${movie.title} (${movie.year}) - Full Movie Online for Free | Bolly Cinema Hub `,
    description: `${movie.movie_description} .Watch ${movie.title} for free in HD. Stream now!`,
    keywords, // Add keywords for better SEO
    openGraph: {
      title: movie.title,
      description: movie.movie_description,
      url: `https://bollycinemahub.in/movies/${slug}`,
      images: [movie.movie_poster_img],
      type: 'video.other', // Specify the type for better understanding
    },
    twitter: {
      card: 'summary_large_image',
      title: movie.title,
      description: movie.movie_description,
      images: [movie.movie_poster_img],
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Movie',
      name: movie.title,
      description: movie.movie_description,
      image: movie.movie_poster_img,
      director: {
        '@type': 'Person',
        name: movie.director,
      },
      actor: movie.actors.map(actor => ({
        '@type': 'Person',
        name: actor,
      })),
      genre: movie.genres,
      dateCreated: movie.year,
      duration: `PT${movie.duration}M`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: movie.rating,
        reviewCount: 100, // Adjust based on real data
      },
      // Adding VideoObject schema
      video: {
        '@type': 'VideoObject',
        name: movie.title,
        description: movie.movie_description,
        thumbnailUrl: movie.movie_poster_img,
        uploadDate: new Date().toISOString(), // Specify upload date
        duration: `PT${movie.duration}M`,
        contentUrl: movie.embedUrl, // Embed URL for the video
        embedUrl: movie.embedUrl,
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: {
            '@type': 'WatchAction',
          },
          userInteractionCount: 1000, // Adjust based on real data
        },
      },
      // Adding BreadcrumbList for site navigation
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://bollycinemahub.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Movies',
            item: 'https://bollycinemahub.in/movies',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: movie.title,
            item: `https://bollycinemahub.in/movies/${slug}`,
          },
        ],
      },
      // Adding WebPage schema for better page context
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://bollycinemahub.in/movies/${slug}`,
      },
    },
  };
}


export default MoviePage;
