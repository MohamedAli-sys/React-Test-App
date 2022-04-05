import React from 'react'
import Header from './Components/Header';
import './Home.scss'
interface Home { }

const Home: React.FunctionComponent<Home> = props => {
    return (
        <main className='Home'>
            <Header />
        </main>
    );
}

export default Home