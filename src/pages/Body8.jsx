import React, { useState, useEffect, useRef } from 'react';
import "../styles/Body8.css";
import log1 from "../imgs/testimonials1.png";
import log2 from "../imgs/testimonials2.png";
import log3 from "../imgs/testimonials3.png";
import log4 from "../imgs/testimonials4.png";
import log5 from "../imgs/testimonials5.png";
import log6 from "../imgs/testimonials6.png";
import log7 from "../imgs/testimonials7.png";

function Body8() {
    const tasks = [
        "I am currently pursuing my MBBS at Asia International University, Bukhara...",
        "I love the practical approach and community engagement programs offered at AIU.",
        "The campus life and cultural activities make studying at AIU enjoyable and enriching.",
        "AIU's innovative teaching methods have prepared me for real-world challenges.",
        "The support and guidance from faculty have been amazing throughout my studies.",
        "AIU fosters a student-centered learning environment that promotes creativity and teamwork."
    ];

    const images = [log1, log2, log3, log4, log5, log6, log7];
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
    const containerRef = useRef(null);

    const loopedTasks = [...tasks, ...tasks];
    const loopedImages = [...images, ...images];
    const slideWidth = 100 / 3;

    // Slider autoplay
    useEffect(() => {
        const interval = setInterval(() => setCurrentIndex(prev => prev + 1), 4000);
        return () => clearInterval(interval);
    }, []);

    // Loop reset
    useEffect(() => {
        if (currentIndex >= tasks.length) {
            setTimeout(() => {
                if (slideRef.current) {
                    slideRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                    slideRef.current.style.transform = `translateX(0%)`;
                    setTimeout(() => {
                        if (slideRef.current) slideRef.current.style.transition = 'transform 0.8s ease-in-out';
                    }, 50);
                }
            }, 800);
        }
    }, [currentIndex, tasks.length]);

    // IntersectionObserver for card + text animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const elements = containerRef.current.querySelectorAll('.task-item');
                    elements.forEach((el, i) => {
                        const img = el.querySelector('.img-body8');
                        const title = el.querySelector('.body-8-text-t h4');
                        const text = el.querySelector('.body-8-text-t p');

                        // Animate card itself
                        setTimeout(() => el.classList.add('animate'), i * 200);

                        // Animate inner elements
                        if(img) setTimeout(() => img.classList.add('animate'), i * 250);
                        if(title) setTimeout(() => title.classList.add('animate'), i * 300);
                        if(text) setTimeout(() => text.classList.add('animate'), i * 350);
                    });
                }
            },
            { threshold: 0.2 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
    }, []);

    return (
        <section className="section-body8">
            <div className="body8" ref={containerRef}>
                <header className="body8-hed">
                    <h2 className="body-8-text">
                        What our Students Say
                        <span className="chiziq3"></span>
                    </h2>
                </header>
                <main className="body8-box">
                    <div className="slide-body8" ref={slideRef} style={{ transform: `translateX(${-currentIndex * slideWidth}%)`, transition: 'transform 0.8s ease-in-out' }}>
                        {loopedTasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <div className="img-body8">
                                    <img src={loopedImages[index % images.length]} alt="Student" className="body8-img3"/>
                                </div>
                                <div className="body-8-text-t">
                                    <h4>Student Feedback</h4>
                                    <p>{task}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Body8;
