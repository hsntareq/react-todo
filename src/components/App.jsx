import { useState } from 'react';
import '../App.scss';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Title one',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Title two',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Title three',
      isComplete: true,
    },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idTodo, setIdTodo] = useState('');

  const addTodo = e => {
    e.preventDefault();

    if (todoInput.trim().length === 0) return;

    setTodos([
      ...todos,
      {
        id: idTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput('');
    setIdTodo(prevIdTodo => prevIdTodo + 1);
  };

  const handleInput = e => {
    setTodoInput(e.target.value);
  };
  const deleteTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };
  const completeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  return (
    <div className="App shadow-lg p-5 my-10 border rounded">
      <div className="todo_app">
        <h1 className="mb-3">Todo Application</h1>

        <form action="" onSubmit={addTodo}>
          <input
            className="border-b w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-100 ring-inset"
            type="text"
            value={todoInput}
            onChange={handleInput}
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="divide-y divide-slate-200">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex flex-row justify-between items-center"
            >
              <input
                className="cursor-pointer"
                type="checkbox"
                id={`it${todo.id}`}
                onChange={() => completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              />
              <label
                className={`cursor-pointer flex-1 p-3 ${
                  todo.isComplete && 'line-through'
                }`}
                htmlFor={`it${todo.id}`}
              >
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="button p-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <div className="border-t border-b flex justify-between py-3 items-center">
          <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
            Check All
          </button>
          <span>3 items remaining</span>
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
            <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
