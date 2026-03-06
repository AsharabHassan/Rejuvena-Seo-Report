import { auditData } from './data/auditData';
import { useState } from 'react';
import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { CategoryDrilldowns } from './components/CategoryDrilldowns';
import { LocalInsights } from './components/LocalInsights';
import { Footer } from './components/Footer';
import { geoScores } from './data/geoData';
import { GeoHero } from './components/GeoHero';
import { GeoPlatforms } from './components/GeoPlatforms';
import { GeoBrandMentions } from './components/GeoBrandMentions';
import { GeoActionPlan } from './components/GeoActionPlan';

function App() {
    const [activeTab, setActiveTab] = useState<'seo' | 'geo'>('seo');

    return (
        <div className="min-h-screen relative overflow-hidden text-slate-100 font-sans selection:bg-sirona-pink/30">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sirona-blue opacity-50 blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sirona-pink opacity-10 blur-[150px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-sirona-cyan opacity-10 blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <header className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-3">
                        {/* Minimal SVG Logo representation */}
                        <div className="flex gap-1">
                            <div className="w-4 h-4 rounded-sm bg-sirona-cyan"></div>
                            <div className="w-4 h-4 rounded-sm bg-sirona-pink"></div>
                            <div className="w-4 h-4 rounded-sm bg-sirona-yellow"></div>
                        </div>
                        <span className="text-xl font-black tracking-widest uppercase">Sirona</span>
                    </div>
                    <div className="text-sm font-medium text-slate-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                        Audit Date: {auditData.date}
                    </div>
                </header>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 relative z-10 w-full px-4">
                    <div className="flex bg-slate-800/50 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-2xl">
                        <button
                            onClick={() => setActiveTab('seo')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'seo'
                                ? 'bg-blue-600/80 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            Standard SEO Audit
                        </button>
                        <button
                            onClick={() => setActiveTab('geo')}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'geo'
                                ? 'bg-pink-600/80 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            GEO & AI Search Readiness
                        </button>
                    </div>
                </div>

                <main className="space-y-24">
                    {activeTab === 'seo' ? (
                        <>
                            <Hero score={auditData.overallScore} client={auditData.client} />
                            <ExecutiveSummary topIssues={auditData.topIssues} topWins={auditData.topWins} />
                            <CategoryDrilldowns categories={auditData.categories} />
                            <LocalInsights />
                        </>
                    ) : (
                        <>
                            <GeoHero score={geoScores.overall.score} />
                            <GeoPlatforms />
                            <GeoBrandMentions />
                            <GeoActionPlan />
                        </>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default App;
