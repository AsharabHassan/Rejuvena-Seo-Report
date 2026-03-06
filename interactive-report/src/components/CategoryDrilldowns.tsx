import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Search, Code2, Zap, Bot, Database, Image,
    ChevronDown, ArrowRight, CheckCircle2, AlertOctagon, Wrench
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
    FileText, Search, Code2, Zap, Bot, Database, Image
};

export const CategoryDrilldowns = ({ categories }: { categories: any[] }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-12">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Detailed Analysis
                </h2>
                <p className="text-slate-400 mt-2">Deep dive into the 7 core pillars of SEO health.</p>
            </div>

            <div className="space-y-4">
                {categories.map((category, index) => {
                    const Icon = iconMap[category.icon] || Code2;
                    const isExpanded = expandedIndex === index;

                    return (
                        <motion.div
                            key={category.name}
                            className={`glass-card overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-1 ring-white/20' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10" style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                        <div className="text-sm text-slate-400 flex flex-wrap gap-2 mt-1">
                                            <span>Weight: {category.weight}</span>
                                            <span className="text-slate-600 px-2">•</span>
                                            <span>Impact Area</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 md:ml-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: category.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${category.score}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                        <span className="font-mono text-lg font-bold min-w-[3ch]">{category.score}</span>
                                    </div>
                                    <ChevronDown className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-0 border-t border-white/5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 font-semibold text-sirona-cyan">
                                                        <CheckCircle2 size={18} /> What's Working Well
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {category.details.good.map((item: string, i: number) => (
                                                            item ? (
                                                                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                                                    <ArrowRight size={14} className="mt-1 flex-shrink-0 text-sirona-cyan/50" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ) : null
                                                        ))}
                                                        {(!category.details.good || category.details.good.filter(Boolean).length === 0) && (
                                                            <li className="text-slate-500 text-sm italic">Nothing significant found.</li>
                                                        )}
                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="flex items-center gap-2 font-semibold text-red-400">
                                                        <AlertOctagon size={18} /> Needs Improvement
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {category.details.bad.map((item: string, i: number) => (
                                                            item ? (
                                                                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                                                    <ArrowRight size={14} className="mt-1 flex-shrink-0 text-red-400/50" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ) : null
                                                        ))}
                                                    </ul>
                                                </div>

                                            </div>

                                            <div className="mt-6 bg-sirona-blue/40 border border-sirona-blue p-4 rounded-xl">
                                                <h4 className="flex items-center gap-2 font-semibold text-white mb-2">
                                                    <Wrench size={18} className="text-sirona-yellow" /> Recommended Fix
                                                </h4>
                                                <p className="text-slate-300 text-sm">{category.details.fix}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
