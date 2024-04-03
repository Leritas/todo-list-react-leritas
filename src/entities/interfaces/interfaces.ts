export interface Todo {
  key: number;
  date: string;
  completed: boolean;
  text: string;
}

export interface TodoListsContext {
  listOfDeletedTodos: Todo[];
  updateListOfDeletedTodos(newListOfDeletedTodos: Todo[]): void;
  listOfTodos: Todo[];
  updateListOfTodos(newListOfTodos: Todo[]): void;
}
