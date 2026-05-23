"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Let's Connect
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Ready to collaborate on turning your data into actionable intelligence? Feel free to reach out.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 pt-8">
                        <a 
                            href="mailto:clementcww1@gmail.com"
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-4 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div className="text-center">
                                <div className="text-sm text-gray-500 mb-1">Email</div>
                                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">clementcww1@gmail.com</div>
                            </div>
                        </a>

                        <a 
                            href="https://wa.me/6281212983330"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-4 rounded-full bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div className="text-center">
                                <div className="text-sm text-gray-500 mb-1">Phone / WhatsApp</div>
                                <div className="text-white font-medium group-hover:text-purple-400 transition-colors">0812-1298-3330</div>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/10 blur-[100px] pointer-events-none" />
        </section>
    );
}
