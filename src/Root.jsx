import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-[70px]">

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;