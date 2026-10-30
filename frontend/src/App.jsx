import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Packages from './pages/Packages'
import About from './pages/About'
import Team from './pages/Team'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import { PrivacyPolicy, Terms } from './pages/Legal'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:packageId" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  )
}
