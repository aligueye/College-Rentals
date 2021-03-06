import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ text, onClick }) => (
    <div className = 'marker'
        alt={text}
        onClick={onClick}
    />
);

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

export default Marker;