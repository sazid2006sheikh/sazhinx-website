import "./sociallink.css"

export default function SocialLinks() {
    return (
        <div className="social-links">
            <div className="link-cont">
                <div className="social-link">
                    <a href="https://www.instagram.com/sazhinx.01/"><i className="fa-brands fa-instagram"></i><span> Instagram</span></a>
                </div>
                <div className="social-link">
                    <a href="https://www.linkedin.com/company/sazhinx/"><i className="fa-brands fa-linkedin"></i><span> Linkedin</span></a>
                </div>
            </div>

            <div className="link-cont">
                <div className="social-link">
                    <a href="https://www.facebook.com/profile.php?id=61574973307388"><i className="fa-brands fa-facebook"></i><span> Facebook</span></a>
                </div>
                <div className="social-link">
                    <a href="#"><i className="fa-brands fa-youtube"></i><span> Youtube</span></a>
                </div>
            </div>
        </div>
    );
}