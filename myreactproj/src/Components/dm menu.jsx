import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../slices/productsApi";

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
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">P{product.price}</span>
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
