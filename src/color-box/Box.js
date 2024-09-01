import React from 'react';
import './Box.css';

const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    const boxStyle = {
        '--background-color': backgroundColor,
        '--width': `${width}px`,
        '--height': `${height}px`,
    };

    return <div className="Box" style={boxStyle}>
        <button className="remove-btn" onClick={() => removeBox(id)}>X</button>
    </div>
}

export default Box;