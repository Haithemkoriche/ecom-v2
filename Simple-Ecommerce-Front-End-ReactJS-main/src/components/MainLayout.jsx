import React, {useEffect, useState} from 'react';
import "../App.css";
import { Layout, Menu, Button, theme } from 'antd';
import {MdDashboard, MdOutlineProductionQuantityLimits} from "react-icons/md";
import {FaBloggerB, FaUsers} from "react-icons/fa";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {IoIosColorFill, IoIosLogOut, IoIosNotifications, IoIosSettings, IoLogoPolymer} from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";
import {BiCategoryAlt} from "react-icons/bi";
import {RiFireFill, RiMenu2Line} from "react-icons/ri";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi";
import {TbMessageMinus} from "react-icons/tb";
import {CgProfile} from "react-icons/cg";
import Footer from "./Footer.jsx";
import {axiosClient} from "../services/api/axios.js";
import {UseUserContext} from "../Context/Back/AuthContext.jsx";
import StudentApi from "../services/api/LoginApi.jsx";
import LoginApi from "../services/api/LoginApi.jsx";
const { Header, Sider,
    Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  const {authenticated,setAuthenticated,logout: contextLogout} = UseUserContext();
  const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {

        if (authenticated === true) {
            setIsLoading(false);
            StudentApi.getUser().then(({data}) => {
                setUser(data)
                setAuthenticated(true)
            }).catch((reason) => {
                contextLogout();
                // navigate("/login");
            })
        } else {
            navigate("/login")
        }

    }, [authenticated]);



  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
    const [darkMode, setDarkmode] = useState(true);
    const toggleTheme = () =>  {
        setDarkmode(!darkMode);
    }
    const logout = async () => {
        LoginApi.logout().then(() => {
            contextLogout();
            navigate("/login")
        })
    }

    if (isLoading){
        return  (
            <></>
        );
    }


  return (
    <Layout>
      <Sider style={{ background: darkMode ? "#000" : "#ffffff" }} className="siderbar" trigger={null} collapsible collapsed={collapsed}>
          <div style={{ background: darkMode ? "#000" : "#ffffff" }} className="logo">
              <div  style={{ color: darkMode ? "#ffffff" : "#000" }} className="sm-logo"><RiFireFill /></div>
              <div  style={{ color: darkMode ? "#ffffff" : "#000" }} className="lg-logo"><RiFireFill /> <span>TechShop</span></div>
          </div>
        {/*<div className="demo-logo-vertical" />*/}
        <Menu
          className="menu-bar"
          theme={  darkMode ? "dark" : "light" }
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
              if (key == "signout") {
                  navigate('/');
              } else {
                  navigate(key);
              }
          }}
          items={[
            {
              key: '',
              icon: <MdDashboard />,
              label: "Dashboard",
            },
              {
                  key: "um",
                  type:"group",
                  label: <span style={{fontSize: "12px",fontWeight: "bold"}}>Settings</span>
              },
              {
                  key: "settings",
                  icon:  <IoIosSettings />,
                  label:"Settings",
                  children: [
                      {
                          key: "logo",
                          icon: <IoLogoPolymer />,
                          label: "Logo",
                      },
                  ]
               },
              {
                  key: "shipping",
                  type:"group",
                  label: <span style={{fontSize: "12px",fontWeight: "bold"}}>Shipping</span>
              },
            {
              key: 'categories',
              icon:  <BiCategoryAlt />,
                label: "Categories",
            },
              {
                  key: 'customers',
                  icon: <FaUsers />,
                  label: "Customers",
              },
            {
              key: 'product',
              icon: <MdOutlineProductionQuantityLimits />,
               label: "Product",
            },
              {
                  key: 'orders',
                  icon: <FaCartShopping />,
                  label:"Orders",
              }
          ]}
        />

      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}

        >
            <div id="header" className="header d-flex align-items-center">
                <div className="left">
                    <Button
                        type="text"
                        icon={collapsed ? <RiMenu2Line /> : <RiMenu2Line />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 50,
                            color: "#994bc2"
                        }}
                    />
                    <Button
                        type="text"
                        icon={  darkMode ? <HiOutlineSun /> : <HiOutlineMoon /> }
                        onClick={ toggleTheme }
                        style={{
                            color: "#994bc2"
                        }}
                    />

                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <IoIosNotifications />
                                <span className="badge badge-number">4</span>
                            </a>
                            <ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
                                <div className="dropdown">
                                    <div className="notify_item dropdown-header">
                                        <div className="notify_left">Notifications</div>
                                        <div className="notify_right"><TbMessageMinus /></div>
                                    </div>
                                    <div className="notify_item">
                                        <div className="notify_img">
                                            <img src={"/static/14.png"} alt="profile_pic" style={{width: "50px"}} />
                                        </div>
                                        <div className="notify_info">
                                            <p>Alex commented on<span>Timeline Share</span></p>
                                            <span className="notify_time">10 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notify_item">
                                        <div className="notify_img">
                                            <img src={"/static/14.png"} alt="profile_pic" style={{width: "50px"}} />
                                        </div>
                                        <div className="notify_info">
                                            <p>Alex commented on<span>Timeline Share</span></p>
                                            <span className="notify_time">10 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notify_item">
                                        <div className="notify_img">
                                            <img src={"/static/14.png"} alt="profile_pic" style={{width: "50px"}} />
                                        </div>
                                        <div className="notify_info">
                                            <p>Alex commented on<span>Timeline Share</span></p>
                                            <span className="notify_time">10 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notify_item">
                                        <div className="notify_img">
                                            <img src={"/static/14.png"} alt="profile_pic" style={{width: "50px"}} />
                                        </div>
                                        <div className="notify_info">
                                            <p>Alex commented on<span>Timeline Share</span></p>
                                            <span className="notify_time">10 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notify_item dropdown-last">
                                        <div className="notify_left">View All Notifications</div>
                                    </div>
                                </div>
                            </ul>


                        </li>
                        <li style={{lineHeight: "normal"}} className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-10"
                               href="#" data-bs-toggle="dropdown">
                                <img src={"/static/14.png"} alt="profile" className="rounded-circle" />
                                {/* <span className="d-none d-md-block dropdown-toggle ps-2">{user.name}<br /> <span style={{color: "#994bc2"}}>ADMIN</span></span> */}

                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                   <div className="profile-header">
                                       <div className="profile-header-left">
                                           <img src={"/static/14.png"} alt="profile"  />
                                       </div>
                                       <div className="profile-header-right">
                                           {/* <h6>{user.name}</h6> */}
                                           <span>ADMIN</span>
                                       </div>

                                   </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-item-list">
                                    <Link
                                        className="dropdown-item d-flex align-items-center"
                                        to="#"
                                    >
                                        <CgProfile />
                                        <span>My Profile</span>
                                    </Link>

                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-item-list">
                                    <button
                                        className="dropdown-item d-flex align-items-center"
                                        onClick={logout}
                                    >
                                        <IoIosLogOut />
                                        <span>Log Out</span>
                                    </button>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

        </Header>
        <Content
              style={{
                padding: 13,
                minHeight: 280,
                background: colorBgContainer,
                position: "relative"
              }}
            >
            <div className="content-wrapper">
                <Outlet />

                {/*<Footer />*/}
            </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
