import { useState, useEffect, useRef } from 'react'
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

// Real Google Reviews Data
const allReviews = [
    {
        name: "Jessica Norsworthy",
        text: "Mitch has been a phenomenal attorney throughout my husband's workers' compensation case. Over the course of four long years, his guidance, dedication, and persistence helped us finally reach a settlement so our lives could move on. No matter what came up, Mitch was always just a call or email away—patient, responsive, and committed to helping us through every step. What started as a difficult and stressful situation became manageable because of his support. We're incredibly grateful for everything he's done, and we truly believe we couldn't have navigated this without him. His expertise and compassion made all the difference. We highly recommend Mitch to anyone in need of a strong, trustworthy advocate. He will always hold a special place in our hearts and will forever be considered part of our extended family.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJY6NiiRT3-IeI1nnHZN1B711y9fY2xvZNTkw5YvQapH5dm2w=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Alexia Love",
        text: "I'm incredibly grateful to Mitch and his team for helping me settle my workers' compensation case. From start to finish, they were professional, compassionate, and thorough. They kept me informed every step of the way, answered all my questions with patience, and genuinely cared about the outcome of my case. Workers' comp cases can be stressful and overwhelming, but having Mitch in my corner made a huge difference. Thanks to his expertise and dedication, we reached a settlement, and I can finally have the closure I needed to move forward. If you're looking for a knowledgeable and reliable workers' comp attorney, I highly recommend.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJd0cGRJacKQiSsGw88pOZ_x0lQ45y5mvuIf3mTuvw0q-W4Ifil=w36-h36-p-rp-mo-ba2-br100"
    },
    {
        name: "Matthew Molina",
        text: "This law office has been working my case for quite some time now. Mitch and his team are great. I greatly appreciate all their help during my legal process. It took some time but it was well worth it in the end. Mitch and his team helped me get the compensation I deserved. I would highly recommend him to any injured worker.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLWi1QoZHeG6Qzuwae0tGr0vhW4zqTkZy7B33XnI7AbeAI9ZA=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Mitchell Adelman",
        text: "Mitchell is a top notch attorney he and his associates were on top of each detail. There was never a time they did not respond to my questions. During a difficult time they relieved me of all pressure and anxiety. I would highly recommend them!!",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKHz3mNVpQHfCLDgG4J0iLOXHfMFkgjfV_-eVq99JsCjKF20g=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Dixander Cervantes",
        text: "I am very happy, satisfied with the work, with the attention plus the time dedicated and spent by Attorney Mitchell towards me and my case. At one point I thought it would be more difficult but it always gave me confidence and patience and today with his experience and excellent work we won the demand, so I recommend anyone even if you are Latino do not hesitate or think that the language can be a barrier so that I can help you.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLzR6IKLpy81jKyn0ZM_Ijww2PbkKwKy4DRRxCmsSB9WVvUWQ=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Hayden",
        text: "Mitch's represented me for the past 4 years. It's hard to put into words just how much he helped me in my little family get exactly what we deserved. He paid attention to every detail and walked me through anything I was having trouble understanding. Mitch is relatable, compassionate, down to earth and I would recommend him to anyone looking for a good lawyer. Mitch is your guy.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLVGtwZP3hq69-PdJ-X75WUjhIsdS5tU9JS161ZKNketCdFCg=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Billy Butler",
        text: "Everything I can say about Michael Shea and his staff is all great things from the secretary to him himself and the Second, Lawyer mrs Sharon Everyone in the office Went beyond To help me with my Workmen's Comp. case and more all of them are really caring people and care about their clients are highly recommend Mitchell Shea attorney-at-law Workmen's Comp. like I said, they Went beyond their job for Five long years, countless surgeries stuck by my side if anyone is looking for a Workmen's Comp. lawyer, I recommend you to choose this firm like I said they treated me like family and always look after me and my family.",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUON2AtZWLP9_hVE-yZ175EQJSqn6p5S1gn7Ui2QWAr_JphXXgG=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Lisa Nye",
        text: "Mitchell Shea is amazing. He fought for my case and won!!!! Mitch was very understanding and polite. Great Workers comp case attorney.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocKLgA3CcS-QQ4LL6YPe7TCCEHKh-3RN9PHrJCYrd4ptoM60gQ=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Debby Olsson",
        text: "Mitchell went up against a large medical provider in the county. While I was treated rather shabby by my employer, Mr. Shea fought for me!",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjU5WhDdaOvvuRzyATJGa_ysHqOzi_LbOrN1kSqx16Cd1V9fNMDA=w36-h36-p-rp-mo-ba3-br100"
    },
    {
        name: "Sebastian Arroyo",
        text: "One of the best lawyers. He's helped me a lot with my case. I'm very happy with all the work he did. I'm very grateful for everything. And of course, I would recommend him to anyone. I have no words to express all the gratitude. I just want to say thank you for your patience and the time you took to handle my case.",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjUJFH3MHN4tyopGZBl-u00oy9N_d6fxc-PPc1UZ9WYl_hsV3nCC=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Nick Jeanty",
        text: "It has been two years since attorney Mitchell took over my case. I was always very skeptical about lawyers. Attorney Mitchell is very exceptional. Whenever I had a concern or issue and contacted him via phone calls or emails, he would right away acknowledge me and do what he does best to take care of his clients. I'm very satisfied knowing I had a great attorney advocating on my behalf. To any one reading this review, I highly recommend attorney Michell Shea as one of the best lawyers in Florida. I'm one happy client. Thank you Mitch,",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjWj67GoMf4Agn_3KTdNq56JCWQEoNEuUctndiLN6iPpGu8IXDvKPw=w36-h36-p-rp-mo-ba3-br100"
    },
    {
        name: "Reena Philip",
        text: "After the unfortunate situation of my fall & Injury in June of 2001 at work, I was so lost as to how to move on in life... Attorney Mitchel Shea was pointed out to me by another attorney as a man of great integrity. Indeed, my experience was not otherwise! Attorney Mitchel Shea had proved himself during these 22 years... Mitch Shea walked me through each step of the way, guiding and always looking out for the best possible outcome. I would highly recommend Attorney Mitch Shea to anyone who is looking for an honest, caring and smart attorney who will stand with you and for you in your legal battles.",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjX-3taJWa0Ffl5t8InnXThhvdk_GJz74njTtx0xNVnFEiu4wNKb=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Josephine Nankya",
        text: "What can I say, this is the most organized office I know. The staff is amazing, they are kind and very understanding. When dealing with Mitch the attorney you feel like you are part of his family. Mitch is very, very patient. He looks out for your needs and understands what you are going through and how hard that change in life is affecting you. I would recommend him to anyone in a heart beat. AMAZING TEAM.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocK7H0KzwkLXN92MoQYw5_u375efe4EjPZapVDWFgz3YNrwz0g=w36-h36-p-rp-mo-ba2-br100"
    },
    {
        name: "Wanda Amador",
        text: "One of the best attorneys In Broward County. From beginning to end, he and his staff has stayed on top of my case/cases, kept me updated, answered all my questions. They always had time to speak and listen to you. You never Felt rushed off the phone. Every call was responded to, every email was replied to. He also got me the settlement I needed to continue my medical care. I highly recommend Mr. Shea without any hesitation.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocLYYg2GWDmamKhin6uSGfMApd7TExGtp3iDnHTxJFgacpOw5oo=w36-h36-p-rp-mo-ba2-br100"
    },
    {
        name: "Juju Dee",
        text: "Having Mr. Shea as my attorney has been great. He is very knowledgeable, attentive, and worked to get me the best outcome possible. I would definitely recommend him to any and everyone.",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjXPdoynWdA96ipuDVTfy2Cx6PolQRPgC7eWbVqmI9molDVQ4xo=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Doreen Diaferio",
        text: "Mitch is the best! (Sharon & Candice too) He's a great attorney and a great guy! He genuinely cares about his clients. I never once felt rushed, he always responded quickly and spent time thoroughly answering my questions. He worked hard to get me the settlement I deserved. I highly recommend Mitchell S. Shea, P.A.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocJ-aMGsrkuMGq-CVno6S9ReUtFJ0iZrpBw2cfRddcKKEU_l7Q=w36-h36-p-rp-mo-br100"
    },
    {
        name: "Tom McGrath",
        text: "I want to express my sincere gratitude to the Law Office of Mitchell S. Shea P.A. for their exceptional legal representation. From the moment I reached out for help they demonstrated professionalism, expertise, and unwavering support. Mitchell Shea and his team guided me through every step of the process... I highly Recommend Mitchell Shea to anyone in need of legal representation for a workers' compensation claim.",
        photo: "https://lh3.googleusercontent.com/a/ACg8ocIExRRhsH3Qf-xTTQO6u6-Udj3Vbluc0o4W3ov0AX6cXyFCsw=w36-h36-p-rp-mo-br100"
    },
    {
        name: "June Watson",
        text: "Mitchell Shea's firm with excellent professionalism. They are very consistent and attentive to the clients. They show compassion and very dedicated. Sharon and Candance are always reaching out to the clients with up dates and very prompt. Mitchell is hardworking, organized, dedicated to achieve the maximum he can receive for his clients. Thanks for a job well done to the team. I will recommend you to anyone who needs excellent help.",
        photo: "https://lh3.googleusercontent.com/a-/ALV-UjW6-d1Rd5YecDfOTGqC0OIsYTwETYz0ka-LnmxkbsN2MRNAfYA=w36-h36-p-rp-mo-br100"
    }
]

function shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export default function Testimonials() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(shuffleArray(allReviews).slice(0, 9))
    }, [])

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <AnimateOnScroll>
                        <h1>Client Testimonials</h1>
                        <p>Hear From Those We've Helped</p>
                    </AnimateOnScroll>
                </div>
            </div>

            <div className="page-content testimonials-page">
                <div className="container">
                    <AnimateOnScroll className="testimonials-intro">
                        <div className="google-badge">
                            <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="stars">★★★★★</span>
                            <span className="rating">5.0 Rating</span>
                        </div>
                        <p>
                            Our clients' success is our greatest achievement. Read what they have to say about working with the
                            Law Office of Mitchell Shea.
                        </p>
                    </AnimateOnScroll>

                    <div className="testimonials-grid">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="testimonial-header">
                                    <img
                                        src={review.photo}
                                        alt={review.name}
                                        className="testimonial-avatar"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextElementSibling.style.display = 'flex'
                                        }}
                                    />
                                    <div
                                        className="testimonial-avatar"
                                        style={{
                                            display: 'none',
                                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                                            color: 'white',
                                            fontSize: '1.3rem',
                                            fontWeight: 600,
                                            fontFamily: "'Playfair Display', serif",
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="testimonial-meta">
                                        <div className="testimonial-name">{review.name}</div>
                                    </div>
                                    <div className="testimonial-stars">★★★★★</div>
                                </div>
                                <p className="testimonial-text">{review.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <AnimateOnScroll className="testimonials-cta" delay={0.3}>
                        <h2>Ready to Experience the Difference?</h2>
                        <p>Join our satisfied clients and get the legal representation you deserve.</p>
                        <Link to="/contact" className="cta-button">Schedule Your Free Consultation</Link>
                    </AnimateOnScroll>
                </div>
            </div>

            <style>{`
        .testimonials-page {
          padding: 60px 0 100px;
        }

        .testimonials-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .testimonials-intro p {
          font-size: 1.2rem;
          color: var(--text-light);
          line-height: 1.8;
        }

        .google-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }

        .google-badge .stars {
          color: #fbbc04;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .google-badge .rating {
          font-weight: 600;
          color: var(--primary-color);
        }

        .testimonials-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .testimonial-meta {
          flex: 1;
        }

        .testimonial-name {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 1.1rem;
          margin-bottom: 2px;
        }

        .testimonial-stars {
          color: #fbbc04;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .testimonial-text {
          color: var(--text-color);
          line-height: 1.8;
          font-size: 1.05rem;
          position: relative;
        }

        .testimonial-text::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: -10px;
          font-size: 4rem;
          color: var(--secondary-color);
          opacity: 0.2;
          font-family: 'Playfair Display', serif;
        }

        .testimonials-cta {
          text-align: center;
          margin-top: 80px;
          padding: 60px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          border-radius: 25px;
          color: var(--white);
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonials-cta h2 {
          color: var(--white);
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .testimonials-cta p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 30px 25px;
          }

          .testimonials-cta {
            padding: 40px 25px;
          }

          .testimonials-cta h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
        </>
    )
}
