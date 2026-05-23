"use client";

import React from 'react';
import { Mail, Shield, ShieldAlert, CheckCircle, AlertOctagon } from 'lucide-react';

export function EmailSpamPreview() {
    return (
        <div className="w-full bg-white text-slate-800 rounded-lg overflow-hidden font-sans border border-slate-200">
            {/* Fake Header */}
            <div className="bg-blue-600 px-4 py-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2 font-semibold">
                    <Mail size={18} /> SecureInbox
                </div>
                <div className="text-xs bg-blue-700 px-2 py-1 rounded flex items-center gap-1">
                    <Shield size={12} /> Protection Active
                </div>
            </div>

            <div className="bg-slate-50 p-2 md:p-4 space-y-2">
                {/* Spam Email */}
                <div className="bg-white border-l-4 border-red-500 rounded shadow-sm p-3 flex items-start gap-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="mt-1 text-red-500">
                        <ShieldAlert size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-sm truncate">Urgent: Account Verification Required</span>
                            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold uppercase">Spam (99.8%)</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">Dear user, your account has been compromised. Click here...</p>
                    </div>
                </div>

                {/* Safe Email */}
                <div className="bg-white border-l-4 border-emerald-500 rounded shadow-sm p-3 flex items-start gap-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="mt-1 text-emerald-500">
                        <CheckCircle size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-sm truncate">Project Update: Q4 Goals</span>
                            <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase">Safe</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">Here are the latest metrics for the upcoming quarter review...</p>
                    </div>
                </div>

                {/* Phishing Email */}
                <div className="bg-white border-l-4 border-amber-500 rounded shadow-sm p-3 flex items-start gap-3 hover:bg-slate-50 transition-colors cursor-pointer opacity-75">
                    <div className="mt-1 text-amber-500">
                        <AlertOctagon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-sm truncate">You won a lottery! Claim now</span>
                            <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold uppercase">Phishing</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">Congratulations! You've been selected as the grand winner...</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 text-[10px] text-slate-400 flex justify-between">
                <span>Model: Naive Bayes / LSTM</span>
                <span>Accuracy: 98.2%</span>
            </div>
        </div>
    );
}
