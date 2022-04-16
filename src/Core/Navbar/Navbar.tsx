import { faCartShopping, faBars, faMagnifyingGlass, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { regular, solid, thin } from '@fortawesome/fontawesome-svg-core/import.macro';
import routes from "../routes";
import './Navbar.scss'

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const [scrolled, setScrolled] = useState(false)
    const scrollDown = () => {
        if (window.scrollY > 600)
            setScrolled(true)
        else
            setScrolled(false)

        let el = document.querySelector("#appear-nav")
        if (window.scrollY > 600) {
            el?.classList.add('appear-nav');
        } else {
            el?.classList.remove('appear-nav');
        }
        console.log(el);

    }
    useEffect(() => {
        window.addEventListener('scroll', scrollDown)
        return () => {
            window.removeEventListener('scroll', scrollDown)
        }
    }, [])

    const toggleMenu = () => {
        const el = document.querySelector('.expanded')
        el?.classList.toggle('toggled')
    }

    return (
        <>
            <nav className={`nav`}>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul className="expanded">
                        {
                            routes.map((link, idx) => {
                                return (
                                    <li key={idx} onClick={() => toggleMenu()}>
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

            <nav id="appear-nav" className='nav sticky__nav'>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="navigation">
                    <ul className="expanded">
                        {
                            routes.map((link, idx) => {
                                return (
                                    <li key={idx} onClick={() => toggleMenu()}>
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