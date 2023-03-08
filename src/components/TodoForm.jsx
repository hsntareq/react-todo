import React, { useState } from 'react';
import PropTypes from 'prop-types';

PropTypes.PropTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');

  const handleInput = e => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (todoInput.trim().length === 0) return;
    props.addTodo(todoInput);

    setTodoInput('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        className="border-b w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-100 ring-inset"
        type="text"
        value={todoInput}
        onChange={handleInput}
        placeholder="What do you need to do?"
      />
    </form>
  );
}
