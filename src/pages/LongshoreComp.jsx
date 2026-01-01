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

export default function LongshoreComp() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Longshore & Harbor Workers' Compensation</h1>
                        <p>Injured Working on or Near the Water? Experienced Representation for Maritime Workers.</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <AnimateOnScroll className="content-wrapper">
                        <div className="value-statement">
                            <p className="lead-text">
                                If you were injured while working at a port, shipyard, terminal, or other
                                maritime facility, you may be covered under the Longshore and Harbor Workers' Compensation Act
                                (LHWCA). I represent injured maritime workers—not employers or insurance carriers—and help them
                                pursue the benefits provided under federal law.
                            </p>
                            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                                <Link to="/contact" className="cta-button">📞 Request a Consultation</Link>
                            </div>
                        </div>

                        <h2>Understanding Maritime Injury Claims</h2>
                        <p>
                            Maritime injury claims under the Longshore Act are complex and very different from state workers'
                            compensation cases. Federal rules, strict deadlines, and powerful insurance companies can make the
                            process overwhelming—especially when you're injured and unable to work.
                        </p>
                        <p>
                            My practice is dedicated to representing injured longshore and harbor workers, helping them
                            understand their rights and navigate the claims process with clarity and confidence.
                        </p>

                        <h2>Who Is Covered Under the Longshore Act?</h2>
                        <p>The LHWCA may cover workers injured while performing maritime-related work, including:</p>
                        <ul>
                            <li>Longshore workers and stevedores</li>
                            <li>Shipyard and ship repair workers</li>
                            <li>Harbor, dock, and terminal workers</li>
                            <li>Maritime construction workers</li>
                            <li>Other employees injured on navigable waters or adjoining areas</li>
                        </ul>
                        <p>
                            Coverage depends on both where you work and the type of work you perform. Determining eligibility is
                            one of the most important—and most disputed—parts of a Longshore claim.
                        </p>

                        <h2>Longshore & Harbor Workers' Compensation Claims</h2>
                        <p>I assist injured maritime workers with issues such as:</p>
                        <ul>
                            <li>Filing and prosecuting Longshore Act claims</li>
                            <li>Denied or delayed benefits</li>
                            <li>Medical treatment disputes</li>
                            <li>Temporary and permanent disability benefits</li>
                            <li>Average weekly wage disputes</li>
                            <li>Independent medical examinations (IMEs)</li>
                            <li>Claims before the U.S. Department of Labor</li>
                        </ul>
                        <p>
                            Each case is handled with careful attention to detail and a clear understanding of federal maritime
                            compensation law.
                        </p>

                        <h2>Why Choose a Longshore Plaintiff's Attorney?</h2>
                        <p>
                            Insurance carriers and employers handling Longshore claims are experienced and well-resourced. Having
                            an attorney who focuses on representing injured workers can help level the playing field.
                        </p>
                        <p>When you work with me, you receive:</p>
                        <ul>
                            <li>Representation focused exclusively on injured maritime workers</li>
                            <li>Knowledge of the Longshore Act and federal procedures</li>
                            <li>Clear communication and realistic guidance</li>
                            <li>Advocacy aimed at securing the benefits allowed by law</li>
                        </ul>

                        <div className="reassurance-section">
                            <h2>Protecting Your Rights and Your Future</h2>
                            <p>
                                A serious injury can affect your health, income, and future. You deserve an attorney who
                                understands both the law and the realities of maritime work. My goal is to protect your rights
                                and guide you through each stage of the Longshore claims process.
                            </p>
                        </div>

                        <div className="cta-section">
                            <h2>Speak With a Longshore & Harbor Workers' Compensation Attorney</h2>
                            <p>
                                If you were injured working on or near the water, it's important to understand your rights under
                                federal law. Contact my office to discuss your situation and learn how I may be able to help.
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <Link to="/contact" className="cta-button">Request a Consultation</Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    )
}
