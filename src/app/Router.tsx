import { Route, Routes } from "react-router-dom";
import { TodoList } from "src/pages/TodoList";
import { History } from "src/pages/History";
import { Layout } from "./Layout";

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TodoList />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
