import { useContext } from "react";
import { ListsContext } from "../ListsContextProvider";
import { newTodo } from "./utils";

export function useTodo() {
  const {
    listOfDeletedTodos,
    updateListOfDeletedTodos,
    listOfTodos,
    updateListOfTodos,
  } = useContext(ListsContext);

  //Add new todo to the list
  function addTodo(text) {
    if (text.length < 4) return;

    updateListOfTodos([...listOfTodos, newTodo(text)]);
  }

  //Remove single todo from list and add it to Deleted list
  function removeTodo(key) {
    const todoToRemove = listOfTodos.find((todo) => todo.key === key);
    const newListOfTodos = listOfTodos.filter((todo) => todo.key !== key);

    updateListOfDeletedTodos([todoToRemove, ...listOfDeletedTodos]);
    updateListOfTodos(newListOfTodos);
  }

  //Toggle todo completed true/false
  function toggleTodo(key) {
    updateListOfTodos(
      listOfTodos.map((todo) => {
        if (todo.key === key) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  //Toggle all list either all true(if any false) or all false (if all true)
  function toggleAlltodo() {
    let countIncomplete = 0;
    listOfTodos.forEach((todo) => {
      if (!todo.completed) {
        countIncomplete++;
      }
    });
    if (countIncomplete > 0) {
      updateListOfTodos(
        listOfTodos.map((todo) => {
          todo.completed = true;
          return todo;
        })
      );
    } else {
      updateListOfTodos(
        listOfTodos.map((todo) => {
          todo.completed = false;
          return todo;
        })
      );
    }
  }

  // Remove all todos and move them to deleted list for history, Note: list is Reversed
  function removeAllTodo() {
    updateListOfDeletedTodos([...listOfTodos.reverse(), ...listOfDeletedTodos]);
    updateListOfTodos([]);
  }

  //remove from deleted single list item and it is gone forever :(
  function removeFromDeleted(key) {
    updateListOfDeletedTodos(
      listOfDeletedTodos.filter((todo) => todo.key !== key)
    );
  }

  //BURN ALL THE HISTORY LIST (Deleted list)
  function clearAllDeleted() {
    updateListOfDeletedTodos([]);
  }

  return {
    addTodo,
    removeTodo,
    removeAllTodo,
    toggleTodo,
    toggleAlltodo,
    removeFromDeleted,
    clearAllDeleted,
    listOfTodos,
    listOfDeletedTodos,
  };
}
