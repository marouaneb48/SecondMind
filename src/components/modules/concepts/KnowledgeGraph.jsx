import React, { useMemo, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import GlassCard from '../../ui/GlassCard';
import { Brain } from 'lucide-react';

// Custom Node Component
const ConceptNode = ({ data }) => {
    return (
        <div className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200 shadow-lg min-w-[120px] text-center">
            <Handle type="target" position={Position.Top} className="!bg-indigo-400 !w-2 !h-2" />
            <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-0.5 max-w-[150px] truncate">{data.label}</div>
            {data.desc && <div className="text-[9px] text-slate-500 max-w-[150px] truncate">{data.desc}</div>}
            <Handle type="source" position={Position.Bottom} className="!bg-indigo-400 !w-2 !h-2" />
        </div>
    );
};

const nodeTypes = {
    concept: ConceptNode,
};

const KnowledgeGraph = ({ concepts = [] }) => {
    // Transform concepts into nodes/edges
    const { nodes, edges } = useMemo(() => {
        if (!concepts.length) return { nodes: [], edges: [] };

        const newNodes = [];
        const newEdges = [];

        // Center point
        const centerX = 250;
        const startY = 50;

        concepts.forEach((concept, idx) => {
            // Visualize as a tree/flow going down
            // Alternate left/right slightly for visual interest
            const xOffset = (idx % 2 === 0 ? -1 : 1) * (Math.random() * 100 + 50);
            const x = centerX + (idx === 0 ? 0 : xOffset);
            const y = startY + (idx * 100);

            newNodes.push({
                id: `node-${idx}`,
                type: 'concept',
                position: { x, y },
                data: { label: concept.term, desc: concept.definition }
            });

            // Connect to previous node to form a chain (Knowledge Chain)
            if (idx > 0) {
                newEdges.push({
                    id: `e-${idx - 1}-${idx}`,
                    source: `node-${idx - 1}`,
                    target: `node-${idx}`,
                    animated: true,
                    style: { stroke: '#818cf8', strokeWidth: 2 },
                });
            }
        });

        return { nodes: newNodes, edges: newEdges };
    }, [concepts]);

    // React Flow manages internal state, but we are driving it from props mainly.
    // For full interactivity we use the hooks but initialize with our specific data.
    // Since 'concepts' updates frequentlly, we might just pass them as default or force update.
    // For this demo, we let React Flow handle the view state but force the graph topology.

    return (
        <GlassCard className="h-full w-full overflow-hidden flex flex-col">
            <div className="px-5 py-3 border-b border-indigo-100 flex items-center gap-2 bg-indigo-50/30">
                <Brain size={16} className="text-indigo-600" />
                <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Live Knowledge Graph</span>
            </div>
            <div className="flex-1 bg-slate-50/50">
                {/* Key: Restart flow when nodes count changes significantly to re-layout, or just let it be */}
                <ReactFlow
                    key={nodes.length} // Force re-render simple strategy for now
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    fitView
                    attributionPosition="bottom-right"
                >
                    <Background color="#e0e7ff" gap={20} size={1} />
                    <Controls showInteractive={false} className="!shadow-none !border-none !bg-white/50" />
                </ReactFlow>
            </div>
        </GlassCard>
    );
};

export default KnowledgeGraph;
