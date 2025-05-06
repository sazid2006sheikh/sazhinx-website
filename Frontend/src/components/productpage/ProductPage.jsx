import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import "./productpage.css";

// Static imports of all category JSON files
// camera and video support gear
import tripod from "./productsData/camera-video support gear/tripod.json";
import gimbal from "./productsData/camera-video support gear/gimbal.json";
import monopod from "./productsData/camera-video support gear/monopod.json";
import selfie_stick_tripod from "./productsData/camera-video support gear/selfie-stick-cum-tripod.json";
import micStand from "./productsData/camera-video support gear/mic-stand.json";

// lightning equipment
import ringLight from "./productsData/light equipment/ring-light.json";
import fillLight from "./productsData/light equipment/fill-light.json";
import chroma from "./productsData/light equipment/chroma.json";

//cables & connectivity
import vgaCables from "./productsData/cables/vga-cables.json";
import hdmiCables from "./productsData/cables/hdmi-cables.json";
import multiCables from "./productsData/cables/multi-cable-in-one.json";

//power & setup
import cableManagement from "./productsData/power-setup/cable-management.json";
import extensionBoard from "./productsData/power-setup/extension-board.json";
import multiPurposeSocket from "./productsData/power-setup/multi-purpose-socket.json";

// studio & decor
import motivationFrames from "./productsData/decoration/motivation-frames.json";
import fakePlants from "./productsData/decoration/fake-plants.json";

// shop by genre
import contentCreationKits from "./shopByGenre/content-creation-kits.json";
import podcastProduction from "./shopByGenre/podcast-production.json";
import studioSetup from "./shopByGenre/studio-setup.json";
import travelVlogging from "./shopByGenre/travel-vlogging.json";


//  Add more as needed (e.g., import mic from "../productsData/mic.json"; )

// Map category name to data
// note: provide same name (that was written in route) in the key with or without "-" [example : "selfie-stick-cum-tripod"]
const categoryDataMap = {
    // camera and video support gear
    tripod: tripod,
    gimbal: gimbal,
    monopod: monopod,
    "selfie-stick-cum-tripod": selfie_stick_tripod,
    "mic-stand": micStand,

    // lightning equipment
    "ring-light": ringLight,
    "fill-light": fillLight,
    chroma: chroma,

    //cables & connectivity
    "vga-cables": vgaCables,
    "hdmi-cables": hdmiCables,
    "multi-cable-in-one": multiCables,

    //power & setup
    "cable-management": cableManagement,
    "extension-board": extensionBoard,
    "multi-purpose-socket": multiPurposeSocket,

    // studio & decor
    "motivation-frames": motivationFrames,
    "fake-plants": fakePlants,

    // shop by genre
    "content-creation-kits": contentCreationKits,
    "music-&-podcast-production": podcastProduction,
    "home-studio-setup": studioSetup,
    "outdoor-&-travel-vlogging": travelVlogging

    // Add more mappings as needed
};

function ProductPage() {
    const { categoryName } = useParams(); // Get category from the URL
    const wrapperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 9; // 3 columns x 3 rows

    // Split hero image and product cards
    const rawData = categoryDataMap[categoryName] || [];
    const heroImage = rawData[0]?.heroSectionImage;
    const filteredProducts = rawData.slice(1); // skip the hero image object
    const totalPages = Math.ceil(filteredProducts.length / visibleCards);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when category changes
    }, [categoryName]);

    const scrollToPage = (index) => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.offsetWidth * index,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const scrollLeft = () => {
        if (currentIndex > 0) scrollToPage(currentIndex - 1);
    };

    const scrollRight = () => {
        if (currentIndex < totalPages - 1) scrollToPage(currentIndex + 1);
    };

    return (
        <div className="main-page">
            <Navbar />

            <div className="pod-herosection">
                <div key={categoryName} className="pod-herosection-container">
                    <h1>{categoryName.replace(/-/g, " ")}</h1>
                    {heroImage && (
                        <img src={heroImage} alt={`${categoryName} Hero`} />
                    )}
                </div>
            </div>

            <div className="pod-cards-wrapper" ref={wrapperRef}>
                {[...Array(totalPages)].map((_, pageIndex) => (
                    <div className="pod-cards-container" key={pageIndex}>
                        {filteredProducts
                            .slice(pageIndex * visibleCards, (pageIndex + 1) * visibleCards)
                            .map((product, i) => (
                                <div className="pod-card" key={`${categoryName} ${i}`}>
                                    <div className="pod-content">
                                        <i className="fa-regular fa-heart save-icon"></i>
                                        <div className="pod-image">
                                            <img
                                                src={product.image?.default}
                                                alt={product.name}
                                                onMouseEnter={(e) => {
                                                    if (product.image?.hover) e.currentTarget.src = product.image.hover;
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (product.image?.default) e.currentTarget.src = product.image.default;
                                                }}
                                            />
                                        </div>
                                        <div className="pod-details">
                                            <p>{product.description}</p>
                                            <div className="pod-price">
                                                <p className="pod-newPrice" style={{ color: "red" }}>
                                                    {product.newPrice}
                                                </p>
                                                <p className="pod-oldPrice" style={{ textDecoration: "line-through" }}>{product.oldPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="pod-buy-btn">Buy Now</button>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            {
                filteredProducts.length > visibleCards && (
                    <div className="scroll-btn-wrapper">
                        <button onClick={scrollLeft} className="scroll-btn" disabled={currentIndex === 0}>
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <button onClick={scrollRight} className="scroll-btn" disabled={currentIndex === totalPages - 1}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                )
            }

            <Footer />
        </div >
    );
}

export default ProductPage;
