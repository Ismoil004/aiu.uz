import React, { useEffect, useRef } from 'react';
import "../styles/Body11.css";

function Body11() {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const topCards = topRef.current.querySelectorAll('.box11-card');
                    topCards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('animate'), i * 150);
                    });

                    const bottomCards = bottomRef.current.querySelectorAll('.card-body-t');
                    bottomCards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('animate'), i * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (topRef.current) observer.observe(topRef.current);
        if (bottomRef.current) observer.observe(bottomRef.current);

        return () => {
            if(topRef.current) observer.unobserve(topRef.current);
            if(bottomRef.current) observer.unobserve(bottomRef.current);
        }
    }, []);
    function togglebtn (){
        window.location.href = "https://aiu.uz/international-form";
    }
    return (
        <section className="section11">
            <div className="box11">
                <h1 className="text-body11">Contact Us</h1>

                {/* Top cards */}
                <div className="box11-body" ref={topRef}>
                    <div className="box11-card">
                        <div className="rasm"></div>

                        <h2 className="box11-text">Make an Enquiry</h2>
                        <p className="box11-text1">We're ready to help.</p>
                        <p className="box11-text2">Reach out to us now.</p>
                        <button onClick={togglebtn} className="bnt">Enquire Online</button>
                    </div>

                    <div className="box11-card">
                        <div className="rasm"></div>

                        <h2 className="box11-text">AIU Main Campus</h2>
                        <p className="box11-text2">Call us:</p>
                        <p className="box11-text2">Inside Uzbekistan: +998 55 305 00 09</p>
                        <p className="box11-text2">Outside Uzbekistan: +998 55 305 00 09</p>
                    </div>
                </div>

                <div className="chiziq5"></div>

                {/* Bottom cards */}
                <div className="card-body11" ref={bottomRef}>
                    <div className="card-body-t">
                        <div className="rasm"></div>
                        <h3 className="text-body13">Admissions Office</h3>
                        <p>+998 50 030 58 76</p>
                        <p>admission@oxu.uz</p>
                    </div>

                    <div className="card-body-t">
                        <div className="rasm"></div>
                        <h3 className="text-body13">Student Support</h3>
                        <p>+998 50 030 58 76</p>
                        <p>aiudean@oxu.uz</p>
                    </div>

                    <div className="card-body-t">
                        <div className="rasm"></div>
                        <h3 className="text-body13">General Inquiries</h3>
                        <p>+998 50 030 58 76</p>
                        <p>info@oxu.uz</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body11;
