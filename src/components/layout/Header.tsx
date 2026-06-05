"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, User, Code, Mail, Award } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home', icon: User },
    { name: 'Dashboard', href: '#dash', icon: GitBranch },
    { name: 'About', href: '#about', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 top-0 transition-all duration-300 flex justify-center py-6`}
        >
            <nav className={`
            flex items-center gap-1 px-2 py-2 rounded-full
            ${scrolled ? 'bg-black/50 border border-white/10 backdrop-blur-xl shadow-lg' : 'bg-transparent'}
            transition-all duration-300
        `}>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                    >
                        <item.icon size={16} className="group-hover:text-blue-400 transition-colors" />
                        <span className="font-medium hidden md:inline">{item.name}</span>
                    </a>
                ))}
            </nav>
        </motion.header>
    );
}
