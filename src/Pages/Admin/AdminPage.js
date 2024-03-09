import SideBarAdmin from "./SideBarAdmin";
import "../../Styles/admin.css";
import { Outlet } from "react-router-dom";

function AdminPage() {
    return ( 
        <>
            <SideBarAdmin/>
            <Outlet/>
        </>
     );
}

export default AdminPage;