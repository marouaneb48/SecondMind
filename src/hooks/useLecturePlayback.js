import { useState, useEffect } from 'react';
import { lectureData } from '../data/lectures.js';
import { conceptDefinitions } from '../data/concepts.js';
import { citationDetails } from '../data/citations.js';

export const useLecturePlayback = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [transcript, setTranscript] = useState([]);
    const [citations, setCitations] = useState([]);
    const [concepts, setConcepts] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [qaList, setQaList] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentTime(prevTime => {
                    const nextTime = prevTime + 1;

                    if (nextTime <= lectureData.length) {
                        const entry = lectureData[nextTime - 1];

                        // Perform updates directly, not as side effects of this setter
                        // Note: In a real app we might use a reducer, but here we just need to ensure
                        // these run once per interval tick.
                        // However, since we are inside the callback, we can't reliably call other hooks if this runs twice.
                        // BETTER APPROACH: Do the check outside.
                        return nextTime;
                    } else {
                        setIsPlaying(false);
                        return prevTime;
                    }
                });
            }, 2500);

            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    // Separate effect to handle data synchronization when time changes
    // This ensures it only runs once per time update.
    useEffect(() => {
        if (currentTime > 0 && currentTime <= lectureData.length) {
            const entry = lectureData[currentTime - 1];

            setTranscript(prev => {
                // Prevent duplicates by checking if the last entry is the same
                if (prev.length > 0 && prev[prev.length - 1].time === entry.time) return prev;
                return [...prev, entry];
            });

            // Add timeline entry
            setTimeline(prev => {
                if (prev.length > 0 && prev[prev.length - 1].time === entry.time) return prev;
                return [...prev, {
                    time: entry.time,
                    type: entry.type,
                    text: entry.text.substring(0, 50) + "..."
                }];
            });

            // Add citations
            if (entry.citations.length > 0) {
                entry.citations.forEach(cit => {
                    setCitations(prev => {
                        if (prev.find(c => c.key === cit)) return prev;
                        return [...prev, { key: cit, ...citationDetails[cit] }];
                    });
                });
            }

            // Add concepts
            entry.concepts.forEach(concept => {
                if (conceptDefinitions[concept]) {
                    setConcepts(prev => {
                        if (prev.find(c => c.name === concept)) return prev;
                        return [...prev, {
                            name: concept,
                            time: entry.time,
                            ...conceptDefinitions[concept]
                        }];
                    });
                }
            });

            // Add tasks
            if (entry.tasks && entry.tasks.length > 0) {
                const newTasks = entry.tasks.map(t => ({ ...t, time: entry.time }));
                setTasks(prev => {
                    // Simple duplicate check based on time and text of first task
                    if (prev.length > 0 && prev.some(t => t.time === entry.time)) return prev;
                    return [...prev, ...newTasks];
                });
            }

            // Add Q&A
            if (entry.qa) {
                setQaList(prev => {
                    if (prev.length > 0 && prev[prev.length - 1].time === entry.time) return prev;
                    return [...prev, { ...entry.qa, time: entry.time }];
                });
            }
        }
    }, [currentTime]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const reset = () => {
        setIsPlaying(false);
        setTranscript([]);
        setCitations([]);
        setConcepts([]);
        setTasks([]);
        setQaList([]);
        setTimeline([]);
        setCurrentTime(0);
    };

    return {
        isPlaying,
        currentTime,
        transcript,
        citations,
        concepts,
        tasks,
        qaList,
        timeline,
        togglePlay,
        reset
    };
};
