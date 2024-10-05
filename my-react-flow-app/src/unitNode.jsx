import {Handle, Position} from '@xyflow/react'
import menuIcon from './assets/Vector.svg'
function UnitNode({data}) {
    const isConnectable = true;

    const handleInflux = () => {
        console.log(`Influx ${data.name}`);
    };

    const handleOutflux = () => {
        console.log(`Outflux ${data.name}`);
    };
    return (
        <div className="unit-node">
            <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
            <div>
                <button className="pop-button" id="influx" onMouseEnter={handleInflux}>Influx</button>
                <button className="pop-button" id="outflux" onMouseEnter={handleOutflux}>Outflux</button>

                <label>{data.name}</label>
                <button id="setting-button" onClick={()=>console.log("setting")}>
                    <img id = "gear" src = {menuIcon}/>
                </button>
            </div>
            <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
        </div>
    );

}

export default UnitNode