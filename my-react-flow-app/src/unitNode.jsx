import {Handle, Position} from '@xyflow/react'
import menuIcon from './assets/Vector.svg'

import axios from "axios"

import {useState} from 'react'

async function getWaterModuleData(id) {
    const url = `http://192.168.4.1/water-module-${id}`;
    
    try {
        const response = await axios.get(url);
        return response.data; // Return the response data
    } catch (error) {
        console.error('An error occurred:', error);
        return null; // Return null if there is an error
    }
}

async function getOutfluxModuleData(id) {
    const url = `http://192.168.4.1/outflux-module-${id}`;
    
    try {
        const response = await axios.get(url);
        return response.data; // Return the response data
    } catch (error) {
        console.error('An error occurred:', error);
        return null; // Return null if there is an error
    }
}





function UnitNode({data}) {
    const isConnectable = true;
    function updateInflux_active(){
        console.log(`Influx ${data.name}`);
        data.animateInflux();
        //axios call here
        getWaterModuleData(data.name)
            .then(data => {
                if (data) {
                    console.log('Data received:', data);
                } else {
                    console.log('Failed to retrieve data.');
                }
    });
    }

    function updateOutflux_active(){
        console.log(`Outflux ${data.name}`);
        data.animateOutflux();
        //axios call here
        //axios call here
        getOutfluxModuleData(data.name)
            .then(data => {
                if (data) {
                    console.log('Data received:', data);
                } else {
                    console.log('Failed to retrieve data.');
                }
    });
    }
    return (
        <div className="unit-node">

            <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
            <div>
                <button className="pop-button" id="influx" onMouseEnter={updateInflux_active}>Influx</button>
                <button className="pop-button" id="outflux" onMouseEnter={updateOutflux_active}>Outflux</button>

                <label>{`Unit ${data.name}`}</label>
                <button id="setting-button" onClick={()=>console.log("setting")}>
                    <img id = "gear" src = {menuIcon}/>
                </button>
            </div>
            <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
        </div>
    );

}

export default UnitNode