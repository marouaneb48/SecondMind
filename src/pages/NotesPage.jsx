import React from 'react';
import { useSession } from '../context/SessionContext';
import LectureNotes from './notes/LectureNotes';
import MeetingNotes from './notes/MeetingNotes';

const NotesPage = () => {
    const { sessionType } = useSession();

    if (sessionType === 'meeting') {
        return <MeetingNotes />;
    }

    return <LectureNotes />;
};

export default NotesPage;
