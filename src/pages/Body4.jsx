import React, { useEffect, useRef } from 'react';
import "../styles/Body4.css";

import academicImg from "../imgs/academic-activities.jfif";
import scientificImg from "../imgs/scientific-activities.jfif";
import sportImg from "../imgs/sport-activities.jfif";
import culturalImg from "../imgs/uzb-4.webp";
import itImg from "../imgs/it-activities.jfif";

const activities = [
    { img: academicImg, title: "Academic Activities", desc: "Debate clubs, academic competitions, language circles, and subject-specific societies", label: "Academic", link: "https://aiu.uz/academic-council",desc2: "Learn more →" },
    { img: scientificImg, title: "Scientific Activities", desc: "Research projects, science fairs, innovation labs, and STEM competitions", label: "Scientific", link: "https://aiu.uz/scientific-council",desc2: "Explore research →" },
    { img: sportImg, title: "Sport Activities", desc: "Varsity teams, intramural leagues, fitness classes, and outdoor adventures", label: "Sports", link: "https://aiu.uz/sports-council",desc2: "View sports →" },
    { img: culturalImg, title: "Cultural Activities", desc: "International festivals, art exhibitions, music ensembles, and theater productions", label: "Cultural", link: "https://aiu.uz/cultural-council",desc2: "See events →" },
    { img: itImg, title: "IT Activities", desc: "Hackathons, coding clubs, robotics teams, and tech innovation challenges", label: "IT & Tech", link: "https://aiu.uz/it-media-council",desc2: "Discover tech →" },
];

function Body4() {
    const bodyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    const elements = bodyRef.current.querySelectorAll('.slide-in-left, .slide-in-right, .fade-up');
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.2}s`;
                        el.classList.add('visible');
                    });
                }
            },
            { threshold: 0.2 }
        );
        if(bodyRef.current){
            observer.observe(bodyRef.current);
        }
        return () => {
            if(bodyRef.current){
                observer.unobserve(bodyRef.current);
            }
        }
    }, []);

    return (
        <section className="body4" ref={bodyRef}>
            <div className="body4-card fade-up">
                <h2 className="body4-text fade-up">
                    Student Activities at AIU
                    <span className="body4-chiziq fade-up"></span>
                </h2>
                <div className="text-body4 fade-up">
                    <p className="text-body4-t fade-up">Explore diverse opportunities beyond the classroom</p>
                </div>
            </div>

            <div className="body4-cards">
                {activities.map((act, idx) => (
                    <div key={idx} className={`card-body4 ${idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                        <div className="body4-card-img" style={{ backgroundImage: `url(${act.img})` }}>
                            <div className="academic">{act.label}</div>
                        </div>
                        <div className="body4-card-img-desc fade-up">
                            <h4 className="text-body4-img">{act.title}</h4>
                            <p className="text-body4-img2">{act.desc}</p>
                            <a className="text-body4-img3" href={act.link}>{act.desc2}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Body4;
