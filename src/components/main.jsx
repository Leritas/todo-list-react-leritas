import { useState } from "react";
import TodoList from "./todoList/todoList";

export default function Main() {
  let content;
  let pages = {
    todoList: true,
    history: false,
    profile: false,
  };

  if (pages.todoList) {
    content = <TodoList />;
  }
  return <section>{content}</section>;
}
