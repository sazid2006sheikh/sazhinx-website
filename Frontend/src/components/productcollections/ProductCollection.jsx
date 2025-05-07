import React, { useRef, useState, useEffect } from "react";
import "./productcollection.css";

// main-products name use for products name, add product image inside the image,  use alt with product name
const productData = [
    { name: "Tripod", image: "./public/assets/product-image/product_image_1.jpg", alt: "product_image-tripod" },
    { name: "Ring Light", image: "./public/assets/product-image/Ring_light.jpg", alt: "product_image-Ring_Light" },
    { name: "Mic Stand", image: "./public/assets/product-image/mic_stand.png", alt: "product_image-micStand" },
    { name: "Gimbal (Coming Soon)", image: "./public/assets/product-image/product_image_4.png", alt: "product_image-gimbal" },
    { name: "Cables & Wires", image: "./public/assets/product-image/cables&wires.png", alt: "product_image-cables" },
    { name: "Sockets and Extension", image: "./public/assets/product-image/product_image_6.jpg", alt: "product_image-sockets" },
    { name: "Aesthtics (Coming Soon)", image: "./public/assets/product-image/product_image_7.png", alt: "product_image-plants" }
    // add more if needed
];

// list-of-all-products in this add main for head image, options for other 3 images, prices(previousPrice, newPrice), product-description
const allProducts = [
    {
        main: "./public/assets/product_lists/product_1/product_1.jpg",
        options: [
            "./public/assets/product_lists/product_1/product_1.1.jpg",
            "./public/assets/product_lists/product_1/product_1.2.jpg",
            "./public/assets/product_lists/product_1/product_1.3.jpg"
        ],
        previousPrice: 349,
        newPrice: 299,
        description: "Flexible Tripod for Action Camera | Mobile - 360° Rotation",
    },
    {
        main: "./public/assets/product_lists/product_2/product_2.jpg",
        options: [
            "./public/assets/product_lists/product_2/product_2.1.jpg",
            "./public/assets/product_lists/product_2/product_2.2.jpg",
            "./public/assets/product_lists/product_2/product_2.3.jpg"
        ],
        previousPrice: 299,
        newPrice: 249,           
        description: "Mobile Holder | Metal Body | 720° Rotation",
    },
    {
        main: "./public/assets/product_lists/product_3/product_3.jpg",
        options: [
            "./public/assets/product_lists/product_3/product_3.1.jpg",
            "./public/assets/product_lists/product_3/product_3.2.jpg",
        ],
        previousPrice: 499,
        newPrice: 299,
        description: "Mobile Holder (1 Unit) | Ball mount | Premium Quality",
    },
    {
        main: "./public/assets/product_lists/product_4/product_4.jpg",
        options: [
            "./public/assets/product_lists/product_4/product_4.1.jpg",
            "./public/assets/product_lists/product_4/product_4.2.jpg",
            "./public/assets/product_lists/product_4/product_4.3.webp"
        ],
        previousPrice: 649,
        newPrice: 599,
        description: "Selfie Stick cum Tripod | 2 in 1 | 1.5m Height",
    },
    {
        main: "./public/assets/product_lists/product_5/product_5.jpg",
        options: [
            "./public/assets/product_lists/product_5/product_5.1.jpg",
            "./public/assets/product_lists/product_5/product_5.2.jpg",
            "./public/assets/product_lists/product_5/product_5.3.jpg"
        ],
        previousPrice: 0,
        newPrice: 0,
        description: "Coming Soon"
    },
    {
        main: "./public/assets/product_lists/product_6/product_6.jpg",
        options: [
            "./public/assets/product_lists/product_6/product_6.1.jpg",
            "./public/assets/product_lists/product_6/product_6.2.jpg",
            "./public/assets/product_lists/product_6/product_6.3.jpg"
        ],
        previousPrice: 1499,
        newPrice: 1099,
        description: "Tripod | BL-5 Ft | Mobile & Camera | "
    },
    {
        main: "./public/assets/product_lists/product_7/product_7.jpg",
        options: [
            "./public/assets/product_lists/product_7/product_7.1.webp",
            "./public/assets/product_lists/product_7/product_7.2.jpg",
            "./public/assets/product_lists/product_7/product_7.3.jpg"
        ],
        previousPrice: 1599,
        newPrice: 1199,
        description: "Ring light - 12-inch | LED | Stand Incl."
    },
    {
        main: "./public/assets/product_lists/product_8/product_8.png",
        options: [
            "./public/assets/product_lists/product_8/product_8.1.jpg",
            "./public/assets/product_lists/product_8/product_8.2.png",
        ],
        previousPrice: 12,
        newPrice: 10,
        description: "Gorilla Pod | Flexible Tripod | 360° Rotation"
    },
    {
        main: "./public/assets/product_lists/product_9/product_9.jpg",
        options: [
            "./public/assets/product_lists/product_9/product_9.1.jpg",
            "./public/assets/product_lists/product_9/product_9.2.jpg",
            "./public/assets/product_lists/product_9/product_9.3.jpeg"
        ],
        previousPrice: 0,
        newPrice: 0,
        description: "Studio Decor - Coming Soon"
    }
    // add more if needed
];


