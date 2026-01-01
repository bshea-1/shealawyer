import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/practice-areas', label: 'Practice Areas' },
    { path: '/attorneys', label: 'Attorneys' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    const isHome = location.pathname === '/'

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    <span className="logo-icon">⚖️</span>
                    <span className="logo-text">The Law Offices of Mitchell Shea</span>
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            end={path === '/'}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a href="tel:954-491-0046" className="cta-button mobile-cta">
                        Call Us: (954) 491-0046
                    </a>
                </div>

                <div
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <a href="tel:954-491-0046" className="cta-button nav-cta">
                    Call Us: (954) 491-0046
                </a>
            </div>
        </nav>
    )
}
