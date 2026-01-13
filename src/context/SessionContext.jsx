import React, { createContext, useContext, useState } from 'react';
import { useLecturePlayback } from '../hooks/useLecturePlayback';

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const lectureState = useLecturePlayback();

    // New State for Session Context
    const [sessionType, setSessionType] = useState('lecture'); // 'lecture' | 'meeting' | 'interview'
    const [isInitialized, setIsInitialized] = useState(false);
    const [sessionTitle, setSessionTitle] = useState('');

    const initializeSession = (type, title) => {
        setSessionType(type);
        setSessionTitle(title);
        setIsInitialized(true);
    };

    const value = {
        ...lectureState,
        sessionType,
        isInitialized,
        sessionTitle,
        initializeSession
    };

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};
