import React from 'react';
import { useSession } from '../../context/SessionContext';

const AmbientBackground = () => {
    const { sessionType } = useSession();

    // Color definitions based on session type
    const colors = {
        lecture: {
            primary: 'bg-indigo-400',
            secondary: 'bg-violet-400',
            tertiary: 'bg-blue-300'
        },
        meeting: {
            primary: 'bg-emerald-400',
            secondary: 'bg-teal-400',
            tertiary: 'bg-green-300'
        },
        interview: {
            primary: 'bg-rose-400',
            secondary: 'bg-orange-400',
            tertiary: 'bg-pink-300'
        }
    };

    const currentColors = colors[sessionType] || colors.lecture;

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 transition-colors duration-1000">
            {/* Grid Texture Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

            {/* Blob 1 */}
            <div className={`absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float ${currentColors.primary} transition-colors duration-1000`}></div>

            {/* Blob 2 */}
            <div className={`absolute top-[20%] right-[-10%] w-[50vh] h-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float animation-delay-2000 ${currentColors.secondary} transition-colors duration-1000`}></div>

            {/* Blob 3 */}
            <div className={`absolute bottom-[-10%] left-[20%] w-[50vh] h-[50vh] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-float animation-delay-4000 ${currentColors.tertiary} transition-colors duration-1000`}></div>
        </div>
    );
};

export default AmbientBackground;
