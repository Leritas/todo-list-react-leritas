import { createContext, useState, ReactNode } from "react";
import {
  Todo,
  getListOfDeletedTodos,
  getListofTodos,
  setLocalListOfDeletedTodos,
  setLocalListofTodos,
} from "../use-todo/utils";

interface PropsWithChildren {
  children: ReactNode;
}

interface TodoListsContext {
  listOfDeletedTodos: Todo[];
  updateListOfDeletedTodos(newListOfDeletedTodos: Todo[]): void;
  listOfTodos: Todo[];
  updateListOfTodos(newListOfTodos: Todo[]): void;
}

export const ListsContext = createContext<TodoListsContext>("" as any);

export const ListsContextProvider = (props: PropsWithChildren) => {
  const [listOfDeletedTodos, setListOfDeletedTodos] = useState(
    getListOfDeletedTodos()
  );
  const [listOfTodos, setListOfTodos] = useState(getListofTodos());

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
      {props.children}
    </ListsContext.Provider>
  );
};
