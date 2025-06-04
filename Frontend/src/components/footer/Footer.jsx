import { useEffect, useRef, useState } from "react";
import { Sendbtn } from "../btn/Button.jsx";
import SocialLinks from "../links/Sociallink.jsx";
import TiltCard from "../tiltcard/TiltCard.jsx";

import './footer.css';

export default function Footer() {
    const [animateBrand, setAnimateBrand] = useState(false);
    const [animateCard, setAnimateCard] = useState(false);

    const footerContentRef = useRef(null);
    const brandNameRef = useRef(null);

    useEffect(() => {
        const observeElement = (element, callback) => {
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        callback(true);
                    }
                    else {
                        callback(false); // Reset animation class when out of view
                    }
                },
                { threshold: 0.2 }
            );

            observer.observe(element);
            return () => observer.disconnect(); // Cleanup
        };

        const footerObs = observeElement(footerContentRef.current, setAnimateCard);
        const brandObs = observeElement(brandNameRef.current, setAnimateBrand);

        return () => {
            footerObs?.disconnect?.();
            brandObs?.disconnect?.();
        };
    }, []);


    return (
        <div className="footer">
            <div
                ref={footerContentRef}
                className={`footer-content ${animateCard ? 'move-upward' : ''}`}
            >
                <TiltCard className="content">
                    <p className="typewriter">
                        Subscribe <span> Our Newsletter</span>
                    </p>
                    <div className='sign-in-container'>
                        <form action="#" className='form-wrapper'>
                            <input type="email" placeholder="Email ID" name="email" required />
                            <div className='btn-Wrapper'><Sendbtn /></div>
                        </form>
                    </div>
                </TiltCard>

                <TiltCard className="about-us">
                    <p className="head">About Us</p>
                    <div className="address">
                        <p>Name: SAZHINX Studio Gear</p>
                        <p>City: New Delhi</p>
                        <p>Country: India</p>
                        <p>Email: sazhinx.01@gmail.com</p>
                        <p>Phone: +91 8588051001</p>
                    </div>
                </TiltCard>

                <TiltCard className="social-links-container">
                    <p>Gear Up. Join the Studio Vibe.</p>
                    <SocialLinks />
                </TiltCard>
            </div>

            <div className={`copyright-cont ${animateCard ? 'move-upward' : ''}`}>
                <p className="copyright">
                    Copyright <i className="fa-solid fa-copyright"></i> 2025
                    Sazhinx.com | All Rights Reserved.
                </p>
            </div>

            <div className={`payment-mode ${animateCard ? 'move-upward' : ''}`}>
                <p className="para">We Accept</p>
                <div className="brand-logo">
                    <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cash-on-delivery-cyber-monday-flaticons-lineal-color-flat-icons.png" alt="Cash on Delivery" />
                    <img width="30" height="30" src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
                    <img width="30" height="30" src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" />
                    <img width="30" height="30" src="https://img.icons8.com/color/48/phone-pe.png" alt="PhonePe" />
                </div>
            </div>

            <div
                ref={brandNameRef}
                className={`footer-bottom-brand-name ${animateBrand ? 'animate' : ''}`}
            >
                {"SAZHINX".split("").map((char, i) => (
                    <h1 key={i}>{char}</h1>
                ))}
            </div>
        </div>
    );
}
