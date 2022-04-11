import { FunctionComponent } from "react";
import Heading from "../../../../Shared/Heading/Heading";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './TrustedClients.scss';
import { slide } from "../../../../assests/images/slider";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
interface TrustedClientsProps {

}

const TrustedClients: FunctionComponent<TrustedClientsProps> = () => {
    const headingParag = 'Proin eget purus augue. Nam tempor dapibus sapien, ut posuere magna malesuada et. Maecenas consectetur, sem vitae dignissim commodo, erat mi.'
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <>
            <section className="trustedClients">
                <Heading sectionName={'Our trusted clients'} headingParag={headingParag} />
                <div className="carousel-container">
                    <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={3000} infinite={true}  >
                        {
                            slide.map((img, idx) => {
                                return (
                                    <div className="item" key={idx}>
                                        <img src={img.img1} />
                                        <img src={img.img2} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </section>
        </>
    );
}

export default TrustedClients;