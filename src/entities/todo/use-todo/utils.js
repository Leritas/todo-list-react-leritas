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
  return JSON.parse(localStorage.getItem("localListOfDeleted"));
}

export function getListofTodos() {
  if (localStorage.getItem("localListOfTodos") === null) {
    setLocalListofTodos([]);
  }
  return JSON.parse(localStorage.getItem("localListOfTodos"));
}

export function setLocalListOfDeletedTodos(newListOfDeletedTodos) {
  return localStorage.setItem(
    "localListOfDeleted",
    JSON.stringify(newListOfDeletedTodos)
  );
}

export function setLocalListofTodos(newListOfTodos) {
  return localStorage.setItem(
    "localListOfTodos",
    JSON.stringify(newListOfTodos)
  );
}

export function newTodo(text) {
  return {
    key: Number(new Date()),
    date: getNowFormattedDate(),
    completed: false,
    text,
  };
}
