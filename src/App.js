import { useSelector } from "react-redux";
import { Header, CardProductCart, CartBodyProductCard } from "./components";

import AirForceOne from "./Assets/air-force-one.webp";

const App = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Header />
      <div id="container">
        <div
          id="cart-product-card-container"
          className="w-full min-h-screen p-10 font-poppins md:flex md:gap-5"
        >
          <CardProductCart>
            {products.map((product) => {
              return <CartBodyProductCard product={product} />;
            })}
          </CardProductCart>
          <div className="w-full md:w-1/3 h-full shadow-cartProductCardContainer rounded-md p-3 my-3 md:my-0">
            <h3
              id="cart-product-card-title"
              className="mb-5 font-bold md:text-3xl"
            >
              The total amount of
            </h3>
            <div className="flex justify-between md:text-lg mb-2">
              <span>Temporary Amount</span>
              <span>$300</span>
            </div>
            <div className="flex justify-between md:text-lg mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between md:text-lg my-2">
              <h3
                id="cart-product-card-title"
                className="mb-5 font-bold md:text-xl"
              >
                The total amount of (Including VAT)
              </h3>
              <span>$330</span>
            </div>
            <button className="w-full bg-blue-600 text-white p-3 md:p-5 rounded-lg hover:bg-blue-700 transition duration-100 active:bg-blue-800yarn ">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
