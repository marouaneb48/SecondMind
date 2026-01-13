import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Lightbulb, ArrowRight } from 'lucide-react';

const KeyConcepts = ({ concepts }) => {
    const [expandedConcept, setExpandedConcept] = useState(null);

    return (
        <div className="h-full bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-white/40 flex items-center justify-between">
                <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-violet-500/10 text-violet-600">
                        <Brain size={18} />
                    </span>
                    Key Concepts
                </h2>
                <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full border border-violet-200">
                    {concepts.length} Extracted
                </span>
            </div>

            <div className="flex-1 overflow-auto p-6 space-y-4 custom-scrollbar">
                {concepts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3">
                        <Lightbulb size={40} className="text-slate-300 opacity-50" />
                        <p className="text-sm text-center max-w-[200px]">AI is listening for key research concepts...</p>
                    </div>
                ) : (
                    concepts.map((concept, idx) => {
                        const isExpanded = expandedConcept === idx;
                        return (
                            <div
                                key={idx}
                                className={`
                  bg-white rounded-xl border transition-all duration-300 overflow-hidden
                  ${isExpanded
                                        ? 'shadow-lg border-violet-200 ring-1 ring-violet-100'
                                        : 'shadow-sm border-slate-100 hover:shadow-md hover:border-violet-100 opacity-90 hover:opacity-100'
                                    }
                `}
                            >
                                <button
                                    onClick={() => setExpandedConcept(isExpanded ? null : idx)}
                                    className="w-full px-5 py-4 flex items-center justify-between group"
                                >
                                    <div className="text-left">
                                        <div className={`font-bold transition-colors ${isExpanded ? 'text-violet-700' : 'text-slate-800 group-hover:text-violet-600'}`}>
                                            {concept.name}
                                        </div>
                                        <div className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wide">
                                            Identified at {concept.time}
                                        </div>
                                    </div>
                                    <div className={`
                    h-8 w-8 rounded-full flex items-center justify-center transition-all
                    ${isExpanded ? 'bg-violet-100 text-violet-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-500'}
                  `}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-5 pb-5 pt-0 space-y-4">
                                        <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 leading-relaxed border border-slate-100">
                                            {concept.definition}
                                        </div>

                                        <div className="grid grid-cols-1 gap-2">
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Context</div>
                                                <p className="text-xs text-slate-600">{concept.context}</p>
                                            </div>

                                            {concept.related.length > 0 && (
                                                <div className="mt-2">
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Related Topics</div>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {concept.related.map(rel => (
                                                            <span key={rel} className="inline-flex items-center gap-1 text-[10px] bg-violet-50 text-violet-700 px-2 py-1 rounded-md font-medium">
                                                                <ArrowRight size={8} />
                                                                {rel}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default KeyConcepts;
