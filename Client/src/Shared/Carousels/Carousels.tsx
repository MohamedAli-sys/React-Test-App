import { FunctionComponent } from "react";
import Carousel from "react-multi-carousel";
import './Carousels.scss';

interface imgs {
    hover: string,
    img: string
}

interface CarouselsProps {
    imgs: imgs[]
}
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

const Carousels: FunctionComponent<CarouselsProps> = (props) => {
    return (
        <div className="carousel-container">
            <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={3000} infinite={true}  >
                {
                    props.imgs.map((img, idx) => {
                        return (
                            <div className="item" key={idx}>
                                <img src={img.img} />
                                <img src={img.hover} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Carousels;