import { motion } from 'framer-motion';
import { MapPin, Target, ShieldCheck, XCircle } from 'lucide-react';

export const LocalInsights = () => {
    return (
        <section className="w-full py-12">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Local SEO & Competitor Insights
                </h2>
                <p className="text-slate-400 mt-2">Positioning against Bedford clinics and localized search potential.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Local NAP Consistency */}
                <motion.div
                    className="glass-card p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-sirona-yellow" size={28} />
                        <h3 className="text-2xl font-semibold text-white">Local Authority (NAP)</h3>
                    </div>

                    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10 font-semibold text-sm text-slate-300">
                            <div>Element</div>
                            <div>Website UI</div>
                            <div>Schema Data</div>
                        </div>

                        <div className="grid grid-cols-3 p-4 border-b border-white/5 text-sm items-center">
                            <div className="text-slate-400 font-medium">Name</div>
                            <div className="text-red-400 flex items-center gap-1"><XCircle size={14} /> Rejuvena Laser & Aesthetic Clinic</div>
                            <div className="text-red-400 flex items-center gap-1"><XCircle size={14} /> Rejuvena Laser & Aesthetics Clinic</div>
                        </div>

                        <div className="grid grid-cols-3 p-4 border-b border-white/5 text-sm items-center bg-white/[0.02]">
                            <div className="text-slate-400 font-medium">Address</div>
                            <div className="text-sirona-cyan flex items-center gap-1"><ShieldCheck size={14} /> 52 Thor Dr, Bedford</div>
                            <div className="text-red-400 flex items-center gap-1"><XCircle size={14} /> Missing entirely</div>
                        </div>

                        <div className="grid grid-cols-3 p-4 text-sm items-center">
                            <div className="text-slate-400 font-medium">Hours</div>
                            <div className="text-red-400 flex items-center gap-1"><XCircle size={14} /> Mon-Fri 10am-8pm</div>
                            <div className="text-red-400 flex items-center gap-1"><XCircle size={14} /> Mon-Sun 09:00-17:00</div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 rounded-lg bg-red-950/20 border border-red-500/20 text-sm text-slate-300">
                        <strong className="text-red-400 block mb-1">Critical Insight:</strong>
                        Google relies on NAP (Name, Address, Phone) consistency across your site and the web to rank you in local Map packs. Misaligned data actively hurts map rankings in Bedford.
                    </div>
                </motion.div>

                {/* Competitor Positioning */}
                <motion.div
                    className="glass-card p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="text-sirona-cyan" size={28} />
                        <h3 className="text-2xl font-semibold text-white">Competitive Position</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-bold text-sirona-cyan uppercase tracking-wider mb-3">Strong USPs (Leverage These)</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sirona-cyan"></span>
                                    Doctor-led with named GMC-registered physician
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sirona-cyan"></span>
                                    4.9/5 average from 129 Google reviews
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sirona-cyan"></span>
                                    "Only clinic in Bedford with Optima's Max laser"
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">Competitive Weaknesses (Fix These)</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                    No visible pricing (competitors showing prices capture more intent)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                    Extremely thin blog (9 posts vs 50-100+ for competitors)
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                    Missing "results guarantee" or comparison pages
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
