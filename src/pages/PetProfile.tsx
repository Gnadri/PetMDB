import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PawPrint, ArrowLeft, Calendar, Info } from 'lucide-react';
import { pets, videos } from '../data/mockData';
import VideoCard from '../components/VideoCard';

export default function PetProfile() {
  const { id } = useParams<{ id: string }>();
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pet Not Found</h2>
          <Link to="/" className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2 justify-center">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const filmography = videos.filter((v) => pet.filmography.includes(v.id));

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar / Headshot */}
          <div className="md:col-span-1 space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-800">
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-zinc-900 font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <PawPrint className="w-4 h-4 fill-current" />
                {pet.rating.toFixed(1)}
              </div>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Info className="w-5 h-5 text-yellow-500" /> Bio Details
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-400">Breed</dt>
                  <dd className="font-semibold">{pet.breed}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400">Age</dt>
                  <dd className="font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" /> {pet.age} years old
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{pet.name}</h1>
              <p className="text-xl text-gray-300 leading-relaxed">{pet.bio}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-yellow-500 pl-4">Filmography</h2>
              {filmography.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filmography.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No videos found for this pet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
