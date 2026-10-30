import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Display splash for 1.6 seconds to let the loader animation cycle complete
    const timer = setTimeout(() => {
      setFading(true)
    }, 1600)

    // Unmount completely after fade-out transition (600ms)
    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, 2200)

    return () => {
      clearTimeout(timer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`splash-screen-overlay ${fading ? 'splash-fade-out' : ''}`}
      aria-label="Loading Northstar Growth Studio"
      role="status"
    >
      <div className="splash-content">
        {/* From Uiverse.io by bociKond */}
        <div className="loader" aria-hidden="true"></div>

        <div className="splash-brand-block">
          <div className="splash-brand-title">
            <span className="brand-mark">◒</span> northstar<span className="brand-dot">.</span>
          </div>
          <p className="splash-subtitle">Enterprise SEO &amp; Performance Growth Studio</p>
        </div>
      </div>
    </div>
  )
}

