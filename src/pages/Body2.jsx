import React, { useRef, useEffect } from 'react';
import "../styles/Body2.css"
import log from "../imgs/bsba.jfif"

function Body2() {
    const bodyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    const elements = bodyRef.current.querySelectorAll('.anim-item');
                    elements.forEach((el, i) => {
                        el.style.transitionDelay = `${i * 0.2}s`;
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
    function togglebtn (){
        window.location.href = "https://aiu.uz/find-programs";
    }
    return (
        <section className="body2" ref={bodyRef}>
            <div className="body2-box anim-item from-bottom">
                <div className="body2-box2">
                    <div className="body2-card">
                        {[
                            { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", title: "HEAL & SERVE", desc: "MBBS (Bachelor of Medicine & Bachelor of Surgery)" },
                            { img: log, title: "LEAD & STRATEGIZE", desc: "BSBA (Bachelor of Science in Business Administration)" },
                            { img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", title: "CODE & INNOVATE", desc: "BSIT (Bachelor of Science in Information Technology)" },
                            { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", title: "Global & Strategic Leadership", desc: "MBA (Master of Business Administration)" }
                        ].map((card, index) => (
                            <div className="body2-card2 anim-item" key={index}
                                 className={`body2-card2 anim-item ${index % 2 === 0 ? 'from-left' : 'from-right'}`}>
                                <img className="img-body" src={card.img} alt={card.title}/>
                                <div className="img-div">
                                    <div className="text-white">
                                        <h3 className="text-x1">{card.title}</h3>
                                        <p className="text-x2">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="body2-box3 anim-item from-bottom">
                        <div className="body2-card3">
                            <h3 className="card-body-text anim-item from-left">
                                Breaking Borders, Building Futures: Gateway to Global Education
                            </h3>
                            <p className="card-body-text2 anim-item from-right">
                                At AIU, we don't just teach—we ignite ambition. With world-class faculty, hands-on learning, and a global outlook, we empower students to become changemakers in medicine, technology, business, and beyond.
                            </p>
                            <p className="card-body-text3 anim-item from-bottom">
                                Your future isn't just waiting—it starts here.
                            </p>
                        </div>
                        <button onClick={togglebtn} className="btn-body2 anim-item from-bottom">
                            FIND YOUR PROGRAM
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body2;
