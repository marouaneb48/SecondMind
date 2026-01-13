import React from 'react';
import LiveTranscript from '../../components/modules/transcript/LiveTranscript';
import { useSession } from '../../context/SessionContext';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';

const InterviewDashboard = () => {
    const { transcript, qaList } = useSession();

    // Data Slices
    const recentTranscript = transcript.slice(-3);
    const recentQA = qaList ? qaList.slice(-2) : [];

    return (
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)] animate-in fade-in zoom-in-95 duration-300">
            {/* Left Column - Transcript (Expanded) */}
            <div className="col-span-5 flex flex-col gap-6 h-full overflow-hidden">
                <LiveTranscript transcript={recentTranscript} />
            </div>

            {/* Middle Column - Recent Q&A */}
            <GlassCard className="col-span-7 h-full flex flex-col relative">
                <div className="px-6 py-4 border-b border-slate-100/50 flex items-center justify-between">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <MessageSquare size={18} className="text-violet-500" />
                        Recent Dialogue
                    </h3>
                    <NavLink to="/qa" className="text-xs font-bold text-violet-600 hover:text-violet-700 flex items-center gap-1">
                        View Full Log <ArrowRight size={12} />
                    </NavLink>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-50/30">
                    {recentQA.length === 0 ? (
                        <div className="flex items-center justify-center h-full text-slate-400 text-sm">No Q&A recorded yet...</div>
                    ) : (
                        recentQA.map((item, i) => (
                            <div key={i} className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white shadow-sm">
                                <p className="font-bold text-slate-800 mb-3">{item.question}</p>
                                <div className="pl-4 border-l-2 border-violet-200">
                                    <p className="text-slate-600 text-sm italic">{item.answer}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </GlassCard>
        </div>
    );
};

export default InterviewDashboard;
