import React from 'react';
import { useSession } from '../context/SessionContext';
import LectureDashboard from './dashboard/LectureDashboard';
import MeetingDashboard from './dashboard/MeetingDashboard';
import InterviewDashboard from './dashboard/InterviewDashboard';

const Dashboard = () => {
    const { sessionType } = useSession();

    if (sessionType === 'meeting') {
        return <MeetingDashboard />;
    }

    if (sessionType === 'interview') {
        return <InterviewDashboard />;
    }

    // Default to Lecture logic (covers 'lecture', 'interview', and unknown)
    return <LectureDashboard />;
};

export default Dashboard;
