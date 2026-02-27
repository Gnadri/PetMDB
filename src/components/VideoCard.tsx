import { Link } from 'react-router-dom';
import { PlayCircle, PawPrint } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/video/${video.id}`} className="group flex flex-col bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md">
          {video.releaseYear}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors line-clamp-2">{video.title}</h3>
        <p className="text-sm text-gray-400 mb-3 truncate">{video.genres.join(', ')}</p>
        <div className="mt-auto flex items-center gap-1 text-yellow-500 font-semibold">
          <PawPrint className="w-4 h-4 fill-current" />
          <span>{video.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}
