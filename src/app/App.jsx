import { BrowserRouter } from "react-router-dom";
import { ListsContextProvider } from "src/entities/todo";
import Router from "./Router";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ListsContextProvider>
        <Router></Router>
      </ListsContextProvider>
    </BrowserRouter>
  );
}
