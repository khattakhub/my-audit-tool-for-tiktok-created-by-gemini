
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-400">Analyzing Profile & Generating Insights...</p>
    </div>
  );
};
