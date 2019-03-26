import React from 'react';
import PropTypes from 'prop-types';
import './Art.css';

const Art = props => {
    console.log(props.items.user.first_name)
    return (
        <div>
            <img src={props.items.urls.full} alt={props.items.alt_description} />
            <p className="credits">Photo by: {props.items.user.first_name}</p>
        </div>
    );
};

Art.propTypes = {
    items: PropTypes.object
};

export default Art;