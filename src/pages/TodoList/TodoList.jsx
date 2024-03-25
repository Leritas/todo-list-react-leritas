import { useContext } from "react";
import { ListsContext } from "src/entities/todo";
import CreateTodo from "./ui/CreateTodo";
import { TodoListControls } from "./ui/TodoListControls";
import TodoItem from "./ui/TodoItem";
import "./todolist.css";

export function TodoList() {
  const { listOfTodos } = useContext(ListsContext);

  return (
    <section>
      <CreateTodo></CreateTodo>

      <div className="todo-list">
        {listOfTodos.length > 0 ? (
          <TodoListControls />
        ) : (
          <div className="nothing-in-list">Пока ничего не запланировано</div>
        )}

        <ul>
          {listOfTodos.map((todo) => (
            <TodoItem todo={todo} todoKey={todo.key} key={todo.key} />
          ))}
        </ul>
      </div>
    </section>
  );
}
