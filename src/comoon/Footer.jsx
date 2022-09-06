import React from 'react';
import {Link} from "react-router-dom";
import visa from '../assets/img/visa.png'
import visa2 from '../assets/img/visa2.png'
import expresscard from '../assets/img/expresscard.png'
import mastercard from '../assets/img/mastercard.png'
import mastercard2 from '../assets/img/mastercard2.png'

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/">
                                    <h4 className="text-dark">Ecommerce Shoes</h4>
                                </Link>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Informacion</h3>

                            <ul className="information-links">
                                <li>
                                    <Link to="/blog-one">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contactanos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contactate con nosotros</h3>

                            <ul className="footer-contact-info">
                                <li><i className="fas fa-phone"></i> Call Us: <a href="#">(+51) 979792539</a></li>
                                <li><i className="far fa-envelope"></i> Email Us: <a href="#">jimmypaytan10@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright &copy; 2022 Ecommerce Shoes</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="payment-card">
                                <li><a href="#" target="_blank"><img src={visa} alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src={mastercard} alt="image" /></a>
                                </li>
                                <li><a href="#" target="_blank"><img src={mastercard2}
                                                                     alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src={visa2} alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src={expresscard}
                                                                     alt="image" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
