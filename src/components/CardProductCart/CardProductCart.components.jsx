const CardProductCart = ({ children }) => {
    return (
        <>
            <div id="cart-product-card" className="w-full md:w-2/3 h-full shadow-cartProductCardContainer rounded-md p-3">
                <h3 id="cart-product-card-title">Cart (2 Items)</h3>
                {children}
                <hr />
            </div>
        </>
    );
};

export default CardProductCart;
