
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, description }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 bg-slate-700/50 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
        <p className="text-xs text-slate-500 mt-2">{description}</p>
      </div>
    </div>
  );
};
