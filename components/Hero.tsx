
import React from 'react';
import { Search, MapPin, Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-32 px-4 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-sky-400 text-sm font-bold mb-8">
          <Workflow size={14} />
          Die Schnittstelle zwischen Mechanik & Elektronik
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-tech">
          Gestalte die <br/>
          <span className="text-sky-500">Automatisierung</span> von morgen.
        </h1>
        <p className="text-lg text-slate-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
          Finde Top-Positionen im Anlagenbau, der Robotik und Systemtechnik. Für Mechatroniker, die mehr wollen als nur Standard.
        </p>
        
        <div className="max-w-4xl mx-auto bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-slate-700">
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-900/50 rounded-lg">
            <Search className="text-sky-400 mr-4" size={20} />
            <input 
              type="text" 
              placeholder="Beruf oder Skill (z.B. SPS, Robotik)" 
              className="w-full bg-transparent focus:outline-none text-white font-medium placeholder-slate-600"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-900/50 rounded-lg">
            <MapPin className="text-sky-400 mr-4" size={20} />
            <input 
              type="text" 
              placeholder="Standort" 
              className="w-full bg-transparent focus:outline-none text-white font-medium placeholder-slate-600"
            />
          </div>
          <button className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold px-10 py-4 rounded-lg transition-all shadow-lg shadow-sky-500/20">
            Suchen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
