
import React from 'react';
import { Filter, Layers, Zap } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <Filter size={20} className="text-sky-400" />
        <h3 className="font-bold text-white text-lg font-tech">Filter</h3>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <section className="mb-8">
          <h4 className="font-bold text-slate-500 text-[10px] uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
            <Layers size={14} /> Fachbereiche
          </h4>
          <div className="space-y-3">
            {['Automatisierung', 'Robotik', 'Instandhaltung', 'Entwicklung', 'Service'].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-sky-500 focus:ring-sky-500/50" />
                <span className="text-slate-400 font-medium text-sm group-hover:text-white transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h4 className="font-bold text-slate-500 text-[10px] uppercase mb-4 tracking-[0.2em]">Erfahrung</h4>
          <div className="space-y-3">
            {['Expert / Meister', 'Professional', 'Einsteiger', 'Absolvent'].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="level" className="w-4 h-4 border-slate-600 bg-slate-700 text-sky-500 focus:ring-sky-500/50" />
                <span className="text-slate-400 font-medium text-sm group-hover:text-white transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-sky-500/5 p-4 rounded-lg border border-sky-500/20">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs mb-2 uppercase">
            <Zap size={14} fill="currentColor" />
            <span>Top Skills</span>
          </div>
          <p className="text-slate-500 text-[10px] leading-relaxed">Aktuell werden besonders Fachkräfte mit <b>SPS-Kenntnissen</b> und <b>TIA-Portal</b> Erfahrung gesucht.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
