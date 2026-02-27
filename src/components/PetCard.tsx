import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Link to={`/pet/${pet.id}`} className="group flex flex-col bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{pet.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{pet.breed}</p>
        <div className="mt-auto flex items-center gap-1 text-yellow-500 font-semibold">
          <PawPrint className="w-4 h-4 fill-current" />
          <span>{pet.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}
