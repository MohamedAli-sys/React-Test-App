import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { OurServicesImages } from "../../assests/images/ourServices";
import CanvasCircle from "../../Shared/Components/CanvasCircle/CanvasCircle";
import './OurServices.scss'
interface OurServicesProps {

}

const OurServices: FunctionComponent<OurServicesProps> = () => {
    return (
        <>
            <div className="our_services_container">
                <section className="our_services_header">
                    <div className="section_head">
                        <div className="heading">
                            <h2>Together we achieve more!</h2>
                            <p>
                                Praesent hendrerit, mi facilisis eleifend enim lobortis, adipiscing bus lorem, non fringilla.
                            </p>
                        </div>
                        <div className="img">
                            <img src={OurServicesImages.headingImg} alt="" />
                        </div>
                    </div>
                    <div className="underline_shape">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enableBackground="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0"></polygon></g></svg>
                    </div>
                    <div className="underline_style"></div>
                </section>
                <section className="statistics">
                    <div className="statis">
                        <CanvasCircle color='#ff4b36' percentage={85} />
                        <h5>All social media strategy</h5>
                    </div>
                    <div className="statis">
                        <CanvasCircle color="#4772ff" percentage={32} />
                        <h5>All social media strategy</h5>
                    </div>
                    <div className="statis">
                        <CanvasCircle color="#ff4b36" percentage={69} />
                        <h5>All social media strategy</h5>
                    </div>
                </section>
                <section className="fresh_ideas_container">
                    <div className="fresh_ideas">
                        <div className="left-side">
                            <h5>
                                Fresh, new ideas
                            </h5>
                            <div className="idea">
                                <FontAwesomeIcon icon={faCheck} />
                                <p>
                                    Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zzril delenit augue duis.
                                </p>
                            </div>
                            <div className="idea">
                                <FontAwesomeIcon icon={faCheck} />
                                <p>
                                    Autem vel eum iriure dolor in hendrerit in vulputate velit esse dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                </p>
                            </div>
                            <a className="button__arrows">
                                <span>Read More</span>
                            </a>
                        </div>
                        <div className="right-side">
                            <div className="column">
                                <div className="percentage market">
                                    <div className="backdrop"></div>
                                    <div className="frontdrop"></div>
                                </div>
                                <p>Marketing</p>
                                <p className="Perc">68%</p>
                            </div>
                            <div className="column">
                                <div className="percentage develop">
                                    <div className="backdrop"></div>
                                    <div className="frontdrop"></div>
                                </div>
                                <p>Development</p>
                                <p className="Perc">56%</p>
                            </div>
                            <div className="column">
                                <div className="percentage design">
                                    <div className="backdrop"></div>
                                    <div className="frontdrop"></div>
                                </div>
                                <p>Design</p>
                                <p className="Perc">82%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default OurServices;