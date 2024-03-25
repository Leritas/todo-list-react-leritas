import { createContext, useState } from "react";

export const ListsContext = createContext(null);

export const ListsContextProvider = ({ children }) => {
  const [listOfDeletedTodos, setListOfDeletedTodos] = useState(
    getListOfDeletedTodos()
  );
  const [listOfTodos, setListOfTodos] = useState(getListofTodos());

  function getListOfDeletedTodos() {
    return JSON.parse(
      localStorage.getItem("localListOfDeleted") ||
        localStorage.setItem("localListOfDeleted", "[]")
    );
  }

  function getListofTodos() {
    return JSON.parse(
      localStorage.getItem("localListOfTodos") ||
        localStorage.setItem("localListOfTodos", "[]")
    );
  }

  function updateListOfDeletedTodos(newListOfDeletedTodos) {
    setListOfDeletedTodos(newListOfDeletedTodos);
    localStorage.setItem(
      "localListOfDeleted",
      JSON.stringify(newListOfDeletedTodos)
    );
  }

  function updateListOfTodos(newListOfTodos) {
    setListOfTodos(newListOfTodos);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodos));
  }

  return (
    <ListsContext.Provider
      value={{
        listOfDeletedTodos,
        updateListOfDeletedTodos,
        listOfTodos,
        updateListOfTodos,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
