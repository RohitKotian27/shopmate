import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home title="Home"/>}>Home</Route>
                <Route path="cart" element={<Cart title="Cart"/>}>Cart</Route>
            </Routes>
        </>
    )
}
