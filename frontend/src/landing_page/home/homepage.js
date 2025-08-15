import React from 'react';
import Hero from './hero';
import Awards from './awards';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import Openaccount from '../openaccount';
import Navbar from '../navbar';
import Footer from '../footer';

function Homepage() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
        </>
     );
}

export default Homepage;