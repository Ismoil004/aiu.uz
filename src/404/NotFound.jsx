import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./NotFound.css"
import { useNavigate } from 'react-router-dom';
function NotFound(props) {
    const navigate = useNavigate();
    return (
        <div>
            <main className="notfound-main">
                <div className="notfound-card">
                    <div className="notfound-visual" aria-hidden>
                        <span className="notfound-404">404</span>
                    </div>


                    <div className="notfound-text">
                        <h1>Page Not Found</h1>
                        <p>Oops! The page you’re looking for doesn’t exist. Please check the URL or go back to the homepage.</p>


                        <div className="notfound-actions">
                            <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NotFound;