import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

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

export default function PracticeAreas() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Our Practice Areas</h1>
                        <p>Comprehensive legal solutions tailored to your unique situation.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content practice-areas-page">
                <div className="container">
                    {/* Intro Section */}
                    <AnimateOnScroll className="pa-intro">
                        <p className="pa-intro-text">
                            We provide comprehensive legal services tailored to protect your rights and
                            secure the compensation you deserve. Our practice areas span from workplace injuries to federal
                            maritime law.
                        </p>
                    </AnimateOnScroll>

                    {/* Featured Areas Grid */}
                    <AnimateOnScroll className="pa-grid" delay={0.1}>
                        {/* Featured Card - Workers' Comp */}
                        <Link to="/workers-comp" className="pa-card pa-card-featured">
                            <div className="pa-card-gradient"></div>
                            <div className="pa-card-content">
                                <span className="pa-icon">🏗️</span>
                                <h3>Workers' Compensation</h3>
                                <p>
                                    Injured at work in Florida? We represent injured workers—not insurance companies—and help
                                    navigate the workers' compensation system to get you the benefits you deserve.
                                </p>
                                <span className="pa-link">Explore Workers' Comp →</span>
                            </div>
                            <div className="pa-card-badge">Most Common</div>
                        </Link>

                        {/* Featured Card - Personal Injury */}
                        <Link to="/personal-injury" className="pa-card pa-card-featured">
                            <div className="pa-card-gradient"></div>
                            <div className="pa-card-content">
                                <span className="pa-icon">🤕</span>
                                <h3>Personal Injury</h3>
                                <p>
                                    Injured because of someone else's negligence? Dedicated Florida personal injury
                                    representation for accident victims seeking maximum compensation.
                                </p>
                                <span className="pa-link">Learn About Personal Injury →</span>
                            </div>
                        </Link>

                        {/* Standard Card - Longshore */}
                        <Link to="/longshore-comp" className="pa-card">
                            <div className="pa-card-content">
                                <span className="pa-icon">⚓</span>
                                <h3>Longshore & Harbor Workers</h3>
                                <p>
                                    Experienced representation for maritime workers under the Longshore and Harbor Workers'
                                    Compensation Act. Specialized federal claims expertise.
                                </p>
                                <span className="pa-link">Explore Longshore Claims →</span>
                            </div>
                        </Link>

                        {/* Standard Card - SS Disability */}
                        <Link to="/ss-disability" className="pa-card">
                            <div className="pa-card-content">
                                <span className="pa-icon">🏥</span>
                                <h3>Social Security Disability</h3>
                                <p>
                                    Unable to work due to a disability? Experienced SSDI and SSI representation from initial
                                    application through federal appeals.
                                </p>
                                <span className="pa-link">Learn About SSDI →</span>
                            </div>
                        </Link>

                        {/* Standard Card - Mediation */}
                        <Link to="/mediation" className="pa-card">
                            <div className="pa-card-content">
                                <span className="pa-icon">🤝</span>
                                <h3>Synergy Mediations</h3>
                                <p>
                                    Florida Supreme Court Certified Mediator. Professional, neutral dispute resolution for civil
                                    and commercial matters.
                                </p>
                                <span className="pa-link">Explore Mediation Services →</span>
                            </div>
                        </Link>
                    </AnimateOnScroll>

                    {/* CTA Section */}
                    <AnimateOnScroll className="pa-cta" delay={0.2}>
                        <h2>Not Sure Which Practice Area Applies?</h2>
                        <p>Schedule a free consultation and we'll help determine the best legal strategy for your situation.</p>
                        <Link to="/contact" className="cta-button">Schedule Free Consultation</Link>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
