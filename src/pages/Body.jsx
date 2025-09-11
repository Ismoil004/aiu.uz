import React, { useRef, useEffect, useState } from "react";
import "../styles/Body.css";
import logo from "../imgs/logo_aiu.svg";

function Body() {
    const bodyRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const elements = bodyRef.current.querySelectorAll(".anim-item");
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.2}s`;
                        el.classList.add("animate");
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (bodyRef.current) observer.observe(bodyRef.current);

        return () => {
            if (bodyRef.current) observer.unobserve(bodyRef.current);
        };
    }, []);
function togglebtn (){
    window.location.href = "https://aiu.uz/international-form";
}    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="body1" ref={bodyRef}>
            <div >
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>
            <div className={`body-hed py-3 anim-item from-top ${menuOpen ? "show" : ""}`}>
                <div className="card-body1 flex-wrap">
                    <div className="position-relative d-flex anim-item from-left">
                        <img className="img-1" src={logo} alt="logo" />
                    </div>

                    <div
                        className={`Body-text ${activeDropdown === 0 ? "open" : ""}`}
                        onClick={() => toggleDropdown(0)}
                    >
                        <span>ABOUT</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/about/aiu/vision">Vision</a>
                            <a href="https://aiu.uz/about/aiu/mission">Mission</a>
                            <a href="https://aiu.uz/about/leadership">Message from the Rector</a>
                            <a href="https://aiu.uz/about/aiu/structure-of-university">Structure</a>
                            <a href="https://aiu.uz/about/aiu/regulatory-documents">Regulations</a>
                        </div>
                    </div>

                    <div className="Body-text">
                        <span>ACADEMICS</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/academics/academic-calendar">Academic Calendar</a>
                            <a href="https://aiu.uz/academics/study-plan">Study Plan</a>
                            <a href="https://aiu.uz/academics/faculty-structure">Faculty Structure</a>
                        </div>
                    </div>

                    <div className="Body-text">
                        <span>INTERNATIONAL</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/international-relations">International Relations Office</a>
                            <a href="https://erasmus-plus.ec.europa.eu/">ERASMUS+</a>
                        </div>
                    </div>

                    <div className="Body-text">
                        <span>STUDENT LIFE</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/academic-council">Council of the Academic Activities</a>
                            <a href="https://aiu.uz/scientific-council">Council for the Scientific Activities</a>
                            <a href="https://aiu.uz/sports-council">Council for the Sport</a>
                            <a href="https://aiu.uz/cultural-council">Council for the Cultural Activities</a>
                            <a href="https://aiu.uz/it-media-council">Council for the IT/Media</a>

                        </div>
                    </div>

                    <div className="Body-text">
                        <span>ABOUT UZBEKISTAN</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/about-uzbekistan">About Uzbekistan</a>
                            <a href="https://aiu.uz/life-in-bukhara">Life in Bukhara</a>
                        </div>
                    </div>

                    <div className="Body-text">
                        <span>ADMISSION</span>
                        <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        </svg>
                        <div className="dropdown-menu3">
                            <a href="https://aiu.uz/find-programs">Find program</a>
                            <a href="https://aiu.uz/scholarships">Scholarship</a>
                            <a href="https://aiu.uz/tuition-fees">Tuition and Cost</a>
                            <a href="https://aiu.uz/login">For partners / For applicants</a>
                        </div>
                    </div>

                    <div className="Body-text">
                        <a href={"https://aiu.uz/hospitals"}>HOSPITAL AFFILIATED</a>
                    </div>

                    <div className="Body-text">
                        <a href={"https://aiu.uz/research"}>RESEARCH AND PUBLICATION</a>
                    </div>

                    <div className="Body-text">
                        <a href={"https://aiu.uz/international/faq"}>FAQ</a>
                    </div>

                </div>
            </div>

            <div className="body1-div anim-item from-bottom">
                <div className="body1-card2">
                    <span className="body1-welcome anim-item from-left">Welcome to AIU</span>
                    <h2 className="h2-box anim-item from-right">
                        Ready to start on an exciting journey with us? Explore our university and become part of the family.
                    </h2>
                    <p className="text-body-1 anim-item from-bottom">
                        Experience world-class education guided by expert International faculty and supported by a vibrant, diverse community.
                    </p>
                    <button onClick={togglebtn} className="apply-now-btn anim-item from-bottom">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}



export default Body;
