import React from 'react';
import './view_button.css'; 

const ViewButton = ({ onClick }) => {
    return (
        <button id="viewMoreButton" onClick={onClick}>
            View more
        </button>
    );
}

export default ViewButton;

