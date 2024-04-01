import { createContext, useState, ReactNode } from "react";
import { Todo, TodoListsContext } from "src/entities/interfaces";
import {
  getListOfDeletedTodos,
  getListofTodos,
  setLocalListOfDeletedTodos,
  setLocalListofTodos,
} from "../use-todo/utils";

export const ListsContext = createContext<TodoListsContext | null>(null);

export const ListsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [listOfDeletedTodos, setListOfDeletedTodos] = useState(
    getListOfDeletedTodos
  );
  const [listOfTodos, setListOfTodos] = useState(getListofTodos);

  function updateListOfDeletedTodos(newListOfDeletedTodos: Todo[]) {
    setListOfDeletedTodos(newListOfDeletedTodos);
    setLocalListOfDeletedTodos(newListOfDeletedTodos);
  }

  function updateListOfTodos(newListOfTodos: Todo[]) {
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
