import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import Menu2 from "../../Components/Menu2";

function HomePage2() {
  return (
    <>
      <Menu2 />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomePage2;
