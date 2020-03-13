import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="sc-AxirZ kzFQdy card-title">{props.title}</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

Card.propTypes = { title: PropTypes.string.isRequired };

export default Card;
