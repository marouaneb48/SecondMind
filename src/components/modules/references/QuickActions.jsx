import React from 'react';
import { BookmarkPlus, AlertCircle, CheckCircle, Share2 } from 'lucide-react';

const QuickActions = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
                <button className="col-span-1 px-3 py-3 bg-white hover:bg-indigo-50 hover:border-indigo-200 rounded-xl border border-slate-100 text-left transition-all group shadow-sm hover:shadow">
                    <BookmarkPlus size={20} className="text-indigo-500 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-semibold text-slate-700 group-hover:text-indigo-700">Bookmark</div>
                </button>

                <button className="col-span-1 px-3 py-3 bg-white hover:bg-amber-50 hover:border-amber-200 rounded-xl border border-slate-100 text-left transition-all group shadow-sm hover:shadow">
                    <AlertCircle size={20} className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-semibold text-slate-700 group-hover:text-amber-700">Flag</div>
                </button>

                <button className="col-span-1 px-3 py-3 bg-white hover:bg-emerald-50 hover:border-emerald-200 rounded-xl border border-slate-100 text-left transition-all group shadow-sm hover:shadow">
                    <CheckCircle size={20} className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-semibold text-slate-700 group-hover:text-emerald-700">Export</div>
                </button>

                <button className="col-span-1 px-3 py-3 bg-white hover:bg-slate-50 hover:border-slate-300 rounded-xl border border-slate-100 text-left transition-all group shadow-sm hover:shadow">
                    <Share2 size={20} className="text-slate-500 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Share</div>
                </button>
            </div>
        </div>
    );
};

export default QuickActions;
