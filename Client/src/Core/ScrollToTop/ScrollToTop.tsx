import { FunctionComponent, useEffect, useState } from "react";
import './ScrollToTop.scss'
interface ScrollToTopProps {

}

const ScrollToTop: FunctionComponent<ScrollToTopProps> = () => {
    const [appear, setAppear] = useState(false)
    const windowAction = () => {
        if (window.scrollY > 400) {
            setAppear(true)
        } else {
            setAppear(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', windowAction)
        return () => {
            window.removeEventListener('scroll', windowAction)
        }
    }, [])
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <a onClick={toTop} className={`back-to-top ${appear && 'toTopAppear'}`}></a>
        </>
    );
}

export default ScrollToTop;