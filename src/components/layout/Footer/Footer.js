import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './Footer.module.css';

function Footer(){
    return(
        <section>
            <footer className="footer">
                <ul>
                    <li>
                        <FaFacebook/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                    <li>
                        <FaLinkedin/>
                    </li>
                </ul>
                <p>
                    <span>Costs</span> &copy; 2023
                </p>
            </footer>
        </section>
    )
}

export default Footer;