// video data, src used for source of videos, img used for product image, and add other details like discount, detail, newPrice, oldPrice
const videoData = [
    {
        src: "./public/assets/videos/cat.mp4",
        discount: "100% OFF",
        img: "./public/assets/product-image/product_image_1.avif",
        detail: "Coming Soon",
        newPrice: 399,
        previousPrice: 500
    },
    {
        src: "./public/assets/videos/cat2.mp4",
        discount: "100% OFF",
        img: "./public/assets/product-image/product_image_1.avif",
        detail: "Coming Soon",
        newPrice: 399,
        previousPrice: 500
    },
    {
        src: "./public/assets/videos/cat.mp4",
        discount: "100% OFF",
        img: "./public/assets/product-image/product_image_1.avif",
        detail: "Coming Soon",
        newPrice: 399,
        previousPrice: 500
    },
    {
        src: "./public/assets/videos/cat2.mp4",
        discount: "100% OFF",
        img: "./public/assets/product-image/product_image_1.avif",
        detail: "Coming Soon",
        newPrice: 399,
        previousPrice: 500
    },
    {
        src: "./public/assets/videos/cat.mp4",
        discount: "100% OFF",
        img: "./public/assets/product-image/product_image_1.avif",
        detail: "Coming Soon",
        newPrice: 0,
        previousPrice: 0
    },
    // add more if needed
];

// overlay video container
const VideoOverlay = ({ videoSrc, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <div className="overlay-backdrop">
            <div className="overlay-container">
                <button onClick={onClose} className="close-btn">×</button>
                <video src={videoSrc} controls autoPlay className="overlay-video" />
            </div>
        </div>
    );
};

