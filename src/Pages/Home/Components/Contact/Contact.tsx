import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPaperPlane, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import Heading from "../../../../Shared/Heading/Heading";
import './Contact.scss'
interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    return (
        <>
            <section className="contact-container">
                <Heading sectionName={'Meet the professionals'} headingParag={'Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz.'} />
                <div className="contact-container-content">
                    <div className="addresses">
                        <div className="new-york">
                            <h6 className="new-head">
                                Office New York
                            </h6>
                            <div className="contact-list">
                                <ul>
                                    <li><a href="tel:123456789"><FontAwesomeIcon icon={faPhone} /></a><span>New York +(123) 456 -7890</span></li>
                                    <li><a href="mailto:mail@mail.com"><FontAwesomeIcon icon={faPaperPlane} /></a><span>mail@mail.com</span></li>
                                    <li><FontAwesomeIcon icon={faLocationDot} /><span>184 Main Street Victoria</span></li>
                                    <li><a href="tel:123456879"><FontAwesomeIcon icon={faPrint} /></a><span>Fax +(123) 456 -7892</span></li>
                                </ul>
                            </div>
                            <h6>
                                Follow Us on:
                            </h6>
                            <div className="icons">
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                        </div>
                        <div className="new-york">
                            <h6 className="new-head">
                                San Francisco
                            </h6>
                            <div className="contact-list">
                                <ul>
                                    <li><a href="tel:123456789"><FontAwesomeIcon icon={faPhone} /></a><span>New York +(123) 456 -7890</span></li>
                                    <li><a href="mailto:mail@mail.com"><FontAwesomeIcon icon={faPaperPlane} /></a><span>mail@mail.com</span></li>
                                    <li><FontAwesomeIcon icon={faLocationDot} /><span>184 Main Street Victoria</span></li>
                                    <li><a href="tel:123456879"><FontAwesomeIcon icon={faPrint} /></a><span>Fax +(123) 456 -7892</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <input type="text" placeholder="Write a Message" />
                            <button><span>Send a Message</span></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;