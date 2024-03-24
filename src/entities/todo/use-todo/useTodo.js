import { useContext } from "react";
import { ListsContext } from "../../../contexts/lists-context/ListsContextProvider";
import { updateLocalListTodos } from "../api/useLocalListTodos";
import { updateLocalListDeleted } from "../api/useLocalListDeleted";
import { getNowFormattedDate } from "./utils";

export function useTodo() {
  const { listOfTodos, setListOfTodos, listOfDeleted, setListOfDeleted } =
    useContext(ListsContext);

  //Add new todo to the list
  function addTodo(text) {
    if (text.length < 4) return;

    let updatedList = [
      ...listOfTodos,
      {
        key: new Date(),
        date: getNowFormattedDate(),
        completed: false,
        text: text,
      },
    ];

    setListOfTodos(updatedList);

    updateLocalListTodos(updatedList);
  }

  //Remove single todo from list and add it to Deleted list
  function removeTodo(index) {
    let newListOfDeleted = [...listOfDeleted];
    let newListOfTodo = [...listOfTodos];
    newListOfDeleted.unshift(newListOfTodo[index]);
    newListOfTodo.splice(index, 1);

    setListOfTodos(newListOfTodo);
    setListOfDeleted(newListOfDeleted);

    updateLocalListTodos(newListOfTodo);
    updateLocalListDeleted(newListOfDeleted);
  }

  //Toggle todo completed true/false
  function toggleTodo(index) {
    let newListOfTodo = [...listOfTodos];
    newListOfTodo[index].completed = !newListOfTodo[index].completed;

    setListOfTodos(newListOfTodo);

    updateLocalListTodos(newListOfTodo);
  }

  //Toggle all list either all true(if any false) or all false (if all true)
  function toggleAlltodo() {
    let incomplete = 0;
    let newListOfTodo = [...listOfTodos];
    newListOfTodo.map((todo) => {
      if (!todo.completed) {
        incomplete++;
      }
    });
    if (incomplete) {
      newListOfTodo.map((todo) => (todo.completed = true));
    } else {
      newListOfTodo.map((todo) => (todo.completed = false));
    }

    setListOfTodos(newListOfTodo);
    updateLocalListTodos(newListOfTodo);
  }

  // Remove all todos and move them to deleted list for history, Note: list is Reversed
  function removeAllTodo() {
    let reversedListOfTodo = [...listOfTodos].reverse();
    let newListOfDeleted = [].concat(reversedListOfTodo, listOfDeleted);

    setListOfDeleted(newListOfDeleted);
    setListOfTodos([]);

    updateLocalListDeleted(newListOfDeleted);
    updateLocalListTodos([]);
  }

  //remove from deleted single list item and it is gone forever :(
  function removeFromDeleted(index) {
    let newListOfDeleted = [...listOfDeleted];
    newListOfDeleted.splice(index, 1);

    setListOfDeleted(newListOfDeleted);
    updateLocalListDeleted(newListOfDeleted);
  }

  //BURN ALL THE HISTORY LIST (Deleted list)
  function clearAllDeleted() {
    setListOfDeleted([]);

    updateLocalListDeleted([]);
  }

  return {
    addTodo,
    removeTodo,
    removeAllTodo,
    toggleTodo,
    toggleAlltodo,
    removeFromDeleted,
    clearAllDeleted,
  };
}
