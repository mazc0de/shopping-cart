import { FaTrash, FaHeart } from "react-icons/fa";

const CartBodyProductCard = ({ product }) => {
    const { name, price, size, color, imgUrl, quantity } = product;
    return (
        <>
            <div id="cart-product-cart-body" className="md:flex md:flex-row md:justify-between">
                <div className="w-full md:w-2/3 md:flex">
                    <img src={imgUrl} alt="images" className="md:w-[250px] border-2 rounded-lg my-2 md:m-2" />
                    <div className="flex flex-col justify-around">
                        <h3 className="font-bold text-2xl">{name}</h3>
                        <span>Color : {color}</span>
                        <span>Size : US {size}</span>
                        <div className="flex gap-2 w-full">
                            <div className="flex items-center gap-2">
                                <FaTrash />
                                <span className="text-sm md:text-lg">Remove Item</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaHeart />
                                <span className="text-sm md:text-lg">Move to wishlist</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 md:min-h-full md:my-0 flex flex-col p-2 justify-between">
                    <div className="flex ml-auto">
                        <button className="w-10 border-2">+</button>
                        <div className="w-10 border-y-2 flex justify-center">
                            <span>{quantity}</span>
                        </div>
                        <button className="w-10 border-2">-</button>
                    </div>
                    <div className="flex ml-auto">
                        <span>${price}</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CartBodyProductCard;
