import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/Login";
import SignUp from "../pages/signup";
import HomePage from "../pages/Homepage";
import Menu1 from "../pages/DM Menu";
import Menu2 from '../pages/DM Menu';
import Cart from "../pages/Cart";
import AddCart from "../pages/Cart";
import Order from "../pages/order";
import Transact from "../pages/Transaction";
import AdminDashboard from "../admin/admin_dashboard";






const Navigation = () => {
    

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/menu" element = {<Menu1/>}/>
                <Route path="/cart" element = {<AddCart/>}/>
                <Route path="/order" element = {<Order/>}/>
                <Route path="/transaction" element = {<Transact/>}/>
                <Route path="/admin_dashboard" element = {<AdminDashboard/>}/>



                
                
            </Routes>
           
        </BrowserRouter>
    )
}

export default Navigation;