import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../context/SessionContext';
import { Search, Home, Play, Pause, RefreshCw, PenTool, Brain, MessageSquare, Layout } from 'lucide-react';

const CommandMenu = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { togglePlay, isPlaying, reset, sessionType } = useSession();

    // Toggle with Cmd+K
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/50 z-[9999] overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-2"
            onClick={(e) => {
                // Prevent click propagation if needed, but Dialog handles overlay
            }}
        >
            <div className="flex items-center border-b border-slate-200/50 pb-2 px-2 mb-2">
                <Search size={16} className="text-slate-400 mr-2" />
                <Command.Input
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 text-sm font-medium h-8"
                />
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto custom-scrollbar p-1">
                <Command.Empty className="py-6 text-center text-sm text-slate-400">No results found.</Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-semibold text-slate-400 mb-2 px-2 uppercase tracking-wider">
                    <Command.Item
                        onSelect={() => runCommand(() => navigate('/'))}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-indigo-50 aria-selected:text-indigo-600 cursor-pointer transition-colors group"
                    >
                        <Home size={16} className="group-aria-selected:text-indigo-500 text-slate-400" />
                        <span>Go to Dashboard</span>
                        <div className="ml-auto flex items-center gap-1">
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">G</span>
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">D</span>
                        </div>
                    </Command.Item>
                    <Command.Item
                        onSelect={() => runCommand(() => navigate('/notes'))}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-indigo-50 aria-selected:text-indigo-600 cursor-pointer transition-colors group"
                    >
                        <PenTool size={16} className="group-aria-selected:text-indigo-500 text-slate-400" />
                        <span>Open Notes</span>
                        <div className="ml-auto flex items-center gap-1">
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">G</span>
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">N</span>
                        </div>
                    </Command.Item>
                    {sessionType === 'interview' && (
                        <Command.Item
                            onSelect={() => runCommand(() => navigate('/qa'))}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-indigo-50 aria-selected:text-indigo-600 cursor-pointer transition-colors group"
                        >
                            <MessageSquare size={16} className="group-aria-selected:text-indigo-500 text-slate-400" />
                            <span>Q&A Log</span>
                        </Command.Item>
                    )}
                </Command.Group>

                <Command.Separator className="h-px bg-slate-100 my-2" />

                <Command.Group heading="Session Controls" className="text-xs font-semibold text-slate-400 mb-2 px-2 uppercase tracking-wider">
                    <Command.Item
                        onSelect={() => runCommand(togglePlay)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-emerald-50 aria-selected:text-emerald-600 cursor-pointer transition-colors group"
                    >
                        {isPlaying ? (
                            <>
                                <Pause size={16} className="group-aria-selected:text-emerald-500 text-slate-400" />
                                <span>Pause Session</span>
                            </>
                        ) : (
                            <>
                                <Play size={16} className="group-aria-selected:text-emerald-500 text-slate-400" />
                                <span>Resume Session</span>
                            </>
                        )}
                        <div className="ml-auto text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Space</div>
                    </Command.Item>

                    <Command.Item
                        onSelect={() => runCommand(reset)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-rose-50 aria-selected:text-rose-600 cursor-pointer transition-colors group"
                    >
                        <RefreshCw size={16} className="group-aria-selected:text-rose-500 text-slate-400" />
                        <span>Reset Session</span>
                    </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-slate-100 my-2" />

                <Command.Group heading="Views" className="text-xs font-semibold text-slate-400 mb-2 px-2 uppercase tracking-wider">
                    <Command.Item className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 text-sm aria-selected:bg-slate-100 cursor-pointer transition-colors group">
                        <Layout size={16} className="text-slate-400" />
                        <span>Toggle Fullscreen</span>
                    </Command.Item>
                </Command.Group>
            </Command.List>

            <div className="border-t border-slate-200/50 pt-2 px-2 mt-2 flex justify-between items-center text-[10px] text-slate-400">
                <span>SecondMind OS v1.0</span>
                <div className="flex gap-2">
                    <span>Change Theme</span>
                    <span>Settings</span>
                </div>
            </div>
        </Command.Dialog>
    );
};

export default CommandMenu;
