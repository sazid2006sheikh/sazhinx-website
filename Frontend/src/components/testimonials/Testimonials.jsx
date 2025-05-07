import { useState, useRef, useEffect } from "react";
import "./testimonials.css";

function Ratings({ rating = 0 }) {
    const totalStars = 5;

    return (
        <div className="rating-box">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className={index < rating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default function Testimonial() {
    const cardsRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            image: "./public/assets/reviewers/person_1.avif",
            name: "Rashmika Sika",
            city: "Delhi",
            text: "Absolutely love the quality! The attention to detail and packaging felt so premium. This isn’t just merch — it's an experience.",
            ratingValue: 4
        },
        {
            image: "./public/assets/reviewers/xyz.jpg",
            name: "Subham Singh",
            city: "Kanpur",
            text: "As a creator, I’m super picky about design. SazhinX nailed the aesthetic. Lighting setup are too good.",
            ratingValue: 5
        },
        {
            image: "./public/assets/reviewers/p3.jpg",
            name: "Abhishek Gupta",
            city: "Ghaziabad",
            text: "Perfect blend of comfort and creativity. This is what every modern creator brand should strive for.",
            ratingValue: 4
        },
        {
            image: "./public/assets/reviewers/p4.jpg",
            name: "Sonu Sharma",
            city: "Noida",
            text: "Nice Product & Services, price is high but it's affordable enough for beginners.",
            ratingValue: 3
        },
        {
            image: "./public/assets/reviewers/person_5.jpg",
            name: "Parmeet Kaur",
            city: "Faridabad",
            text: "I loved your Tripods & Key lights. Totally Worth it, High Quality.",
            ratingValue: 3
        },
    ];

    const [cardBackgrounds, setCardBackgrounds] = useState(cards.map(() => "rgba(13, 17, 23, 0.05)"));

    const scrollToCard = (index) => {
        const container = cardsRef.current;
        const cardWidth = container.children[0].offsetWidth + 16; // card + gap
        container.style.transform = `translateX(-${(index) * (cardWidth)}px)`;
    };

    const handleNext = () => {
        if (activeIndex < cards.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    const handleMouseMove = (e, index) => {
        const cardEl = e.currentTarget;
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * -5;

        const bg = `radial-gradient(circle at ${x}px ${y}px, rgba(214, 61, 143, 0.25), transparent 100%)`;

        const newBackgrounds = [...cardBackgrounds];
        newBackgrounds[index] = bg;
        setCardBackgrounds(newBackgrounds);

        cardEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };


    const handleMouseLeave = (index) => {
        const newBackgrounds = [...cardBackgrounds];
        newBackgrounds[index] = "rgba(13, 17, 23, 0.05)";
        setCardBackgrounds(newBackgrounds);

        const reviewEls = document.querySelectorAll(".card .reviews");
        if (reviewEls[index]) {
            reviewEls[index].style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    };


    useEffect(() => {
        scrollToCard(activeIndex);
    }, [activeIndex]);

    return (
        <div className="testimonials-main">
            <div className="head">
                <h1 className="heading">Trusted by Creators Like You</h1>
                <div className="carousel-effect">
                    <button className="go-left" onClick={handlePrev} disabled={activeIndex === 0}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="go-right" onClick={handleNext} disabled={activeIndex === cards.length - 1}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="testimonials-content">
                <div className="testimonial-cards" ref={cardsRef}>
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`card ${i === activeIndex ? "active" : ""} ${i < activeIndex ? "previous" : ""}`}
                        >
                            <div className="image">
                                <img src={card.image} alt="user_image" />
                            </div>
                            <div
                                className="reviews"
                                style={{ background: cardBackgrounds[i] }}
                                onMouseMove={(e) => handleMouseMove(e, i)}
                                onMouseLeave={() => handleMouseLeave(i)}
                            >
                                <h3>{card.name} <br /><span>{card.city}</span></h3>
                                <p>{card.text}</p>
                                <div className="rating-area">
                                    <Ratings rating={card.ratingValue} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}