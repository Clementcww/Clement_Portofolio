"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';

type Cert = {
    title: string;
    issuer: string;
    context?: string;
    date: string;
    file: string;
    accent: 'blue' | 'purple';
};

const certs: Cert[] = [
    {
        title: 'Data Science BIZ',
        issuer: 'CertNexus',
        date: 'May 29, 2026',
        file: '/certnexus-data-science-biz.pdf',
        accent: 'blue',
    },
    {
        title: 'Finalis — Turnamen Sains Data Nasional 2024',
        issuer: 'Data Academy × Lembaga Sains Terapan',
        context: 'Kategori Mahasiswa · Tim Mental Care',
        date: 'Dec 16, 2024',
        file: '/tsdn-2024-finalis.pdf',
        accent: 'purple',
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Award className="text-blue-500" />
                        Certifications &amp; Awards
                    </h2>
                    <p className="text-gray-500 mt-2 font-mono text-sm">
                        Recognised credentials and competition results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certs.map((c, i) => {
                        const accentText = c.accent === 'blue' ? 'text-blue-400' : 'text-purple-400';
                        const accentBg = c.accent === 'blue' ? 'bg-blue-500/10' : 'bg-purple-500/10';
                        const accentBorder = c.accent === 'blue' ? 'group-hover:border-blue-500/30' : 'group-hover:border-purple-500/30';
                        const accentGlow = c.accent === 'blue' ? 'from-blue-500/10' : 'from-purple-500/10';

                        return (
                            <motion.a
                                key={c.title}
                                href={c.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] p-6 transition-colors hover:bg-[#0F0F0F] ${accentBorder}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${accentGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`p-2 rounded-lg ${accentBg} ${accentText}`}>
                                            <Award size={20} />
                                        </div>
                                        <ExternalLink size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                                    </div>

                                    <h3 className={`text-lg font-bold text-white mb-1 group-hover:${accentText} transition-colors`}>
                                        {c.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                                        <Building2 size={13} className="text-gray-500" />
                                        <span>{c.issuer}</span>
                                    </div>

                                    {c.context && (
                                        <p className="text-xs text-gray-500 mb-3 ml-[21px]">{c.context}</p>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-500">
                                        <Calendar size={12} />
                                        <span>{c.date}</span>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
