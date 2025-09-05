
import React from 'react';
import type { AuditData } from '../types';
import { StatCard } from './StatCard';
import { SuggestionCard } from './SuggestionCard';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface AuditReportProps {
  data: AuditData;
}

export const AuditReport: React.FC<AuditReportProps> = ({ data }) => {
  const handleDownloadClick = () => {
    alert('PDF Download is a Pro feature! Please upgrade to unlock.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
        <h2 className="text-3xl font-bold text-white">Audit Report for <span className="text-purple-400">{data.username}</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Followers"
          value={data.followers.toLocaleString()}
          icon={<UserGroupIcon className="w-8 h-8 text-purple-400" />}
          description="Your current follower count."
        />
        <StatCard
          title="Engagement Rate"
          value={`${data.engagementPercentage}%`}
          icon={<ChartBarIcon className="w-8 h-8 text-purple-400" />}
          description="Average interactions per post."
        />
      </div>

      <SuggestionCard suggestions={data.suggestions} />
      
      <div className="text-center">
         <button 
           onClick={handleDownloadClick}
           className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:from-pink-600 hover:to-purple-700"
         >
           <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
           <span className="absolute z-10 inline-flex items-center">
             <DownloadIcon className="w-5 h-5 mr-2" />
             Download PDF Report
           </span>
           <span className="absolute -top-1 -right-1 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
             PRO
           </span>
         </button>
      </div>
    </div>
  );
};
