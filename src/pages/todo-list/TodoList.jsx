import { useContext } from "react";
import { ListsContext } from "../../contexts/lists-context/ListsContextProvider";
import CreateTodo from "./ui/CreateTodo";
import { TodoListControls } from "./ui/todo-list-controls";
import TodoItem from "./ui/TodoItem";
import "./todolist.css";

export function TodoList() {
  const { listOfTodos } = useContext(ListsContext);

  return (
    <section>
      <CreateTodo></CreateTodo>

      <div className="todo-list">
        {listOfTodos.length ? (
          <TodoListControls />
        ) : (
          <div className="nothing-in-list">Пока ничего не запланировано</div>
        )}

        <ul>
          {listOfTodos.map((todo, index) => (
            <TodoItem todo={todo} index={index} key={todo.key} />
          ))}
        </ul>
      </div>
    </section>
  );
}
