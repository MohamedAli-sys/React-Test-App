import { FunctionComponent } from "react";
import { AboutUsSlider } from "../../assests/images/aboutUs/Slide";
import { OurClientsImages } from "../../assests/images/ourClients";
import Carousels from "../../Shared/Carousels/Carousels";
import Heading from "../../Shared/Heading/Heading";
import './OurClients.scss'
interface OurClientsProps {

}

const OurClients: FunctionComponent<OurClientsProps> = () => {
    return (
        <>
            <div className="our_clients_container">
                <section className="our_clients_header">
                    <div className="section_head">
                        <div className="heading">
                            <h2>Together we achieve more!</h2>
                            <p>
                                Praesent hendrerit, mi facilisis eleifend enim lobortis, adipiscing bus lorem, non fringilla.
                            </p>
                        </div>
                        <div className="img">
                            <img src={OurClientsImages.headingImg} alt="" />
                        </div>
                    </div>
                    <div className="underline_shape">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enableBackground="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0"></polygon></g></svg>
                    </div>
                    <div className="underline_style"></div>
                </section>
                <section className="amazing_clients">
                    <Heading sectionName="Meet our amazing" sectionSpan="clients" headingParag="Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zzril delenit. Autem vel eum iriure dolor in dolore accu qui eu feugiat." />
                    <div className="carousels-contain">
                        <Carousels imgs={AboutUsSlider} />
                    </div>
                    <div className="carousels-contain carousel">
                        <Carousels imgs={OurClientsImages.carsouel} />
                    </div>
                </section>
            </div>
        </>
    );
}

export default OurClients;