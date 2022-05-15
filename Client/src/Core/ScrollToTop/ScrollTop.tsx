import { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollTopProps {}

const ScrollTop: FunctionComponent<ScrollTopProps> = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollTop;
