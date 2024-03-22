import { Route, Routes } from "react-router-dom";
import History from "./routes/History";
import TodoList from "./routes/TodoList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
