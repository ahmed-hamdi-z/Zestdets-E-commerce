import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { logout } from "../../actions/userAction";
import Search from "./Search";
import { useEffect } from "react";

const Header = ({ props }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/')
    alert.success("logged out successfuly");
  };

  console.log(logoutHandler)
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand ml-5">
            <Link className="navbar-brand-img d-flex" to="/">
            <h1 className="navbar-brand-img" >Zest</h1> <span className="navbar-brand-img">Dest</span> 
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search history={props} />
        </div>

        <div className=" cart-button  mr-5 ">
          <Link to="/cart" style={{ textDecoration: "none" }}>
       
            <span className=" mr-3   " id="cart_count">
           <span className=""> <AiOutlineShoppingCart /> </span>  {cartItems.length}
            </span>
          </Link>
          {user ? (
            <div className=" text-white d-flex avatar menu-btn mr-5 ">
                <div>
                  <figure className=" avatar-nav">
                    <img src='/images/avatar.png' alt="" />
                 
                  </figure>
                </div>
              <Dropdown>
              
                <Dropdown.Toggle
                  split
                  variant="#febd69"
                 className="text-white"
    
                >
                  <span>{user && user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div>
                    {user && user.role === "admin" && (
                      <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                    )}
                  </div>
                  <Dropdown.Item href="/me">Profile</Dropdown.Item>
                  <Dropdown.Item href="/orders/me">Orders</Dropdown.Item>
                  <Dropdown.Item  onClick={logoutHandler}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn text-white" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
