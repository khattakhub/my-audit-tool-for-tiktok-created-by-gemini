
import React from 'react';

interface AuditFormProps {
  username: string;
  setUsername: (username: string) => void;
  handleAudit: () => void;
  isLoading: boolean;
}

export const AuditForm: React.FC<AuditFormProps> = ({ username, setUsername, handleAudit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAudit();
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-slate-800/50 p-2 rounded-lg border border-slate-700 shadow-lg">
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">@</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="yourtiktokusername"
          className="w-full bg-transparent pl-8 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto flex-shrink-0 bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300 disabled:bg-purple-800 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        {isLoading ? 'Auditing...' : 'Audit Profile'}
      </button>
    </form>
  );
};
