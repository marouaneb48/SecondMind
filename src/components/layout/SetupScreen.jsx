import React, { useState } from 'react';
import { GraduationCap, Briefcase, Mic2, ArrowRight } from 'lucide-react';
import { useSession } from '../../context/SessionContext';

const SetupScreen = () => {
    const { initializeSession } = useSession();
    const [selectedType, setSelectedType] = useState('lecture');
    const [title, setTitle] = useState('');

    const handleStart = () => {
        initializeSession(selectedType, title || 'Untitled Session');
    };

    const types = [
        {
            id: 'lecture',
            title: 'STEM Lecture',
            icon: GraduationCap,
            description: 'Optimized for learning. Features Concept Cards, Citations, and Theater Transcript.',
            color: 'indigo'
        },
        {
            id: 'meeting',
            title: 'Business Meeting',
            icon: Briefcase,
            description: 'Focus on Action Items and tasks. Disables academic features like Citations.',
            color: 'emerald'
        },
        {
            id: 'interview',
            title: 'Interview',
            icon: Mic2,
            description: 'Capture nuance. Enables Sentiment Analysis and Q&A suggestions.',
            color: 'rose'
        }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center p-6 bg-grid-pattern">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden">

                {/* Left Side: Visual */}
                <div className="w-full md:w-1/3 bg-slate-50 p-8 flex flex-col justify-between border-r border-slate-100">
                    <div>
                        <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">SecondMind</h1>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Configure your AI companion for the task at hand. Context-aware features will be automatically enabled.
                        </p>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">v1.2.0 • Starlight Build</div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-6">New Session</h2>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Session Title</label>
                            <input
                                type="text"
                                placeholder="e.g. Q3 Roadmap Review"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-slate-800"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Select Context</label>
                            <div className="grid grid-cols-1 gap-3">
                                {types.map((type) => {
                                    const isSelected = selectedType === type.id;
                                    const Icon = type.icon;
                                    return (
                                        <button
                                            key={type.id}
                                            onClick={() => setSelectedType(type.id)}
                                            className={`
                        relative flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200
                        ${isSelected
                                                    ? `border-${type.color}-500 bg-${type.color}-50/50`
                                                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                                                }
                      `}
                                        >
                                            <div className={`p-2 rounded-lg ${isSelected ? `bg-${type.color}-100 text-${type.color}-600` : 'bg-slate-100 text-slate-400'}`}>
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <div className={`font-bold text-sm ${isSelected ? `text-${type.color}-700` : 'text-slate-700'}`}>{type.title}</div>
                                                <p className="text-xs text-slate-500 mt-1">{type.description}</p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            onClick={handleStart}
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group transition-all"
                        >
                            Start Session
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Recent Sessions Divider */}
                    <div className="relative my-10">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Recent History</span>
                        </div>
                    </div>

                    {/* Historical Sessions List */}
                    <div className="space-y-3">
                        {[
                            { title: 'Neural Networks Deep Dive', type: 'lecture', date: 'Yesterday', duration: '45m' },
                            { title: 'Frontend Candidate Interview', type: 'interview', date: 'Oct 24', duration: '30m' },
                            { title: 'Q3 Marketing Sync', type: 'meeting', date: 'Oct 22', duration: '1h 15m' },
                        ].map((session, idx) => {
                            const config = types.find(t => t.id === session.type) || types[0];
                            const Icon = config.icon;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => initializeSession(session.type, session.title)}
                                    className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg bg-${config.color}-50 text-${config.color}-600 group-hover:scale-110 transition-transform`}>
                                            <Icon size={16} />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-slate-700 text-sm group-hover:text-indigo-700">{session.title}</div>
                                            <div className="text-xs text-slate-400 font-medium flex gap-2">
                                                <span>{session.date}</span>
                                                <span>•</span>
                                                <span>{session.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-500 uppercase">
                                        {config.title}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupScreen;
