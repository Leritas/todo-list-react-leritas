import { createContext, useState } from "react";

export const ListsContext = createContext(null);

export const ListsContextProvider = ({ children }) => {
  const [listOfDeleted, setListOfDeleted] = useState(
    JSON.parse(
      localStorage.getItem("localListOfDeleted") ||
        localStorage.setItem("localListOfDeleted", "[]")
    )
  );
  const [listOfTodos, setListOfTodos] = useState(
    JSON.parse(
      localStorage.getItem("localListOfTodos") ||
        localStorage.setItem("localListOfTodos", "[]")
    )
  );

  return (
    <ListsContext.Provider
      value={{ listOfDeleted, setListOfDeleted, listOfTodos, setListOfTodos }}
    >
      {children}
    </ListsContext.Provider>
  );
};
