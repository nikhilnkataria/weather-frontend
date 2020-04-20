import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card" data-test="card-component">
      <div className="card-header">
        <h3 className="card-title" data-test="card-title">
          {props.title}
        </h3>
      </div>
      <div className="card-body" data-test="card-body">
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = { title: PropTypes.string.isRequired };

export default Card;
