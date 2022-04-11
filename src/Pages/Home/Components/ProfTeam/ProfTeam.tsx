import { fab, faDribbble, faFacebook, faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { imagesTeam } from "../../../../assests/images/team";
import Heading from "../../../../Shared/Heading/Heading";
import './ProfTeam.scss';
interface ProfTeamProps {

}

const ProfTeam: FunctionComponent<ProfTeamProps> = () => {
    const cards = [
        {
            title: 'Designer',
            name: 'Oliver Smith',
            imgA: imagesTeam[0].imgA,
            imgB: imagesTeam[0].imgB
        },
        {
            title: 'Manager',
            name: 'Lucy Thomas',
            imgA: imagesTeam[1].imgA,
            imgB: imagesTeam[1].imgB
        },
        {
            title: 'Manager',
            name: 'Marian Smith',
            imgA: imagesTeam[2].imgA,
            imgB: imagesTeam[2].imgB
        },
        {
            title: 'Designer',
            name: 'Summer Kelly',
            imgA: imagesTeam[3].imgA,
            imgB: imagesTeam[3].imgB
        },
        {
            title: 'Manager',
            name: 'Charlotte Harris',
            imgA: imagesTeam[4].imgA,
            imgB: imagesTeam[4].imgB
        },
        {
            title: 'Owner',
            name: 'Lucas Walker',
            imgA: imagesTeam[5].imgA,
            imgB: imagesTeam[5].imgB
        },
        {
            title: 'Manager',
            name: 'Chloe Thompson',
            imgA: imagesTeam[6].imgA,
            imgB: imagesTeam[6].imgB
        },
        {
            title: 'Owner',
            name: 'William Smith',
            imgA: imagesTeam[7].imgA,
            imgB: imagesTeam[7].imgB
        },
    ]
    return (
        <>
            <section className="team-container">
                <Heading sectionName={"Meet the professionals"} headingParag={"Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz."} />
                <div className="team-container-content">
                    {
                        cards.map((el, idx) => {
                            return (
                                <div className="card" key={idx}>
                                    <div className="card-img">
                                        <img src={el.imgA} alt="" />
                                        <img src={el.imgB} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h6>{el.title}</h6>
                                        <h6>{el.name}</h6>
                                        <div className="team-icons">
                                            <ul>
                                                <li><FontAwesomeIcon icon={faTwitter} /> </li>
                                                <li><FontAwesomeIcon icon={faDribbble} /></li>
                                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                            </ul>
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

export default ProfTeam;