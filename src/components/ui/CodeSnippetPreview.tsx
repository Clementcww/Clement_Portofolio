"use client";

import React from "react";
import { GitBranch, Terminal } from "lucide-react";

type CodeSnippetPreviewProps = {
    title: string;
    code: string;
    language?: string;
};

export function CodeSnippetPreview({ title, code, language = "python" }: CodeSnippetPreviewProps) {
    return (
        <div className="rounded-xl overflow-hidden border border-[#30363d] bg-[#0d1117] font-mono text-xs shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#f87171]" />
                    <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                    <span className="w-3 h-3 rounded-full bg-[#34d399]" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <Terminal size={12} />
                    <span>{title}</span>
                </div>
            </div>
            <div className="px-4 py-4 overflow-x-auto bg-[#0d1117]">
                <pre className="m-0 whitespace-pre-wrap break-words leading-relaxed text-[11px] text-[#79c0ff]">
                    <code>{code}</code>
                </pre>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-t border-[#30363d] text-[9px] text-gray-500">
                <span className="flex items-center gap-1.5">
                    <GitBranch size={10} />
                    main
                </span>
                <span>{language}</span>
            </div>
        </div>
    );
}
