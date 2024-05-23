import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/Login";
import SignUp from "../pages/signup";
import HomePage from "../pages/Homepage";
import Menu1 from '../pages/BB Menu';
import Menu2 from '../pages/DM Menu';






const Navigation = () => {
    

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/menu" element = {<Menu/>}/>
            </Routes>
           
        </BrowserRouter>
    )
}

export default Navigation;