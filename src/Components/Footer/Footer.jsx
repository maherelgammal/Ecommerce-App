import React from 'react';
import { Helmet } from 'react-helmet'

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <h5 className="mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Contact Us</a></li>
              <li><a href="#" className="text-muted">FAQ</a></li>
              <li><a href="#" className="text-muted">Cancellation &amp; Returns</a></li>
              <li><a href="#" className="text-muted">Ordering &amp; Payment</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <h5 className="mb-4">Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Electronics</a></li>
              <li><a href="#" className="text-muted">Fashion</a></li>
              <li><a href="#" className="text-muted">Beauty</a></li>
              <li><a href="#" className="text-muted">Home &amp; Kitchen</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <h5 className="mb-4">Follow Us</h5>
            <ul className="list-unstyled social-media-icons">
              <li><a href="#" className="text-muted"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#" className="text-muted"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#" className="text-muted"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#" className="text-muted"><i className="bi bi-youtube"></i></a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Download Our App</h5>
            <a href="#" className="btn btn-outline-light mb-3">Download on the App Store</a>
            <a href="#" className="btn btn-outline-light">Get it on Google Play</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted small">&copy; {new Date().getFullYear()} <span className='rating-color fw-bold'>Maher Elgammal</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;