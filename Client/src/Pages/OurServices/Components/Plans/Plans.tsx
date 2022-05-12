import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import './Plans.scss'
interface PlansProps {

}

const Plans: FunctionComponent<PlansProps> = () => {
    return (
        <>
            <section className="plans_container">
                <div className="skew-back-line">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enableBackground="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0"></polygon></g></svg>
                </div>
                <div className="plans">
                    <div className="plan">
                        <div className="price">
                            <div className="price-amount">
                                12$
                            </div>
                            <div className="monthly">
                                Monthly
                            </div>
                        </div>
                        <div className="details">
                            <div className="title">
                                Personal
                            </div>
                            <div className="describe">
                                Design solutions for any media. It’s a piece of cake.
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Optimized for mobile
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Free custom domain
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Best hosting market
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Outstanding support
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <a className="button__arrows">
                                <span>Read More</span>
                            </a>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="price">
                            <div className="price-amount">
                                12$
                            </div>
                            <div className="monthly">
                                Monthly
                            </div>
                        </div>
                        <div className="details">
                            <div className="title">
                                Personal
                            </div>
                            <div className="describe">
                                Design solutions for any media. It’s a piece of cake.

                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Optimized for mobile
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Free custom domain
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Best hosting market
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Outstanding support
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <a className="button__arrows">
                                <span>Read More</span>
                            </a>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="price">
                            <div className="price-amount">
                                12$
                            </div>
                            <div className="monthly">
                                Monthly
                            </div>
                        </div>
                        <div className="details">
                            <div className="title">
                                Personal
                            </div>
                            <div className="describe">
                                Design solutions for any media. It’s a piece of cake.
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Optimized for mobile
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Free custom domain
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Best hosting market
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>
                                            Outstanding support
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <a className="button__arrows primary">
                                <span>Read More</span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Plans;