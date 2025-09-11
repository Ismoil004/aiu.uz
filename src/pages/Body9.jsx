import React, { useEffect, useRef } from 'react';
import "../styles/Body9.css"
import rsd from "../imgs/DSC_0307.JPG"
import i from "../imgs/photo_2025-09-11_09-31-49.jpg"
import r from "../imgs/photo_2025-09-11_09-34-22.jpg"
function Body9() {
    const cardsData = [
        {
            img: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/df32fb3f28e93b91c2de69d41244ebf8f17813694539d87df6bde8b32c2eaee6?apiKey=0e60d26ffe404316aa35b6241738714a&",
            title: "AIU Primary Campus",
            desc: "74 Gijduvon Street, 'Yangiobod MFY', Bukhara city",
            mapUrl: "https://www.google.com/maps/@39.799483,64.425144,3a,76.2y,127.33h,81.55t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDryLPjOA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYVM6iAw6NfuoV5Y_cVY5zJP4nswBK3PD_qY7SS7zIWq8X3TWRnkXbz2nKXJKopo-9FqCNCKcg5nC9JleEU82X83fHLpgfZ2LY34NyYYsPUzYuDw_S8Q4VesjPZUtB5Tvzh-jVb%3Dw900-h600-k-no-pi8.451079162965613-ya288.2970878711027-ro0-fo100!7i5760!8i2880?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" // shu yerga to'g'ri linkni qo'y
        },
        {
            img: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/f7bbc780d1b519d6601927dccc113d4ee2e966c607d44a36091a4e7c8428e684?apiKey=0e60d26ffe404316aa35b6241738714a&",
            title: "AIU 2nd Campus",
            desc: "86 Gijduvon Street, 'Yangiobod MFY', Bukhara city",
            mapUrl: i
        },
        {
            img: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/8663a46a0b50598bfdda1b082980a422b5e34186295ce9e04474a765d5e685ab?apiKey=0e60d26ffe404316aa35b6241738714a&",
            title: "AIU 3rd Campus",
            desc: "20a Koksaray Street, Bukhara city",
            mapUrl: "https://www.google.com/maps/@39.7703381,64.4565751,3a,48.9y,259.62h,98.87t/data=!3m7!1e1!3m5!1sCIHM0ogKEICAgIC1tM2gOw!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYRJoClep4B3MpXcPVO1up6cOLG2DXi6n4N66_LFuh6tHXyQNW3so6P1SugY7DOTzv_Ha72XqBrDzRv9LGD7_K-uHEtPzxlhMSVSdV8VA4x-70WEv79KmAKn1piPdBgeAKExp6Z%3Dw900-h600-k-no-pi-8.870261970147268-ya96.30187368406865-ro0-fo100!7i5760!8i2880?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            img: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/196d4d1016c534194eaa3cf33fa7c73a228c5a10afc726813ba0765ef939b825?apiKey=0e60d26ffe404316aa35b6241738714a&",
            title: "AIU 4th Campus",
            desc: "100 Gijduvon Street , Bukhara city",
            mapUrl: r
        },
        {
            img: rsd,
            title: "AIU 5th Campus",
            desc: "82 Samarkand Street, 'Kukaldosh SMG', Bukhara city",
            mapUrl: "https://www.google.com/maps/place/OSIYO+INNOVATSION+UNIVERSITETI/@39.6778176,66.942167,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMcydTm642jHH473ue8e-kXcStx8b4a-ERECMNL!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMcydTm642jHH473ue8e-kXcStx8b4a-ERECMNL%3Dw203-h143-k-no!7i3508!8i2480!4m7!3m6!1s0x3f4d1935868ba94d:0xf6d0615a1fac324e!8m2!3d39.6778931!4d66.9422374!10e5!16s%2Fg%2F11sk4vrlh5?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
        }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const elements = containerRef.current.querySelectorAll('.body9-card');
                    elements.forEach((el, i) => {
                        const img = el.querySelector('.cd-img img');
                        const title = el.querySelector('.text-crd');
                        const desc = el.querySelector('.text-crd2');

                        setTimeout(() => el.classList.add('animate'), i * 150);
                        if(img) setTimeout(() => img.classList.add('animate'), i * 200);
                        if(title) setTimeout(() => title.classList.add('animate'), i * 250);
                        if(desc) setTimeout(() => desc.classList.add('animate'), i * 300);
                    });
                }
            },
            { threshold: 0.2 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
    }, []);

    return (
        <section className="body9-section">
            <div className="body9">
                <div className="box-body9">
                    <h2 className="body9-text">
                        Different Campuses – One University
                        <span className="chiziq4"></span>
                    </h2>
                    <p className="body9-text2">
                        Explore our locations in Bukhara. Our campuses are united with features that encourage an innovative AIU lifestyle.
                    </p>
                </div>
                <div className="w-100">
                    <div className="box-card" ref={containerRef}>
                        {cardsData.map((card, i) => (
                            <div className="body9-card" key={i}>
                                <article className="d-flex flex-column">
                                    <div
                                        onClick={() => window.location.href = card.mapUrl}
                                        className="d-flex flex-column flex-grow-1"
                                        style={{cursor: "pointer"}}
                                    >
                                        <div className="cd-img">
                                            <img src={card.img} alt={card.title} />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-crd">{card.title}</h3>
                                            <p className="text-crd2">{card.desc}</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body9;
