import Footer from "../../Components/Footer";
// import MainBody from "../../Components/MainBody";
import Menu from "../../Components/Menu";
import { Outlet } from "react-router-dom";


function HomePage() {
    return ( 
        <>
        <Menu/>
        <Outlet/>
        <Footer/>
        </>
     );
}

export default HomePage;