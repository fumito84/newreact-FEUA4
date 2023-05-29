import { useState } from "react";

const InputExample2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleYearChange = (event) => {
    setAge(+event.target.value);
  };

  const addYears = (event) => {
    setAge((prevAge) => prevAge + 10);
  };

  return (
    <div>
      <label htmlFor="name">First name:</label>
      <input id="name" type="text" onChange={handleNameChange} />
      <br />
      <label htmlFor="age">Age: </label>
      <input id="age" type="number" onChange={handleYearChange} />
      <button onClick={addYears}>Add 10 Years</button>
      <br />
      <h2>
        {name} your age is: {age}
      </h2>
    </div>
  );
};

export default InputExample2;
