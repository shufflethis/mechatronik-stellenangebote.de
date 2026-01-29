
import React from 'react';
import { MapPin, Cog, Cpu, ChevronRight } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="mechatronik-card p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 cursor-pointer group accent-border">
      <div className="w-20 h-20 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center border border-slate-700 overflow-hidden">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-1 font-tech">
              {job.title}
            </h3>
            <p className="text-slate-400 font-semibold text-sm">
              {job.company}
            </p>
          </div>
          <div className="text-sky-400 font-bold text-lg">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm font-medium text-slate-500 mb-4">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-sky-500" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Cog size={16} className="text-sky-500" />
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['SPS', 'Siemens TIA', 'Robotik'].map(tag => (
            <span key={tag} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-slate-700 flex items-center gap-1">
              <Cpu size={10} className="text-sky-500" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform">
        <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-500 flex items-center justify-center group-hover:text-sky-400 group-hover:bg-slate-700 transition-all">
          <ChevronRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
