import "./Navbar.css";
import cart_icon from "../assets/cart_icon.png"
import {useContext, useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {ShopContext} from "../../../Context/Front/ShopContext.jsx";
import categories from "../../../services/api/Categories.jsx";
import {axiosClient} from "../../../services/api/axios.js";
import {message} from "antd";
const Navbar = () => {
    const [menu , setMenu] = useState("shop");
    const menuRef = useRef();
    // eslint-disable-next-line no-unused-vars
    const {getTotalCartItems} = useContext(ShopContext);
    const [category,setCategory] = useState([]);
    const [isAuth,setIsAuth] = useState(false);
    const navigate = useNavigate();
    var token = localStorage.getItem("token");

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }

    const getAllCategories =  async () => {
        await categories.getCategoris().then( (value) => {
            setCategory(
                value.data.categories.map( row => ({
                    key: row.id,
                    category_name: row.category_name,
                }) )
            );
            // setCategory( );
        } ).catch((e) => {
            console.log(e);
        })
    }
    useEffect( () => {
        if ( localStorage.getItem("token")){
            setIsAuth(true)
        }
    },[token])

    useEffect(() => {
       getAllCategories();

    }, []);
    const ClickItemMenu = (name) => {
        // console.log(name);
        setMenu(name);
        menuRef.current.classList.toggle("nav-menu-visible");
    }
    const logout = (e) => {
        e.preventDefault();
        axiosClient.post("api/logout").then(() => {
            window.localStorage.setItem('token', "");
            window.localStorage.setItem("AUTHENTICATED",false);
            setIsAuth(false)
            message.success("Logout With Success")
            navigate("/")
        }).catch((e)=> {
            console.log(e);
        })
    }
    return (
        <div className="navbar">
            <div className="nav-logo">
                <p className="nav-logo-text">TechShop</p>
            </div>
            <div className="nav-dropdown" onClick={dropdown_toggle}>
                <FaRegArrowAltCircleRight  />
            </div>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={ () => {  ClickItemMenu("shop"); } }><Link to="/">Shop</Link>{menu === "shop" ? <hr style={{background: "#994bc2"}}  /> : <></>}</li>
                {
                    category.map( row => (
                        <li key={row.key} onClick={() => {
                            ClickItemMenu(row.category_name);
                        }}><Link to={"category/"+row.key}>{row.category_name}</Link>{menu === row.category_name ? <hr style={{background: "#994bc2"}}/> : <></>}
                        </li>
                    ))
                }

                {/*<li onClick={() => {*/}
                {/*    ClickItemMenu("womens");*/}
                {/*}}><Link to="/womens">Women</Link>{menu === "womens" ? <hr style={{background: "#994bc2"}}/> : <></>}</li>*/}
                {/*<li onClick={ () => { ClickItemMenu("kids"); } }><Link to="/kids">Kids</Link>{menu === "kids" ? <hr style={{background: "#994bc2"}} /> : <></>}</li>*/}
                <li onClick={ () => { ClickItemMenu("AboutUs");  } }><Link to="/AboutUs">About</Link>{menu === "AboutUs" ? <hr style={{background: "#994bc2"}} /> : <></>}</li>
                <li onClick={ () => { ClickItemMenu("ContactUs");  } }><Link to="/ContactUs">Contact</Link>{menu === "ContactUs" ? <hr style={{background: "#994bc2"}} /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {
                    isAuth ?
                        <button className="login_icon_nav" onClick={logout}>Logout</button> :
                        <Link className="login_icon_nav" to="/SignIn">LOGIN</Link>
                }

                <Link className="cart_icon_nav" to="/cart"><img src={cart_icon} alt="" /></Link>
            </div>
        </div>
    );
}

export default Navbar;