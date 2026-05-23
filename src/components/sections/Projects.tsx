"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, Star, Activity, Terminal, ExternalLink, Hash, Globe, MousePointerClick } from 'lucide-react';
import { UlasInPreview } from '@/components/ui/UlasInPreview';
import { TaxiAnalyticsPreview } from '@/components/ui/TaxiAnalyticsPreview';
import { TopicModelerPreview } from '@/components/ui/TopicModelerPreview';
import { EmailSpamPreview } from '@/components/ui/EmailSpamPreview';
import { BandwidthPreview } from '@/components/ui/BandwidthPreview';
import { TableauSalesPreview } from '@/components/ui/TableauSalesPreview';
import { TableauQoLPreview } from '@/components/ui/TableauQoLPreview';

type Project = {
    id: number;
    title: string;
    desc: string;
    status: "Live" | "Research" | "Archived";
    lang: string;
    stars: number;
    forks: number;
    activity: string;
    link: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "ulas.in",
        desc: "Real-time sentiment analysis engine for marketplace reviews.",
        status: "Live",
        lang: "TypeScript / Python",
        stars: 842,
        forks: 121,
        activity: "High",
        link: "https://github.com/Clementcww/Ulas.in",
    },
    {
        id: 5,
        title: "Intl. Bandwidth Dashboard",
        desc: "Monitoring international value-added network traffic.",
        status: "Live",
        lang: "React / Go",
        stars: 42,
        forks: 8,
        activity: "High",
        link: "https://github.com/Clementcww/International_Bandwith_Dashboard",
    },
    {
        id: 4,
        title: "Email Spam Detection",
        desc: "Machine learning model to classify emails as spam or ham.",
        status: "Research",
        lang: "Python / TensorFlow",
        stars: 56,
        forks: 18,
        activity: "Medium",
        link: "https://github.com/Clementcww/Email_Spam",
    },
    {
        id: 2,
        title: "NYC Yellow Taxi Analytics",
        desc: "Optimizing urban transport routes using ML.",
        status: "Research",
        lang: "Python",
        stars: 124,
        forks: 32,
        activity: "Medium",
        link: "https://github.com/Clementcww/NYC_Yellow_Taxi",
    },
    {
        id: 3,
        title: "NLP Topic Modeler",
        desc: "LDA & BERTopic pipeline for Indonesian news corpus.",
        status: "Research",
        lang: "Jupyter",
        stars: 89,
        forks: 12,
        activity: "Low",
        link: "https://github.com/Clementcww/Indonesia_News",
    },
    {
        id: 6,
        title: "Sales & Customer Analytics",
        desc: "Tableau dashboard analyzing overall sales and customer segmentation.",
        status: "Live",
        lang: "Tableau",
        stars: 45,
        forks: 12,
        activity: "Medium",
        link: "https://www.linkedin.com/in/clementcww",
    },
    {
        id: 7,
        title: "Global Quality of Life",
        desc: "Interactive Tableau visualization exploring QoL metrics across countries.",
        status: "Research",
        lang: "Tableau",
        stars: 30,
        forks: 5,
        activity: "Low",
        link: "https://www.linkedin.com/in/clementcww",
    }
];

const StatusBadge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
        Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        Research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        Archived: "bg-gray-500/10 text-gray-400 border-gray-500/20"
    };
    return (
        <span className={`px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold border ${colors[status]} flex items-center gap-1`}>
            {status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
            {status}
        </span>
    );
};

export function Projects() {
    const [activeId, setActiveId] = useState<number | null>(1); // Default to ulas.in

    const renderPreview = (id: number) => {
        switch (id) {
            case 1: return <UlasInPreview />;
            case 2: return <TaxiAnalyticsPreview />;
            case 3: return <TopicModelerPreview />;
            case 4: return <EmailSpamPreview />;
            case 5: return <BandwidthPreview />;
            case 6: return <TableauSalesPreview />;
            case 7: return <TableauQoLPreview />;
            default: return null;
        }
    };

    return (
        <section id="dash" className="min-h-screen py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Activity className="text-blue-500" />
                            Mission Control
                        </h2>
                        <p className="text-gray-500 mt-2 font-mono text-sm">Reviewing active deployments and research nodes.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    <AnimatePresence mode="popLayout">
                        {projects.map((p) => {
                            const isActive = activeId === p.id;

                            if (isActive) {
                                return (
                                    <motion.div
                                        layout
                                        key={p.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-[#0A0A0A] border rounded-xl p-6 transition-all group relative overflow-hidden border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)] md:col-span-2 lg:col-span-3 order-first"
                                    >
                                        <div className="absolute inset-0 bg-blue-500/5 z-0" />

                                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 transition-colors">
                                                        <Globe size={20} />
                                                    </div>
                                                    <StatusBadge status={p.status} />
                                                </div>
                                                <h3 className="text-3xl font-bold mb-4 text-white flex items-center gap-3">
                                                    {p.title}
                                                    {/* Clicking the link stops propagation so it doesn't just re-trigger the card click (though card click is fine here) */}
                                                    <a
                                                        href={p.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-gray-500 hover:text-blue-400 transition-colors"
                                                    >
                                                        <ExternalLink size={24} />
                                                    </a>
                                                </h3>
                                                <p className="text-gray-400 text-lg mb-8">{p.desc}</p>

                                                <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
                                                    <span className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                                        {p.lang}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Star size={14} /> {p.stars}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <GitFork size={14} /> {p.forks}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Dynamic UI Preview */}
                                            <div className="transform transition-transform hover:scale-[1.02] duration-500">
                                                {renderPreview(p.id)}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            }

                            // Inactive Cards
                            return (
                                <motion.div
                                    layout
                                    key={p.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => setActiveId(p.id)}
                                    className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all hover:bg-[#0F0F0F] group cursor-pointer relative"
                                >
                                    {/* Click Hint */}
                                    <div className="absolute top-4 right-4 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                        <MousePointerClick size={12} /> Expand
                                    </div>

                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-blue-300 transition-colors">
                                            <Terminal size={20} />
                                        </div>
                                        <StatusBadge status={p.status} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                                        {p.title}
                                        {/* Added Link Button to Inactive Cards too */}
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6 h-10 line-clamp-2">{p.desc}</p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                                            <div className={`w-2 h-2 rounded-full ${p.lang.includes("Python") ? "bg-yellow-400" : "bg-blue-400"}`}></div>
                                            {p.lang}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    <motion.div
                        layout
                        className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-colors min-h-[250px]"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-gray-400">
                            <Hash />
                        </div>
                        <h3 className="font-bold text-gray-300">View All Repositories</h3>
                        <p className="text-xs text-gray-500 mt-2">Check Github for more</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
