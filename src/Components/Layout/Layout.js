import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </>
    );

}

export default Layout;