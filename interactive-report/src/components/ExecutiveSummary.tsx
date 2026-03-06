import { motion } from 'framer-motion';
import { AlertOctagon, CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';

export const ExecutiveSummary = ({ topIssues, topWins }: { topIssues: string[], topWins: string[] }) => {
    return (
        <section className="w-full py-12">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Executive Summary
                </h2>
                <p className="text-slate-400 mt-2">The highest-impact action items for immediate growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Critical Issues */}
                <motion.div
                    className="glass-card p-8 border-t-4 border-t-red-500/80 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingDown size={100} />
                    </div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <AlertOctagon className="text-red-400" size={28} />
                        <h3 className="text-2xl font-semibold text-white">Critical Issues</h3>
                    </div>
                    <ul className="space-y-4 relative z-10">
                        {topIssues.map((issue, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-3 bg-red-950/20 p-4 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </span>
                                <span className="text-slate-300">{issue}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Quick Wins */}
                <motion.div
                    className="glass-card p-8 border-t-4 border-t-sirona-cyan/80 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingUp size={100} />
                    </div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <CheckCircle2 className="text-sirona-cyan" size={28} />
                        <h3 className="text-2xl font-semibold text-white">Quick Wins</h3>
                    </div>
                    <ul className="space-y-4 relative z-10">
                        {topWins.map((win, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-3 bg-sirona-cyan/10 p-4 rounded-lg border border-sirona-cyan/10 hover:border-sirona-cyan/30 transition-colors"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sirona-cyan/20 text-sirona-cyan flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </span>
                                <span className="text-slate-300">{win}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};
