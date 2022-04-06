import { faCartShopping, faBagShopping, faBars, faMagnifyingGlass, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import './Navbar.scss'

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {

    const [expand, setExpand] = useState<boolean>(false)

    const toggleMenu = () => {
        setExpand(!expand)
    }

    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul className={expand ? "expanded" : ''}>
                        {
                            routes.map((link, idx) => {
                                return (
                                    <li key={idx}>
                                        <NavLink
                                            key={idx}
                                            to={link.path}
                                            className={active => active.isActive ? 'isActive' : ''} >
                                            <FontAwesomeIcon icon={faArrowRightLong} />
                                            <span>{link.name}</span>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right-side-buttons">
                    <button> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <button> <FontAwesomeIcon icon={faCartShopping} /></button>
                    <button> <FontAwesomeIcon icon={faBars} /></button>
                </div>
                <button className="expanded-button" onClick={() => toggleMenu()}> <FontAwesomeIcon icon={faBars} /></button>
            </nav>
        </>
    );
}

export default Navbar;