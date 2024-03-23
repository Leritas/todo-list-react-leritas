import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "../components/history/history.css";
import HistoryItem from "../components/history/HistoryItem";

export default function History() {
  const [listOfDeleted, setListOfDeleted] = useState([]);

  useEffect(() => {
    setListOfDeleted(
      JSON.parse(localStorage.getItem("localListOfDeleted")) || []
    );
  }, []);

  function handleDeleteClick(e) {
    let newListOfDeleted = [...listOfDeleted];
    newListOfDeleted.splice(e.target.dataset.index, 1);

    setListOfDeleted(newListOfDeleted);
    localStorage.setItem(
      "localListOfDeleted",
      JSON.stringify(newListOfDeleted)
    );
  }

  function handleDeleteAllClick() {
    setListOfDeleted([]);
    localStorage.setItem("localListOfDeleted", JSON.stringify([]));
  }

  const displayListOfDeleted = [];
  listOfDeleted.forEach((historyItem, index) => {
    displayListOfDeleted.push(
      <HistoryItem
        key={index}
        index={index}
        historyItem={historyItem}
        handleDeleteClick={handleDeleteClick}
      />
    );
  });
  return (
    <section>
      <h1 className="history-title">История удаленных из списка задач:</h1>
      {displayListOfDeleted.length ? (
        <>
          <Popup
            trigger={
              <button className="clear-history">Очистить историю</button>
            }
            position="bottom center"
          >
            <div className="popup-bg done-all">
              <div className="popup-message">Удалить окончательно?</div>
              <button
                className="done-all"
                onClick={handleDeleteAllClick}
                style={{ color: "var(--accent-color" }}
              >
                ДА
              </button>
            </div>
          </Popup>

          <div>
            <ul className="history-list">{displayListOfDeleted}</ul>
          </div>
        </>
      ) : (
        <div className="no-history-items">История удаленных задач пуста</div>
      )}
    </section>
  );
}
