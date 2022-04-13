import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { images } from "../../assests/images";
import './Footer.scss';
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <section className="contact-info">
                        <h6>Quick contact info</h6>
                        <p>
                            Lorem ipsum dolor sit amet ut, consectetu adipisicing el it, sed do eiusmod tempor minim.
                        </p>
                        <div className="address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <a href="">184 Main Street Victoria</a>
                        </div>
                        <div className="email">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <a href="mailto:email@email.com">email@email.com</a>
                        </div>
                        <div className="phone">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:123456789">+(123) 456 -7890</a>
                        </div>
                    </section>
                    <section className="latest-tweets">
                        <h6>
                            Read our latest tweets:
                        </h6>
                        <div className="tweets">
                            <div className="tweet">
                                <FontAwesomeIcon icon={faTwitter} />
                                <div className="tweet-content">
                                    <a href="">@Someone</a>
                                    <a href=""> @Google</a>
                                    <p>
                                        Hey, Thanks for writing in! Please submit a ticket on our helpcenter, and our agents will be…
                                    </p>
                                    <a href="">http://www.google.com</a>
                                </div>
                            </div>
                            <div className="tweet">
                                <FontAwesomeIcon icon={faTwitter} />
                                <div className="tweet-content">
                                    <a href="">@Someone</a>
                                    <a href="">@Google</a>
                                    <p>
                                        Hey, Thanks for writing in! Please submit a ticket on our helpcenter, and our agents will be…
                                    </p>
                                    <a href="">http://www.google.com</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="our-blog">
                        <h6>
                            Check out our Blog:
                        </h6>
                        <div className="list">
                            <ul>
                                <li>
                                    <a href="">Mining Platform</a>
                                    <a href="">November 8, 2018</a>
                                </li>
                                <li>
                                    <a href="">Your digital business</a>
                                    <a href="">November 8, 2018</a>
                                </li>
                                <li>
                                    <a href="">Other way</a>
                                    <a href="">November 8, 2018</a>
                                </li>
                                <li>
                                    <a href="">Social media strategy</a>
                                    <a href="">November 8, 2018</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="locations">
                        <h6>
                            Locations:
                        </h6>
                        <div className="img">
                            <img src={images.footerMap} alt="" />
                        </div>
                    </section>
                </div>
            </footer>
            <div className="copyright">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="reserve">
                    &copy; 2022 Mohamed Farghal. All Rights Reserved.
                </div>
                <div className="icons">
                    <span>
                        Follow Us:
                    </span>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;