import PropTypes from "prop-types";

function Greeting(props) {
    return <div>Hello, {props.name}! how are you today?</div>;
}

Greeting.propTypes = {
    name: PropTypes.string 
}

Greeting.defaultProps = {
    name: "User"
}

export default Greeting