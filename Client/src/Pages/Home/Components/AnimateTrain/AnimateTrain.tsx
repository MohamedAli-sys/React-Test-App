import { FunctionComponent } from "react";

interface AnimateTrainProps {

}

const AnimateTrain: FunctionComponent<AnimateTrainProps> = () => {
    return (
        <div className="video-container">
            <iframe className="inner" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/80W7E-u1T7s?playlist=80W7E-u1T7s&amp;iv_load_policy=3&amp;enablejsapi=1&amp;disablekb=1&amp;autoplay=1&amp;controls=0&amp;showinfo=false&amp;rel=0&amp;loop=1&amp;wmode=transparent&amp;origin=https%3A%2F%2Finnovio.qodeinteractive.com&amp;widgetid=1" id="widget2" style={{ maxWidth: '1000%', marginLeft: '0px', marginTop: '-141px', height: '775.688px' }}></iframe>
        </div>
    );
}

export default AnimateTrain;