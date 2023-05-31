/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../components/SimbolToColor.css"

function SimbolToColor() {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
    };

    const getBackgraundColor = (textLength) => {
        if (textLength < 3) {
            return 'white';
        } else if (textLength < 6) {
            return 'yellow';
        } else if (textLength < 9) {
            return 'green';
        } else {
            return 'red';
        }
    }

    const backgraundColor = getBackgraundColor(text.length);

    return (
        <div className='output' style={{backgraundColor}}>
            <label>
                <input type="text" value={text} onChange={handleInputChange} />
            </label>
        </div>
    );
}

export default SimbolToColor;