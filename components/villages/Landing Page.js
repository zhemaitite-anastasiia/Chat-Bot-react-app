import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/villages/neighborhoods/Header.js";
import SectionA from "./components/villages/neighborhoods/Section A.js";
import SectionB from "./components/villages/neighborhoods/Section B.js";
import SectionC from "./components/villages/neighborhoods/Section C.js";
import Footer from "./components/villages/neighborhoods/Footer.js";



class LandingPage extends React.Component {
    render(){
        return (
            <div className="landing-page">
            <Header/>
            <SectionA/>
            <SectionB/>
            <SectionC/>
            <Footer/>
            </div>


        )
    }
}
module.exports = LandingPage;
