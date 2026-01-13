import React, { useEffect, useRef } from 'react';
import { useSession } from '../context/SessionContext';
import { Quote } from 'lucide-react';

const TranscriptPage = () => {
    const { transcript } = useSession();
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [transcript]);

    return (
        <div className="max-w-3xl mx-auto bg-white min-h-[calc(100vh-140px)] shadow-sm border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="p-12 pb-20 space-y-8">
                <div className="text-center mb-12 border-b border-slate-100 pb-8">
                    <h2 className="font-serif text-3xl text-slate-900 font-bold mb-2">Research Methodology</h2>
                    <p className="text-slate-500 font-serif italic">Session Transcript • Spring 2026</p>
                </div>

                {transcript.length === 0 ? (
                    <div className="text-center text-slate-400 font-serif italic py-20">
                        Waiting for session to begin...
                    </div>
                ) : (
                    transcript.map((entry, idx) => (
                        <div key={idx} className="grid grid-cols-[120px_1fr] gap-8 group">
                            <div className="text-right pt-0.5">
                                <div className="font-sans font-bold text-xs uppercase tracking-wider text-slate-900">
                                    {entry.speaker}
                                </div>
                                <div className="font-mono text-[10px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {entry.time}
                                </div>
                            </div>

                            <div className="font-serif text-lg text-slate-800 leading-relaxed">
                                {entry.text}
                                {entry.citations.length > 0 && (
                                    <span className="inline-flex gap-2 ml-3 align-middle">
                                        {entry.citations.map(cit => (
                                            <span key={cit} className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-sans font-medium border border-amber-100 align-middle -mt-1 cursor-help" title="View Citation">
                                                <Quote size={8} className="mr-1 inline" />
                                                {cit}
                                            </span>
                                        ))}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))
                )}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default TranscriptPage;
