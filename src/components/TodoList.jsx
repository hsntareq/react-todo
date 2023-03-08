import React from 'react';
import PropTypes from 'prop-types';
import RemainingTodos from './RemainingTodos';
import ClearCompleted from './ClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

function TodoList(props) {
  return (
    <>
      <ul className="divide-y divide-slate-200">
        {props.todos.map((todo, index) => (
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
        <div className="flex gap-1">
          <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
            All
          </button>
          <button className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
            Active
          </button>
          <button className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
            Completed
          </button>
        </div>
        <div>
          <ClearCompleted clearCompletedItems={props.clearCompletedItems} />
        </div>
      </div>
    </>
  );
}
export default TodoList;
