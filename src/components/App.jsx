import { useState } from 'react';
import '../App.scss';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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

  const [idTodo, setIdTodo] = useState('');

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        id: idTodo,
        title: title,
        isComplete: false,
        isEditing: false,
      },
    ]);

    setIdTodo(prevIdTodo => prevIdTodo + 1);
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

  const updateTodo = (e, id) => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        if (e.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = e.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const markAsEditing = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  return (
    <div className="App shadow-lg p-5 my-10 border rounded mx-5">
      <div className="todo_app">
        <h1 className="mb-3">Todo Application</h1>

        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
