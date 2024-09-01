import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !==id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    id={box.id}
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.height}
                    removeBox={removeBox}
                />
            ))}
        </div>
    );
};

export default BoxList;
