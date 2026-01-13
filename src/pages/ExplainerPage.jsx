import React, { useEffect, useRef } from 'react';
import { useSession } from '../context/SessionContext';
import { Lightbulb, Target, ArrowRightLeft, Anchor, Sparkles, Brain, Quote } from 'lucide-react';

const ExplainerPage = () => {
    const { transcript } = useSession();
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [transcript]);

    const getIcon = (type) => {
        switch (type) {
            case 'intent': return <Target className="text-rose-500" size={20} />;
            case 'intuition': return <Lightbulb className="text-amber-500" size={20} />;
            case 'gap': return <ArrowRightLeft className="text-blue-500" size={20} />;
            case 'summary': return <Anchor className="text-indigo-500" size={20} />;
            default: return <Sparkles className="text-slate-400" size={20} />;
        }
    };

    const getColors = (type) => {
        switch (type) {
            case 'intent': return 'bg-rose-50 border-rose-100 text-rose-900';
            case 'intuition': return 'bg-amber-50 border-amber-100 text-amber-900';
            case 'gap': return 'bg-blue-50 border-blue-100 text-blue-900';
            case 'summary': return 'bg-indigo-50 border-indigo-100 text-indigo-900';
            default: return 'bg-slate-50 border-slate-100 text-slate-900';
        }
    };

    // Filter only entries that have an explainer
    const explanations = transcript.filter(t => t.explainer);

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Document Header */}
            <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                    <h2 className="font-serif text-2xl text-slate-900 font-bold flex items-center gap-3">
                        <Brain size={24} className="text-indigo-600" />
                        Cognitive Analysis
                    </h2>
                    <p className="text-slate-500 font-sans text-sm mt-1 ml-9">Real-time breakdown of intent, intuition, and logic.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-xs font-semibold text-indigo-700">
                    <Sparkles size={14} className="animate-pulse" />
                    AI Analysis Active
                </div>
            </div>

            {/* Analysis Content */}
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar space-y-8">
                {explanations.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                            <Lightbulb size={24} />
                        </div>
                        <div className="text-center font-serif text-lg">Waiting for insights to analyze...</div>
                    </div>
                ) : (
                    explanations.map((entry, idx) => {
                        const colors = getColors(entry.explainer.type);

                        return (
                            <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both group">
                                {/* Timeline Connector */}
                                {idx !== explanations.length - 1 && (
                                    <div className="absolute left-[2.25rem] top-12 bottom-[-2rem] w-px bg-slate-100 group-last:hidden"></div>
                                )}

                                <div className="flex gap-6">
                                    {/* Icon Column */}
                                    <div className="flex-shrink-0 relative z-10">
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${colors} shadow-sm bg-white`}>
                                            {getIcon(entry.explainer.type)}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 space-y-3 pb-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${colors}`}>
                                                    {entry.explainer.type}
                                                </span>
                                                <span className="text-xs font-mono text-slate-400">{entry.time}</span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900">{entry.explainer.label}</h3>
                                        </div>

                                        <div className="prose prose-slate prose-p:leading-relaxed prose-lg">
                                            <p className="text-slate-700 font-serif text-[17px]">
                                                {entry.explainer.text}
                                            </p>
                                        </div>

                                        {/* Context Quote */}
                                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex gap-3 items-start mt-2">
                                            <Quote size={14} className="text-slate-400 mt-1 flex-shrink-0" />
                                            <p className="text-xs text-slate-500 italic leading-relaxed">
                                                "{entry.text}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={bottomRef} className="h-10" />
            </div>
        </div>
    );
};

export default ExplainerPage;
