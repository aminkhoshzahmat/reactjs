import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { title: action.payload, id: getId(state) }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
    // console.log('hello');
  }
  return state;
}

export default function TodosUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function getId(state) {
    return todos.length ? todos[todos.length - 1].id + 1 : 1;
    // return Date.now();
  }

  function addTodo(e) {
    e.preventDefault();
    if (!task) return; // khali vared nakone

    dispatch({ type: "ADD_TODO", payload: task });

    setTodos((todos) => [
      ...todos,
      {
        title: task,
        id: getId(),
      },
    ]);
    setTask("");
  }

  function removeTodo(id) {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    dispatch({ type: "REMOVE_TODO", payload: id });
    // setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} {todo.title}
            <span
              onClick={removeTodo(todo.id)}
              style={{ color: "red", margin: "10px", cursor: "pointer" }}
            >
              X
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
