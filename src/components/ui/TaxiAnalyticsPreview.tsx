"use client";

import React from 'react';
import { Map, TrendingUp, DollarSign, Clock } from 'lucide-react';

export function TaxiAnalyticsPreview() {
    return (
        <div className="w-full bg-[#1a1b1e] text-white rounded-lg overflow-hidden font-sans border border-slate-700/50">
            {/* Fake Header */}
            <div className="bg-[#25262b] px-4 py-2 border-b border-slate-700/50 flex justify-between items-center bg-[#2C2E33]">
                <div className="text-xs font-mono text-gray-400">NYC Taxi Dashboard v2.4</div>
                <div className="flex gap-2 text-xs text-gray-500">
                    <span>Server: <span className="text-emerald-400">Online</span></span>
                </div>
            </div>

            <div className="p-4 grid grid-cols-3 gap-4">
                {/* Left Col: Stats */}
                <div className="col-span-1 space-y-4">
                    <div className="bg-[#2C2E33] p-3 rounded-lg border border-slate-700/30">
                        <div className="text-gray-400 text-[10px] uppercase">Total Trips</div>
                        <div className="text-lg font-bold text-yellow-500 flex items-center gap-2">
                            <TrendingUp size={14} /> 14.2M
                        </div>
                    </div>
                    <div className="bg-[#2C2E33] p-3 rounded-lg border border-slate-700/30">
                        <div className="text-gray-400 text-[10px] uppercase">Avg Fare</div>
                        <div className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                            <DollarSign size={14} /> $18.50
                        </div>
                    </div>
                    <div className="bg-[#2C2E33] p-3 rounded-lg border border-slate-700/30">
                        <div className="text-gray-400 text-[10px] uppercase">Peak Hour</div>
                        <div className="text-lg font-bold text-blue-400 flex items-center gap-2">
                            <Clock size={14} /> 18:00
                        </div>
                    </div>
                </div>

                {/* Right Col: Map Viz */}
                <div className="col-span-2 bg-[#2C2E33] rounded-lg border border-slate-700/30 relative overflow-hidden flex items-center justify-center min-h-[160px]">
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-10 w-20 h-32 border border-stale-500 rounded"></div>
                        <div className="absolute top-10 left-20 w-32 h-20 border border-stale-500 rounded bg-slate-500/10"></div>
                        <div className="absolute bottom-4 right-10 w-16 h-40 border border-stale-500 rounded"></div>
                    </div>

                    {/* Heatmap Points */}
                    <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-yellow-500/30 rounded-full blur-xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>

                    <div className="relative z-10 text-center">
                        <Map size={32} className="text-slate-500 mx-auto mb-2" />
                        <span className="text-xs text-slate-400">Heatmap Visualization Layer</span>
                    </div>
                </div>
            </div>

            {/* Route List */}
            <div className="px-4 pb-4">
                <div className="text-[10px] text-gray-500 uppercase mb-2">Recent High-Value Routes</div>
                <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs bg-[#25262b] p-2 rounded">
                        <span className="text-gray-300">JFK Airport → Manhattan</span>
                        <span className="text-emerald-400">$65.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs bg-[#25262b] p-2 rounded">
                        <span className="text-gray-300">LaGuardia → Brooklyn</span>
                        <span className="text-emerald-400">$42.50</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
