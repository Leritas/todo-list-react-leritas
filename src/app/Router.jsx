import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { TodoList } from "../pages/todo-list";
import { History } from "../pages/history";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TodoList />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
