import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
