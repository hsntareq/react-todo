import React from 'react';

export default function FilterTodos(props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          props.setFilter('all');
          props.filteredTodos('all');
        }}
        className={`px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200 focus:ring-1 hover:ring-1 active:ring-1 ring-gray-300 ${
          props.filter === 'all' ? 'ring-1 bg-slate-50' : 'ring-0'
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter('active');
          props.filteredTodos('active');
        }}
        className={`px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200 focus:ring-1 hover:ring-1 active:ring-1 ring-gray-300 ${
          props.filter === 'active' ? 'ring-1 bg-slate-50' : 'ring-0'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter('completed');
          props.filteredTodos('completed');
        }}
        className={`px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200 focus:ring-1 hover:ring-1 active:ring-1 ring-gray-300 ${
          props.filter === 'completed' ? 'ring-1 bg-slate-50' : 'ring-0'
        }`}
      >
        Completed
      </button>
    </div>
  );
}
