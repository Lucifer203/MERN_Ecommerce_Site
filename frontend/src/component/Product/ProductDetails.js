import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useLocation, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    //console.log(match);
    // const id = location.pathname.split("/")[2];
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => {
                console.log(item.url);
                return (
                  <img
                    src={item.url}
                    alt={`${i} Slide`}
                    className="CarouselImage"
                    key={item.url}
                  />
                );
              })}
          </Carousel>
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>Product #{product._id}</p>
          </div>

          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span> ({product.numberOfReviews} Reviews)</span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`$${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input type="number" value="1" />
                <button>+</button>
              </div>{" "}
              <button>Add to Cart</button>
            </div>
            <p>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description: <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
