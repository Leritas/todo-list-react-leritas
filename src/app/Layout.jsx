import { Outlet } from "react-router-dom";
import { ListsContextProvider } from "../contexts/lists-context/ListsContextProvider";
import Footer from "../widgets/footer/Footer";
import Header from "../widgets/header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <ListsContextProvider>
        <Outlet />
      </ListsContextProvider>
      <Footer />
    </>
  );
}
