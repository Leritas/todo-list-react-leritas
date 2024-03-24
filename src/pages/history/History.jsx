import { useContext } from "react";
import { ListsContext } from "../../contexts/lists-context/ListsContextProvider";
import ClearHistory from "./ui/ClearHistory";
import HistoryItem from "./ui/HistoryItem";
import "./history.css";

export function History() {
  const { listOfDeleted } = useContext(ListsContext);

  return (
    <section className="history">
      <h1 className="history-title">История удаленных из списка задач:</h1>
      {listOfDeleted.length ? (
        <>
          <ClearHistory />
          <ul className="history-list">
            {listOfDeleted.map((item, index) => (
              <HistoryItem key={item.key} index={index} item={item} />
            ))}
          </ul>
        </>
      ) : (
        <div className="no-history-items">История удаленных задач пуста</div>
      )}
    </section>
  );
}
