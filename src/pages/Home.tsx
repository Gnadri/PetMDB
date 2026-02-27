import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pets, videos } from '../data/mockData';
import PetCard from '../components/PetCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  const trendingVideos = videos.slice(0, 4);
  const topRatedPets = [...pets].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const featuredVideo = videos[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-zinc-950 text-white"
    >
      {/* Hero Section / Featured Video */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={featuredVideo.thumbnailUrl}
          alt={featuredVideo.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-500 text-zinc-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Featured</span>
              <span className="text-gray-300 text-sm">{featuredVideo.releaseYear}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{featuredVideo.title}</h1>
            <p className="text-lg text-gray-300 mb-8 line-clamp-3">{featuredVideo.synopsis}</p>
            <div className="flex items-center gap-4">
              <Link
                to={`/video/${featuredVideo.id}`}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Trailer
              </Link>
              <Link
                to={`/video/${featuredVideo.id}`}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                More Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Trending Videos */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-yellow-500 pl-4">Trending Videos</h2>
            <Link to="/" className="flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
              Explore All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
            {trendingVideos.map((video) => (
              <div key={video.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] snap-start flex-shrink-0">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </section>

        {/* Top Rated Pets */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-yellow-500 pl-4">Top Rated Pets</h2>
            <Link to="/top-rated" className="flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topRatedPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
