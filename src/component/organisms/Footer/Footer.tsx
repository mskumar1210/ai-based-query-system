export const Footer = () => {
    return (
        <>
            {/* INTERNAL CSS – ONLY THIS FILE */}
            <style>{`
                .footer {
                    background: linear-gradient(135deg, #1b4332, #2d6a4f, #40916c);
                    color: #ffffff;
                    padding: 40px 50px 20px;
                    border-top: 4px solid #ff9933;
                    margin-top: 80px;
                }

                .footer-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 40px;
                }

                .footer h3 {
                    color: #ffcc00;
                    margin-bottom: 15px;
                    font-size: 18px;
                }

                .footer p {
                    font-size: 14px;
                    line-height: 1.6;
                    color: #e6e6e6;
                }

                .footer a {
                    display: block;
                    text-decoration: none;
                    color: #e6e6e6;
                    font-size: 14px;
                    margin-bottom: 8px;
                    transition: 0.3s;
                }

                .footer a:hover {
                    color: #ffcc00;
                    transform: translateX(4px);
                }

                .footer-bottom {
                    margin-top: 40px;
                    text-align: center;
                    font-size: 13px;
                    color: #dddddd;
                    border-top: 1px solid rgba(255,255,255,0.2);
                    padding-top: 15px;
                }

                .footer-title {
                    font-size: 20px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .footer-tagline {
                    font-size: 13px;
                    margin-top: 6px;
                    color: #cccccc;
                }

                @media (max-width: 768px) {
                    .footer {
                        padding: 30px 25px 20px;
                    }
                }
            `}</style>

            {/* FOOTER JSX */}
            <footer className="footer">
                <div className="footer-container">

                    {/* BRANDING */}
                    <div>
                        <div className="footer-title">Ram Ram JII 🔱🚩</div>
                        <div className="footer-tagline">
                            Exploring the soul of Jharkhand through eco & cultural tourism.
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3>Quick Links</h3>
                        <a href="#destinations">Destinations</a>
                        <a href="#plan-trip">Plan Trip</a>
                        <a href="#marketplace">Marketplace</a>
                        <a href="#about">About Us</a>
                    </div>

                    {/* POPULAR PLACES */}
                    <div>
                        <h3>Popular Places</h3>
                        <a href="#">Netarhat</a>
                        <a href="#">Patratu Valley</a>
                        <a href="#">Betla National Park</a>
                        <a href="#">Hundru Falls</a>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3>Contact</h3>
                        <p>Email: tourism@jharkhand.in</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Jharkhand, India</p>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="footer-bottom">
                    © 2025 Jharkhand Tourism • Designed with ❤ in India
                </div>
            </footer>
        </>
    );
};
export default Footer;