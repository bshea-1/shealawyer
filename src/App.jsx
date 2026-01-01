import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PracticeAreas from './pages/PracticeAreas'
import WorkersComp from './pages/WorkersComp'
import LongshoreComp from './pages/LongshoreComp'
import PersonalInjury from './pages/PersonalInjury'
import SSDisability from './pages/SSDisability'
import Mediation from './pages/Mediation'
import Attorneys from './pages/Attorneys'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="practice-areas" element={<PracticeAreas />} />
                        <Route path="workers-comp" element={<WorkersComp />} />
                        <Route path="longshore-comp" element={<LongshoreComp />} />
                        <Route path="personal-injury" element={<PersonalInjury />} />
                        <Route path="ss-disability" element={<SSDisability />} />
                        <Route path="mediation" element={<Mediation />} />
                        <Route path="attorneys" element={<Attorneys />} />
                        <Route path="testimonials" element={<Testimonials />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App

