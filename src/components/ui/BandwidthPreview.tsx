"use client";

import React from 'react';
import { Globe, ArrowUpRight, ArrowDownLeft, Activity, Server } from 'lucide-react';

export function BandwidthPreview() {
    return (
        <div className="w-full bg-[#0f172a] text-white rounded-lg overflow-hidden font-sans border border-slate-700">
            {/* Header */}
            <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Globe size={12} /> GLOBAL_NET_MONITOR_V1
                </div>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] text-emerald-500 font-bold">LIVE</span>
                </div>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4">
                {/* Metric Cards */}
                <div className="space-y-3">
                    <div className="bg-[#1e293b] p-3 rounded border border-slate-700/50">
                        <div className="text-[10px] text-slate-400 uppercase mb-1">Total Bandwidth</div>
                        <div className="text-xl font-bold font-mono text-cyan-300 flex items-center gap-2">
                            45.2 TB/s <Activity size={14} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#1e293b] p-2 rounded border border-slate-700/50">
                            <div className="text-[10px] text-slate-400 mb-1">Upstream</div>
                            <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                                <ArrowUpRight size={10} /> 12.1 TB
                            </div>
                        </div>
                        <div className="bg-[#1e293b] p-2 rounded border border-slate-700/50">
                            <div className="text-[10px] text-slate-400 mb-1">Downstream</div>
                            <div className="text-xs font-mono text-blue-400 flex items-center gap-1">
                                <ArrowDownLeft size={10} /> 33.1 TB
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fake Map Viz */}
                <div className="bg-[#1e293b] rounded border border-slate-700/50 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-30">
                        {/* Abstract grid lines representing map */}
                        <div className="absolute top-[20%] left-[10%] w-[80%] h-[1px] bg-cyan-500/20"></div>
                        <div className="absolute top-[40%] left-[10%] w-[80%] h-[1px] bg-cyan-500/20"></div>
                        <div className="absolute top-[60%] left-[10%] w-[80%] h-[1px] bg-cyan-500/20"></div>
                        <div className="absolute top-[80%] left-[10%] w-[80%] h-[1px] bg-cyan-500/20"></div>
                        <div className="absolute top-[10%] left-[30%] h-[80%] w-[1px] bg-cyan-500/20"></div>
                        <div className="absolute top-[10%] left-[70%] h-[80%] w-[1px] bg-cyan-500/20"></div>
                    </div>

                    {/* Connection Nodes */}
                    <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-blue-500 rounded-full"></div>

                    {/* Connection Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 60 50 Q 150 100 220 70" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1" fill="none" />
                    </svg>

                    <div className="relative z-10 text-center">
                        <Server size={24} className="text-slate-600 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500">IXP Jakarta</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
