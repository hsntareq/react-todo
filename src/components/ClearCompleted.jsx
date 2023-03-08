import React from 'react';
import PropTypes from 'prop-types';

ClearCompleted.propTypes = {
  clearCompletedItems: PropTypes.func.isRequired,
};

export default function ClearCompleted(props) {
  return (
    <div>
      <button
        onClick={props.clearCompletedItems}
        className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200"
      >
        Clear completed
      </button>
    </div>
  );
}
