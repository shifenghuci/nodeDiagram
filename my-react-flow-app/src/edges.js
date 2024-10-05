const waterBlue = '#ADD8E6'

export default [
    {id:'e1-2_A', source: '1', target: '2_A', animated: true, style: { stroke: waterBlue}},
    {id:'e2_V-1', source: '2_V', target: '1', animated: true, style: { stroke: waterBlue}},

    {id:'e2_A-3_1', source:'2_A', target: '3_1', animated: true, style: { stroke: waterBlue}},
    {id:'e2_A-3_2', source:'2_A', target: '3_2', animated: false},
    {id:'e2_A-3_3', source:'2_A', target: '3_3', animated: false},
    {id:'e2_A-3_4', source:'2_A', target: '3_4', animated: false},

    {id:'e3_1-2_v', source:'3_1', target: '2_V', animated: false},
    {id:'e3_2-2_v', source:'3_2', target: '2_V', animated: true, style: { stroke: waterBlue}},
    {id:'e3_3-2_v', source:'3_3', target: '2_V', animated: false},
    {id:'e3_4-2_v', source:'3_4', target: '2_V', animated: false},
];