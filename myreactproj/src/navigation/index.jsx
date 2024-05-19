import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/Login";
import SignUp from "../pages/signup";







const Navigation = () => {
    

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
           
        </BrowserRouter>
    )
}

export default Navigation;