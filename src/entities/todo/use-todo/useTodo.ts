import { useContext } from "react";
import { ListsContext } from "../ListsContextProvider";
import { Todo, newTodo } from "./utils";

export function useTodo() {
  const {
    listOfDeletedTodos,
    updateListOfDeletedTodos,
    listOfTodos,
    updateListOfTodos,
  } = useContext(ListsContext);

  //Add new todo to the list
  function addTodo(text: string) {
    if (text.length < 4) return;

    updateListOfTodos([...listOfTodos, newTodo(text)]);
  }

  //Remove single todo from list and add it to Deleted list
  function removeTodo(key: number) {
    const todoToRemove = listOfTodos.find(
      (todo: Todo) => todo.key === key
    ) as Todo;
    const newListOfTodos = listOfTodos.filter((todo: Todo) => todo.key !== key);

    updateListOfDeletedTodos([todoToRemove, ...listOfDeletedTodos]);
    updateListOfTodos(newListOfTodos);
  }

  //Toggle todo completed true/false
  function toggleTodo(key: number) {
    updateListOfTodos(
      listOfTodos.map((todo: Todo) => {
        if (todo.key === key) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  //Toggle all list either all true(if any false) or all false (if all true)
  function toggleAlltodo() {
    let countIncomplete = 0;
    listOfTodos.forEach((todo: Todo) => {
      if (!todo.completed) {
        countIncomplete++;
      }
    });
    if (countIncomplete > 0) {
      updateListOfTodos(
        listOfTodos.map((todo: Todo) => {
          todo.completed = true;
          return todo;
        })
      );
    } else {
      updateListOfTodos(
        listOfTodos.map((todo: Todo) => {
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
  function removeFromDeleted(key: number) {
    updateListOfDeletedTodos(
      listOfDeletedTodos.filter((todo: Todo) => todo.key !== key)
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
