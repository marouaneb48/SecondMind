import React from 'react';
import { useSession } from '../context/SessionContext';
import ReferenceList from '../components/modules/references/ReferenceList';

const ReferencesPage = () => {
    const { citations } = useSession();

    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col">
            <ReferenceList citations={citations} />
        </div>
    );
};

export default ReferencesPage;
