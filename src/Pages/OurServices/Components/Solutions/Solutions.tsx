import React, { FunctionComponent, useEffect } from "react";
import './Solutions.scss'
interface SolutionsProps {

}

const Solutions: FunctionComponent<SolutionsProps> = () => {
    let sectionRef = React.useRef<HTMLDivElement | null>(null)
    let started = false;
    const handleAnimationSlides = () => {
        let text = 0
        let rows = document.querySelectorAll('.slide');
        if (window.scrollY >= sectionRef.current!.offsetTop - 350 && !started) {
            rows.forEach(el => {
                let badge = el.childNodes[0];
                let badgeNum = el.childNodes[0].childNodes[0];
                let fill = el.childNodes[1].childNodes[0]
                if (el instanceof HTMLElement) {
                    let max = +el.dataset.solution!
                    let slideCount = setInterval(() => {
                        text++;
                        if (badge instanceof HTMLElement) badge.style.left = text + '%';
                        if (fill instanceof HTMLElement) fill.style.width = text + '%'
                        badgeNum.textContent = text.toString();
                        if (text >= max) clearInterval(slideCount)
                    }, 2000 / max)
                }
            })
            started = true
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleAnimationSlides)
        return () => {
            window.removeEventListener('scroll', handleAnimationSlides)
        }
    }, [])

    const rows = [
        {
            slide: 'UI / UX Design',
            perc: 87,
            data: 'design',
            backgroundColor: '#4772ff',
            borderColor: '#4772ff transparent transparent'

        },
        {
            slide: 'Development',
            perc: 60,
            data: 'develop',
            backgroundColor: '#1d32ce',
            borderColor: '#1d32ce transparent transparent'

        },
        {
            slide: 'Ilustration',
            perc: 94,
            data: 'ilustrate',
            backgroundColor: '#ff4b36',
            borderColor: '#ff4b36 transparent transparent'

        },
        {
            slide: 'Compatibility',
            perc: 82,
            data: 'compatibility',
            backgroundColor: '#08104d',
            borderColor: '#08104d transparent transparent'
        },
    ]

    return (
        <>
            <section className="solution_container">
                <div className="solutions" ref={sectionRef}>
                    <div className="left-side">
                        {
                            rows.map((el, idx) => {
                                return (
                                    <div className="row" key={idx}>
                                        <p>{el.slide}</p>
                                        <div className="slide" data-solution={el.perc}>
                                            <span className="percentage-badge" style={{ backgroundColor: el.backgroundColor }}>
                                                <div className="perc-num">0</div>
                                                <span className="carret" style={{ borderColor: el.borderColor }}></span>
                                            </span>
                                            <div className="backdrop">
                                                <span className="fill" style={{ backgroundColor: el.backgroundColor }}></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="right-side">
                        <h3>
                            The right solutions
                        </h3>
                        <p>
                            Sed in egestas nibh. Morbi mollis posuere enim ac porta.
                            Duis quis nisl dignissim mollis. Cras dictum vitae est a lacinia.
                            Nunc posuere uam, ex eu efficitur varius, est nulla varius augue,
                            at viverra ligula. Nullam in fringilla felis, id lobortis risus.
                        </p>
                        <a className="button__arrows">
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Solutions;