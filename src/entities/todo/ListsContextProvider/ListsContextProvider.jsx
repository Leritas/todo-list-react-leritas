import { createContext, useState } from "react";
import {
  getListOfDeletedTodos,
  getListofTodos,
  setLocalListOfDeletedTodos,
  setLocalListofTodos,
} from "../use-todo/utils";

export const ListsContext = createContext(null);

export const ListsContextProvider = ({ children }) => {
  const [listOfDeletedTodos, setListOfDeletedTodos] = useState(
    getListOfDeletedTodos()
  );
  const [listOfTodos, setListOfTodos] = useState(getListofTodos());

  function updateListOfDeletedTodos(newListOfDeletedTodos) {
    setListOfDeletedTodos(newListOfDeletedTodos);
    setLocalListOfDeletedTodos(newListOfDeletedTodos);
  }

  function updateListOfTodos(newListOfTodos) {
    setListOfTodos(newListOfTodos);
    setLocalListofTodos(newListOfTodos);
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
