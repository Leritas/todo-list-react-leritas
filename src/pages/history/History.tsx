import { useTodo } from "src/entities/todo";
import { ClearHistory } from "./ui/ClearHistory";
import { HistoryItem } from "./ui/HistoryItem";
import "./history.css";

export function History() {
  const { listOfDeletedTodos } = useTodo();

  return (
    <section className="history">
      <h1 className="history-title">История удаленных из списка задач:</h1>
      {listOfDeletedTodos.length > 0 ? (
        <>
          <ClearHistory />
          <ul className="history-list">
            {listOfDeletedTodos.map((todo) => (
              <HistoryItem key={todo.key} todoKey={todo.key} todo={todo} />
            ))}
          </ul>
        </>
      ) : (
        <div className="no-history-items">История удаленных задач пуста</div>
      )}
    </section>
  );
}
