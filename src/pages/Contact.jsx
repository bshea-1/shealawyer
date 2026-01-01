import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px' })

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

export default function Contact() {
    const [mapLoaded, setMapLoaded] = useState(false)

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
                        <h1>Schedule a Consultation</h1>
                        <p>Get the Legal Help You Deserve.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll>
                        <div className="contact-grid">
                            <div className="contact-info-card">
                                <h2>Contact Information</h2>

                                <div className="contact-detail">
                                    <h3>📍 Office Location</h3>
                                    <p>
                                        1776 N Pine Island Rd #310<br />
                                        Plantation, FL 33322
                                    </p>
                                </div>

                                <div className="contact-detail">
                                    <h3>📞 Phone</h3>
                                    <p>
                                        <a href="tel:954-491-0046">(954) 491-0046</a>
                                    </p>
                                </div>

                                <div className="contact-detail">
                                    <h3>✉️ Email</h3>
                                    <p>
                                        <a href="mailto:mitch@shealawyer.com">mitch@shealawyer.com</a>
                                    </p>
                                </div>

                                <div className="contact-detail" style={{ marginBottom: 0 }}>
                                    <h3>🕒 Office Hours</h3>
                                    <p>
                                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                                        Saturday - Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            <div className="map-container">
                                {!mapLoaded && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                            backgroundSize: '200% 100%',
                                            animation: 'shimmer 1.5s infinite',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#999',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        Loading map...
                                    </div>
                                )}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.442973809623!2d-80.264444!3d26.136944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90868f0000001%3A0x0!2s1776%20N%20Pine%20Island%20Rd%20%23310%2C%20Plantation%2C%20FL%2033322!5e0!3m2!1sen!2sus!4v1703640000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        opacity: mapLoaded ? 1 : 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                    allowFullScreen=""
                                    loading="eager"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location Map"
                                    onLoad={() => setMapLoaded(true)}
                                ></iframe>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .contact-info-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .contact-info-card h2 {
          color: var(--primary-color);
          margin-bottom: 25px;
          font-size: 1.8rem;
          border-bottom: 2px solid var(--secondary-color);
          padding-bottom: 10px;
        }

        .contact-detail {
          margin-bottom: 20px;
        }

        .contact-detail h3 {
          color: var(--primary-color);
          margin-bottom: 8px;
          font-size: 1.1rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
        }

        .contact-detail p {
          color: var(--text-light);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .contact-detail a {
          color: var(--secondary-color);
          font-weight: 600;
        }

        .map-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: 400px;
          background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%);
          position: relative;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .map-container {
            height: 350px;
          }
        }
      `}</style>
        </>
    )
}
