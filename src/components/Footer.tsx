import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-yellow-500">
            <PawPrint className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">PetMDB</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} PetMDB. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
