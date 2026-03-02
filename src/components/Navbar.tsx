import { Link } from 'react-router-dom';
import { Search, PawPrint } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
              <PawPrint className="w-8 h-8" />
              <span className="font-bold text-2xl tracking-tight">PetMDB</span>
            </Link>
          </div>
          <div className="flex-1 max-w-xl px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-zinc-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-yellow-400 sm:text-sm transition-colors"
                placeholder="Search pets, videos, genres..."
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/top-rated" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Top Rated</Link>
            <Link to="/top-pets" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Top Pets</Link>
            <Link to="/signin" className="bg-yellow-500 text-zinc-900 hover:bg-yellow-400 px-4 py-2 rounded-md text-sm font-bold transition-colors">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
