import React from "react";
import IRoute from "../interfaces/route";

const Home = React.lazy(() => import('../Pages/Home/Home'))
const AboutUs = React.lazy(() => import('../Pages/AboutUs/AboutUs'))
const ContactUs = React.lazy(() => import('../Pages/ContactUs/ContactUs'))
const Clients = React.lazy(() => import('../Pages/ourClients/clients'))
const Services = React.lazy(() => import('../Pages/ourServcies/ourServices'))

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
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
        name: 'Our Clients',
        component: Clients,
    },
    {
        path: '/services',
        name: 'Our Services',
        component: Services,
    },
]

export default routes;