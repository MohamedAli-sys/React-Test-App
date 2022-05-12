import { FunctionComponent } from "react";
import './AboutUsSection.scss';
import { images } from "../../../../assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface AboutUsSectionProps {

}

const AboutUsSection: FunctionComponent<AboutUsSectionProps> = () => {
    const cards = [
        {
            name: 'Open source',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon1
        },
        {
            name: 'High security',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon2
        },
        {
            name: 'Block chains',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon3
        },
        {
            name: 'Fast service',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon4
        },
        {
            name: 'Free updates',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon5
        },
        {
            name: 'Cool support',
            description: 'Lorem proin gravida nibh et velit aua liquean sollicit lorem quis bibe auctor, nisi ecoquat.',
            img: images.aboutIcon6
        },
    ]
    return (
        <>
            <section className="about-container">
                <div className="about-container-content">

                    {
                        cards.map((el, idx) => {
                            return (
                                <div className="card" key={idx}>
                                    <div className="card-img">
                                        <img src={el.img} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h5>{el.name}</h5>
                                        <p>{el.description}</p>
                                        <div className="button">
                                            <a href="#"><span>Read More</span> <FontAwesomeIcon icon={faPlus} /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default AboutUsSection;