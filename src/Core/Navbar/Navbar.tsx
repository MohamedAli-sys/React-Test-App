import { faCartShopping, faBagShopping, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/about'} >About</Link></li>
                    </ul>
                </div>
                <div className="right-side-buttons">
                    <button> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <button> <FontAwesomeIcon icon={faCartShopping} /></button>
                    <button> <FontAwesomeIcon icon={faBars} /></button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;