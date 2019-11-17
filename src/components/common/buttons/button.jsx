import React from 'react';
import './buttons.scss'

function handleClick() {
    // Reusable click events here
    console.log('Reusable button was clicked.');

}

function Highlight(props) {
    const className = `highlight ${props.styleLink} ${props.color}`
    return (
        <button onClick={handleClick} className={className}>{props.text}</button>
    );
}

Highlight.defaultProps = {
    styleLink: "link",
};

export default Highlight;