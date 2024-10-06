import React, {useState, useEffect, useCallback} from 'react';
import {ReactFlow,
        useNodesState,
        useEdgesState,
        applyEdgeChanges
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {waterBlue} from './edges'

import WaterTankNode from './waterTankNode.jsx'
import UnitNode from './unitNode.jsx';

const default_edges = [
  {id:'e1-2_A', source: '1', target: '2_A'},
  {id:'e2_V-1', source: '2_V', target: '1'},

  {id:'e2_A-3_1', source:'2_A', target: '3_1'},
  {id:'e2_A-3_2', source:'2_A', target: '3_2'},
  {id:'e2_A-3_3', source:'2_A', target: '3_3'},
  {id:'e2_A-3_4', source:'2_A', target: '3_4'},

  {id:'e3_1-2_V', source:'3_1', target: '2_V'},
  {id:'e3_2-2_V', source:'3_2', target: '2_V'},
  {id:'e3_3-2_V', source:'3_3', target: '2_V'},
  {id:'e3_4-2_V', source:'3_4', target: '2_V'},
]

const default_nodes = [
  {
    id: '1',
    type: 'waterTank',
    position: {x:160, y:-75},
  },
  {
    id: '2_A',
    position: {x:0, y:50},
    targetPosition: 'top',
    sourcePosition: 'bottom',
    color: '#fff',
    data: {label: 'Artery Pipe'}
  },
  {
    id:'2_V',
    position:{x:400, y:50},
    targetPosition: 'bottom',
    sourcePosition: 'top',
    data: {label: 'Vein Pipe'},
  },
  {
    id: '3_1',
    position: {x:200, y:150},
    type: 'unitNode',
    data: {name: '1', toggleInfluxAnimation: ()=>toggleInfluxAnimation('3_1'), toggleOutfluxAnimation: ()=>toggleOutfluxAnimation('3_1')}
  },
  {
    id: '3_2',
    position: {x:200, y:225},
    type: 'unitNode',
    data: {name : '2',toggleInfluxAnimation: ()=>toggleInfluxAnimation('3_2'), toggleOutfluxAnimation: ()=>toggleOutfluxAnimation('3_2')}
  },
  {
    id: '3_3',
    position: {x:200, y:295},
    type: 'unitNode',
    data: {name : '3',toggleInfluxAnimation: ()=>toggleInfluxAnimation('3_3'), toggleOutfluxAnimation: ()=>toggleOutfluxAnimation('3_3')}
  },
  {
    id: '3_4',
    position: {x:200, y:365},
    type: 'unitNode',
    data: {name : '4',toggleInfluxAnimation: ()=>toggleInfluxAnimation('3_4'), toggleOutfluxAnimation: ()=>toggleOutfluxAnimation('3_4')}
  }
]

const NodeDiagram = () => {
    const default_nodes = [
      {
        id: '1',
        type: 'waterTank',
        position: {x:160, y:-75},
      },
      {
        id: '2_A',
        position: {x:0, y:50},
        targetPosition: 'top',
        sourcePosition: 'bottom',
        color: '#fff',
        data: {label: 'Artery Pipe'}
      },
      {
        id:'2_V',
        position:{x:400, y:50},
        targetPosition: 'bottom',
        sourcePosition: 'top',
        data: {label: 'Vein Pipe'},
      },
      {
        id: '3_1',
        position: {x:200, y:150},
        type: 'unitNode',
        data: {name: '1', toggleInfluxAnimation: toggleInfluxAnimation, toggleOutfluxAnimation:toggleOutfluxAnimation}
      },
      {
        id: '3_2',
        position: {x:200, y:225},
        type: 'unitNode',
        data: {name : '2', toggleInfluxAnimation: toggleInfluxAnimation, toggleOutfluxAnimation:toggleOutfluxAnimation}
      },
      {
        id: '3_3',
        position: {x:200, y:295},
        type: 'unitNode',
        data: {name : '3', toggleInfluxAnimation: toggleInfluxAnimation, toggleOutfluxAnimation:toggleOutfluxAnimation}
      },
      {
        id: '3_4',
        position: {x:200, y:365},
        type: 'unitNode',
        data: {name : '4', toggleInfluxAnimation: toggleInfluxAnimation, toggleOutfluxAnimation:toggleOutfluxAnimation}
      }
    ]

    const nodeTypes = {waterTank: WaterTankNode, unitNode: UnitNode};
    const [edges, setEdges] = useState(default_edges)
    const [nodes, setNodes] = useState(default_nodes)

    function toggleInfluxAnimation(n_id) {
      setEdges((currentEdges) =>
        currentEdges.map((currentEdge) => {
          const edge = {...currentEdge} //we must do swap instead of update to force react to realize this require new rendering
          if ((currentEdge.source == '1' && currentEdge.target == '2_A') || (currentEdge.source == '2_A' && currentEdge.target == n_id)){
            //applying animate effect
            edge.animated = true;
            edge.style = {};
            edge.style["stroke"] = waterBlue;
            edge.style["stroke-width"] = 2;
          }
          return edge
        })
      )
    }

    function toggleOutfluxAnimation(n_id) {
      console.log("toggling outflux")
      setEdges((currentEdges) =>
        currentEdges.map((currentEdge) => {
          const edge = {...currentEdge} //we must do swap instead of update to force react to realize this require new rendering
          if ((currentEdge.source == '2_V' && currentEdge.target == '1') || (currentEdge.source == n_id && currentEdge.target == '2_V')){
            //applying animate effect
            edge.animated = true;
            edge.style = {};
            edge.style["stroke"] = waterBlue;
            edge.style["stroke-width"] = 2;
          }
          return edge
        })
      )
    }

    return (
        <div style = {{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes = {nodes}
                edges = {edges}
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