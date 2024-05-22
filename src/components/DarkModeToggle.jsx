import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
       const htmlElement = document.documentElement;
       if (isDarkMode) {
           htmlElement.classList.add('dark');
       } else {
           htmlElement.classList.remove('dark');
       }
    }, [isDarkMode])

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    }


    return (
        <button onClick={handleToggle}>
                {isDarkMode ? <FaSun size={24} color={"#FFD700"} /> : <FaMoon size={24} color={"#696969"} />}
        </button>
    )
}
export default DarkModeToggle
