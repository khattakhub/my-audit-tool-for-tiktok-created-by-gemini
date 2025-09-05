
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/60 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-wider">
            My Audit Tool For TikTok
          </span>
        </div>
      </div>
    </header>
  );
};
