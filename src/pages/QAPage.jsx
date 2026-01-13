import React, { useRef, useEffect } from 'react';
import { useSession } from '../context/SessionContext';
import { MessageSquare, User, Radio, Sparkles } from 'lucide-react';

const QAPage = () => {
    const { qaList } = useSession();
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [qaList]);

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                    <h2 className="font-serif text-2xl text-slate-900 font-bold flex items-center gap-3">
                        <MessageSquare size={24} className="text-violet-600" />
                        Interview Log
                    </h2>
                    <p className="text-slate-500 font-sans text-sm mt-1 ml-9">Captured questions and candidate responses.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-lg text-xs font-semibold text-violet-700">
                    <Radio size={14} className="animate-pulse" />
                    Live Recording
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                {qaList.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                            <MessageSquare size={24} />
                        </div>
                        <p className="text-lg font-serif">Waiting for Q&A to begin...</p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {qaList.map((item, idx) => (
                            <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Question Block */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="mt-1 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500">
                                        <span className="font-bold text-xs">Q</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Interviewer</div>
                                        <h3 className="text-xl font-bold text-slate-800 leading-snug">
                                            {item.question}
                                        </h3>
                                    </div>
                                </div>

                                {/* Answer Block */}
                                <div className="flex items-start gap-4 pl-12 relative">
                                    <div className="absolute left-[27px] top-[-24px] bottom-0 w-px bg-slate-100 -z-10"></div>
                                    <div className="mt-1 h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center border border-violet-200 text-violet-600 shadow-sm">
                                        <User size={16} />
                                    </div>
                                    <div className="flex-1 bg-violet-50/50 rounded-xl p-5 border border-violet-100/50">
                                        <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                                            <span>Candidate Response</span>
                                            <span className="font-mono text-[10px] text-slate-300">{item.time}</span>
                                        </div>
                                        <p className="text-slate-700 font-serif leading-relaxed text-lg">
                                            {item.answer}
                                        </p>

                                        {item.tags && (
                                            <div className="flex gap-2 mt-4 pt-4 border-t border-violet-100/50">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white rounded-md border border-violet-100 text-violet-600 shadow-sm">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={bottomRef} className="h-20" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default QAPage;
