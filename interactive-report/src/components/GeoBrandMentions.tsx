import { motion } from 'framer-motion';
import { brandMentions } from '../data/geoData';

export const GeoBrandMentions = () => {
    return (
        <section className="space-y-12 bg-slate-900/50 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Brand Signals & Mentions</h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        AI engines prioritize domains with strong signals on community forums and validation networks.
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-5xl font-black text-sirona-pink">0/10</div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mt-1">Authority Score</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {brandMentions.map((mention, idx) => {
                    const isCritical = mention.priority === 'CRITICAL';
                    const isHigh = mention.priority === 'HIGH';

                    return (
                        <motion.div
                            key={mention.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border transition-all duration-300 ${isCritical
                                    ? 'bg-sirona-pink/10 border-sirona-pink/30 hover:border-sirona-pink/60'
                                    : isHigh
                                        ? 'bg-sirona-yellow/10 border-sirona-yellow/30 hover:border-sirona-yellow/60'
                                        : 'bg-slate-800/40 border-white/5 hover:border-white/10'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-white">{mention.name}</h3>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${isCritical
                                        ? 'bg-sirona-pink/20 text-sirona-pink border-sirona-pink/30'
                                        : isHigh
                                            ? 'bg-sirona-yellow/20 text-sirona-yellow border-sirona-yellow/30'
                                            : 'bg-slate-800 text-slate-400 border-white/10'
                                    }`}>
                                    {mention.priority}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Status</div>
                                    <div className="text-slate-300 text-sm">{mention.presence}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">AI Signal Strength</div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${isCritical || isHigh ? 'bg-sirona-pink' : 'bg-sirona-blue'}`}
                                                style={{ width: `${(parseInt(mention.signal) / 10) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-bold text-white">{mention.signal}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
