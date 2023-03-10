import React from 'react';
import PropTypes from 'prop-types';

CompleteAllTodos.propTypes = {
  completeOrCheckAll: PropTypes.func.isRequired,
};

export default function CompleteAllTodos(props) {
  return (
    <button
      onClick={props.completeOrCheckAll}
      className="hover:bg-slate-100 active:bg-slate-200 px-3 py-1 rounded-md ring-1 focus:ring-1 active:ring-1 ring-gray-300 bg-slate-50"
    >
      Check All
    </button>
  );
}
