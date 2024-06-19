import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Resetpassword from "./pages/ResetPassword";
import Forgotpassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from './pages/Dashboard';
import Logo from "./pages/logo/logo.jsx";
import Color from "./pages/color/color.jsx";
import Category from "./pages/categories/category.jsx";
import Custumer from "./pages/customers/custumer.jsx";
import ProductFront from "./pages/FrontEnd/Product.jsx";
import Orders from "./pages/orders/orders.jsx";
import AddCategory from "./pages/categories/AddCategory.jsx";
import AddProduct from "./pages/product/AddProduct.jsx";
import FrontLayout from "./components/FrontEnd/FrontLayout.jsx";
import Shop from "./pages/FrontEnd/Shop.jsx";
import ShopCategory from "./pages/FrontEnd/ShopCategory.jsx";
import Cart from "./pages/FrontEnd/Cart.jsx";
import LoginSignup from "./pages/FrontEnd/LoginSignup.jsx";
import About from "./pages/FrontEnd/About/About.jsx";
import ContactUs from "./pages/FrontEnd/ContactUs/ContactUs.jsx";

import Product from "./pages/product/product.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginIn from "./pages/FrontEnd/LoginIn.jsx";
import CustomerDashboard from "./pages/FrontEnd/CustomerDashboard.jsx";
import Checkout from "./pages/FrontEnd/Checkout.jsx";
import Success from "./pages/FrontEnd/success/success.jsx";
import Cancel from "./pages/FrontEnd/cancel/cancel.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/*" element={<NotFound />} />

          <Route path="/" element={<FrontLayout />}>

                  <Route index element={<Shop />} />

                  {/*<Route path="mens" element={<ShopCategory banner={men_banner} category="men" />} />*/}
                  {/*<Route path="womens" element={<ShopCategory banner={women_banner} category="women" />} />*/}
                  {/*<Route path="kids" element={<ShopCategory banner={kid_banner} category="kid" />} />*/}

                  <Route path="category" element={<ShopCategory /> }>
                      <Route path=":category" element={<ShopCategory   />}  />
                  </Route>
                <Route path="product" element={<ProductFront /> }>
                      <Route path=":productId" element={<ProductFront />}  />
                  </Route>
                  <Route path="cart" element={<Cart />} />
                  <Route path="SignUp" element={<LoginSignup />} />
                  <Route path="SignIn" element={<LoginIn />} />
                  <Route path="AboutUs" element={<About />} />
                  <Route path="ContactUs" element={<ContactUs />} />
                  <Route path="CustomerDashboard" element={<CustomerDashboard />} />
                  <Route path="checkout" element={<Checkout />} />

          </Route>

         <Route path="/admin" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route  path="logo" element={<Logo />} />
              <Route  path="color" element={<Color />} />
              <Route  path="categories" element={<Category />} />
              <Route  path="categories/category-add" element={<AddCategory />} />
              <Route  path="customers" element={<Custumer />} />
              <Route  path="product" element={<Product />} />
              <Route  path="product/product-add" element={<AddProduct />} />
              <Route  path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
