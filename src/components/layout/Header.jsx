import React from 'react';
import { Play, Pause, LayoutDashboard, FileText, Brain, BookOpen, PenTool, Lightbulb, Briefcase, History, MessageSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useSession } from '../../context/SessionContext';

const Header = () => {
    const { sessionType, sessionTitle, currentTime, isPlaying, togglePlay, reset, transcript } = useSession(); // pull all needed values
    const showReset = transcript.length > 0;

    const allNavItems = [
        { path: '/', label: 'Overview', icon: LayoutDashboard, types: ['lecture', 'meeting', 'interview'] },
        { path: '/notes', label: 'Notes', icon: PenTool, types: ['lecture', 'meeting', 'interview'] },
        { path: '/explain', label: 'Analysis', icon: Lightbulb, types: ['lecture', 'meeting'] },
        { path: '/transcript', label: 'Transcript', icon: FileText, types: ['lecture', 'meeting', 'interview'] },
        { path: '/tasks', label: 'Tasks', icon: Briefcase, types: ['meeting'] },
        { path: '/timeline', label: 'Timeline', icon: History, types: ['meeting'] },
        { path: '/qa', label: 'Questions', icon: MessageSquare, types: ['interview'] },
        { path: '/concepts', label: 'Concepts', icon: Brain, types: ['lecture'] },
        { path: '/references', label: 'Library', icon: BookOpen, types: ['lecture'] },
    ];

    const visibleNavItems = allNavItems.filter(item => item.types.includes(sessionType));

    return (
        <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 text-white shadow-lg ring-1 ring-black/5">
            <div className="flex flex-col max-w-[1600px] mx-auto">
                {/* Top Bar: Title & Controls */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight text-slate-100 leading-none">
                                {sessionTitle || 'New Session'}
                            </h1>
                            <p className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">
                                {sessionType} Mode
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                            <div className="h-2 w-2 rounded-full animate-pulse bg-emerald-500"></div>
                            <div className="font-mono text-lg text-white font-medium tabular-nums tracking-widest leading-none">
                                {Math.floor(currentTime * 25 / 60)}:{String(currentTime * 25 % 60).padStart(2, '0')}
                            </div>
                        </div>

                        <button
                            onClick={togglePlay}
                            className={`h-9 w-9 rounded-full flex items-center justify-center transition-all bg-white text-slate-900 hover:bg-blue-50 active:scale-95`}
                            title={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                        </button>
                        {showReset && (
                            <button
                                onClick={reset}
                                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 border border-white/5 transition-all uppercase tracking-wider"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="flex px-6">
                    {visibleNavItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all
                ${isActive
                                    ? 'border-indigo-400 text-white bg-white/5'
                                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                }
              `}
                        >
                            <item.icon size={16} />
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
