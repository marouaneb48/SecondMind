import LiveTranscript from '../../components/modules/transcript/LiveTranscript';
import Timeline from '../../components/modules/transcript/Timeline';
import { useSession } from '../../context/SessionContext';
import TaskBoard from '../../components/modules/tasks/TaskBoard';

const MeetingDashboard = () => {
    const { transcript, timeline, tasks } = useSession();

    // Data Slices
    const recentTranscript = transcript.slice(-3);
    const recentTimeline = timeline.slice(-10); // Still pass limited slice, but Timeline component now handles full view if needed, though this is dashboard summary
    const recentTasks = tasks ? tasks.slice(-5) : [];

    return (
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)] animate-in fade-in zoom-in-95 duration-300">
            {/* Left Column - Transcript (Expanded) */}
            <div className="col-span-4 flex flex-col gap-6 h-full overflow-hidden">
                <LiveTranscript transcript={recentTranscript} />
            </div>

            {/* Middle Column - Action Board */}
            <div className="col-span-5 h-full overflow-hidden">
                <TaskBoard initialTasks={recentTasks.length ? recentTasks : [{ text: "Review Q1 Goals", assignee: "Team" }, { text: "Approve Budget", assignee: "Finance" }]} />
            </div>

            {/* Right Column - Timeline (Full Height) */}
            <div className="col-span-3 flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-hidden h-full">
                    <Timeline timeline={recentTimeline} />
                </div>
            </div>
        </div>
    );
};

export default MeetingDashboard;
