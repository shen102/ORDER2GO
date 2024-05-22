import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="header">
        <div className="logo-container">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={logo} alt="logo" className="w-40 h-40 object-cover" />
          </Link>
        </div>

        <h1 className="title">ORDER 2 GO</h1>
        <p className="subtitle">Coffee & Milk Tea</p>

        <div className="button-container">
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button className="sign-in-button">Sign In</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
