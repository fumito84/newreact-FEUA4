import React, { useState, useEffect } from 'react';
import "./Shop.css";

function Shop() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('https://golden-whispering-show.glitch.me');
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
    };

    const deleteButton = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
                ) : (
                <ul>
                  {data.map((item) => (
                    <li key={item.id} className='card'>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <h2 className='price'>€{item.price}</h2>
                        <button className='btn' onClick={() => deleteButton(item.id)}>Ištrinti</button>
                    </li>
                  ))}
                </ul>
            )}
        </div>
    )
}

export default Shop