import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function AnimateOnScroll({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    )
}

export default function WorkersComp() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Florida Workers' Compensation</h1>
                        <p>Injured at Work in Florida? You Have Rights — and You Don't Have to Face This Alone.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="content-wrapper">
                        <div className="value-statement">
                            <p className="lead-text">
                                If you were hurt on the job, Florida workers' compensation law may entitle you
                                to medical care, wage replacement, and other benefits. I represent injured workers—not insurance
                                companies—and help them navigate the workers' compensation system with clarity and confidence.
                            </p>
                            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                                <Link to="/contact" className="cta-button">📞 Schedule a Consultation</Link>
                            </div>
                        </div>

                        <h2>Understanding Your Rights</h2>
                        <p>
                            Workers' compensation cases can be confusing and overwhelming, especially when you're injured and
                            unable to work. Insurance carriers often prioritize minimizing payouts—not protecting your future.
                            My role is to stand between you and the system, explain your rights, and advocate for the benefits
                            you are legally owed.
                        </p>

                        <h2>Florida Workers' Compensation Representation</h2>
                        <p>I assist injured workers throughout Florida with issues including:</p>
                        <ul>
                            <li>Workplace injuries and occupational illnesses</li>
                            <li>Denied or delayed workers' compensation benefits</li>
                            <li>Medical treatment disputes</li>
                            <li>Wage loss and disability benefits</li>
                            <li>Independent medical examinations (IMEs)</li>
                            <li>Claims involving retaliation or employer disputes</li>
                        </ul>
                        <p>
                            Every case is different, and I take the time to understand how your injury affects your life and
                            livelihood.
                        </p>

                        <h2>Why Choose a Plaintiff's Workers' Comp Attorney?</h2>
                        <p>
                            Workers' compensation law in Florida is highly technical and time-sensitive. Missing a deadline or
                            misunderstanding a requirement can jeopardize your claim.
                        </p>
                        <p>When you work with me, you get:</p>
                        <ul>
                            <li>Direct representation focused solely on injured workers</li>
                            <li>Clear explanations of your rights and options</li>
                            <li>Honest guidance—no false promises</li>
                            <li>Advocacy aimed at securing lawful benefits under Florida law</li>
                        </ul>

                        <div className="reassurance-section">
                            <h2>You Don't Have to Do This Alone</h2>
                            <p>
                                You don't need to figure this out on your own. Whether you're just starting a claim or facing
                                resistance from an insurance carrier, having an attorney on your side can make a meaningful
                                difference.
                            </p>
                        </div>

                        <div className="cta-section">
                            <h2>Talk to a Florida Workers' Compensation Attorney Today</h2>
                            <p>
                                If you were injured at work, it's important to understand your rights as soon as possible.
                                Contact my office to discuss your situation and learn how I may be able to help.
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <Link to="/contact" className="cta-button">Schedule Consultation</Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
