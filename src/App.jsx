import Login from "./pages/Login.jsx";
// import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {Routes, Route, useLocation} from 'react-router-dom';
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";


function App() {
    const location = useLocation()
    const showNavbar = location.pathname !== "/login";

    return (
        <>
            {showNavbar && <Navbar />}
            <div className={`${showNavbar ? 'pt-[5.5rem]' : ''} bg-gray-100 dark:bg-gray-800 dark:text-white w-full h-screen`}>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>

            </div>
        </>

    )
}

export default App
