import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './ContactUs.scss'
interface ContactUs { }

const ContactUs: React.FunctionComponent<ContactUs> = props => {
    return (
        <div className="contactUs__container">
            <div className='map'>
                <iframe
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZiHN5dMExskUt6774EqWHFBY7Pwfp6NM&q=Space+Needle,Seattle+WA">
                </iframe>
            </div>
            <div className="tellUs_about">
                <div className="left-side">
                    <h3>
                        Tell us about yourself!
                    </h3>
                    <div className="contact-infos">
                        <div className="info">
                            <h5>Office in New York</h5>
                            <a href=""><FontAwesomeIcon icon={faPhone} /> New York +(123) 456 -7890 </a>
                            <a href=""><FontAwesomeIcon icon={faPaperPlane} /> mail@mail.com </a>
                            <a href=""><FontAwesomeIcon icon={faLocationDot} /> 95 Place de la Gare</a>
                        </div>
                        <div className="info">
                            <h5>Office in London</h5>
                            <a href=""><FontAwesomeIcon icon={faPhone} /> New York +(123) 456 -7890 </a>
                            <a href=""><FontAwesomeIcon icon={faPaperPlane} /> mail@mail.com </a>
                            <a href=""><FontAwesomeIcon icon={faLocationDot} /> 95 Place de la Gare</a>
                        </div>
                    </div>
                    <div className="follow_links">
                        <h6>Follow Us On :</h6>
                        <div className="icons">
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <input type="text" placeholder="Write a Message" />
                            <a className="button__arrows"><span>Send a Message</span></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs