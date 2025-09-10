import React from 'react';
import Header from "../components/Header.jsx";
import "../styles/LandingPage.css"
import Body from "./Body.jsx";
import Body2 from "./Body2.jsx";
import Body3 from "./Body3.jsx";
import Body4 from "./Body4.jsx";
import Body5 from "./Body5.jsx";
import Body6 from "./Body6.jsx";
import Body7 from "./Body7.jsx";
import Body8 from "./Body8.jsx";
import Body9 from "./Body9.jsx";
import Body10 from "./Body10.jsx";
import Body11 from "./Body11.jsx";
import Footer from "../components/Footer.jsx";
function LandingPage(props) {
    return (
        <div>
            <Header/>
            <Body/>
            <Body2/>
            <Body3/>
            <Body4/>
            <Body5/>
            <Body6/>
            <Body7/>
            <Body8/>
            <Body9/>
            <Body10/>
            <Body11/>
            <Footer/>
        </div>
    );
}

export default LandingPage;