// product card top
function ProductGrid({ name, image, alt }) {
    return (
        <div className="product">
            <img src={image} alt={alt} />
            <div className="product-name">
                <div className="chevron-right">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

// product card mid
function ProductCard({ mainImage, optionImages, previousPrice, newPrice, description }) {
    const [displayImage, setDisplayImage] = useState(mainImage);

    return (
        <div className="product-list">
            {/* top-image */}
            <div className="image">
                <img src={displayImage} alt="product-image" />
            </div>
            {/* product-details */}
            <div className="content">
                <p>{description}</p>
                <button className="add-btn"><i className="fa-regular fa-heart"></i></button>
            </div>
            {/* product-price */}
            <div className="price">
                <p className="new-price">Rs. {newPrice}/- </p>
                <p className="previous-price">{previousPrice}/-</p>
            </div>
            {/* 3 images */}
            <div className="multi-image">
                {optionImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`image_${idx + 1} view-option`}
                        onMouseEnter={() => setDisplayImage(img)}
                        onMouseLeave={() => setDisplayImage(mainImage)}
                    >
                        <img src={img} alt={`image-option_${idx + 1}`} />
                    </div>
                ))}
            </div>
            <div className="cart">
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

// video card bottom
function VideoCard({ src, discount, img, detail, newPrice, previousPrice, onPlay }) {
    return (
        <div className="video-card">
            <div className="video">
                <div className="discount">
                    <button>{discount}</button>
                </div>

                <video autoPlay loop muted playsInline
                    onTimeUpdate={(e) => {
                        if (e.target.currentTime >= 10) {
                            e.target.currentTime = 0;
                        }
                    }}>
                    <source src={src} type="video/mp4" />
                </video>
                <button className="video-play-btn" onClick={() => onPlay(src)}>
                    <i className="fa-solid fa-play"></i>
                </button>
            </div>

            <div className="video-details">
                <div className="product-detail">
                    <p className="item-detail">{detail}</p>
                    <div className="price">
                        <p className="new-price">Rs.{newPrice}</p>
                        <p className="previous-price">{previousPrice}</p>
                    </div>
                </div>
            </div>
            <div className="cart">
                <button style={{ background: "#5D5D5D", color: "#fff", borderTopRightRadius: 0, borderTopLeftRadius: 0, height: "50px" }}>Add to Cart</button>
            </div>
        </div>
    );
}


// it contain all Product page data
function Products() {
    const gridRef = useRef(null);
    const allProductsRef = useRef(null);

    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [allAtStart, setAllAtStart] = useState(true);
    const [allAtEnd, setAllAtEnd] = useState(false);

    // ----------------------------scroll buttons code
    const updateScrollButtons = () => {
        if (!gridRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
        setAtStart(scrollLeft <= 0);
        setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    };

    const updateAllProductsScrollButtons = () => {
        if (!allProductsRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = allProductsRef.current;
        setAllAtStart(scrollLeft <= 0);
        setAllAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    };

    const scrollLeftFunc = () => {
        gridRef.current?.scrollBy({ left: -420, behavior: "smooth" });
    };

    const scrollRightFunc = () => {
        gridRef.current?.scrollBy({ left: 420, behavior: "smooth" });
    };

    const scrollAllLeft = () => {
        allProductsRef.current?.scrollBy({ left: -420, behavior: "smooth" });
    };

    const scrollAllRight = () => {
        allProductsRef.current?.scrollBy({ left: 420, behavior: "smooth" });
    };

    useEffect(() => {
        const grid = gridRef.current;
        const allProductsScroll = allProductsRef.current;
        if (!grid || !allProductsScroll) return;

        updateScrollButtons();
        updateAllProductsScrollButtons();

        const handleScroll = () => updateScrollButtons();
        const handleAllScroll = () => updateAllProductsScrollButtons();

        grid.addEventListener("scroll", handleScroll);
        allProductsScroll.addEventListener("scroll", handleAllScroll);

        return () => {
            grid.removeEventListener("scroll", handleScroll);
            allProductsScroll.removeEventListener("scroll", handleAllScroll);
        };
    }, []);


    // ----------------------------animation of product card

    useEffect(() => {
        const fadeIn = document.querySelectorAll('.products_');
        if (!fadeIn.length) return;

        let lastScrollY = window.scrollY;

        const observer = new IntersectionObserver(
            (entries) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY > lastScrollY;
                const scrollingUp = currentScrollY < lastScrollY;

                entries.forEach(entry => {
                    const el = entry.target;
                    if (entry.isIntersecting && scrollingDown) {
                        el.classList.add('pop-animation');
                    } else if (!entry.isIntersecting && scrollingUp) {
                        el.classList.remove('pop-animation');
                    }
                });

                lastScrollY = currentScrollY;
            },
            { threshold: 0.2 }
        );

        fadeIn.forEach(h1 => observer.observe(h1));

        return () => observer.disconnect();
    }, []);

    // ----------------------------animation of typewriter text

    useEffect(() => {
        const typewriterHeads = document.querySelectorAll('.head h1');
        if (!typewriterHeads.length) return;

        let lastScrollY = window.scrollY;

        const observer = new IntersectionObserver(
            (entries) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY > lastScrollY;
                const scrollingUp = currentScrollY < lastScrollY;

                entries.forEach(entry => {
                    const el = entry.target;
                    if (entry.isIntersecting && scrollingDown) {
                        el.classList.add('typewriter');
                    } else if (!entry.isIntersecting && scrollingUp) {
                        el.classList.remove('typewriter');
                    }
                });

                lastScrollY = currentScrollY;
            },
            { threshold: 0.4 }
        );

        typewriterHeads.forEach(h1 => observer.observe(h1));

        return () => observer.disconnect();
    }, []);

    // -------------------------------------------overlay video box
    const [videoSrc, setVideoSrc] = useState(null);
    const openVideoOverlay = (src) => setVideoSrc(src);
    const closeVideoOverlay = () => setVideoSrc(null);


    return (
        <div className="product-main">
            {/* shop by name */}
            <div className="shop-category">
                <div className="head">
                    <h1>
                        Only For you</h1>
                </div>

                <div className="product-grid-wrapper">
                    <div className="product-grid products_" ref={gridRef}>
                        {productData.map((product, index) => (
                            <ProductGrid
                                key={index}
                                name={product.name}
                                image={product.image}
                                alt={product.alt}
                            />
                        ))}
                    </div>

                    {/* buttons */}
                    <div className="product-mover">
                        <button className="go-left" onClick={scrollLeftFunc} disabled={atStart}>
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <button className="go-right" onClick={scrollRightFunc} disabled={atEnd}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>

                </div>

            </div>

            {/* all products list */}
            <div className="all-products">
                <div className="head">
                    <h1>
                        Explore Our Products</h1>
                </div>

                <div className="product-grid-wrapper">
                    <div className="product-list-wrapper products_" ref={allProductsRef}>
                        {allProducts.map((prod, index) => (
                            <ProductCard
                                key={index}
                                mainImage={prod.main}
                                optionImages={prod.options}
                                previousPrice={prod.previousPrice}
                                newPrice={prod.newPrice}
                                description={prod.description}
                            />
                        ))}
                    </div>

                    <div className="product-mover">
                        <button className="go-left" onClick={scrollAllLeft} disabled={allAtStart}>
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                        <button className="go-right" onClick={scrollAllRight} disabled={allAtEnd}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>

                {/* <button className="view-all-products">View All</button> */}
            </div>

            {/* videos-section */}
            <div className="videos-section">
                <div className="head">
                    <h1>Watch Then Buy</h1>
                </div>
                <p>Coming Soon</p>
                {/* <div className="video-wrapper products_">
                    {videoData.map((video, index) => (
                        <VideoCard
                            key={index}
                            src={video.src}
                            discount={video.discount}
                            img={video.img}
                            detail={video.detail}
                            newPrice={video.newPrice}
                            previousPrice={video.previousPrice}
                            onPlay={openVideoOverlay}
                        />
                    ))}
                </div> */}
            </div>
            {/* Overlay Video */}
            {videoSrc && <VideoOverlay videoSrc={videoSrc} onClose={closeVideoOverlay} />}
        </div>
    );
}

export default Products;
