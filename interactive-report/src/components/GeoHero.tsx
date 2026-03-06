import { motion } from 'framer-motion';
import { Target, AlertOctagon } from 'lucide-react';

interface GeoHeroProps {
    score: number;
}

export const GeoHero = ({ score }: GeoHeroProps) => {
    const getScoreColor = (value: number) => {
        if (value >= 80) return 'text-green-400 stroke-green-400';
        if (value >= 50) return 'text-sirona-yellow stroke-sirona-yellow';
        return 'text-sirona-pink stroke-sirona-pink';
    };

    const scoreColor = getScoreColor(score);
    const circumference = 2 * Math.PI * 120; // radius is 120
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-800/20 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl backdrop-blur-sm">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sirona-pink/10 border border-sirona-pink/20 text-sirona-pink text-sm font-medium">
                    <Target className="w-4 h-4" />
                    <span>Generative Engine Optimization</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    AI Search <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sirona-pink via-sirona-cyan to-sirona-blue">Readiness</span>
                </h1>

                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                    The site is currently poorly optimized for emerging AI search engines (Google AI Overviews, ChatGPT Search, Perplexity). Content is highly promotional, lacks required verifiable medical citations, and suffers from zero brand footprint across AI-favored community platforms like Reddit and YouTube.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 py-2 px-4 rounded-full border border-white/5">
                        <AlertOctagon className="w-4 h-4 text-sirona-pink" /> Critical Miss: YouTube
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 py-2 px-4 rounded-full border border-white/5">
                        <AlertOctagon className="w-4 h-4 text-sirona-pink" /> Critical Miss: Reddit
                    </div>
                </div>
            </div>

            {/* Animated Dial */}
            <div className="relative w-72 h-72 flex-shrink-0">
                <div className="absolute inset-0 bg-slate-900 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"></div>
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="144"
                        cy="144"
                        r="120"
                        className="stroke-slate-800"
                        strokeWidth="16"
                        fill="none"
                    />
                    <motion.circle
                        cx="144"
                        cy="144"
                        r="120"
                        className={scoreColor}
                        strokeWidth="16"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        style={{ strokeDasharray: circumference }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">GEO Score</span>
                    <motion.span
                        className="text-6xl font-black text-white"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        {score}
                    </motion.span>
                    <span className={`text-sm font-medium mt-2 ${scoreColor.split(' ')[0]}`}>
                        High Risk
                    </span>
                </div>
            </div>
        </div>
    );
};
