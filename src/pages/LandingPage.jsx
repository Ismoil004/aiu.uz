import React, { useRef } from 'react';
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

function LandingPage() {
    const bodyRefs = {
        entering: useRef(null),
        program: useRef(null),
        choose: useRef(null),
        activities: useRef(null),
        admissions: useRef(null),
        embark: useRef(null),
        news: useRef(null),
        comments: useRef(null),
        locations : useRef(null),
        information: useRef(null),
        contact: useRef(null),
        footer: useRef(null),

    };

    const handleSearch = (term) => {
        const key = term.toLowerCase();
        if (bodyRefs[key] && bodyRefs[key].current) {
            bodyRefs[key].current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <Header onSearch={handleSearch}/>
            <div ref={bodyRefs.entering}><Body/></div>
            <div ref={bodyRefs.program}><Body2/></div>
            <div ref={bodyRefs.choose}><Body3/></div>
            <div ref={bodyRefs.activities}><Body4/></div>
            <div ref={bodyRefs.admissions}><Body5/></div>
            <div ref={bodyRefs.embark}><Body6/></div>
            <div ref={bodyRefs.news}><Body7/></div>
            <div ref={bodyRefs.comments}><Body8/></div>
            <div ref={bodyRefs.locations}><Body9/></div>
            <div ref={bodyRefs.information}><Body10/></div>
            <div ref={bodyRefs.contact}><Body11/></div>
            <div ref={bodyRefs.footer}><Footer/></div>
        </div>
    );
}

export default LandingPage;
