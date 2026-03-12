import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 142, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 98, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 187, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 76, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 89, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 154, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 63, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 47, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 52, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 58, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 71, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 93, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 34, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 41, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 29, slug: 'freiburg' },
  { name: 'Luebeck', region: 'Schleswig-Holstein', jobs: 22, slug: 'luebeck' },
  { name: 'Heidelberg', region: 'Baden-Wuerttemberg', jobs: 35, slug: 'heidelberg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 27, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 19, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 44, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-800/30 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2 font-tech">Mechatronik-Jobs in deutschen <span className="text-sky-400">Staedten</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Finden Sie Mechatronik-Stellenangebote in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <NavLink
              key={city.slug}
              to={`/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-slate-800/60 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:shadow-md hover:shadow-sky-500/5 transition-all group"
            >
              <MapPin className="h-4 w-4 text-sky-500 flex-shrink-0 group-hover:text-sky-400" />
              <div className="min-w-0">
                <span className="font-semibold text-white text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-500">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-8 bg-slate-800/60 rounded-xl border border-slate-700 p-6">
          <h3 className="font-bold text-white mb-3">Mechatronik-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            Deutschland ist einer der fuehrenden Standorte fuer Mechatronik und Automatisierungstechnik weltweit. Von den Automobilzulieferern in Stuttgart und Muenchen ueber die Robotik-Zentren in Nuernberg und Augsburg bis hin zu den innovativen Startups in Berlin - jede Region bietet einzigartige Karrieremoeglichkeiten fuer Mechatroniker.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachkraefte in den Industriezentren Stuttgart, Muenchen, Hamburg und dem Ruhrgebiet. Aber auch Standorte wie Dresden, Hannover und Leipzig verzeichnen eine wachsende Nachfrage nach qualifizierten Mechatronikern, Automatisierungstechnikern und Robotik-Ingenieuren.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Ob Mechatroniker, SPS-Programmierer, Instandhaltungstechniker, Robotik-Ingenieur oder Systemintegrator - auf mechatronik-stellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Mechatronik-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
