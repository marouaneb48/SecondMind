import React, { useRef, useEffect } from 'react';
import { FileText, Quote, Sparkles } from 'lucide-react';
import { getTypeStyle } from '../../../utils/styles';

const LiveTranscript = ({ transcript }) => {
    const transcriptRef = useRef(null);

    useEffect(() => {
        if (transcriptRef.current) {
            transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
        }
    }, [transcript]);

    return (
        <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 flex flex-col h-[500px] overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/40 flex items-center justify-between">
                <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600">
                        <FileText size={18} />
                    </span>
                    Live Transcript
                </h2>
                <div className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-100/50 text-emerald-700 border border-emerald-200/50 flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Recording
                </div>
            </div>

            <div className="flex-1 overflow-auto p-6 space-y-6 custom-scrollbar" ref={transcriptRef}>
                {transcript.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                            <Sparkles size={32} className="text-slate-300" />
                        </div>
                        <p className="text-sm font-medium">Session initialized. Press Start to begin.</p>
                    </div>
                ) : (
                    transcript.map((entry, idx) => {
                        const style = getTypeStyle(entry.type);
                        const isLast = idx === transcript.length - 1;

                        return (
                            <div
                                key={idx}
                                className={`group relative pl-4 transition-all duration-500 ease-out ${isLast ? 'translate-y-0 opacity-100' : 'opacity-80 hover:opacity-100'
                                    }`}
                            >
                                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-200 group-last:bg-gradient-to-b group-last:from-indigo-500 group-last:to-transparent"></div>

                                <div className={`
                   relative bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all
                   ${isLast ? 'ring-2 ring-indigo-500/20 shadow-indigo-500/10' : ''}
                `}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl filter drop-shadow-sm">{style.icon}</span>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-slate-800 text-sm">{entry.speaker}</span>
                                                <span className="text-[10px] font-mono text-slate-400">{entry.time}</span>
                                            </div>
                                            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5">{entry.type}</div>
                                        </div>
                                    </div>

                                    <p className="font-serif text-slate-700 leading-relaxed text-[15px]">
                                        {entry.text}
                                    </p>

                                    {entry.citations.length > 0 && (
                                        <div className="mt-4 pt-3 border-t border-slate-50">
                                            <div className="flex flex-wrap gap-2">
                                                {entry.citations.map(cit => (
                                                    <span key={cit} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 text-xs font-medium">
                                                        <Quote size={10} className="fill-current" />
                                                        {cit}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default LiveTranscript;
