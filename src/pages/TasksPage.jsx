import React from 'react';
import { useSession } from '../context/SessionContext';
import { CheckSquare, User, AlertCircle, Clock } from 'lucide-react';

const TasksPage = () => {
    const { tasks } = useSession();

    // Helper to colorize priority
    const getPriorityColor = (p) => {
        switch (p) {
            case 'high': return 'bg-rose-100 text-rose-700 border-rose-200';
            case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                    <h2 className="font-serif text-2xl text-slate-900 font-bold flex items-center gap-3">
                        <CheckSquare size={24} className="text-emerald-600" />
                        Action Items
                    </h2>
                    <p className="text-slate-500 font-sans text-sm mt-1 ml-9">Tasks extracted from the meeting discussion.</p>
                </div>
                <div className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
                    {tasks.length} Pending
                </div>
            </div>

            {/* Task List */}
            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                {tasks.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-300 gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                            <CheckSquare size={24} />
                        </div>
                        <p className="text-lg font-serif">No action items detected yet...</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {tasks.map((task, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all bg-white animate-in fade-in slide-in-from-bottom-2">
                                <div className="mt-1 h-5 w-5 rounded border-2 border-slate-300 group-hover:border-emerald-500 cursor-pointer flex items-center justify-center transition-colors">
                                    {/* Checkbox simulation */}
                                </div>

                                <div className="flex-1">
                                    <p className="text-slate-800 font-medium text-lg leading-snug">{task.text}</p>

                                    <div className="flex items-center gap-4 mt-3">
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            <User size={12} />
                                            {task.assignee}
                                        </span>
                                        <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${getPriorityColor(task.priority)}`}>
                                            <AlertCircle size={10} />
                                            {task.priority} Priority
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-slate-400 ml-auto">
                                            <Clock size={12} />
                                            Detected at {task.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksPage;
