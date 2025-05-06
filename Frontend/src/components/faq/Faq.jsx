import { useState, useRef, useEffect } from "react";
import "./faq.css";

// asked questions
const faqItems = [
  {
    question: "Is this safe to make payment online?",
    answer: "Yes, We making sure that your payment is 100% safe and secure. We provide refund policy as well for exceptional scenarios."
  },
  {
    question: "How do I track my order?",
    answer: "We will send you an email / Whatsapp with the tracking link once your order is Ready."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, Net banking, Cash on Delivery, etc. for easy transactions."
  },
  {
    question: "What are the delivery charges and how long does shipping take?",
    answer: "It depends on the location and the shipping method you choose. In Delhi-NCR region 1-2 days, and outside Delhi-NCR region 3-5 working days."
  },
  {
    question: "Do you offer Return or replacement of orders?",
    answer: "Yes, We return as well as replace the items but we check for the unboxing video & all components properly after that your requirement will be fulfilled."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [headingVisible, setHeadingVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const headingRef = useRef(null);
  const openRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const opening = openRef.current;

    if (!heading || !opening) return;

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        const scrollingUp = currentScrollY < lastScrollY;

        if (entry.isIntersecting && scrollingDown) {
          setHeadingVisible(true);
          setOpen(true);
        }
        else if (!entry.isIntersecting && scrollingUp) {
          setHeadingVisible(false);
          setOpen(false);
        }
        lastScrollY = currentScrollY;
      },
      { threshold: 0.2 }
    );

    observer.observe(heading);
    observer.observe(opening);

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <section className="faq-container">
      <div
        ref={headingRef}
        className={`faq-left-container ${headingVisible ? "visible" : ""}`}>
        <h1 className="heading">Frequently</h1>
        <h1 className="heading">asked</h1>
        <h1 className="heading">questions</h1>
        {/* <button className="faq-btn-all">View All</button> */}
      </div>

      <ul
        ref={openRef}
        className={`faq-right-que-list-container ${open ? "open" : ""} `}>
        {faqItems.map((item, index) => (
          <li className="list" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
            >
              {item.question}
              <i
                className={`fa-solid ${activeIndex === index ? "fa-xmark" : "fa-plus"}`}
              ></i>
            </button>
            {activeIndex === index && (
              <div className="details-cont show">
                <p>{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
