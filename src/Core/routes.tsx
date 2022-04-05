import React from "react";
import IRoute from "../interfaces/route";

const Home = React.lazy(() => import('../Pages/Home/Home'))
const AboutUs = React.lazy(() => import('../Pages/AboutUs/AboutUs'))

const routes: IRoute[] = [
    {
        path: '/',
        name: 'HomePage',
        component: Home,
    },
    {
        path: '/about',
        name: 'About Us',
        component: AboutUs,
    }
]

export default routes;