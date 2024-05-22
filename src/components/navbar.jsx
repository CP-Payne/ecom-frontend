import StoreLogo from "../assets/logo2.png"
import DarkModeToggle from "./DarkModeToggle.jsx";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (link) => {
       setActiveLink(link);
       setIsOpen(false)
    }

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-18">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="http://localhost:5173" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={StoreLogo} alt="E-Store Logo" className="h-12"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Store</span>
                </a>
                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="order-3 inline-flex items-center p-2 w-10 h-10 justify-center
                    text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
                    dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox={"0 0 17 14"}>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <DarkModeToggle />
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50
                    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        {['Home', 'About', 'Services', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} onClick={() => handleLinkClick(link)}
                                className={`block py-2 px-3 rounded md:p-0 ${
                                    activeLink === link
                                        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
                                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                }`}>

                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
