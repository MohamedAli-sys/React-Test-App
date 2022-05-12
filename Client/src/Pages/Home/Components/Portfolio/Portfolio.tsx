import { FunctionComponent } from 'react';
import Heading from '../../../../Shared/Heading/Heading';
import { images } from '../../../../assests/images';
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import SvgArrow from '../../../../Shared/Components/SvgArrow';
interface PortfolioProps {
}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
    const headingParag = 'Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem condimentum fringilla dui enim et ante.'
    const items = [
        {
            id: 1,
            name: 'Stay connected',
            image: images.portImg1,
            tools: [
                'Branding',
                'Illustration',
                'New'
            ],
        },
        {
            id: 2,
            name: 'Presentation',
            image: images.portImg2,
            tools: [
                'Branding',
                'New'
            ],
        },
        {
            id: 3,
            name: 'Creative Mind',
            image: images.portImg3,
            tools: [
                'Branding',
                'New'
            ],
        },
        {
            id: 4,
            name: 'Black Magic',
            image: images.portImg4,
            tools: [
                'Branding',
                'New'
            ],
        },
        {
            id: 5,
            name: 'Virtual integeration',
            image: images.portImg5,
            tools: [
                'Branding',
                'Illustration',
            ],
        },
        {
            id: 6,
            name: 'New trends',
            image: images.portImg6,
            tools: [
                'Branding',
                'Illustration',
            ],
        },
        {
            id: 7,
            name: 'Trends 2018',
            image: images.portImg7,
            tools: [
                'Branding',
            ],
        },
        {
            id: 8,
            name: 'Blue city',
            image: images.portImg8,
            tools: [
                'Branding',
            ],
        },
        {
            id: 9,
            name: 'Dream-do',
            image: images.portImg9,
            tools: [
                'Branding',
                'Illustration',
            ],
        },
    ];

    return (
        <>
            <Heading sectionName={'Awesome'} sectionSpan={'portfolio'} headingParag={headingParag} />
            <div className='links'>
                <ul>
                    <li className='link__arrows'>
                        <a className='showAll isActive'>
                            <SvgArrow />
                            <span>Show All</span>
                        </a>
                    </li>
                    <li className='link__arrows'>
                        <a className='illustration'>
                            <SvgArrow />
                            <span>
                                Illustration
                            </span>
                        </a>
                    </li>
                    <li className='link__arrows'>
                        <a className='New'>
                            <SvgArrow />
                            <span>
                                New
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <section className='portfolio-section'>
                {
                    items.map((item) => {
                        return (
                            <div key={item.id} className='part-container'>
                                <img src={item.image} alt="" />
                                <div className='port-content'>
                                    <div className='tools'>
                                        {
                                            item.tools.map((tool) => {
                                                return (<a key={tool}>{tool}</a>)
                                            })
                                        }
                                    </div>
                                    <h5>{item.name}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    );
}

export default Portfolio;