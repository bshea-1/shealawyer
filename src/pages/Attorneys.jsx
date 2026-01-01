import { useState, useRef } from 'react'
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

// Image with loading state
function LoadingImage({ src, alt, style }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div style={{ position: 'relative', width: style.width || '100%', height: style.height || '100%' }}>
            <div
                style={{
                    ...style,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: loaded ? 0 : 1,
                    transition: 'opacity 0.5s ease',
                    zIndex: 1,
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                }}
            />
            <img
                src={src}
                alt={alt}
                style={{
                    ...style,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

export default function Attorneys() {
    return (
        <>
            <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

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
                                <LoadingImage
                                    src={mitchImg}
                                    alt="Mitchell S. Shea"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '20px' }}
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
                                <LoadingImage
                                    src={sharonImg}
                                    alt="Sharon Nowell"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '20px' }}
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
