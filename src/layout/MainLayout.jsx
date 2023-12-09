import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../shared";

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout;