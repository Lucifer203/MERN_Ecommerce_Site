import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logos.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        {/* <img src={logo} alt="logo" /> */}

        <p>High Quality is our first priority</p>
        <p>Copyrights 2023 &copy; Lucifer203</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/adarsh203">Facebook</a>
        <a href="https://www.facebook.com/adarsh203">Instagram</a>
        <a href="https://www.facebook.com/adarsh203">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
