import React, { useEffect, useRef } from "react";
import "../styles/Body10.css";

function Body10() {
    const stats = [
        { number: "5", label: "Campuses" },
        { number: "25,000", label: "Students" },
        { number: "88", label: "Faculty" },
        { number: "470", label: "Professors" },
        { number: "30", label: "Partner Universities" },
        { number: "82%", label: "Alumni Employment" },
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const cards = containerRef.current.querySelectorAll('.stat-card');
                    cards.forEach((card, i) => {
                        const number = card.querySelector('.stat-number');
                        const label = card.querySelector('.stat-label');

                        setTimeout(() => card.classList.add('animate'), i * 150);
                        if(number) setTimeout(() => number.classList.add('animate'), i * 200);
                        if(label) setTimeout(() => label.classList.add('animate'), i * 250);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => { if(containerRef.current) observer.unobserve(containerRef.current); }
    }, []);

    return (
        <section className="section10">
            <div className="overlay">
                <div className="body10-container" ref={containerRef}>
                    {stats.map((item, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">{item.number}</div>
                            <div className="stat-label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Body10;
