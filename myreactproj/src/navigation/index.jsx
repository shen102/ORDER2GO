import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/Login";
import SignUp from "../pages/signup";
import HomePage from "../pages/Homepage";
<<<<<<< Updated upstream
import Menu from '../pages/Menu'

=======
import Cart from "../pages/Cart";
>>>>>>> Stashed changes






const Navigation = () => {
    

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp />} />
<<<<<<< Updated upstream
                <Route path="/menu" element = Menu/>
=======
                <Route path="/cart" element={<Cart/>} />
>>>>>>> Stashed changes
            </Routes>
           
        </BrowserRouter>
    )
}

export default Navigation;