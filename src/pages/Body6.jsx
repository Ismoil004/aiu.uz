import React, { useEffect, useRef } from 'react';
import "../styles/Body6.css";
import log323 from "../imgs/photo_2025-04-28.jpg";

function Body6() {
    const bodyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const elements = bodyRef.current.querySelectorAll('.anim-item');
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.3}s`;
                        el.classList.add('animate');
                    });

                    const textLines = bodyRef.current.querySelectorAll('.text-body6-t span');
                    textLines.forEach((span, i) => {
                        span.style.animationDelay = `${i * 0.5}s`; // har bir satr 0.6s kechikadi
                        span.classList.add("fadeInUp");
                    });

                }
            },
            { threshold: 0.2 }
        );

        if (bodyRef.current) observer.observe(bodyRef.current);
        return () => { if (bodyRef.current) observer.unobserve(bodyRef.current); };
    }, []);

    return (
        <div className="body6" ref={bodyRef}>
            <div className="body6-box2 anim-item from-left">
                <h1 className="text-body6">Embark on Your Journey at Asia International University!</h1>
                <p className="text-body6-t">
                    <span>Step into a world where knowledge meets innovation,</span>
                    <span> and discover your potential as a future leader.</span>
                    <span> Our cutting-edge programs empower you with skills and expertise,</span>
                    <span> needed to make a meaningful impact across industries.</span>
                    <span> Join a vibrant community of aspiring professionals,</span>
                    <span> engage in hands-on experiences,</span>
                    <span> and learn from distinguished faculty dedicated to your success.</span>
                    <span> At Asia International University, your journey to a fulfilling career begins.</span>
                </p>
            </div>
            <div className="body6-box3 anim-item from-right">
                <img className="img-body6" src={log323} alt="University" />
            </div>
        </div>
    );
}

export default Body6;
