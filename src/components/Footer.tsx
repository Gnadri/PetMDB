import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
            <PawPrint className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">PetMDB</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} PetMDB. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
