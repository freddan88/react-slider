import React from 'react';
import PropTypes from 'prop-types';
import './Art.css';

const Art = props => {
    return (
        <div>
            <img src={props.items.urls.regular} alt={props.items.alt_description} />
        </div>
    );
};

Art.propTypes = {
    items: PropTypes.object
};

export default Art;