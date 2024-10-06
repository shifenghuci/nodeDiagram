import { animateInflux, animateOutflux } from "./App"
const waterTankNode = {
    id: '1',
    type: 'waterTank',
    position: {x:160, y:-75},
}

const arteryPipeNode = {
    id: '2_A',
    position: {x:0, y:50},
    targetPosition: 'top',
    sourcePosition: 'bottom',
    color: '#fff',
    data: {label: 'Artery Pipe'}
}

const veinPipeNode = {
    id:'2_V',
    position:{x:400, y:50},
    targetPosition: 'bottom',
    sourcePosition: 'top',
    data: {label: 'Vein Pipe'},
}

const unit1Pipe = {
    id: '3_1',
    position: {x:200, y:150},
    type: 'unitNode',
    data: {name: '1', animateInflux:() => animateInflux('3_1'), animateOutflux:() => animateOutflux('3_1')}
}
const unit2Pipe = {
    id: '3_2',
    position: {x:200, y:225},
    type: 'unitNode',
    data: {name : '2', animateInflux:() => animateInflux('3_2'), animateOutflux:() => animateOutflux('3_2')}
}

const unit3Pipe = {
    id: '3_3',
    position: {x:200, y:295},
    type: 'unitNode',
    data: {name : '3', animateInflux:() => animateInflux('3_3'), animateOutflux:() => animateOutflux('3_3')}
}

const unit4Pipe = {
    id: '3_4',
    position: {x:200, y:365},
    type: 'unitNode',
    data: {name : '4', animateInflux:() => animateInflux('3_4'), animateOutflux:() => animateOutflux('3_4')}
}


export default [
    waterTankNode,
  
    arteryPipeNode,
    veinPipeNode,
  
    unit1Pipe,
    unit2Pipe,
    unit3Pipe,
    unit4Pipe,
];