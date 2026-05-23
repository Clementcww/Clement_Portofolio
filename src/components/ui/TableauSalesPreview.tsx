"use client";

import React from 'react';
import { BarChart3, PieChart, Activity, TrendingUp, DollarSign, Users } from 'lucide-react';

export function TableauSalesPreview() {
    return (
        <div className="w-full bg-white text-slate-800 rounded-lg overflow-hidden font-sans border border-slate-200 shadow-sm print:shadow-none print:border-gray-300 transform transition-transform hover:scale-[1.02] duration-500">
            {/* Header */}
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 text-center">
                <h3 className="font-semibold text-[11px] text-slate-700">Dashboard Analisis Kinerja Penjualan dan Pelanggan</h3>
            </div>

            <div className="p-4 flex flex-col gap-4">
                {/* Top KPIs */}
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-slate-50 p-2 rounded">
                        <div className="text-[9px] font-semibold text-slate-500 uppercase">Total Price</div>
                        <div className="text-xs font-bold mt-1 text-slate-800 tracking-tight flex items-center justify-center"><DollarSign size={10}/>50.9M</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded">
                        <div className="text-[9px] font-semibold text-slate-500 uppercase">Total Profit</div>
                        <div className="text-xs font-bold mt-1 text-slate-800 tracking-tight flex items-center justify-center"><TrendingUp size={10} className="mr-0.5"/>40.4M</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded">
                        <div className="text-[9px] font-semibold text-slate-500 uppercase">Total Quantity</div>
                        <div className="text-xs font-bold mt-1 text-slate-800 tracking-tight">927</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded">
                        <div className="text-[9px] font-semibold text-slate-500 uppercase">Total Transaction</div>
                        <div className="text-xs font-bold mt-1 text-slate-800 tracking-tight">100</div>
                    </div>
                </div>

                {/* Main Charts Row 1 */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 border border-slate-200 rounded p-2">
                        <div className="text-[8px] font-bold text-center mb-2">Target Penjualan</div>
                        <div className="h-14 flex items-center justify-center text-green-500/50">
                            <Activity size={20} className="animate-pulse opacity-50" />
                        </div>
                    </div>
                    <div className="col-span-1 border border-slate-200 rounded p-2">
                        <div className="text-[8px] font-bold text-center mb-2">Tot Price vs Profit</div>
                        <div className="h-14 flex items-center justify-center text-blue-500/50 relative">
                             <div className="absolute top-2 left-4 w-1.5 h-1.5 rounded-full border border-blue-400"></div>
                             <div className="absolute top-4 left-8 w-1.5 h-1.5 rounded-full border border-purple-400"></div>
                             <div className="absolute top-1 left-12 w-1.5 h-1.5 rounded-full border border-orange-400"></div>
                             <div className="absolute top-6 left-14 w-1.5 h-1.5 rounded-full border border-green-400"></div>
                             <div className="absolute top-5 left-8 w-1.5 h-1.5 rounded-full border border-red-400"></div>
                        </div>
                    </div>
                    <div className="col-span-1 border border-slate-200 rounded p-2">
                        <div className="text-[8px] font-bold text-center mb-2">Penjualan Wilayah</div>
                        <div className="h-14 flex items-center justify-center text-orange-400">
                            <PieChart size={20} />
                        </div>
                    </div>
                </div>

                {/* Main Charts Row 2 */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 border border-slate-200 rounded p-2 flex flex-col justify-end">
                        <div className="text-[8px] font-bold text-center mb-2">Segmentasi</div>
                        <div className="flex items-end justify-center gap-1 h-12">
                            <div className="w-1.5 bg-blue-500 h-[30%]"></div>
                            <div className="w-1.5 bg-indigo-500 h-[60%]"></div>
                            <div className="w-1.5 bg-purple-500 h-[40%]"></div>
                            <div className="w-1.5 bg-pink-500 h-[80%]"></div>
                            <div className="w-1.5 bg-orange-400 h-[50%]"></div>
                        </div>
                    </div>
                    <div className="col-span-1 border border-slate-200 rounded p-2">
                        <div className="text-[8px] font-bold text-center mb-2">Rata-Rata Diskon</div>
                        <div className="flex items-end justify-center gap-1.5 h-12">
                            <div className="w-3 bg-teal-400 h-[90%] flex justify-center"><span className="text-[5px] -mt-2 text-slate-500">19%</span></div>
                            <div className="w-3 bg-blue-500 h-[70%] flex justify-center"><span className="text-[5px] -mt-2 text-slate-500">14%</span></div>
                            <div className="w-3 bg-orange-500 h-[65%] flex justify-center"><span className="text-[5px] -mt-2 text-slate-500">14%</span></div>
                            <div className="w-3 bg-red-500 h-[75%] flex justify-center"><span className="text-[5px] -mt-2 text-slate-500">15%</span></div>
                        </div>
                    </div>
                    <div className="col-span-1 border border-slate-200 rounded p-2">
                        <div className="text-[8px] font-bold text-center mb-2">Penjualan Segment</div>
                        <div className="h-12 flex items-center justify-center text-blue-600">
                            <PieChart size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
