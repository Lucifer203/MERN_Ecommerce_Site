import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import webFont from "webfontloader";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Router>
        {/* <Routes>
          <Route exact path="/" element={<Header />}></Route>
        </Routes> */}
        <Header />

        <Footer/>
      </Router>
    </>
  );
}

export default App;
