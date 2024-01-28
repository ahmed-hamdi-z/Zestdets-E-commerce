import React from "react";

const Footer = () => {
  return (
<footer className="text-center text-lg-start  " >

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-facebook-f"></i>
      </a>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-google"></i>
      </a>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="#!"  className="mx-2 link-secondary text-dark">
        <i className="fa fa-github"></i>
      </a>
    </div>
 
  </section>
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i> Zest Dest
          </h6>
          <p>
            Here you can choose between which differnets products you want.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Headphones</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Accessories</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cameras</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Electronics</a>
          </p>
        </div>
    
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
      
    

      </div>
     
    </div>
  </section>

  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="#!">AZ</a>
  </div>
  
</footer>
  )
};

export default Footer;
