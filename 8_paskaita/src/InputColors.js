import React, { useState } from "react";

const InputColors = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getBackgroundColor = () => {
    if (inputText.length === 6) {
      return "green";
    } else if (inputText.length > 3) {
      return "red";
    } else {
      return "white";
    }
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(), padding: "10px" }}>
      <input type="text" value={inputText} onChange={handleInputChange} />
    </div>
  );
};

export default InputColors;
