import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
export const Cart = ({ title }) => {
    const { total, removeFromCart, cartList } = useCart();
    useTitle(title);
    return (
        <main>
            <section className="py-5">
                <h1 className="text-center text-2xl font-bold mb-5 dark:text-white">Cart Items : {cartList.length} / Total : ${total}</h1>
                {cartList?.map((elem) => (
                    <div key={elem.id} className="listCard dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white">
                        <img src={elem.imageUrl} className='max-sm:hidden' alt="" />
                        <p className='listCardTitle'>{elem.name}</p>
                        <p className='listCardPrice'>${elem.price}</p>
                        <button onClick={() => removeFromCart(elem)}>Remove</button>
                    </div>
                ))}
            </section>
        </main>
    )
}