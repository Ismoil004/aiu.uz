import React, { useRef, useEffect } from 'react';
import "../styles/Body5.css";

function Body5() {
    const bodyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const elements = bodyRef.current.querySelectorAll('.anim-item');
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.2}s`;
                        el.classList.add('animate');
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (bodyRef.current) {
            observer.observe(bodyRef.current);
        }

        return () => {
            if (bodyRef.current) {
                observer.unobserve(bodyRef.current);
            }
        }
    }, []);
    function togglebtn (){
        window.location.href = "https://aiu.uz/international-form";
    }
    return (
        <div className="body5" ref={bodyRef}>
            <div className="body5-box">
                <h3 className="text-body5 anim-item from-bottom">
                    Ready to Join Our Vibrant Community?
                </h3>
                <p className="body5-box-t anim-item from-bottom">
                    Experience the dynamic student life at AIU firsthand
                </p>
                <button onClick={togglebtn} className="btn-body5 anim-item from-bottom">
                    Contact Admissions
                </button>
            </div>
        </div>
    );
}

export default Body5;
