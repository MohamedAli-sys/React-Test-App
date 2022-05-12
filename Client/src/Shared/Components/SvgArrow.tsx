import { FunctionComponent } from "react";

interface SvgArrowProps {

}

const SvgArrow: FunctionComponent<SvgArrowProps> = () => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 26 9" xmlSpace="preserve">
            <path d="M26,4.7C26,4.6,26,4.4,26,4.3c0-0.1-0.1-0.1-0.1-0.2l-3.5-3.5c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7L24.3,4
	H0.5C0.2,4,0,4.2,0,4.5S0.2,5,0.5,5h23.8l-2.7,2.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l3.5-3.5
	C25.9,4.8,25.9,4.8,26,4.7z"/>
        </svg>
    );
}

export default SvgArrow;