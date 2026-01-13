import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import NotesPage from './pages/NotesPage';
import TranscriptPage from './pages/TranscriptPage';
import ExplainerPage from './pages/ExplainerPage';
import TasksPage from './pages/TasksPage';
import TimelinePage from './pages/TimelinePage';
import QAPage from './pages/QAPage';
import ConceptsPage from './pages/ConceptsPage';
import ReferencesPage from './pages/ReferencesPage';

const App = () => {
    return (
        <SessionProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="notes" element={<NotesPage />} />
                        <Route path="explain" element={<ExplainerPage />} />
                        <Route path="transcript" element={<TranscriptPage />} />
                        <Route path="tasks" element={<TasksPage />} />
                        <Route path="timeline" element={<TimelinePage />} />
                        <Route path="qa" element={<QAPage />} />
                        <Route path="concepts" element={<ConceptsPage />} />
                        <Route path="references" element={<ReferencesPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SessionProvider>
    );
};

export default App;
