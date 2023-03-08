import React from 'react';
import PropTypes from 'prop-types';

CompleteAllTodos.propTypes = {
  completeOrCheckAll: PropTypes.func.isRequired,
};

export default function CompleteAllTodos(props) {
  return (
    <button
      onClick={props.completeOrCheckAll}
      className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200"
    >
      Check All
    </button>
  );
}
