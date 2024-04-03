import { Todo } from "src/entities/interfaces";

export function getNowFormattedDate() {
  const monthList = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  let thisDate = new Date();

  return (
    thisDate.getDate() +
    " " +
    monthList[thisDate.getMonth()] +
    " " +
    thisDate.getFullYear() +
    " в " +
    thisDate.getHours().toString().padStart(2, "0") +
    ":" +
    thisDate.getMinutes().toString().padStart(2, "0")
  );
}

export function getListOfDeletedTodos() {
  if (localStorage.getItem("localListOfDeleted") === null) {
    setLocalListOfDeletedTodos([]);
  }
  return JSON.parse(
    localStorage.getItem("localListOfDeleted") as string
  ) as Todo[];
}

export function getListofTodos() {
  if (localStorage.getItem("localListOfTodos") === null) {
    setLocalListofTodos([]);
  }
  return JSON.parse(
    localStorage.getItem("localListOfTodos") as string
  ) as Todo[];
}

export function setLocalListOfDeletedTodos(newListOfDeletedTodos: Todo[]) {
  return localStorage.setItem(
    "localListOfDeleted",
    JSON.stringify(newListOfDeletedTodos)
  );
}

export function setLocalListofTodos(newListOfTodos: Todo[]) {
  return localStorage.setItem(
    "localListOfTodos",
    JSON.stringify(newListOfTodos)
  );
}

export const newTodo = (text: string): Todo => {
  return {
    key: Number(new Date()),
    date: getNowFormattedDate(),
    completed: false,
    text,
  };
};
