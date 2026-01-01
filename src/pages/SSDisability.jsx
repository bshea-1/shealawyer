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

export default function SSDisability() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Social Security Disability</h1>
                        <p>Unable to Work Due to a Disability? Get the Benefits You've Earned.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="content-wrapper">
                        <div className="value-statement">
                            <p className="lead-text">
                                If a medical condition prevents you from working, you may be entitled to Social Security
                                Disability Insurance (SSDI) or Supplemental Security Income (SSI) benefits. I help disabled
                                individuals navigate the complex application and appeals process to secure the benefits they deserve.
                            </p>
                            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                                <Link to="/contact" className="cta-button">📞 Schedule a Consultation</Link>
                            </div>
                        </div>

                        <h2>Understanding Social Security Disability</h2>
                        <p>
                            The Social Security Administration denies most initial disability claims. Many deserving applicants
                            give up after their first denial, not realizing they have the right to appeal. Having an
                            experienced attorney can significantly improve your chances of approval.
                        </p>

                        <h2>Social Security Disability Services</h2>
                        <p>I assist clients with all stages of the disability process, including:</p>
                        <ul>
                            <li>Initial SSDI and SSI applications</li>
                            <li>Requests for reconsideration</li>
                            <li>Administrative Law Judge (ALJ) hearings</li>
                            <li>Appeals Council reviews</li>
                            <li>Federal court appeals</li>
                        </ul>

                        <h2>Common Conditions That Qualify</h2>
                        <p>
                            Social Security considers whether your condition prevents you from performing substantial gainful
                            activity. Common qualifying conditions include:
                        </p>
                        <ul>
                            <li>Back and spine disorders</li>
                            <li>Heart disease and cardiovascular conditions</li>
                            <li>Mental health conditions</li>
                            <li>Cancer</li>
                            <li>Autoimmune disorders</li>
                            <li>Neurological conditions</li>
                        </ul>

                        <div className="cta-section">
                            <h2>Don't Give Up on Your Disability Claim</h2>
                            <p>
                                If you've been denied Social Security disability benefits, you still have options. Contact my
                                office to discuss your case and learn how I may be able to help you appeal.
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <Link to="/contact" className="cta-button">Get Help With Your Claim</Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
