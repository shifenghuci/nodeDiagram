import React, {useState, useEffect, useCallback} from 'react';
import {ReactFlow,
        useNodesState,
        useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import initialNodes from './nodes'
import initialEdges, {waterBlue} from './edges'

import WaterTankNode from './waterTankNode.jsx'
import UnitNode from './unitNode.jsx';

const [edges, setEdges] = useState(initialEdges)
export function animateWaterflow(edge) {
    edge.animated = true;
    edge.style = {};
    edge.style["stroke"] = waterBlue;
    console.log(edge)
  }
  
export function getEdge(id){
    return initialEdges.find(edge => edge.id === id) || null;
  }

export function animateInflux(node_id) {
    // //activate animation for tank to Artery pipe edge
    animateWaterflow(getEdge(`e1-2_A`));
    // //activate animation for Artery pipe to currentNode
    animateWaterflow(getEdge(`e2_A-${node_id}`));
  }

export function animateOutflux(node_id){
    // //activate animation for currentNode to Vein pipe
    animateWaterflow(getEdge(`e${node_id}-2_V`));
    // //activate animation for Vein pipe to tank
    animateWaterflow(getEdge(`e2_V-1`));
  }

const NodeDiagram = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const nodeTypes = {waterTank: WaterTankNode, unitNode: UnitNode};

    const onEdgesChange = useCallback(
        (changes) => {
          setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
        },
        [setEdges],
      );

    
    return (
        <div style = {{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes = {nodes}
                edges = {edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                colorMode='dark'
                fitView
                panOnDrag = {false}
                nodesDraggable = {false}
            >
            </ReactFlow>
        </div>
    )
}

export default NodeDiagram