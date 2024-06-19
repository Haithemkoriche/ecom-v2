import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import ShopContextProvider from "./Context/Front/ShopContext.jsx";
import AuthContext from "./Context/Back/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <ShopContextProvider>
            <AuthContext>
                <App />
            </AuthContext>
        </ShopContextProvider>
    );
