import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope, FaMobile} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolore! Sint voluptate ab porro quae laudantium asperiores minus, aliquam repellat delectus odio et temporibus. Repellat iste saepe odit excepturi placeat?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolore!
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                        Phone: 9892998578
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Email: aristocrat.autos@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">
                    Categories
                </div>
                <span className="text">
                    SUVs
                </span>
                <span className="text">
                    Coupe
                </span>
                <span className="text">
                    Super Bikes
                </span>
                <span className="text">
                    Super Cars
                </span>
                <span className="text">
                    Off-Roading Cars & Bikes
                </span>
                <span className="text">
                    Sport Cars
                </span>
            </div>
            <div className="col">
                <div className="title">
                    Pages
                </div>
                <span className="text">
                    Home
                </span>
                <span className="text">
                    About
                </span>
                <span className="text">
                    Privacy Policy
                </span>
                <span className="text">
                    Returns
                </span>
                <span className="text">
                    Terms & Conditions
                </span>
                <span className="text">
                    Contact Us
                </span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Copyright © 2024 - All Rights Reserved
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;