import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about footer-column">
                        <div className="logo" style={{ color: 'white', marginBottom: '20px' }}>
                            <span className="logo-icon">⚖️</span>
                            <span className="logo-text">The Law Offices of Mitchell Shea</span>
                        </div>
                        <p>
                            The Law Offices of Mitchell Shea, P.A. provides experienced legal counsel in Plantation, Florida,
                            serving clients across Broward County and beyond.
                        </p>
                        <div className="contact-info">
                            <p>📍 1776 N Pine Island Rd #310, Plantation, FL 33322</p>
                            <p>📞 (954) 491-0046</p>
                            <p>✉️ mitch@shealawyer.com</p>
                        </div>
                    </div>

                    <div className="footer-links footer-column">
                        <h4>Quick Links</h4>
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/practice-areas" className="footer-link">Practice Areas</Link>
                        <Link to="/attorneys" className="footer-link">Attorneys</Link>
                        <Link to="/testimonials" className="footer-link">Testimonials</Link>
                    </div>

                    <div className="footer-areas footer-column">
                        <h4>Practice Areas</h4>
                        <Link to="/workers-comp" className="footer-link">Workers' Comp</Link>
                        <Link to="/longshore-comp" className="footer-link">Longshore</Link>
                        <Link to="/personal-injury" className="footer-link">Personal Injury</Link>
                        <Link to="/ss-disability" className="footer-link">SS Disability</Link>
                        <Link to="/mediation" className="footer-link">Mediation</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Law Offices of Mitchell Shea, P.A. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
