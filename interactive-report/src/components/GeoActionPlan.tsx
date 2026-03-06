import { motion } from 'framer-motion';
import { geoActionPlan } from '../data/geoData';

export const GeoActionPlan = () => {
    return (
        <section className="bg-slate-800/20 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl backdrop-blur-sm relative overflow-hidden text-center sm:text-left">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sirona-blue/10 to-transparent pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 relative z-10">
                <div className="space-y-2">
                    <h2 className="text-3xl md:text-5xl font-bold">Priority Execution Roadmap</h2>
                    <p className="text-slate-400 text-lg">90-Day plan to dominate Generative Engine Optimization</p>
                </div>

                <div className="px-5 py-2.5 rounded-full bg-sirona-blue/20 border border-sirona-blue/30 text-sirona-cyan font-semibold text-sm">
                    Action Required
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {geoActionPlan.map((phase, idx) => {
                    const Icon = phase.icon;
                    const delay = idx * 0.2;

                    return (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay }}
                            className="bg-slate-900/60 rounded-2xl p-6 border border-white/5 relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-white/5 text-sirona-yellow">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
                            </div>

                            <ul className="space-y-4">
                                {phase.tasks.map((task, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300 items-start">
                                        <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-sirona-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="leading-snug">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
