"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Aurora */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse delay-1000 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-400 mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for Collaborations
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    Clement <span className="text-gray-600">Wibowo<br />Widhianto.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Data Scientist transforming complex datasets into
                    <span className="text-white font-medium"> intelligent insights</span> and
                    <span className="text-white font-medium"> actionable intelligence</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a href="#dash" className="group relative px-6 py-3 rounded-lg bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all">
                        View Dashboard
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="https://github.com/Clementcww" target="_blank" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white print:hidden">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/clementcww" target="_blank" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white print:hidden">
                        <Linkedin size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
