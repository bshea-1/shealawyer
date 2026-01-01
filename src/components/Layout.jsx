import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
}

export default function Layout() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className={isHome ? '' : 'subpage'}>
            <Navbar />
            <motion.main
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Outlet />
            </motion.main>
            <Footer />
        </div>
    )
}
