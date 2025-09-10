import React, { useState, useEffect, useRef } from "react";
import "../styles/Body7.css";
import img1 from "../imgs/Accredited.png";
import img2 from "../imgs/Accredited Academic Programs.png";
import img3 from "../imgs/accredited-academic-program.jfif";
import img4 from "../imgs/Advanced Facilities and Laboratories.jpg";
import img5 from "../imgs/Collaborative Learning Environment.jpg";
import img6 from "../imgs/Community Engagement Initiatives.JPG";
import img7 from "../imgs/Comprehensive-Support-Services.png";
import img8 from "../imgs/Cultural and Extracurricular Activities.JPG";
import img9 from "../imgs/DSC_0673.jpg";
import img10 from "../imgs/Emphasis on Lifelong Learning.jpg";
import img11 from "../imgs/International Partnerships.JPG";
import img12 from "../imgs/Innovative Teaching Methods.JPG";

function Body7() {
    const bodyRef = useRef(null);

    const cardsData = [
        { img: img1, title: "Menopause Awareness Program Concludes Successfully", desc: "Asia International University, Bukhara...", btnText: "Read More" },
        { img: img2, title: "Accredited Academic Programs Launched", desc: "AIU has launched a series of accredited academic programs...", btnText: "Learn More" },
        { img: img3, title: "Advanced Research Facilities Opened", desc: "The university inaugurated state-of-the-art research laboratories...", btnText: "Explore Labs" },
        { img: img4, title: "Collaborative Learning Environment", desc: "AIU fosters a collaborative learning environment...", btnText: "Join Now" },
        { img: img5, title: "Community Engagement Initiatives", desc: "AIU actively participates in community development programs...", btnText: "Participate" },
        { img: img6, title: "Cultural and Extracurricular Activities", desc: "Wide range of cultural and extracurricular activities are organized...", btnText: "Discover More" },
        { img: img7, title: "Comprehensive Support Services", desc: "AIU provides comprehensive support services including academic counseling...", btnText: "Get Support" },
        { img: img8, title: "International Partnerships", desc: "Collaborations with universities worldwide allow students to participate...", btnText: "View Partners" },
        { img: img9, title: "Innovative Teaching Methods", desc: "AIU employs modern pedagogical approaches such as flipped classrooms...", btnText: "Learn How" },
        { img: img10, title: "Emphasis on Lifelong Learning", desc: "Programs are designed to encourage continuous personal and professional development...", btnText: "Explore Programs" },
        { img: img11, title: "Research and Development Achievements", desc: "AIU’s faculty and students have made significant contributions...", btnText: "See Achievements" },
        { img: img12, title: "Student-Centered Learning Environment", desc: "AIU emphasizes active learning, student engagement...", btnText: "Learn More" }
    ];

    const total = cardsData.length;
    const visible = 4;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

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

        if (bodyRef.current) observer.observe(bodyRef.current);
        return () => { if (bodyRef.current) observer.unobserve(bodyRef.current); };
    }, []);

    const cards = cardsData.map((card, i) => (
        <div
            className="task2 anim-item from-bottom"
            key={i}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <img src={card.img} alt={`Card ${i + 1}`} className="img-body7 anim-item from-bottom"/>
            <div className="task-body7">
                <h2 className="text-body7-t anim-item from-left">{card.title}</h2>
                <p className="text-desc anim-item from-left">{card.desc}</p>
                <div className="btn-body7 anim-item from-left">
                    <div className="btn-text">{card.btnText}</div>
                </div>
            </div>
        </div>
    ));

    const loopCards = [...cards, ...cards];

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (currentIndex >= total) {
            setTimeout(() => setCurrentIndex(0), 500);
        }
    }, [currentIndex, total]);
    function togglebtn (){
        window.location.href = "https://aiu.uz/news/all";
    }    return (
        <section className="section-body7" ref={bodyRef}>
            <div className="body7">
                <header className="headerTop-body7">
                    <h2 className="text-body7">
                        Latest News
                        <span className="chiziq2"></span>
                    </h2>
                </header>

                <main className="box-body7">
                    <div className="slider-wrapper">
                        <div
                            className="slide-track2"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visible)}%)`,
                                transition: currentIndex === 0 ? "none" : "transform 0.5s ease-in-out",
                            }}
                        >
                            {loopCards}
                        </div>
                    </div>
                    <div className={"mt-5"}>
                        <button onClick={togglebtn} className={"btn-body7-t"}>
                            <div className={"img-body7-t"}></div>
                            View all news
                        </button>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Body7;
