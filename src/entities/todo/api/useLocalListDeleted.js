export function getLocalListDeleted() {
  return JSON.parse(localStorage.getItem("localListOfDeleted"));
}

export function updateLocalListDeleted(newListOfDeleted) {
  localStorage.setItem("localListOfDeleted", JSON.stringify(newListOfDeleted));
}
