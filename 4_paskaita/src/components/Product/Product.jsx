/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { useState } from "react";
import "./Product.css";

function Product(props) {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount((previousCount) => previousCount + 1);
    };
    
    const decrement = () => {
        setCount((previousCount) => previousCount - 1);
    };

    return (
        <div className="bodyDiv">
            <div className="imageDiv">
                <img className="image" src={props.imageUrl} alt={props.title} />
            </div>
            <div className="informationDiv">
                <h1 className="title">{props.title}</h1>
                <h3 className="price">{props.price}</h3>
                <div className="description">
                    <p className="discText">{props.description}</p>
                </div>
                <div className="availability">
                    <h3 className="availText">{props.availability}</h3>
                    <div className="counter">
                        <button onClick={increment}>+</button>
                        <h2>{count}</h2>
                        <button onClick={decrement}>-</button>
                    </div>
                   
                </div>
                <h3 className="category">{props.category}</h3>
            </div>

        </div>
    );
}

Product.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    availability: PropTypes.string,
    category: PropTypes.string,
};

export default Product;