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
    id: '1',
    title: 'Industriemeister/in - Elektrotechnik oder Mechatronik',
    company: 'workflat Personalservice GmbH',
    location: 'Leverkusen',
    type: 'Vollzeit',
    description: 'Industriemeister/in - Elektrotechnik oder Mechatronik',
    postedAt: '2026-03-03'
  },
  {
    id: '2',
    title: 'Produktentwickler Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Rosenheim',
    location: 'Tittmoning',
    type: 'Vollzeit',
    description: 'Produktentwickler Mechatronik (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Systemingenieur (m/w/d) für Optronik & Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Giessen',
    location: 'Wetzlar',
    type: 'Vollzeit',
    description: 'Systemingenieur (m/w/d) für Optronik & Mechatronik',
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Bachelor Mechatronik (m/w/d) - REF2759M',
    company: 'AUMOVIO SE Haupverwaltung',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    description: 'Bachelor Mechatronik (m/w/d) - REF2759M',
    postedAt: '2026-03-03'
  },
  {
    id: '5',
    title: 'Ingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Vertriebsstützpunkt Schwerin',
    location: 'Schwerin, Mecklenburg',
    type: 'Vollzeit',
    description: 'Ingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '6',
    title: 'Systemingenieur Mechatronik (m/w/d)',
    company: 'Orizon GmbH, Unit Aviation',
    location: 'Wetzlar',
    type: 'Vollzeit',
    description: 'Systemingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '7',
    title: 'Automatenfachmann/frau (m/w/d) (Fachrichtung Mechatronik)',
    company: 'Löwen Play GmbH',
    location: 'Seesen, Harz',
    type: 'Vollzeit',
    description: 'Automatenfachmann/frau (m/w/d) (Fachrichtung Mechatronik)',
    postedAt: '2026-03-02'
  },
  {
    id: '8',
    title: 'Instandhaltungstechniker (m/w/d) Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Erfurt',
    location: 'Eisenach, Thüringen',
    type: 'Vollzeit',
    description: 'Instandhaltungstechniker (m/w/d) Mechatronik',
    postedAt: '2026-03-02'
  },
  {
    id: '9',
    title: 'Maschinenbauingenieur Mechatronik (m/w/d)',
    company: 'Orange Engineering GmbH & Co. KG',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Maschinenbauingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-01'
  },
  {
    id: '10',
    title: 'Mechatronik(m/w/d)',
    company: 'Amano GmbH Personalmanagement',
    location: 'Karlsruhe, Baden',
    type: 'Vollzeit',
    description: 'Mechatronik(m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '11',
    title: 'Mechatronik Ingenieur (m/w/d)',
    company: 'Varex Imaging Deutschland AG',
    location: 'Walluf',
    type: 'Vollzeit',
    description: 'Mechatronik Ingenieur (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '12',
    title: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Osnabrück',
    location: 'Diepholz',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-26'
  },
  {
    id: '13',
    title: 'Ingenieure (m/w/d) Mechatronik',
    company: 'Oehmichen & Bürgers Industrieplanung GmbH',
    location: 'Aachen',
    type: 'Vollzeit',
    description: 'Ingenieure (m/w/d) Mechatronik',
    postedAt: '2026-02-25'
  },
  {
    id: '14',
    title: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    company: 'VIRO Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-24'
  },
  {
    id: '15',
    title: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Kassel',
    location: 'Kassel, Hessen',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-23'
  },
  {
    id: '16',
    title: 'Ingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Rostock',
    location: 'Rostock',
    type: 'Vollzeit',
    description: 'Ingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-23'
  },
  {
    id: '17',
    title: 'Ingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Elmshorn',
    location: 'Elmshorn',
    type: 'Vollzeit',
    description: 'Ingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '18',
    title: 'Testingenieur (m/w/d) Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Friedrichshafen',
    location: 'Friedrichshafen',
    type: 'Vollzeit',
    description: 'Testingenieur (m/w/d) Mechatronik',
    postedAt: '2026-02-20'
  },
  {
    id: '19',
    title: 'Entwicklungsingenieur Mechatronik (w/m/d)',
    company: 'Brunel GmbH NL Rostock',
    location: 'Rostock',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur Mechatronik (w/m/d)',
    postedAt: '2026-02-19'
  },
  {
    id: '20',
    title: 'Mechatronik (m/w/d)',
    company: 'Knorr-Bremse AG',
    location: 'München',
    type: 'Vollzeit',
    description: 'Mechatronik (m/w/d)',
    postedAt: '2026-02-19'
  },
  {
    id: '21',
    title: 'Projektmanager Mechatronik (m/w/d)',
    company: 'Victoria Consulting GmbH',
    location: 'Georgensgmünd',
    type: 'Vollzeit',
    description: 'Projektmanager Mechatronik (m/w/d)',
    postedAt: '2026-02-17'
  },
  {
    id: '22',
    title: 'Entwicklungsingenieur (m/w/d) Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Nürnberg City',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur (m/w/d) Mechatronik',
    postedAt: '2026-02-16'
  },
  {
    id: '23',
    title: 'Systementwickler (m/w/d) Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Friedrichshafen',
    location: 'Friedrichshafen',
    type: 'Vollzeit',
    description: 'Systementwickler (m/w/d) Mechatronik',
    postedAt: '2026-02-16'
  },
  {
    id: '24',
    title: 'Ingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Heidenheim',
    location: 'Oberkochen',
    type: 'Vollzeit',
    description: 'Ingenieur Mechatronik (m/w/d)',
    postedAt: '2026-02-13'
  },
  {
    id: '25',
    title: 'Labortechniker (m/w/d) Mechatronik',
    company: 'Trio Personalmanagement GmbH',
    location: 'Pfinztal',
    type: 'Vollzeit',
    description: 'Labortechniker (m/w/d) Mechatronik',
    postedAt: '2026-02-13'
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
