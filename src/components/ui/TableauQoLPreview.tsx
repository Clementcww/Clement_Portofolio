"use client";

import React from 'react';
import { Globe2, Map, PieChart } from 'lucide-react';

export function TableauQoLPreview() {
    return (
        <div className="w-full bg-[#f8f9fa] text-slate-800 rounded-lg overflow-hidden font-sans border border-slate-200 shadow-sm print:shadow-none print:border-gray-300 transform transition-transform hover:scale-[1.02] duration-500">
            {/* Header */}
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 text-center">
                <h3 className="font-bold text-xs text-slate-700 font-serif">Quality of Life in a Country</h3>
            </div>

            <div className="p-3 flex flex-col gap-3">
                {/* Top Data Table Mock */}
                <div className="bg-white border text-[8px] border-slate-200 rounded p-2">
                    <div className="grid grid-cols-7 gap-1 font-bold text-slate-500 border-b pb-1 mb-1 text-[7px]">
                        <div>Country</div>
                        <div>Climate</div>
                        <div>Costs</div>
                        <div>Health</div>
                        <div>Popularity</div>
                        <div>Rights</div>
                        <div className="text-right">TotalQoL</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[7px] py-0.5 border-b border-slate-100">
                        <div>Australia</div>
                        <div>90.00</div>
                        <div>23.00</div>
                        <div>87.00</div>
                        <div>41.00</div>
                        <div>92.00</div>
                        <div className="text-right font-bold text-green-600">76.00</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[7px] py-0.5 border-b border-slate-100 bg-slate-50">
                        <div>Switzerland</div>
                        <div>34.00</div>
                        <div>44.00</div>
                        <div>93.00</div>
                        <div>46.00</div>
                        <div>99.00</div>
                        <div className="text-right font-bold text-lime-600">74.00</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[7px] py-0.5">
                        <div>San Marino</div>
                        <div>62.00</div>
                        <div>61.00</div>
                        <div>91.00</div>
                        <div>47.00</div>
                        <div>92.00</div>
                        <div className="text-right font-bold text-lime-600">74.00</div>
                    </div>
                </div>

                {/* Horizontal Bar Chart Mock */}
                <div className="border border-slate-200 bg-white rounded p-2">
                    <div className="text-[9px] font-bold text-center mb-2 font-serif">Selected Country Quality Of Life</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-12 text-[7px] text-right text-slate-500">Australia</div>
                            <div className="h-2 flex-1 bg-slate-100 rounded-sm">
                                <div className="h-full bg-yellow-400 rounded-sm" style={{ width: '90%' }}></div>
                            </div>
                            <div className="text-[7px] font-bold">76</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 text-[7px] text-right text-slate-500">Switzerland</div>
                            <div className="h-2 flex-1 bg-slate-100 rounded-sm">
                                <div className="h-full bg-slate-400 rounded-sm" style={{ width: '85%' }}></div>
                            </div>
                            <div className="text-[7px] font-bold">74</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 text-[7px] text-right text-slate-500">San Marino</div>
                            <div className="h-2 flex-1 bg-slate-100 rounded-sm">
                                <div className="h-full bg-amber-700/70 rounded-sm" style={{ width: '85%' }}></div>
                            </div>
                            <div className="text-[7px] font-bold">74</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 text-[7px] text-right text-slate-500">Hong Kong</div>
                            <div className="h-2 flex-1 bg-slate-100 rounded-sm">
                                <div className="h-full bg-pink-500/60 rounded-sm" style={{ width: '85%' }}></div>
                            </div>
                            <div className="text-[7px] font-bold">74</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="border border-slate-200 bg-white rounded p-2 relative">
                        <div className="text-[9px] font-bold text-center mb-2 font-serif">Country Size vs QoL</div>
                        <div className="h-20 flex items-center justify-center text-slate-200 bg-slate-50 rounded">
                            <Map size={48} />
                            <div className="absolute top-8 left-10 w-1.5 h-1.5 rounded-full bg-slate-400 border border-white"></div>
                            <div className="absolute bottom-6 right-8 w-3 h-3 rounded bg-orange-400/80 border border-white text-[4px] flex items-center justify-center text-white">76</div>
                        </div>
                    </div>
                    <div className="border border-slate-200 bg-white rounded p-2">
                        <div className="text-[9px] font-bold text-center mb-2 font-serif">Features Proportion</div>
                        <div className="h-20 flex items-center justify-center text-orange-400 relative">
                             <div className="w-12 h-12 rounded-full border-[6px] border-transparent border-t-blue-400 border-r-green-400 border-b-yellow-400 border-l-red-400 rotate-45 mix-blend-multiply opacity-80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
