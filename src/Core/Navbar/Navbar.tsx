import { faCartShopping, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SvgArrow from "../../Shared/Components/SvgArrow";
import routes from "../routes";
import './Navbar.scss'

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const location = useLocation();
    const [navbar, setNavbar] = useState(true)
    const scrollDown = () => {
        let el = document.querySelector("#appear-nav")
        if (window.scrollY > 600) {
            el?.classList.add('appear-nav');
        } else {
            el?.classList.remove('appear-nav');
        }
    }
    useEffect(() => {
        location.pathname === '/' ? setNavbar(true) : setNavbar(false)
        window.addEventListener('scroll', scrollDown)
        return () => {
            window.removeEventListener('scroll', scrollDown)
        }
    }, [location])

    const toggleMenu = () => {
        const el = document.querySelector('.expanded')
        el?.classList.toggle('toggled')
    }

    const stickToggleMeny = () => {
        const el = document.querySelector('.stick_expand');
        el?.classList.toggle('toggled')
    }

    return (
        <>
            <nav className={`nav ${!navbar && 'routers'}`}>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul id="expand" className="expanded">
                        {
                            routes.map((link, idx) => {
                                return (
                                    <li key={idx} onClick={() => toggleMenu()} className="link__arrows">
                                        <NavLink
                                            key={idx}
                                            to={link.path}
                                            className={active => active.isActive ? 'isActive' : ''} >
                                            <SvgArrow />
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

            <nav id="appear-nav" className='nav sticky__nav'>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul className="expanded stick_expand">
                        {
                            routes.map((link, idx) => {
                                return (
                                    <li key={idx} onClick={() => stickToggleMeny()} className="link__arrows">
                                        <NavLink
                                            key={idx}
                                            to={link.path}
                                            className={active => active.isActive ? 'isActive' : ''} >
                                            <SvgArrow />
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
                <button className="expanded-button" onClick={() => stickToggleMeny()}> <FontAwesomeIcon icon={faBars} /></button>
            </nav>
        </>
    );
}

export default Navbar;