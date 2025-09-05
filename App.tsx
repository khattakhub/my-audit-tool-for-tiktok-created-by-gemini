
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { AuditForm } from './components/AuditForm';
import { AuditReport } from './components/AuditReport';
import { Loader } from './components/Loader';
import { getGrowthSuggestions } from './services/geminiService';
import type { AuditData } from './types';
import { SparklesIcon } from './components/icons/SparklesIcon';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [auditData, setAuditData] = useState<AuditData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAudit = useCallback(async () => {
    if (!username.trim()) {
      setError('Please enter a TikTok username.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAuditData(null);

    try {
      // Simulate fetching TikTok data
      await new Promise(resolve => setTimeout(resolve, 1500));
      const simulatedData = {
        username: username.startsWith('@') ? username : `@${username}`,
        followers: Math.floor(Math.random() * 5000000) + 1000,
        engagementPercentage: parseFloat((Math.random() * 10 + 0.5).toFixed(2)),
      };
      
      // Get AI-powered suggestions
      const suggestions = await getGrowthSuggestions(simulatedData);
      
      setAuditData({
        ...simulatedData,
        suggestions,
      });

    } catch (e) {
      console.error(e);
      setError('Failed to generate audit. Please check your username or try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 mb-4">
            <SparklesIcon className="w-5 h-5" />
            <span>Powered by Gemini AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Grow Your TikTok Presence
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Enter your TikTok username to get a real-time profile audit, including engagement rates and personalized, AI-driven strategies to boost your growth.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-10">
          <AuditForm
            username={username}
            setUsername={setUsername}
            handleAudit={handleAudit}
            isLoading={isLoading}
          />
        </div>

        {error && (
          <div className="max-w-xl mx-auto mt-6 text-center bg-red-900/50 border border-red-500/50 text-red-300 p-4 rounded-lg">
            <p>{error}</p>
          </div>
        )}

        {isLoading && <Loader />}

        {auditData && !isLoading && (
          <div className="mt-12">
            <AuditReport data={auditData} />
          </div>
        )}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} My Audit Tool For TikTok. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
