import Navbar from './Navbar'
import Footer from './Footer'
import SplashScreen from './SplashScreen'

export default function PageLayout({ children }) {
  return (
    <>
      <SplashScreen />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
