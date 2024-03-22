import { createBrowserRouter } from "react-router-dom";
import TodoList from "./routes/todoList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
]);

export default Router;
