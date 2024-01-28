import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./WithScrollbar.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={(e) => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={(el) => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={(nextSlide) => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 120) {
            this.setState({ additionalTransfrom: 120 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 120) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
     <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
      
        <div className="card-card text-dark card-has-bg click-col  " style= {{ backgroundImage: 'url(https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/ca8e5b670e64ec62901c1af623a5efc4/5/4/54f7c15cc224f3c29484212d3a2e2ecbe5532382631082964cf124557bb3daa0.jpeg)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">i phone 14 max</small>
              <h4 className="card--title mt-0 ">iPhone 14pro 256GB - Apple</h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 995.5</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/macbook_air_m2_2023.jpg)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">Apple MacBook Air </small>
              <h4 class="card--title mt-0 ">Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) </h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 1995</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(https://m.media-amazon.com/images/I/51792GuuuFS._AC_UF1000,1000_QL80_.jpg)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta "> Headphones</small>
              <h4 class="card--title mt-0 ">Bose QuietComfort 35 II Wireless Bluetooth Headphones</h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 313.5</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">AirPods</small>
              <h4 class="card--title mt-0 ">Apple AirPods with Charging</h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 300</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(data:image/jpeg;base64,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)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">Nikon camera</small>
              <h4 class="card--title mt-0 ">Nikon D3500 W/ AF-P DX NIKKOR 18-55mm </h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-dark font-bold d-block">$ 125</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_lp_09142021.jpg.og.jpg?202308282032)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">apple watch</small>
              <h4 class="card--title mt-0 ">Apple Watch keeps you connected to the people </h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 660</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-12 increase-size " >
        <div className="card-card text-dark card-has-bg click-col  " style={ { backgroundImage: 'url(https://m.media-amazon.com/images/I/61U4bqXW3nL._AC_UF894,1000_QL80_.jpg)', mixBlendMode: 'normal'  } } >
          <img className="card-img d-none " src="" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta ">Mouse</small>
              <h4 class="card--title mt-0 ">LED Wireless Mouse, Rechargeable Slim Silent Mouse</h4>

            </div>
            <div className="card-footer">
              <div className="media">
               
                <div className="media-body">
                  <h6 className="my-0 text-warning d-block">$ 6.5</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </Carousel>
    );
  }
}

export default WithScrollbar;
