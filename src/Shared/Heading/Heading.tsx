import { FunctionComponent } from "react";
import './Heading.scss';

interface HeadingProps {
    sectionName: string;
    sectionSpan?: string;
    headingParag: string
}

const Heading: FunctionComponent<HeadingProps> = (props) => {
    return (
        <>
            <section className="sectionHeading">
                <h2 className="sectionName">
                    {props.sectionName}
                    <span className="sectionSpan"> {props.sectionSpan}</span>
                </h2>
                <p className="headingParag">
                    {props.headingParag}
                </p>
            </section>
        </>
    );
}

export default Heading;