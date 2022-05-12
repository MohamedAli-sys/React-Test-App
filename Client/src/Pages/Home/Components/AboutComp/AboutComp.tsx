import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import bgimg1 from '../../../../assests/images/h2-icon-backround-img-1.png';
import bgimg2 from '../../../../assests/images/h2-icon-backround-img-2.png';
import bgimg3 from '../../../../assests/images/h2-icon-backround-img-3.png';
import img1 from '../../../../assests/images/h2-icon-img-1.png';
import img2 from '../../../../assests/images/h2-icon-img-2.png';
import img3 from '../../../../assests/images/h2-icon-img-3.png';
import './AboutComp.scss';

interface AboutCompProps {

}

const AboutComp: FunctionComponent<AboutCompProps> = () => {

    return (
        <section className="about-comp">
            <div className="cards">
                <div className="card">
                    <Link to={'about'} className="content">
                        <img src={img1} />
                        <img src={bgimg1} />
                    </Link>
                    <div className="card-body">
                        <Link to={'about'} className="card-header">
                            <h5>Design Proposals</h5>
                        </Link>
                        <p>Lorem proin gravida nibh vel velit auliquean nisi elit sollicitudin lora auctor, nisi elit.</p>
                    </div>
                </div>
                <div className="card">
                    <Link to={'services'} className="content">
                        <img src={img2} />
                        <img src={bgimg2} />
                    </Link>
                    <div className="card-body">
                        <Link to={'services'} className="card-header">
                            <h5>Going into action</h5>
                        </Link>
                        <p>Lorem proin gravida nibh vel velit auliquean nisi elit sollicitudin lora auctor, nisi elit.</p>
                    </div>
                </div>
                <div className="card">
                    <Link to={'about'} className="content">
                        <img src={img3} />
                        <img src={bgimg3} />
                    </Link>
                    <div className="card-body">
                        <Link to={'about'} className="card-header">
                            <h5>Project planning</h5>
                        </Link>
                        <p>Lorem proin gravida nibh vel velit auliquean nisi elit sollicitudin lora auctor, nisi elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComp;