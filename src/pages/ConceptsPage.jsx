import React from 'react';
import KnowledgeGraph from '../components/modules/concepts/KnowledgeGraph';
import { useSession } from '../context/SessionContext';

const ConceptsPage = () => {
    const { concepts } = useSession();

    return (
        <div className="h-full w-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
            <div className="flex-1 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                <KnowledgeGraph concepts={concepts} />
            </div>
        </div>
    );
};

export default ConceptsPage;
