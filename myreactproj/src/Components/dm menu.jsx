import "./dm menu.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../slices/productsApi";
import okinawa from "../images/Okinawa.png";
import chocolate from "../images/Chocolate.png";
import lemon from "../images/Lemon.png";
import greenApple from "../images/Green.png";
import coffee from "../images/Coffee.png";

const MenuItems = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);
  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>Satisfy your Cravings</h2>
          <div className="products">
            {data &&
              data.map((product) => (
                <div className="products">
        <button className="product-button">
          <img src={okinawa} alt="Okinawa" />
          Okinawa
        </button>
        <button className="product-button">
          <img src={chocolate} alt="Chocolate" />
          Chocolate
        </button>
        <button className="product-button">
          <img src={lemon} alt="Lemon" />
          Lemon
        </button>
        <button className="product-button">
          <img src={greenApple} alt="Green Apple" />
          Green Apple
        </button>
        <button className="product-button">
          <img src={coffee} alt="Coffee" />
          Coffee
        </button>
        <button className="product-button">
          <img src={coffee} alt="Coffee" />
          Coffee
        </button>
      </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occurred...</p>
      )}
    </div>
  );
};

export default MenuItems;
