// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Cpu, Settings, Zap } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'mech1',
    title: 'Mechatroniker für Automatisierungstechnik',
    company: 'PrecisionBots GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    salary: '55.000€ - 68.000€',
    description: 'Wartung und Programmierung von Industrierobotern. Kenntnisse in Siemens S7 und Kuka von Vorteil.',
    postedAt: 'Vor 1 Std.',
    logo: 'https://picsum.photos/seed/robotics1/120/120'
  },
  {
    id: 'mech2',
    title: 'Service-Ingenieur Mechatronik (m/w/d)',
    company: 'Global Systems Corp.',
    location: 'München / Weltweit',
    type: 'Vollzeit',
    salary: '62.000€ - 75.000€',
    description: 'Inbetriebnahme komplexer Fertigungsstraßen beim Kunden vor Ort. Hohe Reisebereitschaft erforderlich.',
    postedAt: 'Vor 5 Std.',
    logo: 'https://picsum.photos/seed/robotics2/120/120'
  },
  {
    id: 'mech3',
    title: 'SPS-Programmierer / Mechatroniker',
    company: 'TechFlow Automation',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '4.500€ mtl.',
    description: 'Entwicklung von Steuerungssoftware für Förderanlagen. Fokus auf TIA Portal und Safety-Systeme.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/robotics3/120/120'
  }
];

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-500/20 p-2 rounded-lg text-sky-400">
                    <Cpu size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight font-tech">
                    Aktuelle <span className="text-sky-400">Vakanzen</span>
                  </h2>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-40 bg-slate-800/50 animate-pulse rounded-xl border border-slate-700"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Engineering CTA */}
              <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-2xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Settings size={200} className="animate-spin-slow" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-tech">Bereit für Industrie 4.0?</h3>
                    <p className="text-slate-400">Lass dich von den innovativsten Engineering-Teams finden.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2">
                      <Zap size={18} fill="currentColor" />
                      Profil schärfen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white font-tech">
            MECHATRONIK<span className="text-sky-500">JOBS</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <Link to="/impressum" className="hover:text-sky-400 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-sky-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <a href="#" className="hover:text-sky-400 transition-colors">Für Unternehmen</a>
          </div>
          <div className="text-slate-600 text-xs">
            © 2024 mechatronik-stellenangebote.de
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
