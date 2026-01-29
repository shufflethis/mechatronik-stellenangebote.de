
import React from 'react';
import { User, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-20 flex items-center bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-sky-500 text-white p-2 rounded-lg shadow-lg shadow-sky-900/20 group-hover:scale-110 transition-transform">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-tech">
            MECHATRONIK<span className="text-sky-500">.DE</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-8 font-medium text-slate-400 uppercase text-xs tracking-widest">
          <a href="#" className="hover:text-sky-400 transition-colors">Stellen</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Systeme</a>
          <a href="#" className="hover:text-sky-400 transition-colors">Gehälter</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2">
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
