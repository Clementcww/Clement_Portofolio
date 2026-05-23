"use client";

import React from 'react';
import { Database, FileText, Layers, Tag } from 'lucide-react';

export function TopicModelerPreview() {
    return (
        <div className="w-full bg-[#0d1117] text-white rounded-lg overflow-hidden font-sans border border-slate-800">
            <div className="bg-[#161b22] px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-1.5 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-slate-500" />
                    <div className="w-2 h-2 rounded-full bg-slate-500" />
                </div>
                <div className="text-xs font-mono text-blue-400 ml-2">~/notebooks/topic_modeling.ipynb</div>
            </div>

            <div className="p-4 flex gap-4">
                {/* Sidebar */}
                <div className="w-1/4 space-y-2 border-r border-slate-800 pr-4">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Pipeline</div>
                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 p-1.5 rounded">
                        <Database size={12} /> Data Load
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 p-1.5 rounded">
                        <FileText size={12} /> Preprocessing
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 p-1.5 rounded border border-blue-500/20">
                        <Layers size={12} /> BERTopic Model
                    </div>
                </div>

                {/* Main Vis */}
                <div className="flex-1">
                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-3">Topic Clusters (Intertopic Distance Map)</div>

                    <div className="relative h-32 bg-[#161b22] rounded border border-slate-800/50 mb-3 overflow-hidden">
                        {/* Simulated Clusters */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-[10px] text-purple-300 border border-purple-500/30">T1</div>
                        <div className="absolute top-10 left-20 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-[10px] text-blue-300 border border-blue-500/30">T2</div>
                        <div className="absolute bottom-6 right-10 w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-[10px] text-pink-300 border border-pink-500/30">T3</div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-[10px] text-gray-500">Top Keywords: Topic 2</div>
                        <div className="flex flex-wrap gap-1">
                            {["machine", "learning", "neural", "network", "deep"].map(w => (
                                <span key={w} className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-gray-300 flex items-center gap-1">
                                    <Tag size={8} /> {w}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
