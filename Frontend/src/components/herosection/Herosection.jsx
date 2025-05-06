import React, { useState, useRef, useEffect } from 'react';
import './herosection.css';
import { Sendbtn } from '../btn/Button.jsx';

// images in the card
const image = [ 
    "./src/assets/herosection/prod-image/studio_card_1.png",
    "./src/assets/herosection/prod-image/studio_card_2.png",
    "./src/assets/herosection/prod-image/studio_card_3.png",
    "./src/assets/herosection/prod-image/studio_card_4.png",
    "./src/assets/herosection/prod-image/studio_card_5.png",
    "./src/assets/herosection/prod-image/studio_card_6.png",
    "./src/assets/herosection/prod-image/studio_card_7.png",
    "./src/assets/herosection/prod-image/studio_card_8.jpeg",
    "./src/assets/herosection/prod-image/studio_card_9.jpeg",
    "./src/assets/herosection/prod-image/studio_card_10.jpg",
];

// advertised image
const advertiseImages = [
    "./src/assets/herosection/advertisements/add-img-1.png",
    "./src/assets/herosection/advertisements/add-img-2.png",
    "./src/assets/herosection/advertisements/add-img-3.png",
];

const HeroSection = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Can be card objects later
    const cardWidth = 320; // Width + gap
    const visibleCards = 2; // Number of cards visible at once
    const maxOffset = -(cardWidth * (cards.length - visibleCards));

    const [offset, setOffset] = useState(0);
    const [pushBack, setPushBack] = useState(false);
    const pushBackRef = useRef(null);

    useEffect(() => {
        const pushBox = pushBackRef.current;
        if (!pushBox) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio < 0.7) {
                    setPushBack(true); // trigger fade-out when less than 70% visible
                } else {
                    setPushBack(false); // reset if scrolled back up
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100), // thresholds from 0 to 1
            }
        );

        observer.observe(pushBox);
        return () => observer.disconnect();
    }, []);

    // advertizement section 
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const fadeOut = setTimeout(() => {
            setFade(true);
        }, 2500); // fade out before image switch
        
        const interval = setInterval(() => {
            setCurrentAdIndex(prevIndex => (prevIndex + 1) % advertiseImages.length);
            setFade(false);
        }, 3000); // change image every 3 seconds

        return () => {
            clearTimeout(fadeOut);
            clearInterval(interval)
        };
    }, [currentAdIndex]);

    return (
        // main-container
        <div
            ref={pushBackRef}
            className={`welcome-container-brand ${pushBack ? "fade-out" : ""}`}>

            <div className="hero-container">
                {/* right-side-container */}
                <div className="right-side-container">
                    <div className="content">
                        <h1>Sazhin<span>X</span><br /><span>Studio Gear</span></h1>
                        <p>Your vision deserves more than average tools.<br />Explore elite-grade gear made for creators who don't
                            compromise.</p>
                    </div>
                </div>

                

            </div>


            {/* hero-section-background-image */}
            <div className='advertisement-section'>
                {/* sample image */}
                {/* <img className='hero-section-image' src={"./src/assets/landing_page_image/hero_section_.webp"} alt="reload" /> */}

                {/* automatic advertise-image carousal section */}
                <div className='advertise-carousel'>
                    <img
                        className={`advertise-image ${fade ? "fade" : ""}`}
                        src={advertiseImages[currentAdIndex]}
                        alt={`advertise-${currentAdIndex}`}
                    />
                </div>

                {/* advertisement video section */}
                {/* <video className='advertise-video' autoPlay loop muted playsInline>
                    <source src="./src/assets/videos/cat.mp4" type="video/mp4" />
                </video> */}
            </div>

        </div>
    );
};

export default HeroSection;
