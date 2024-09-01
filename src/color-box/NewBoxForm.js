import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewForm.css';

const INITIAL_STATE = {
    backgroundColor: "",
    width: "",
    height: "",
}
const NewBoxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color: </label>
            <input
                type="text"
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: </label>
            <input 
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height: </label>
            <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button type="submit">Add Box</button>
        </form>
    );

};

export default NewBoxForm;



