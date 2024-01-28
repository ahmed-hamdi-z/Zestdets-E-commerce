import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
 
  return (
    <div id="card-all" className='col-sm-6 col-md-4 col-lg-3  '>
 
      <div className=" -card mt-3 ">
<Link to={`/product/${product._id}`}>
 <img
          
          className="card--img--top "
          src={ product.images[0].url }
      
          alt="#"
        />
</Link>
       

        <div className="card--body   ">
          <h5 className="card--title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>

          <div className="ratings ">

            <div className="rating-outer">
              <div

                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              >

              </div>
            </div>
            <span  id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          <p className="card-text">${product.price}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Product;
