import React, { useState, useEffect, useRef } from "react";
import "../styles/Body3.css";

import img1 from "../imgs/Accredited.png";
import img2 from "../imgs/Accredited Academic Programs.png";
import img3 from "../imgs/accredited-academic-program.jfif";
import img4 from "../imgs/Advanced Facilities and Laboratories.jpg";
import img5 from "../imgs/Collaborative Learning Environment.jpg";
import img6 from "../imgs/Community Engagement Initiatives.JPG";
import img7 from "../imgs/Comprehensive-Support-Services.png";
import img8 from "../imgs/Cultural and Extracurricular Activities.JPG";

const tasks = [
    { img: img1, subtitle: "Accredited" },
    { img: img2, subtitle: "Academic Programs" },
    { img: img3, subtitle: "Academic Program" },
    { img: img4, subtitle: "Facilities & Labs" },
    { img: img5, subtitle: "Learning Environment" },
    { img: img6, subtitle: "Community Engagement" },
    { img: img7, subtitle: "Support Services" },
    { img: img8, subtitle: "Extracurricular" },
];

function Body3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(tasks.length / itemsPerSlide);
    const intervalRef = useRef(null);
    const bodyRef = useRef(null);

    // Slider
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
            }, 3000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused, totalSlides]);

    // Scroll Animatsiya
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    const elements = bodyRef.current.querySelectorAll('.anim-item');
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.15}s`;
                        el.classList.add('animate');
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
        <section className="body3" ref={bodyRef}>
            <div className="container">
                <h2 className="body3-title anim-item from-bottom">
                    Why Choose Us
                    <span className="underline"></span>
                </h2>
                <div className="slider anim-item from-bottom">
                    <div
                        className="slide-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {tasks.map((task, idx) => (
                            <div
                                key={idx}
                                className="card2 anim-item"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div
                                    className="card-img2"
                                    style={{ backgroundImage: `url(${task.img})` }}
                                ></div>
                                <div className="card-overlay">
                                    <h3>{task.subtitle}</h3>
                                    <p>
                                        Discover programs, internships, and collaborative
                                        opportunities to enhance your skills.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body3;
