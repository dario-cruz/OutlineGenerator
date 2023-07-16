import React from "react";
import './submitButton.css'

class SubmitButton extends React.Component {
    render() {
        return (
            <button className="submit-button">{this.props.title}</button>
        )
    }
}

export default SubmitButton