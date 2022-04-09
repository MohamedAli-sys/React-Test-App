import { FunctionComponent } from 'react';
import Heading from '../../../../Shared/Heading/Heading';
interface PortfolioProps {
}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
    const headingParag = 'Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem condimentum fringilla dui enim et ante.'
    return (
        <>
            <Heading sectionName={'Awesome'} sectionSpan={'portfolio'} headingParag={headingParag} />
        </>
    );
}

export default Portfolio;