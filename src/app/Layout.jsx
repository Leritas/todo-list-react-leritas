import { Outlet } from "react-router-dom";
import { Footer } from "src/widgets/Footer";
import { Header } from "src/widgets/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
