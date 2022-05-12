import React from 'react'
import AboutComp from './Components/AboutComp/AboutComp';
import AboutUsSection from './Components/AboutUsSection/AboutUsSection';
import AnimateTrain from './Components/AnimateTrain/AnimateTrain';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import ProfTeam from './Components/ProfTeam/ProfTeam';
import TrustedClients from './Components/TrustedClients/TrustedClients';
import './Home.scss'
interface Home { }

const Home: React.FunctionComponent<Home> = props => {
    return (
        <main className='Home'>
            <Header />
            <AboutComp />
            <Portfolio />
            <TrustedClients />
            {/* <AnimateTrain /> */}
            <AboutUsSection />
            <ProfTeam />
            <Blog />
            <Contact />
        </main>
    );
}

export default Home