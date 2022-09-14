import React from "react";
import Done from "../image/Done.svg";
import Delete from "../image/Delete.svg";
import "../scss/TodoItem.scss";
import { useDispatch } from "react-redux";
import { toggleComplited, removeTodo } from "../redux/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggletodoHandler = (id) => {
    dispatch(toggleComplited(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="main">
      <div onClick={() => toggletodoHandler(todo.id)} className="complete">
        <img src={Done} alt="Done" />
      </div>
      <div className={todo.complited ? "text-true" : "text-false"}>
        {todo.text}
      </div>
      <div onClick={() => removeTodoHandler(todo.id)} className="delete">
        <img src={Delete} alt="Delete" />
      </div>
    </div>
  );
}
