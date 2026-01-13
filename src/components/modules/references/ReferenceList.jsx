import React from 'react';
import { Quote, Link2, BookOpen } from 'lucide-react';

const ReferenceList = ({ citations }) => {
    return (
        <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 flex flex-col h-full overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 bg-white/40 flex items-center justify-between">
                <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600">
                        <BookOpen size={18} />
                    </span>
                    References
                </h2>
                <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
                    {citations.length}
                </span>
            </div>
            <div className="flex-1 overflow-auto p-5 custom-scrollbar">
                {citations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                        <Quote size={32} className="opacity-30" />
                        <p className="text-xs text-center">Citations mentioned in the lecture<br />will appear here</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {citations.map((cit, idx) => (
                            <div key={idx} className="group bg-white p-3 rounded-lg border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all">
                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 min-w-[3px] h-8 bg-amber-400 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-amber-700 transition-colors">
                                            {cit.authors} ({cit.year})
                                        </div>
                                        <div className="text-slate-600 italic text-[11px] mb-1.5 leading-snug">{cit.title}</div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-slate-400 text-[10px]">
                                                <span className="font-medium text-slate-500">{cit.journal}</span>, {cit.volume}
                                            </div>
                                            <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-100 rounded text-blue-600">
                                                <Link2 size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReferenceList;
