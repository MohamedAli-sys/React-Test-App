import { faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { images } from "../../../../assests/images";
import './Blog.scss';
interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {
    const cards = [
        {
            name: 'Powering data for the equity blockchain.',
            date: 'November 9, 2018',
            image: images.blog2
        },
        {
            name: 'Introducing the new marketplace sistem',
            date: 'November 9, 2018',
            image: images.blog3
        },
        {
            name: 'Shine the new light on the digital world',
            date: 'November 9, 2018',
            image: images.blog1
        },
    ]
    return (
        <>
            <section className="blog-container">
                <div className="blog-container-content">
                    {
                        cards.map((el, idx) => {
                            return (
                                <div className="card" key={idx}>
                                    <div className="card-img">
                                        <img src={el.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="date">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span>{el.date}</span>
                                        </div>
                                        <div className="card-heading">
                                            <a href="">
                                                {el.name}
                                            </a>
                                        </div>
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

export default Blog;