import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PlayCircle, PawPrint, ArrowLeft, Users, Calendar, Tag } from 'lucide-react';
import { videos, pets } from '../data/mockData';
import PetCard from '../components/PetCard';

export default function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Video Not Found</h2>
          <Link to="/" className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2 justify-center">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cast = pets.filter((p) => video.cast.includes(p.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-zinc-950 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>

        {/* Video Player Placeholder */}
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mb-12 border border-zinc-800 flex items-center justify-center group cursor-pointer">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
          <PlayCircle className="w-24 h-24 text-white drop-shadow-2xl z-10 group-hover:scale-110 transition-transform duration-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="bg-yellow-500 text-zinc-900 font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <PawPrint className="w-4 h-4 fill-current" />
                  {video.rating.toFixed(1)}
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {video.releaseYear}
                </span>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  {video.genres.map((genre) => (
                    <span key={genre} className="bg-zinc-800 text-gray-300 px-2 py-1 rounded text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{video.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed">{video.synopsis}</p>
            </div>
          </div>

          {/* Cast Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Users className="w-6 h-6 text-yellow-500" /> Top Cast
            </h2>
            {cast.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {cast.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No cast information available.</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
