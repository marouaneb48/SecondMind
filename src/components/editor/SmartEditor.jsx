import React, { useEffect, useState, useRef } from 'react';
import { useSession } from '../../context/SessionContext';
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import GlassCard from '../ui/GlassCard';
import { PenTool } from 'lucide-react';

const SmartEditor = ({ title, mode = "lecture" }) => {
    const { transcript } = useSession();
    // Track how many transcript items we've already added
    const [processedCount, setProcessedCount] = useState(0);

    // Creates a new editor instance.
    const editor = useCreateBlockNote({
        initialContent: [
            {
                type: "heading",
                props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 1 },
                content: title || "Session Notes",
            },
            {
                type: "paragraph",
                content: "Start typing here or wait for AI to generate notes..."
            }
        ]
    });

    // AI Sync Logic
    useEffect(() => {
        if (!editor) return;

        // processing new transcript items
        if (transcript.length > processedCount) {
            const newItems = transcript.slice(processedCount);
            const blocksToInsert = [];

            newItems.forEach(item => {
                // Determine block type based on logic
                if (['introduction', 'methodology', 'synthesis', 'question'].includes(item.type)) {
                    blocksToInsert.push({
                        type: "heading",
                        props: { level: 2 },
                        content: item.type.charAt(0).toUpperCase() + item.type.slice(1)
                    });
                }

                blocksToInsert.push({
                    type: "paragraph",
                    content: item.text
                });
            });

            if (blocksToInsert.length > 0) {
                // Find the last block to insert after
                const lastBlock = editor.document[editor.document.length - 1];
                editor.insertBlocks(blocksToInsert, lastBlock, "after");
            }

            setProcessedCount(transcript.length);
        }
    }, [transcript, processedCount, editor]);

    return (
        <GlassCard className="h-full flex flex-col w-full max-w-5xl mx-auto overflow-hidden">
            {/* Simple Toolbar Header */}
            <div className="px-8 py-3 border-b border-slate-100/50 flex items-center justify-between text-slate-400 select-none bg-white/40 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <PenTool size={14} />
                    {mode === 'meeting' ? 'Minutes' : 'Notes'} Editor
                </div>
                <div className="text-xs font-medium text-slate-400">
                    {processedCount} AI sources processed
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/40">
                <div className="max-w-4xl mx-auto py-12 px-8 min-h-[500px]">
                    <BlockNoteView editor={editor} theme="light" />
                </div>
                <div className="h-[20vh]"></div>
            </div>
        </GlassCard>
    );
};

export default SmartEditor;
