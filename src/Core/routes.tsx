import React from "react";
import IRoute from "../interfaces/route";

const Home = React.lazy(() => import('../Pages/Home/Home'))
const AboutUs = React.lazy(() => import('../Pages/AboutUs/AboutUs'))
const ContactUs = React.lazy(() => import('../Pages/ContactUs/ContactUs'))
const OurClients = React.lazy(() => import('../Pages/ourClients/OurClients'))
const Services = React.lazy(() => import('../Pages/OurServices/OurServices'))
const Team = React.lazy(() => import('../Pages/OurTeam/OurTeam'))

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About Us',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: ContactUs,
    },
    {
        path: '/clients',
        name: 'Clients',
        component: OurClients,
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/OurTeam',
        name: 'Team',
        component: Team
    }
]

export default routes;