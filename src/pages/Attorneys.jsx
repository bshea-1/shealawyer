import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import mitchImg from '../assets/images/mitch.jpg'
import sharonImg from '../assets/images/sharon.jpg'

function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

export default function Attorneys() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Our Attorneys</h1>
                        <p>Experienced. Dedicated. Trusted.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="attorneys-grid">
                        <div className="attorney-card">
                            <div className="attorney-image">
                                <img
                                    src={mitchImg}
                                    alt="Mitchell S. Shea"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                />
                            </div>
                            <h3>Mitchell S. Shea</h3>
                            <span className="attorney-role">Founding Attorney</span>
                            <p>
                                Dedicated to protecting your rights with integrity and experience. Mitchell S. Shea brings
                                decades of expertise to your case.
                            </p>
                        </div>
                        <div className="attorney-card">
                            <div className="attorney-image">
                                <img
                                    src={sharonImg}
                                    alt="Sharon Nowell"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                />
                            </div>
                            <h3>Sharon Nowell</h3>
                            <span className="attorney-role">Associate Attorney</span>
                            <p>
                                Working alongside Mitchell Shea to provide comprehensive legal support and aggressive
                                representation for our clients.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="content-wrapper team-approach-section" delay={0.2}>
                        <h2>Our Team Approach</h2>
                        <p>
                            At Shea Law, we believe that every client deserves personalized attention and aggressive
                            representation. Our attorneys work collaboratively to ensure that your case receives the benefit of
                            our combined experience and knowledge.
                        </p>
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <Link to="/contact" className="cta-button">Schedule a Consultation</Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            <style>{`
        .team-approach-section {
          margin-top: 80px !important;
        }
      `}</style>
        </>
    )
}
