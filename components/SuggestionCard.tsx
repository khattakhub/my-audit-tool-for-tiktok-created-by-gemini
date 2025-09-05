
import React from 'react';
import type { Suggestion } from '../types';
import { LightBulbIcon } from './icons/LightBulbIcon';

interface SuggestionCardProps {
  suggestions: Suggestion[];
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestions }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md">
      <div className="flex items-center mb-6">
        <LightBulbIcon className="w-8 h-8 text-purple-400 mr-4" />
        <h3 className="text-2xl font-bold text-white">AI Growth Suggestions</h3>
      </div>
      <div className="space-y-4">
        {suggestions.map((item, index) => (
          <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
            <h4 className="font-semibold text-purple-300 text-lg">{item.title}</h4>
            <p className="text-slate-300 mt-2">{item.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
