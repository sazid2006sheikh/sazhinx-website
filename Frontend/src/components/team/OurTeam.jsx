import { useEffect, useRef, useState } from "react";
import TiltCard from "../tiltcard/TiltCard";
import "./team.css";

// this image show only when no image is provided in the teamMembers image key
const fallBackImage = "./public/assets/team-images/blank_image.avif";

const teamMembers = [
    {
        thought: "Building dreams with code and creative leadership daily.",
        name: "Sazid Sheikh",
        role: "Founder",
        image: "./public/assets/team-images/sazid_sheikh.jpg",
        reverse: false,
    },
    {
        thought: "Turning visions into reality with strategy and heart.",
        name: "Sachin Bhandary",
        role: "Co-Founder",
        image: "./public/assets/team-images/sachin_bhandary.jpg",
        reverse: true,
    },
    {
        thought: "Crafting seamless code to power your digital experience.",
        name: "Rishabh Prajapati",
        role: "Developer",
        image: "",
        reverse: false,
    },
    {
        thought: "Growing brands with data, insights, and clear goals.",
        name: "Ankit Yadav",
        role: "Growth Manager",
        image: "./public/assets/team-images/ankit_yadav.jpg",
        reverse: true,
    },
    {
        thought: "Connecting people through stories, trends, and design ideas.",
        name: "Ravinesh Kumar",
        role: "Marketing & Social Media Manager",
        image: "./public/assets/team-images/ravinesh_kumar.jpg",
        reverse: false,
    },
];

// fallBackChecker checks if image is empty of not, if empty it will use the fallBackImage
function fallBackChecker(image) {
    return image ? image : fallBackImage;
}

export default function OurTeam() {
    const [animateHeadline, setAnimateHeadline] = useState(false);
    const animateHeadlineRef = useRef(null);

    const [animateBox, setAnimateBox] = useState(false);
    const animateBoxRef = useRef(null);

    useEffect(() => {
        const headline = animateHeadlineRef.current;
        const popBox = animateBoxRef.current;

        if (!headline || !popBox) return;

        let lastScrollY = window.scrollY;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY > lastScrollY;
                const scrollingUp = currentScrollY < lastScrollY;

                if (entry.isIntersecting && scrollingDown) {
                    setAnimateHeadline(true);
                    setAnimateBox(true);
                }
                else if (!entry.isIntersecting && scrollingUp) {
                    setAnimateHeadline(false);
                    setAnimateBox(false);
                }
                lastScrollY = currentScrollY;
            }, { threshold: 0.1 }
        );

        observer.observe(headline);
        observer.observe(popBox);

        return () => observer.disconnect(); // Cleanup
    }, []);

    return (
        <div className="team-main-container">
            <div
                ref={animateHeadlineRef}
                className={`headline ${animateHeadline ? 'show' : ''}`}>
                <h1>O</h1>
                <h1>U</h1>
                <h1>R</h1> <br />
                <h1>T</h1>
                <h1>E</h1>
                <h1>A</h1>
                <h1>M</h1>
            </div>

            <div
                ref={animateBoxRef}
                className={`team-card-cont ${animateBox ? "pop" : ""}`}>
                {teamMembers.map(({ thought, name, role, image, reverse }, idx) => (
                    <div className={`team-container ${reverse ? "reverse" : ""}`} key={idx}>
                        {!reverse && (
                            <TiltCard className="person-image" opacity="0.65">
                                {/* Apply fallback image if `image` is empty */}
                                <img src={fallBackChecker(image)} alt={`team-member-${idx}`} />
                            </TiltCard>
                        )}

                        <div className="person-details glow-bg">
                            <div className="person-content">
                                <p>{thought}</p>
                            </div>
                            <div className="person-name">
                                <p>{name} <br /> <span>[{role}]</span></p>
                            </div>
                        </div>

                        {reverse && (
                            <TiltCard className="person-image" opacity="0.65">
                                {/* Apply fallback image if `image` is empty */}
                                <img src={fallBackChecker(image)} alt={`team-member-${idx}`} />
                            </TiltCard>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
