import { faDribbble, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Carousel from 'react-multi-carousel';
import { AboutUsImages } from '../../assests/images/aboutUs';
import { AboutUsSlider } from '../../assests/images/aboutUs/Slide';
import Carousels from '../../Shared/Carousels/Carousels';
import Heading from '../../Shared/Heading/Heading';
import Blog from '../Home/Components/Blog/Blog';
import './AboutUs.scss';
interface AboutUs { }
const AboutUs: React.FunctionComponent<AboutUs> = props => {
    const cards = [
        {
            title: 'CEO',
            name: 'Jonathan Hunt',
            image: AboutUsImages.mainTeamMember1
        },
        {
            title: 'Acount',
            name: 'Hannah Torres',
            image: AboutUsImages.mainTeamMember2
        },
        {
            title: 'Manager',
            name: 'Richard Guzman',
            image: AboutUsImages.mainTeamMember3
        },
        {
            title: 'UI/UX Designer',
            name: 'Melissa Ortega',
            image: AboutUsImages.mainTeamMember4
        },
        {
            title: 'Economist',
            name: 'Andrea Walker',
            image: AboutUsImages.mainTeamMember5
        },
        {
            title: 'Designer',
            name: 'Jacob Sandoval',
            image: AboutUsImages.mainTeamMember6
        },
        {
            title: 'Executive',
            name: 'Cheryl Patterson',
            image: AboutUsImages.mainTeamMember7
        },
        {
            title: 'Developer',
            name: 'Vincent Lucas',
            image: AboutUsImages.mainTeamMember8
        },

    ]
    return (
        <>
            <div className="about-us-container">
                <div className='head-image'>
                    <img src={AboutUsImages.aboutUsTopImg} alt="" />
                </div>
                <section className="offer-section">
                    <div className="shape">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enableBackground="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0 	"></polygon></g></svg>
                    </div>
                    <Heading sectionName='What We ' sectionSpan='Offer' headingParag='Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, non fringilla dui enim et ante eleiz.' />
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
                <section className="ideas">
                    <div className="left-side">
                        <h3>Fresh, new <span>ideas</span></h3>
                        <p>
                            Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zzril delenit augue duis. Autem vel eum iriure dolor in hendrerit in vulputatev dolore eu feugiat nulla facilisis.
                        </p>
                        <a href='' className='button__arrows'><span>Read More</span></a>
                    </div>
                    <div className="right-side">
                        <img src={AboutUsImages.holderSingleImg} alt="" />
                    </div>
                </section>
                <section className="professionals">
                    <Heading sectionName='Meet the professionals' headingParag='Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz.' />
                    <div className="team-members">
                        {
                            cards.map((el, idx) => {
                                return (
                                    <div className="card" key={idx}>
                                        <div className="card-img">
                                            <img src={el.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <div className="info">
                                                <h6>{el.title}</h6>
                                                <h3>{el.name}</h3>
                                            </div>
                                            <div className="social">
                                                <FontAwesomeIcon icon={faTwitter} />
                                                <FontAwesomeIcon icon={faDribbble} />
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <div className="about-us-carousel">
                    <Carousels imgs={AboutUsSlider} />
                </div>
            </div>
            <div className="blog">
                <Blog />
            </div>
        </>
    );
}

export default AboutUs