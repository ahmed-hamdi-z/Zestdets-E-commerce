import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
// import ProtectedRoute from "./components/route/ProtectedRoute";

import UserProfile from "./components/user/UserProfile";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import UpdateProfile from "./components/user/UpdateProfile";

import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";

import OrderSuccess from "./components/cart/OrderSuccess";

import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import Dashboard from "./components/admin/Dashboard";
import { loadUser } from "./actions/userAction";
import store from "./store";
import { useSelector } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";
import ProductsList from "./components/admin/ProductList";
import NewProduct from "./components/admin/Newproduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrderList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UserList";
import UpdateUser from "./components/admin/updateUser";
import ProductReviews from "./components/admin/ProductReview";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());
    async function getStripApiKey() {
      const { data } = await axios.get("/api/v2/stripeapi");

      setStripeApiKey(data.stripeApiKey);
    }

    getStripApiKey();
  }, []);

  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App col">
        <Header />

        <div className="col">
          <Routes>
            <Route path="/" element={<Home />} exact />

            <Route path="/search/:keyword/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/me" element={<UserProfile />} />

            <Route path="/me/update" element={<UpdateProfile />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<NewPassword />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirm" element={<ConfirmOrder />} />
            <Route path="/success" element={<OrderSuccess />} />

            <Route path="/orders/me" element={<ListOrders />} />
            <Route path="/order/:id" element={<OrderDetails />} />

            <Route path="/admin/orders" element={<OrdersList />} />
            <Route path="/admin/order/:id" element={<ProcessOrder />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<ProductsList />} />
            <Route path="/admin/product" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<UpdateProduct />} />

            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/user/:id" element={<UpdateUser />} />

            <Route path="/admin/reviews" element={<ProductReviews />} />

            <Route
              path="/payment"
              element={
                stripeApiKey && (
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                )
              }
            />
          </Routes>
        </div>
        {!loading && user !== "admin" && <Footer />}
      </div>
    </Router>
  );
}
export default App;
