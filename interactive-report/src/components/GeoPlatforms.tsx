import { motion } from 'framer-motion';
import { aiPlatforms } from '../data/geoData';

export const GeoPlatforms = () => {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">Platform Breakdown</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Current AI Discovery Engine Visibility vs. Competitors
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {aiPlatforms.map((platform, idx) => {
                    const Icon = platform.icon;
                    const delay = idx * 0.15;

                    return (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay }}
                            className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden flex flex-col"
                        >
                            {/* Decorative gradient glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-sirona-pink opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-slate-900/50 flex items-center justify-center border border-white/5 shrink-0">
                                    <Icon className="w-6 h-6 text-sirona-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{platform.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-sirona-yellow">
                                            Score: {platform.score}/100
                                        </span>
                                        <span className="text-xs text-sirona-pink uppercase tracking-wider font-bold">
                                            {platform.score <= 30 ? 'Poor' : 'Fair'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900/40 rounded-xl p-4 mb-6 border border-white/5 flex-grow">
                                <p className="text-sm text-slate-300 font-medium">
                                    {platform.status}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Why you aren't ranking:</h4>
                                <ul className="space-y-3">
                                    {platform.misses.map((miss, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed items-start">
                                            <span className="text-sirona-pink/60 mt-0.5 shrink-0">✕</span>
                                            <span>{miss}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
