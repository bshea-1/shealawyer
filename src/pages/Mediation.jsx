import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px' })
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    )
}

export default function Mediation() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Synergy Mediations</h1>
                        <p>Florida Supreme Court Certified Mediator — Professional Dispute Resolution</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="content-wrapper">
                        <div className="value-statement">
                            <p className="lead-text">
                                As a Florida Supreme Court Certified Mediator, I provide neutral, professional mediation
                                services for civil disputes. Mediation offers parties a cost-effective, confidential alternative
                                to costly and time-consuming litigation.
                            </p>
                            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                                <Link to="/contact" className="cta-button">📞 Schedule Mediation</Link>
                            </div>
                        </div>

                        <h2>What is Mediation?</h2>
                        <p>
                            Mediation is a structured negotiation process where a neutral third party (the mediator) helps
                            disputing parties reach a mutually acceptable resolution. Unlike litigation, mediation allows
                            parties to maintain control over the outcome while saving time and money.
                        </p>

                        <h2>Types of Cases Mediated</h2>
                        <p>I mediate a wide variety of civil matters, including:</p>
                        <ul>
                            <li>Workers' compensation disputes</li>
                            <li>Personal injury claims</li>
                            <li>Contract disputes</li>
                            <li>Business and commercial matters</li>
                            <li>Insurance disputes</li>
                            <li>Employment-related conflicts</li>
                        </ul>

                        <h2>Benefits of Mediation</h2>
                        <ul>
                            <li><strong>Cost-Effective:</strong> Significantly less expensive than trial</li>
                            <li><strong>Time-Saving:</strong> Resolve disputes in hours or days, not months or years</li>
                            <li><strong>Confidential:</strong> Unlike court proceedings, mediation is private</li>
                            <li><strong>Flexible:</strong> Parties can craft creative solutions not available in court</li>
                            <li><strong>Preserves Relationships:</strong> Less adversarial than litigation</li>
                        </ul>

                        <div className="cta-section">
                            <h2>Schedule Your Mediation</h2>
                            <p>
                                Whether you're an attorney seeking a mediator for your client's case or a party looking to
                                resolve a dispute, contact my office to schedule a mediation session.
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <Link to="/contact" className="cta-button">Contact for Mediation Services</Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
