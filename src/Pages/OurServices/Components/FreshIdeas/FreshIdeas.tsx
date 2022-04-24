import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useEffect } from "react";
import './FreshIdeas.scss'
interface FreshIdeasProps {

}

const FreshIdeas: FunctionComponent<FreshIdeasProps> = () => {
    let sectionFreshRef = React.useRef<HTMLDivElement | null>(null)
    let started = false;
    let market = 68
    let develop = 56
    let design = 82
    let handleAnimation = () => {
        let text = 0
        let columns = document.querySelectorAll('.column');
        if (window.scrollY >= sectionFreshRef.current!.offsetTop - 350 && !started) {
            columns.forEach(el => {
                let front = el.childNodes[0].childNodes[1];
                if (el instanceof HTMLElement) {
                    let max = el.dataset.perc!
                    let count = setInterval(() => {
                        text++;
                        if (front instanceof HTMLElement) front.style.height = text + '%';
                        el.childNodes[2].textContent = text.toString()
                        if (text == +max) clearInterval(count)
                    }, 20)
                }
            })
            started = true
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleAnimation)
        return () => {
            window.removeEventListener('scroll', handleAnimation)
        }
    }, [])

    return (
        <section className="fresh_ideas_container" ref={sectionFreshRef}>
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
                    <div className="column" data-perc={market}>
                        <div className="percentage market">
                            <div className="backdrop"></div>
                            <div className="frontdrop"></div>
                        </div>
                        <p>Marketing</p>
                        <p className="Perc">0</p>
                    </div>
                    <div className="column" data-perc={develop}>
                        <div className="percentage develop">
                            <div className="backdrop"></div>
                            <div className="frontdrop"></div>
                        </div>
                        <p>Development</p>
                        <p className="Perc">0</p>
                    </div>
                    <div className="column" data-perc={design}>
                        <div className="percentage design">
                            <div className="backdrop"></div>
                            <div className="frontdrop"></div>
                        </div>
                        <p>Design</p>
                        <p className="Perc">0</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreshIdeas;