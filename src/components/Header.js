import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
export const Header = () => {
    return (
        <header>
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-xl whitespace-nowrap dark:text-white">Shopping Cart</span>
                    </Link>
                    <div className="flex md:order-2">
                    <Link to="/cart" className="self-center text-xl whitespace-nowrap dark:text-white">Cart : 2</Link>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="link" aria-current="page" end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className="link">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
