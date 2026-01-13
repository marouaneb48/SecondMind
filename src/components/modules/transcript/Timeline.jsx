
import React from 'react';
import { Clock } from 'lucide-react';

const Timeline = ({ timeline }) => {
    // Reverse the timeline to show newest first
    const reversedTimeline = [...timeline].reverse();

    return (
        <div className="bg-gradient-to-br from-rose-500/5 to-orange-500/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-5 h-full flex flex-col">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1 flex items-center gap-2">
                <Clock size={14} />
                Session Timeline
            </h3>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 relative space-y-6">
                {timeline.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-xs text-slate-400 italic">
                        Timeline events will propagate here...
                    </div>
                ) : (
                    <div className="relative border-l border-indigo-200 ml-2 space-y-6 py-2">
                        {timeline.slice().reverse().map((item, idx) => (
                            <div key={idx} className="relative pl-6 group">
                                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-300 group-first:bg-indigo-600 group-first:scale-125 transition-all"></div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[10px] text-slate-400">{item.time}</span>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase tracking-wide">{item.type}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 line-clamp-1 group-first:text-slate-900 group-first:font-medium">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;
