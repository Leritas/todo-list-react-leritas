import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={Router} />
      <Footer></Footer>
    </>
  );
}

export default App;
