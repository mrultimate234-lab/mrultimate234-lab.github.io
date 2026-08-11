import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm font-display">
              E
            </div>
            <span className="text-gray-400 text-sm">
              Ephraim Addai Amoakohene
            </span>
          </div>

          <p className="flex items-center gap-1.5 text-gray-500 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Ghana 🇬🇭
          </p>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
