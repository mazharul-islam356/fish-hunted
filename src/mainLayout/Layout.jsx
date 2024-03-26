import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../page/Home/Home";

const Layout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Home></Home>

            <Footer></Footer>
        </div>
    );
};

export default Layout;