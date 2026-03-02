import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { pets } from '../data/mockData';
import PetCard from '../components/PetCard';

export default function TopPets() {
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
            Top Pets
          </h1>
          <p className="text-xl text-gray-400">
            Discover the highest-rated pets of all time, as voted by the PetMDB community.
          </p>
        </div>

        {/* Top Rated Pets */}
        <section>
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
