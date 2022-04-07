import React from 'react'
import AboutComp from './Components/AboutComp/AboutComp';
import Header from './Components/Header/Header';
import './Home.scss'
interface Home { }

const Home: React.FunctionComponent<Home> = props => {
    return (
        <main className='Home'>
            <Header />
            <AboutComp />
        </main>
    );
}

export default Home