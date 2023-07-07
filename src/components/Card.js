import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
export const Card = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    const { cartList, addToCart, removeFromCart } = useCart();
    const [isPresent, setIsPresent] = useState(false);

    useEffect(() => {
        const isProductPresent = cartList.find((elem) => elem.id === id);
        if (isProductPresent) {
            setIsPresent(true);
        } else {
            setIsPresent(false);
        }
    }, [cartList, id]);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 productCard">
            <img src={imageUrl} className="p-3 rounded-t-lg" alt={name} />
            <div className="px-4 pb-4">
                <h5 className="text-lg font-medium tracking-tight text-left text-gray-900 dark:text-white my-3">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">${price}</span>
                    {isPresent ? <button onClick={() => removeFromCart(product)} className="removeBtn">Remove</button> : <button onClick={() => addToCart(product)}>Add to cart</button>}
                </div>
            </div>
        </div>
    )
}
