import React, { useState } from 'react';
import Header from './Header';
import CommandMenu from '../ui/CommandMenu';
import SetupScreen from './SetupScreen';
import AmbientBackground from './AmbientBackground';
import { Outlet } from 'react-router-dom';
import { useSession } from '../../context/SessionContext';

const MainLayout = () => {
    const { isInitialized } = useSession();

    if (!isInitialized) {
        return <SetupScreen />;
    }

    return (
        <div className="h-screen w-screen overflow-hidden font-sans text-slate-900 relative flex flex-col">
            <AmbientBackground />

            {/* Header stays at top */}
            <div className="relative z-50">
                <Header />
            </div>

            {/* Main Content Area - Scrollable Container */}
            <main className="flex-1 relative z-10 overflow-hidden">
                <div className="h-full w-full max-w-[1800px] mx-auto p-6">
                    <Outlet />
                </div>
            </main>

            {/* Global Command Menu (Hidden by default, triggered by Cmd+K) */}
            <CommandMenu />
        </div>
    );
};

export default MainLayout;
