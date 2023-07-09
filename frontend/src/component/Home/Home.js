import React, { Fragment } from "react";
import { BsMouse2 } from "react-icons/bs";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Blue Tshirt",
  images: [
    {
      url: "https://www.beyoung.in/api/cache/catalog/products/women_images_update_27_6_2022/navy_blue_womens_plain_t-shirt_base_700x933.jpg",
    },
  ],
  price: "$300",
  _id: "adarsh",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <BsMouse2 />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
