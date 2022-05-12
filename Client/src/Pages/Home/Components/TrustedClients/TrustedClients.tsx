import { FunctionComponent } from "react";
import Heading from "../../../../Shared/Heading/Heading";
import 'react-multi-carousel/lib/styles.css';
import './TrustedClients.scss';
import { slide } from "../../../../assests/images/slider";
import Carousels from "../../../../Shared/Carousels/Carousels";

interface TrustedClientsProps {

}

const TrustedClients: FunctionComponent<TrustedClientsProps> = () => {
    const headingParag = 'Proin eget purus augue. Nam tempor dapibus sapien, ut posuere magna malesuada et. Maecenas consectetur, sem vitae dignissim commodo, erat mi.'
    return (
        <>
            <section className="trustedClients">
                <Heading sectionName={'Our trusted clients'} headingParag={headingParag} />
                <div className="carousel">
                    <Carousels imgs={slide} />
                </div>
            </section>
        </>
    );
}

export default TrustedClients;