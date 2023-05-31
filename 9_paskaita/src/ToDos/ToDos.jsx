import React, { useState } from 'react';
import "./ToDos.css";

function Todos() {
    const [entries, setEntries] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, input]);
        setInput('');
    };

    const deleteButton = (index) => {
        const newEntries = [...entries];
        newEntries.splice(index, 1);
        setEntries(newEntries);
    };
    
    return (
        <div className='container'>
            <h1 className='title'>You have {entries.length} Todos</h1>
            <ul>
                {entries.map((entry, index) => (
                    <li key={`${index}_${entry}`}>
                        <p className='entry'>{entry}</p>
                        <button className='btn' onClick={() => deleteButton(index)}>X</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter item' className='input'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className='submit' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Todos