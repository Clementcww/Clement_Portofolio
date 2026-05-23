"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/profile.jpg"
                                alt="Clement Wibowo Widhianto"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                About Me
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 rounded-full" />
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 text-white/5 transform -scale-x-100" size={64} />
                            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                                I'm a <span className="text-white font-medium">Data Science visionary</span> studying at Universitas Bunda Mulia, dedicated to breathing life into dormant datasets. I thrive in the intersection of analytics and artistry, weaving complex numbers into compelling narratives.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed relative z-10 mt-6">
                                My philosophy revolves around <span className="text-blue-400">digital alchemy</span>—transforming raw, chaotic information into polished, actionable intelligence. I build dynamic models that don't just predict trends, but empower innovative solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-white mb-1">Data Science</div>
                                <div className="text-xs text-gray-500">Major at UBM</div>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-white mb-1">Machine Learning</div>
                                <div className="text-xs text-gray-500">Core Expertise</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
