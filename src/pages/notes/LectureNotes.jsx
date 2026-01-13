import React from 'react';
import SmartEditor from '../../components/editor/SmartEditor';

const LectureNotes = () => {
    return (
        <div className="h-full w-full flex justify-center animate-in fade-in zoom-in-95 duration-500">
            <SmartEditor title="Lecture Notes" mode="lecture" />
        </div>
    );
};

export default LectureNotes;
