import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import webFont from "webfontloader";
import React, { useEffect } from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOption from "./component/layout/Header/UserOption.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        {/* <Routes>
          <Route exact path="/" element={<Header />}></Route>
        </Routes> */}
        <Header />
        {isAuthenticated && <UserOption user={user} />}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<ProductDetails />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route path="/products/:keyword" element={<Products />}></Route>

          <Route exact path="/search" element={<Search />}></Route>

          {/* <ProtectedRoute exact path="/account" element={<Profile />} /> */}
          {/* <Route exact path="/account" element={<Profile />}></Route> */}
          {/* <Route element={<ProtectedRoute />} /> */}
          {/* <ProtectedRoute exact path="/account" element={<Profile />} /> */}
          {/* <Route exact path="/account" element={<Profile />} /> */}

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/account" element={<Profile />}></Route>
            <Route path="/me/update" element={<UpdateProfile />}></Route>
          </Route>

          <Route exact path="/login" element={<LoginSignUp />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
