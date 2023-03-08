import React from 'react';
import PropTypes from 'prop-types';

RemainingTodos.propTypes = {
  remainings: PropTypes.func.isRequired,
};
export default function RemainingTodos(props) {
  return <span>{props.remainings()} items remaining</span>;
}
