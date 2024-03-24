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
