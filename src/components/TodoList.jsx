import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RemainingTodos from './RemainingTodos';
import ClearCompleted from './ClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import FilterTodos from './FilterTodos';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  remainings: PropTypes.func.isRequired,
  clearCompletedItems: PropTypes.func.isRequired,
  completeOrCheckAll: PropTypes.func.isRequired,
  filteredTodos: PropTypes.func.isRequired,
};

function TodoList(props) {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setFilter('all');
  }, [props.todos]);

  return (
    <>
      <ul className="divide-y divide-slate-200">
        {props.filteredTodos(filter).map((todo, index) => (
          <li
            key={todo.id}
            className="flex flex-row justify-between items-center"
          >
            <input
              className="cursor-pointer"
              type="checkbox"
              id={`it${todo.id}`}
              onChange={() => props.completeTodo(todo.id)}
              checked={todo.isComplete ? true : false}
            />
            {!todo.isEditing ? (
              <label
                className={`cursor-pointer flex-1 p-3 ${
                  todo.isComplete && 'line-through'
                }`}
                htmlFor={`it${todo.id}`}
                onDoubleClick={() => props.markAsEditing(todo.id)}
              >
                {todo.title}
              </label>
            ) : (
              <input
                type="text"
                className="flex-1 pl-1 py-1 my-2 ml-2 outline-none focus:ring-1 ring-inset"
                defaultValue={todo.title}
                onBlur={e => props.updateTodo(e, todo.id)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    props.updateTodo(e, todo.id);
                  }
                  if (e.key === 'Escape') {
                    props.cancelEditing(todo.id);
                  }
                }}
                autoFocus
              />
            )}
            <button
              type="button"
              onClick={() => props.deleteTodo(todo.id)}
              className="button p-2 cursor-pointer"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-b flex justify-between py-3 items-center">
        <CompleteAllTodos completeOrCheckAll={props.completeOrCheckAll} />
        <RemainingTodos remainings={props.remainings} />
      </div>
      <div className="flex justify-between pt-3">
        <FilterTodos
          filteredTodos={props.filteredTodos}
          filter={filter}
          setFilter={setFilter}
        />
        <ClearCompleted clearCompletedItems={props.clearCompletedItems} />
      </div>
    </>
  );
}
export default TodoList;
