import React, { Fragment } from "react";
import Section from "./Section";
import WithScrollbar from "./WithScrollbar";
import { Carousel } from "react-bootstrap";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Product from "../product/Product";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AllSliders = ({ products }) => {
  return (
    <div className=" d-flex flex-column w-100">
      <div className="auto-slider d-flex flex-row  ">
        <div className=" auto-play-slider">
          <AutoplaySlider play={false} interval={8000}>
            <div data-src="/images/11.jpg">
              <div className="auto-slider-card  d-flex flex-row  ">
                {products.map((product) => (
                  <Product product={product} />
                ))}
              </div>
            </div>

            <div data-src="/images/9.jpg">
              <div className="auto-slider-card bg-black d-flex flex-row  ">
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            </div>
          </AutoplaySlider>
        </div>
      </div>
      <div className="with-scrollbar">
        <Fragment>
          <Section>
            <WithScrollbar />
          </Section>
        </Fragment>
      </div>
    </div>
  );
};

export default AllSliders;
