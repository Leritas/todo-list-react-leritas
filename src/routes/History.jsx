import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function History() {
  const [listOfDeleted, setListOfDeleted] = useState([]);

  useEffect(() => {
    setListOfDeleted(
      JSON.parse(localStorage.getItem("localListOfDeleted")) || []
    );
  }, []);
  return (
    <section>
      <div className="history-container">
        <h1>История удаленных из списка задач:</h1>
      </div>
    </section>
  );
}
