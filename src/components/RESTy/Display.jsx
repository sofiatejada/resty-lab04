import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

export default function Display(response) {
  return (
    <div aria-label="res" role="stuff">
      <ReactJson src={response} />
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
