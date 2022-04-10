import React from 'react'
import AboutComp from './Components/AboutComp/AboutComp';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
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
        </main>
    );
}

export default Home