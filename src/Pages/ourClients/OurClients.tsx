import { FunctionComponent } from "react";
import { OurClientsImages } from "../../assests/images/ourClients";
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1680 72" enable-background="0 0 1680 72" xmlSpace="preserve"><g><polygon points="0,73 0,0 1680,0"></polygon></g></svg>
                    </div>
                    <div className="underline_style"></div>
                </section>
            </div>
        </>
    );
}

export default OurClients;