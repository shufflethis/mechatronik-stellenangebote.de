// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';
import { Cpu, Settings, Zap, ChevronDown, HelpCircle, Briefcase } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedAt: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '6',
    title: 'Qualitätsmanager (m/w/d) Mechatronik',
    company: 'Neumüller Personalberatung Regina Neumüller e.K.',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Qualitätsmanager (m/w/d) Mechatronik',
    postedAt: '2026-03-13'
  },
  {
    id: '7',
    title: 'Versuchsingenieur (m/w/d) Mechatronik / Fahrzeugtechnik',
    company: 'FERCHAU GmbH Niederlassung Kiel',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Versuchsingenieur (m/w/d) Mechatronik / Fahrzeugtechnik',
    postedAt: '2026-03-13'
  },
  {
    id: '8',
    title: 'Maschinenbauingenieur Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Kiel',
    location: 'Flensburg',
    type: 'Vollzeit',
    description: 'Maschinenbauingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-13'
  },
  {
    id: '9',
    title: 'Konstruktionsingenieur Mechatronik (m/w/d)',
    company: 'Suzlon Energy Ltd. Rostock',
    location: 'Rostock',
    type: 'Vollzeit',
    description: 'Konstruktionsingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '10',
    title: 'Ingenieure (m/w/d) Mechatronik',
    company: 'Oehmichen & Bürgers Industrieplanung GmbH',
    location: 'Bocholt',
    type: 'Vollzeit',
    description: 'Ingenieure (m/w/d) Mechatronik',
    postedAt: '2026-03-11'
  },
  {
    id: '11',
    title: 'Mechatronik (m/w/d)',
    company: 'Ottobock SE & Co. KGaG',
    location: 'Duderstadt, Niedersachsen',
    type: 'Vollzeit',
    description: 'Mechatronik (m/w/d)',
    postedAt: '2026-03-11'
  },
  {
    id: '12',
    title: 'Ingenieur (m/w/d) Elektrotechnik/ Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Saarbrücken',
    location: 'Zweibrücken, Pfalz',
    type: 'Vollzeit',
    description: 'Ingenieur (m/w/d) Elektrotechnik/ Mechatronik',
    postedAt: '2026-03-10'
  },
  {
    id: '13',
    title: 'Industriemeister/in - Mechatronik (m/w/d)',
    company: 'Wittker + Partners GmbH Krefeld',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Industriemeister/in - Mechatronik (m/w/d)',
    postedAt: '2026-03-09'
  },
  {
    id: '14',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '15',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '16',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '17',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '18',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '19',
    title: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    company: 'Andrea Erler Personalberatung',
    location: 'Straubing',
    type: 'Vollzeit',
    description: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '20',
    title: 'Mechatroniker (m/w/d)',
    company: 'Manpowergroup Deutschland GmbH & Co. KG',
    location: 'Melle, Wiehengeb',
    type: 'Vollzeit',
    description: 'Mechatroniker (m/w/d)',
    postedAt: '2026-03-07'
  },
  {
    id: '21',
    title: 'Serviceassistent (m/w/d) Mechatronik',
    company: 'iw projekt GmbH',
    location: 'Groß-Gerau',
    type: 'Vollzeit',
    description: 'Serviceassistent (m/w/d) Mechatronik',
    postedAt: '2026-03-06'
  },
  {
    id: '22',
    title: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    company: 'EVOMOTIV GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Entwicklungsingenieur Mechatronik (m/w/d)',
    postedAt: '2026-03-05'
  },
  {
    id: '23',
    title: 'Industriemeister/in - Elektrotechnik oder Mechatronik',
    company: 'workflat Personalservice GmbH',
    location: 'Leverkusen',
    type: 'Vollzeit',
    description: 'Industriemeister/in - Elektrotechnik oder Mechatronik',
    postedAt: '2026-03-03'
  },
  {
    id: '24',
    title: 'Produktentwickler Mechatronik (m/w/d)',
    company: 'FERCHAU GmbH Niederlassung Rosenheim',
    location: 'Tittmoning',
    type: 'Vollzeit',
    description: 'Produktentwickler Mechatronik (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '25',
    title: 'Systemingenieur (m/w/d) für Optronik & Mechatronik',
    company: 'FERCHAU GmbH Niederlassung Giessen',
    location: 'Wetzlar',
    type: 'Vollzeit',
    description: 'Systemingenieur (m/w/d) für Optronik & Mechatronik',
    postedAt: '2026-03-03'
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
            <aside className="w-full lg:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
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
        {/* German Cities Geo SEO Section */}
        <GermanCitiesGeo />

        {/* FAQ Section */}
        <section className="py-16 border-t border-slate-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-sky-400 text-sm font-bold mb-4">
                <HelpCircle size={14} />
                Haeufig gestellte Fragen
              </div>
              <h2 className="text-3xl font-bold text-white font-tech">FAQ - Mechatronik <span className="text-sky-400">Karriere</span></h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'Was verdient ein Mechatroniker in Deutschland?',
                  a: 'Das durchschnittliche Gehalt eines Mechatronikers liegt in Deutschland zwischen 35.000 und 55.000 Euro brutto jaehrlich, je nach Berufserfahrung, Qualifikation und Region. In der Automobilindustrie und bei grossen Industrieunternehmen sind hoehere Gehaelter ueblich. Mit Spezialisierungen in SPS-Programmierung oder Robotik koennen Gehaelter ueber 60.000 Euro erreicht werden.'
                },
                {
                  q: 'Welche Qualifikationen braucht man als Mechatroniker?',
                  a: 'Eine abgeschlossene Ausbildung zum Mechatroniker (3,5 Jahre) ist der klassische Einstieg. Alternativ qualifiziert ein Studium der Mechatronik, Elektrotechnik oder des Maschinenbaus. Gefragte Zusatzqualifikationen sind SPS-Programmierung (Siemens TIA Portal, STEP 7), Robotik-Kenntnisse (KUKA, ABB, Fanuc), Hydraulik/Pneumatik und Kenntnisse in Industrie 4.0.'
                },
                {
                  q: 'Wie finde ich Mechatronik-Stellenangebote in meiner Naehe?',
                  a: 'Auf mechatronik-stellenangebote.de koennen Sie gezielt nach Mechatronik-Jobs in Ihrer Stadt oder Region suchen. Nutzen Sie den Standortfilter in der Suchleiste oder durchsuchen Sie unsere Staedteseiten fuer Grossstaedte wie Berlin, Muenchen, Stuttgart, Hamburg und viele weitere.'
                },
                {
                  q: 'Welche Branchen suchen Mechatroniker?',
                  a: 'Mechatroniker werden in vielen Branchen gesucht: Automobilindustrie, Maschinenbau, Anlagenbau, Luft- und Raumfahrt, Medizintechnik, Lebensmittelindustrie und Energietechnik. Besonders stark waechst die Nachfrage in der Robotik, Automatisierungstechnik und im Bereich erneuerbare Energien.'
                },
                {
                  q: 'Ist mechatronik-stellenangebote.de kostenlos fuer Bewerber?',
                  a: 'Ja, die Nutzung von mechatronik-stellenangebote.de ist fuer Bewerber vollstaendig kostenlos. Sie koennen alle Stellenangebote durchsuchen und sich direkt auf die Jobs bewerben, ohne dass Ihnen Kosten entstehen.'
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-white text-base pr-4">{faq.q}</span>
                    <ChevronDown size={20} className="text-sky-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Karriere-Info Section */}
        <section className="py-16 bg-slate-800/30 border-t border-slate-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-sky-400 text-sm font-bold mb-4">
                <Briefcase size={14} />
                Karriere-Ratgeber
              </div>
              <h2 className="text-3xl font-bold text-white font-tech">Karriere in der <span className="text-sky-400">Mechatronik</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6">
                <h3 className="font-bold text-white text-lg mb-3">Berufsbild Mechatroniker</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Mechatroniker vereinen Mechanik, Elektronik und Informatik in einem Beruf. Sie montieren, programmieren und warten komplexe mechatronische Systeme - von Produktionsanlagen ueber Roboter bis hin zu modernen Fahrzeugsystemen. Der Beruf bietet hervorragende Zukunftsaussichten durch die fortschreitende Automatisierung und Industrie 4.0.
                </p>
              </div>
              <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6">
                <h3 className="font-bold text-white text-lg mb-3">Weiterbildungsmoeglichkeiten</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nach der Ausbildung stehen zahlreiche Weiterbildungswege offen: Der Industriemeister Mechatronik, der Techniker fuer Mechatronik, ein Studium der Mechatronik oder Spezialisierungen in SPS-Programmierung, Robotik oder Automatisierungstechnik. Jeder Karriereschritt eroeffnet neue Gehalts- und Verantwortungsperspektiven.
                </p>
              </div>
              <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6">
                <h3 className="font-bold text-white text-lg mb-3">Arbeitsmarkt & Zukunft</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Der Arbeitsmarkt fuer Mechatroniker ist hervorragend. Die Nachfrage nach Fachkraeften uebersteigt das Angebot bei weitem. Besonders gefragt sind Spezialisten fuer Robotik, Automatisierung und intelligente Produktionssysteme. Die Industrie 4.0 und die digitale Transformation schaffen laufend neue Berufsfelder.
                </p>
              </div>
              <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6">
                <h3 className="font-bold text-white text-lg mb-3">Bewerbungstipps</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ein ueberzeugender Lebenslauf fuer Mechatroniker sollte technische Qualifikationen klar hervorheben: SPS-Kenntnisse, Programmiererfahrung, Zertifikate und Projektbeispiele. Betonen Sie praktische Erfahrungen mit konkreten Systemen (z.B. Siemens, KUKA, ABB) und beschreiben Sie Ihre Problemloesungskompetenz anhand realer Projekte.
                </p>
              </div>
            </div>
          </div>
        </section>
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
