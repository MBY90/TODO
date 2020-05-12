import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo ,editTodo}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
       <form>
       <input type="text" className="input" name="edit" id="edit"/>
         <button onClick={() => editTodo(index,document.getElementById('edit').value)}>Edit</button>
         </form>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handelclick = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form  >
      <input
        type="text"
        className="input"
        value={value}
       onChange={e => setValue(e.target.value)}
        
      />
      <button onClick={handelclick}>Add </button>
    </form>
  );
}


function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React Hooks",
      isCompleted: false
    },
    {
      text: "search and understand todolist app in internet",
      isCompleted: false
    },
    {
      text: "Go to the other CP ",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const editTodo = (index, text)=>e => {
    const newTodos = [...todos];
    newTodos[index]=e.target.text;
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;