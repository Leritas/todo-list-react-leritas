import { BrowserRouter } from "react-router-dom";
import { ListsContextProvider } from "src/entities/todo";
import { Router } from "./Router";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <ListsContextProvider>
        <Router />
      </ListsContextProvider>
    </BrowserRouter>
  );
}
