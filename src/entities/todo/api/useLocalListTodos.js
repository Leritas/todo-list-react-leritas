export function getLocalListTodos() {
  return JSON.parse(localStorage.getItem("localListOfTodos"));
}

export function updateLocalListTodos(newListOfTodos) {
  localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodos));
}
