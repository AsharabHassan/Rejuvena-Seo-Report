import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Target, Zap } from 'lucide-react';

export const Hero = ({ score, client }: { score: number, client: string }) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sirona-blue/50 border border-sirona-cyan/30 text-sirona-cyan text-sm font-medium tracking-wide">
                    <Activity size={16} />
                    <span>Interactive Audit Report</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-white">SEO Health </span>
                    <br />
                    <span className="bg-gradient-to-r from-sirona-cyan via-sirona-pink to-sirona-yellow bg-clip-text text-transparent">
                        Analysis
                    </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-lg font-light border-l-4 border-sirona-pink pl-6">
                    Prepared exclusively for <strong className="text-white">{client}</strong> by the growth experts at <strong className="text-sirona-cyan">Sirona Aesthetics</strong>.
                </p>

                <div className="flex gap-4 pt-4">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Target className="text-sirona-yellow" size={20} />
                        <span>Data-Driven</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        <Zap className="text-sirona-pink" size={20} />
                        <span>Actionable</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        <ShieldCheck className="text-sirona-cyan" size={20} />
                        <span>Secure</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative w-72 h-72 rounded-full glass-card flex items-center justify-center p-8 border-sirona-cyan/30 shadow-[0_0_60px_rgba(229,44,113,0.15)] group">
                    <div className="absolute inset-2 border-2 border-dashed border-slate-600 rounded-full animate-[spin_20s_linear_infinite]" />
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                        <circle
                            className="text-slate-800"
                            strokeWidth="8"
                            stroke="currentColor"
                            fill="transparent"
                            r="130"
                            cx="144"
                            cy="144"
                        />
                        <motion.circle
                            className="text-sirona-pink"
                            strokeWidth="8"
                            strokeDasharray={130 * 2 * Math.PI}
                            strokeDashoffset={130 * 2 * Math.PI * (1 - score / 100)}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="130"
                            cx="144"
                            cy="144"
                            initial={{ strokeDashoffset: 130 * 2 * Math.PI }}
                            animate={{ strokeDashoffset: 130 * 2 * Math.PI * (1 - score / 100) }}
                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        />
                    </svg>
                    <div className="text-center z-10 transition-transform duration-300 group-hover:scale-110">
                        <span className="block text-sm uppercase tracking-widest text-slate-400 mb-2">Final Score</span>
                        <span className="block text-7xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                            {score}
                        </span>
                        <span className="block text-sirona-cyan mt-2 font-medium">Needs Attention</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
