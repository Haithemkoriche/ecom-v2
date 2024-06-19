import {createContext, useContext, useState} from "react";
import LoginApi from "../../services/api/LoginApi.jsx";
import {useNavigate} from "react-router-dom";

export  const UserContext = createContext({
    user: {},
    authenticated: false,
    setUser: () => {},
    logout: () => {},
    login: (email,password) => {},
    setAuthenticated: () => {},
    setToken: () => {}
})
export default function AuthContext({children}) {
    const [user,setUser] = useState({});
    const [authenticated , _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'));
    const login =  async  (email,password) => {
        await LoginApi.getCsrfToken();
        return LoginApi.login(email,password);
    }
    const logout = () => {
        setUser({});
        setAuthenticated(false);
        setToken("");
    }
    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED",isAuthenticated);
    }
    const setToken = (token) => {
        window.localStorage.setItem('token', token);
    }
    return (
        <>
            <UserContext.Provider value={{
                user,
                setUser,
                login,
                logout,
                authenticated,
                setAuthenticated,
                setToken
            }}>
                {children}
            </UserContext.Provider>
        </>
    );
}

export const UseUserContext = ()=> useContext(UserContext);