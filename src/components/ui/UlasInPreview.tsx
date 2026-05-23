"use client";

import React from 'react';
import { Search } from 'lucide-react';

export function UlasInPreview() {
    return (
        <div className="w-full bg-slate-50 text-slate-900 rounded-lg overflow-hidden font-sans border border-slate-200">
            {/* Browser Bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 text-center text-xs text-slate-400 font-mono">ulas.in</div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Ulas.in</h3>
                    <p className="text-sm text-slate-400 mb-6">AI-Powered Restaurant Insights</p>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h4 className="font-semibold text-slate-800 mb-1">Analyze Your Restaurant</h4>
                        <p className="text-xs text-slate-400 mb-4">Enter your restaurant information to get AI-powered review analysis</p>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-slate-500">Restaurant Name</label>
                                <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-700 flex items-center gap-2">
                                    <span className="text-slate-400">🏠</span> Sate Senayan
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-slate-500">Location</label>
                                <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-700 flex items-center gap-2">
                                    <span className="text-slate-400">📍</span> Jakarta Barat
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-slate-500">Sub-location</label>
                                <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-700 flex items-center gap-2">
                                    <span className="text-slate-400">📍</span> Puri Indah
                                </div>
                            </div>
                        </div>

                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <Search size={14} />
                            Analyze Now!
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-semibold text-slate-800 mb-1">Competitor News Search</h4>
                    <p className="text-xs text-slate-400 mb-4">Search for the latest news about your competitors</p>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">Competitor Name</label>
                        <div className="flex gap-2">
                            <input type="text" disabled className="flex-1 bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm" placeholder="Example: McDonald's" />
                            <button className="bg-blue-900 text-white p-2 rounded hover:bg-blue-800">
                                <Search size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
