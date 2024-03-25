import { useContext } from "react";
import { ListsContext } from "src/entities/todo";
import { getNowFormattedDate } from "./utils";

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

    const newListOfTodos = [
      ...listOfTodos,
      {
        key: Number(new Date()),
        date: getNowFormattedDate(),
        completed: false,
        text: text,
      },
    ];

    updateListOfTodos(newListOfTodos);
  }

  //Remove single todo from list and add it to Deleted list
  function removeTodo(key) {
    const todoToRemove = listOfTodos.find((todo) => {
      return todo.key === key;
    });
    const newListOfDeletedTodos = [todoToRemove, ...listOfDeletedTodos];
    const newListOfTodos = listOfTodos.filter((todo) => todo.key != key);

    updateListOfDeletedTodos(newListOfDeletedTodos);
    updateListOfTodos(newListOfTodos);
  }

  //Toggle todo completed true/false
  function toggleTodo(key) {
    const newListOfTodos = [...listOfTodos];

    newListOfTodos.map((todo) => {
      if (todo.key === key) todo.completed = !todo.completed;
    });

    updateListOfTodos(newListOfTodos);
  }

  //Toggle all list either all true(if any false) or all false (if all true)
  function toggleAlltodo() {
    let countIncomplete = 0;
    const newListOfTodos = [...listOfTodos];

    newListOfTodos.map((todo) => {
      if (!todo.completed) {
        countIncomplete++;
      }
    });

    if (countIncomplete > 0) {
      newListOfTodos.map((todo) => (todo.completed = true));
    } else {
      newListOfTodos.map((todo) => (todo.completed = false));
    }

    updateListOfTodos(newListOfTodos);
  }

  // Remove all todos and move them to deleted list for history, Note: list is Reversed
  function removeAllTodo() {
    const reversedListOfTodo = [...listOfTodos].reverse();
    const newListOfDeleted = [...reversedListOfTodo, ...listOfDeletedTodos];

    updateListOfDeletedTodos(newListOfDeleted);
    updateListOfTodos([]);
  }

  //remove from deleted single list item and it is gone forever :(
  function removeFromDeleted(key) {
    const newListOfDeleted = listOfDeletedTodos.filter(
      (deletedTodo) => deletedTodo.key != key
    );

    updateListOfDeletedTodos(newListOfDeleted);
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
