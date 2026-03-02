import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pets, videos } from '../data/mockData';
import PetCard from '../components/PetCard';
import VideoCard from '../components/VideoCard';

export default function TopRated() {
  const topRatedVideos = [...videos].sort((a, b) => b.rating - a.rating);
  const topRatedPets = [...pets].sort((a, b) => b.rating - a.rating);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-zinc-950 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Star className="w-10 h-10 text-yellow-500 fill-current" />
            Top Rated
          </h1>
          <p className="text-xl text-gray-400">
            Discover the highest-rated pets and videos of all time, as voted by the PetMDB community.
          </p>
        </div>

        {/* Top Rated Videos */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-yellow-500 pl-4">Top Rated Videos</h2>
            <Link to="/" className="flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Top Rated Pets */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-yellow-500 pl-4">Top Rated Pets</h2>
            <Link to="/top-pets" className="flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
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
