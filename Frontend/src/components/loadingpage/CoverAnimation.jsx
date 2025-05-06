import React, { useEffect, useState } from 'react';
import './CoverAnimation.css';

const CoverAnimation = ({ onFinish }) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setAnimation(true);
        }, 200);

        const endTimer = setTimeout(() => {
            onFinish();
        }, 5000);

        return () => {
            clearTimeout(delayTimer);
            clearTimeout(endTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`cover-page ${animation ? 'start' : ''} `}>
            <div className="page-video">
                <video autoPlay muted playsInline>
                    <source src="./src/assets/coverpage/coverpage-video-warmtone.mp4" type='video/mp4' />
                </video>
            </div>
            <div className="cover-content">
                <h1 className="cover-title">
                    <span className="typewriter-text">UNLEASH YOUR CREATIVE POWER</span>
                </h1>

                <p className="cover-subtitle">Welcome to SazhinX Studio Gear — where Creativity meets Cinematography.</p>
                
                <div className="link">
                    <a href="https://www.instagram.com/sazhinx.01/">
                        <i className="fa-brands fa-instagram"></i>
                        sazhinx.01
                    </a>
                </div>
            </div>
            <audio autoPlay loop>
                    <source src="./public/openingmusic.mp3" type='audio/mp3' />
            </audio>
        </div>
    );
};

export default CoverAnimation;
