import React from 'react';
import LiveTranscript from '../../components/modules/transcript/LiveTranscript';
import KeyConcepts from '../../components/modules/concepts/KeyConcepts';
import ReferenceList from '../../components/modules/references/ReferenceList';
import { useSession } from '../../context/SessionContext';

const LectureDashboard = () => {
    const { transcript, concepts, citations } = useSession();

    // Data Slices
    const recentTranscript = transcript.slice(-10); // Show more since we have space
    const recentConcepts = concepts.slice(-4);
    const recentCitations = citations.slice(-6); // Show more since we have space

    return (
        <div className="grid grid-cols-12 gap-6 h-full animate-in fade-in zoom-in-95 duration-300">
            {/* Left Column - Transcript */}
            <div className="col-span-5 h-full overflow-hidden">
                <LiveTranscript transcript={recentTranscript} />
            </div>

            {/* Middle Column - Key Concepts */}
            <div className="col-span-4 h-full overflow-hidden">
                <KeyConcepts concepts={recentConcepts} />
            </div>

            {/* Right Column - Citations */}
            <div className="col-span-3 h-full overflow-hidden">
                <ReferenceList citations={recentCitations} />
            </div>
        </div>
    );
};

export default LectureDashboard;
