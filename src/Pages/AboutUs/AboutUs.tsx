import React from 'react'
import { AboutUsImages } from '../../assests/images/aboutUs';
import './AboutUs.scss';
interface AboutUs { }

const AboutUs: React.FunctionComponent<AboutUs> = props => {
    return (
        <>
            <div className="about-us-container">
                <div className='head-image'>
                    <img src={AboutUsImages.aboutUsTopImg} alt="" />
                </div>
                <section className="offer-section">
                    <div className="shape">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enable-background="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0 	"></polygon></g></svg>
                    </div>
                    <div className="offers">
                        <div className="section-heading">
                            <h1>What We <span>Offer</span></h1>
                            <p>
                                Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, non fringilla dui enim et ante eleiz.
                            </p>
                        </div>
                    </div>
                    <div className="offers-data">
                        <div className="card">
                            <div className="card-img">
                                <img src={AboutUsImages.mainIconWithText1} alt="" />
                            </div>
                            <div className="card-body">
                                <h5>Engine optimization</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={AboutUsImages.mainIconWithText2} alt="" />
                            </div>
                            <div className="card-body">
                                <h5>Social media strategy</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={AboutUsImages.mainIconWithText3} alt="" />
                            </div>
                            <div className="card-body">
                                <h5>Time and analytics</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={AboutUsImages.mainIconWithText4} alt="" />
                            </div>
                            <div className="card-body">
                                <h5>Online media management</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs