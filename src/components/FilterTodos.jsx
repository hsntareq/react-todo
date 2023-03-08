import React from 'react';

export default function FilterTodos(props) {
  return (
    <div className="flex gap-1">
      <button
        onClick={() => {
          props.setFilter('all');
          props.filteredTodos('all');
        }}
        className="border border-transparent px-3 py-1 hover:border-inherit hover:border rounded-md hover:bg-slate-100 active:bg-slate-200"
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter('active');
          props.filteredTodos('active');
        }}
        className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200"
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter('completed');
          props.filteredTodos('completed');
        }}
        className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200"
      >
        Completed
      </button>
    </div>
  );
}
