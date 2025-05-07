import { useEffect, useRef, useState } from "react";
import "./box.css";

export default function Box() {
    const boxRef = useRef(null);
    const [scale, setScale] = useState(10); // Start at 10%
    const [opacity, setOpacity] = useState(0); // For h1 text

    useEffect(() => {
        const box = boxRef.current;

        const handleScroll = () => {
            const rect = box.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollProgress = Math.min(
                    1,
                    Math.max(0, (windowHeight - rect.top) / (rect.height / 1.2))
                );

                const newScale = 10 + scrollProgress * 70; // 10% to 80%
                setScale(newScale);

                // Fade in text when scroll passes 50% of the image
                setOpacity(scrollProgress >= 0.5 ? 1 : scrollProgress * 2);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="parallax-box" ref={boxRef}>
            <h1 style={{
                opacity,
                transform: `translateY(-50%) scale(${0.8 + opacity * 0.2})`,
                transition: "opacity 1s ease, transform 1s ease",
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign: "center",
                color: "#fff",
                fontSize: "4.8rem",
                zIndex: 1,
                lineHeight: "1"
            }}>
                SazhinX.com<br />
                <span style={{ fontSize: "1.8rem", letterSpacing: "2px" }}>
                    Where Ideas Take Form
                </span>
            </h1>


            <img
                src="./public/assets/landing_page_image/camera.png"
                alt="reload"
                style={{ width: `${scale}%`, transition: "width 0.2s ease-out" }}
            />
        </div>
    );
}
