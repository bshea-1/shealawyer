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

export default function PersonalInjury() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Personal Injury</h1>
                        <p>Injured Because of Someone Else's Negligence? Dedicated Florida Representation.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="content-wrapper">
                        <div className="value-statement">
                            <p className="lead-text">
                                If you've been injured due to another person's carelessness or negligence, you may be entitled to
                                compensation for your medical expenses, lost wages, pain and suffering, and more. I represent
                                accident victims throughout Florida, fighting to secure the maximum compensation you deserve.
                            </p>
                        </div>

                        <h2>Types of Personal Injury Cases</h2>
                        <p>I handle a wide variety of personal injury claims, including:</p>
                        <ul>
                            <li>Car, truck, and motorcycle accidents</li>
                            <li>Slip and fall injuries</li>
                            <li>Premises liability claims</li>
                            <li>Dog bites and animal attacks</li>
                            <li>Wrongful death claims</li>
                            <li>Negligent security cases</li>
                        </ul>

                        <h2>Why You Need a Personal Injury Attorney</h2>
                        <p>
                            Insurance companies are not on your side. Their goal is to pay you as little as possible—or nothing
                            at all. Having an experienced attorney levels the playing field and ensures your rights are protected
                            throughout the claims process.
                        </p>
                        <p>When you work with me, you get:</p>
                        <ul>
                            <li>Aggressive representation focused on maximizing your recovery</li>
                            <li>No upfront costs—I work on contingency</li>
                            <li>Direct access to your attorney throughout your case</li>
                            <li>Honest assessment of your claim's value</li>
                        </ul>

                        <div className="cta-section">
                            <h2>Schedule Your Free Personal Injury Consultation</h2>
                            <p>
                                Time is critical in personal injury cases. Evidence can disappear, witnesses forget, and
                                statutes of limitations apply. Contact my office today to discuss your case.
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <Link to="/contact" className="cta-button">Get Started Today</Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
