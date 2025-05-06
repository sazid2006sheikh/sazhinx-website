import { useRef } from "react";
import './tiltcard.css';

export default function TiltCard({ children, className = "", opacity = "0.25"}) {
    const cardRef = useRef(null);
    const mousePosRef = useRef({ x: 0, y: 0 }); // Store x, y persistently

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mousePosRef.current = { x, y }; // Save latest position

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 30;
        const rotateY = (x - centerX) / 30;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px, rgba(214, 61, 143, ${opacity}), transparent 60%)
        `;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const { x, y } = mousePosRef.current; // Get last known mouse pos

        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(214, 61, 143, ${opacity}), transparent 60%)`; // rest the color
    };

    return (
        <div
            ref={cardRef}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}
