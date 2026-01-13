import React from 'react';
import { useSession } from '../context/SessionContext';
import { History, Clock, FileText, Brain, Briefcase } from 'lucide-react';
import { getTypeStyle } from '../utils/styles';

const TimelinePage = () => {
    const { timeline } = useSession();

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                    <h2 className="font-serif text-2xl text-slate-900 font-bold flex items-center gap-3">
                        <History size={24} className="text-indigo-600" />
                        Session Timeline
                    </h2>
                    <p className="text-slate-500 font-sans text-sm mt-1 ml-9">Chronological history of all events.</p>
                </div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                {timeline.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                            <Clock size={24} />
                        </div>
                        <div className="text-center font-serif text-lg">Timeline is empty...</div>
                    </div>
                ) : (
                    <div className="relative border-l-2 border-slate-100 ml-4 space-y-10">
                        {timeline.map((event, idx) => {
                            const style = getTypeStyle(event.type);

                            return (
                                <div key={idx} className="relative pl-8">
                                    {/* Node */}
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 bg-white border-2 border-indigo-500 rounded-full shadow-sm z-10 transition-transform hover:scale-125"></div>

                                    {/* Time */}
                                    <div className="absolute -left-[80px] top-0.5 text-xs font-mono font-medium text-slate-400">
                                        {event.time}
                                    </div>

                                    {/* Card */}
                                    <div className="group bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-lg">{style.icon}</span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{event.type}</span>
                                        </div>
                                        <p className="text-slate-800 text-lg font-serif leading-relaxed">
                                            {event.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;
