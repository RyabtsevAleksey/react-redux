import "../scss/ToDoApp.scss";
import Pen from "../image/pen.svg";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 } from "uuid";
import TodoItem from "../components/ToDoItem";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = React.useState("");
  const todos = useSelector((state) => state.todoAction.todos);

  const addTodoHandler = () => {
    const todoObj = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todoObj));
    setTodoValue("");
  };

  return (
    <div className="todo-app">
      <h2>2. Redux toolkit Todo App (todoSlice)</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className="todo-input"
          type="text"
          placeholder="Type something"
        />
        <button
          onClick={() => addTodoHandler()}
          className="submit-btn"
          type="submit"
        >
          Submit
        </button>
        <img className="todo-pen" src={Pen} alt="pen" />
      </form>
      {
        todos.map((todo) =>(
          <TodoItem id={todo.id} todo={todo} />
        ))
      }
    </div>
  );
};

export default ToDoApp;
