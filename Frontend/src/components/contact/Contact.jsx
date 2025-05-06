import "./contact.css"
import SocialLinks from "../links/Sociallink.jsx";
import TiltCard from "../tiltcard/TiltCard.jsx";

function Contact() {
    return (
        <div className="main-body">
            <div className="container">
                <div className="left-container">
                    <h1>Let's Collaborate and Create Something Great</h1>
                    <TiltCard className="content">
                        <div className="head-cont">
                            <p>
                                At SazhinX ,<br/> we provide premium tools to empower Creators, Vloggers, and Studios.<br/><br/> Our team is here to help you choose the right gear and bring your vision to life with confidence. <br /><br/> Empower your creativity with tools that make a difference. 
                            </p>
                        </div>
                        <div className="foot">
                            <h2>Sazid Sheikh</h2>
                            <p>Founder</p>
    
                        </div>
                    </TiltCard>

                    <div className="details">
                        <p>Email : <span style={{ textDecoration: "underline", color: "#fff" }}>sazhinx.01@gmail.com</span> <br /> Contact : <span style={{ color: "#fff" }}>+91 8588051001</span></p>
                    </div>
                </div>

                <div className="right-container">
                    <div className="right-head">
                        <img src="./public/logo.png" alt="SAZHINX-logo" />
                        <div className="support">
                            <h1>THANK YOU <p>for your support</p></h1>
                        </div>
                    </div>

                    <TiltCard className="social">
                        <p className="fgdfss">Connect with us &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i></p>
                        <SocialLinks />
                    </TiltCard>

                    <TiltCard className="qr-code">
                        <img src="./src/assets/landing_page_image/qr.jpeg" alt="Qr-code" />
                        <p>Your Gateway to Everything</p>
                    </TiltCard>
                </div>
            </div>
        </div>
    );
}

export default Contact;