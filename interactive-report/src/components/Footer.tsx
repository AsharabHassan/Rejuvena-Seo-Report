import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <motion.footer
            className="w-full py-16 mt-12 border-t border-white/10 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sirona-blue/50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready to dominate <br />
                    <span className="bg-gradient-to-r from-sirona-cyan via-sirona-pink to-sirona-yellow bg-clip-text text-transparent">
                        search in Bedford?
                    </span>
                </h2>

                <p className="text-slate-400 text-lg">
                    The Sirona Aesthetics growth team has prepared a 90-day execution roadmap based on these findings. Let's fix the critical errors and capture your local market.
                </p>

                <div className="pt-6 flex flex-col gap-4 items-center w-full">
                    <a href="https://link.sironaaesthetics.co.uk/widget/bookings/free-20-mint-online-consultation" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-sirona-pink to-sirona-cyan text-white font-bold tracking-wide hover:scale-105 transition-transform flex flex-row items-center justify-center gap-3 shadow-[0_0_30px_rgba(229,44,113,0.3)] text-xs sm:text-sm text-center max-w-[90vw] leading-relaxed">
                        <span>LET'S DISCUSS THE PROPER EXECUTION PLAN WITH REAL-TIME LEAD PROJECTION IN OUR NEXT MEETING</span>
                        <ArrowRight size={20} className="shrink-0 hidden sm:block" />
                    </a>

                    <a href="https://sironaaesthetics.co.uk/contact" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm">
                        <Mail size={18} /> Contact Team
                    </a>
                </div>

                <div className="mt-16 pt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                    <span>Prepared by</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-sirona-cyan"></div>
                        <div className="w-3 h-3 rounded-sm bg-sirona-pink"></div>
                        <div className="w-3 h-3 rounded-sm bg-sirona-yellow"></div>
                    </div>
                    <span className="font-bold tracking-widest uppercase text-slate-400">Sirona</span>
                </div>
            </div>
        </motion.footer>
    );
};
