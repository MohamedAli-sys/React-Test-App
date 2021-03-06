import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import image from './../../../../assests/images/HeaderSection.png'
import './Header.scss'

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <>
            <header className="header">
                <div className="left-section">
                    <img src={image} alt="" />
                </div>
                <div className="right-section">
                    <h1>Get creative with .....</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque optio recusandae</p>
                    <div className="buttons">
                        <a className="button__arrows">
                            <span>Read More</span>
                        </a>
                        <a className="button__arrows">
                            <span>Get Innovie</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;