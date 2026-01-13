import React from 'react';

const GlassCard = ({ children, className = "" }) => {
    return (
        <div className={`
            relative overflow-hidden
            bg-white/70 backdrop-blur-2xl
            border border-white/50
            rounded-2xl shadow-xl shadow-slate-200/50
            ${className}
        `}>
            {/* Specular Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>

            {/* Noise Texture (optional, using simple overlay for now) */}
            {/* <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div> */}

            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
