import React, { useEffect, useRef } from 'react';
import "../components/Footer.css"
import logo from "../imgs/logo.svg"

function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const items = footerRef.current.querySelectorAll('ul, .footer2, .foot-li svg');
                    items.forEach((item, i) => {
                        setTimeout(() => item.classList.add('animate'), i * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <div ref={footerRef}>
            <footer className="footer">
                <div className="footer1">
                    <ul className="ul-foot">
                        <li className="kll"><a className="kll-l">Useful Links</a></li>
                        <li className="foot-li"><a href={"https://uzbmb.uz/"} className="kll-l">State Testing Center</a></li>

                        <li className="foot-li"><a href={"https://yoshlardaftari.uz/supports-2"} className="kll-l">Youth Notebook</a></li>
                        <li className="foot-li"><a href={"https://id.egov.uz/oz"} className="kll-l">Unified Identification System</a></li>
                        <li className="foot-li"><a href={"https://gov.uz/uz"} className="kll-l">Government Portal</a></li>
                        <li className="foot-li"><a href={"https://president.uz/oz"} className="kll-l">Press Service of the President</a></li>
                        <li className="foot-li"><a href={"https://my.gov.uz/uz"} className="kll-l">Interactive State Services Portal</a></li>
                    </ul>

                    <ul className="ul-foot2">
                        <li className="kll"><a className="kll-l" >Address Information</a></li>
                        <li className="foot-li"><a href="tel:+998500305876" className="kll-l">Tel: +998 50 030 58 76</a></li>
                        <li className="foot-li"><a href="mailto:info@oxu.uz" className="kll-l">Email: info@oxu.uz</a></li>
                        <iframe className="mt-5 map"
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3b3dd30225dbbddcf4d316ebb3aca449175fc9737f4a723239a2ad2ce925ec9&amp;source=constructor"
                                width="400" height="200" frameBorder="0"></iframe>
                    </ul>

                    <ul className="ul-foot3">
                        <li className="kll"><a className="kll-l" >Social Media</a></li>
                        <li className="foot-li">
                            <a href="https://t.me/AzMU_UZ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                                </svg>
                                <p className="kll-l">Telegram</p>
                            </a>

                        </li>
                        <li className="foot-li">
                            <a href="https://www.instagram.com/aiu.uzb/">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
                                </svg>
                                <p className="kll-l">Instagram</p>
                            </a>

                        </li>
                        <li className={"foot-li"}>
                            <a href="https://www.facebook.com/share/1UaPBeZp76/?mibextid=wwXIfr">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>
                                <p className={"kll-l"}>Facebook</p>
                            </a>
                        </li>
                        <li className={"foot-li"}>
                            <a href="https://youtube.com/@asiaintrntnluniversityofficial?si=XChd7BLqJXx6ODO-">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                                <p className={"kll-l"}>YouTube</p>
                            </a>
                        </li>
                        <li className={"foot-li"}>
                            <a href="https://wa.me/998500305876">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                </svg>
                                <p className={"kll-l"}>Whatsapp</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer2">
                    <a className="footer-img" href="/"><img src={logo} alt=""/></a>
                    <div className="footer3">
                        <p className="footer-text">© 2025. Copyright All Rights Reserved, AIU</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
