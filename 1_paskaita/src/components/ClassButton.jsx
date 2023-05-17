import React from "react";
import PropTypes from "prop-types"

class ClassButton extends React.Component {
    render () {
        return <button>{this.props.name}</button>
    }
}

ClassButton.propTypes = {
    name: PropTypes.string
}

export default ClassButton;