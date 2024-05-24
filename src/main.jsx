import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";


// Apply the saved theme preference on initial load
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App/>*/}
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)
