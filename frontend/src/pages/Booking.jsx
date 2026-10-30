import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Calendar, Clock, Globe, Building, Mail, Phone, User } from 'lucide-react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { fetchPackage, fetchPackages, submitBooking } from '../api'
import PageHero from '../components/shared/PageHero'
import { initialPackages } from '../data/seoAgencyData'

export default function Booking() {
  const { packageId } = useParams()
  const navigate = useNavigate()
  const [activePkgId, setActivePkgId] = useState(packageId || 'scale-engine')

  const packagesQuery = useQuery({ queryKey: ['packages'], queryFn: fetchPackages })
  const selectedQuery = useQuery({
    queryKey: ['package', activePkgId],
    queryFn: () => fetchPackage(activePkgId),
    enabled: Boolean(activePkgId)
  })

  const form = useForm()
  const [status, setStatus] = useState('') // 'idle' | 'loading' | 'success' | 'error'
  const [bookingConfirmation, setBookingConfirmation] = useState(null)

  const pkg = selectedQuery.data || initialPackages.find(p => p.id === activePkgId) || initialPackages[1]

  async function onSubmit(values) {
    setStatus('loading')
    try {
      const payload = {
        ...values,
        packageId: activePkgId,
        packageName: pkg?.name,
        packagePrice: pkg?.price,
        submittedAt: new Date().toISOString()
      }
      const res = await submitBooking(payload)
      setBookingConfirmation(res?.booking || { ...payload, id: `NS-${Math.floor(100000 + Math.random() * 900000)}` })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const handlePackageChange = (e) => {
    const newId = e.target.value
    setActivePkgId(newId)
    navigate(`/book/${newId}`, { replace: true })
  }

  return (
    <>
      <div className="shell breadcrumb-bar">
        <Link to="/packages" className="breadcrumb-back">
          <ArrowLeft size={14} /> Back to Pricing & Packages
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Reserve Retainer</span>
      </div>

      <PageHero
        eyebrow="Onboarding & Sprint Reservation"
        title={<>Let's plan your <em>next stage of growth.</em></>}
      >
        Lock in your dedicated growth engineering squad. We onboard a maximum of 3 new client accounts per month to guarantee elite execution standards.
      </PageHero>

      <main className="booking-page-layout shell">
        {status === 'success' && bookingConfirmation ? (
          <div className="booking-success-container">
            <div className="success-badge-icon">
              <CheckCircle2 size={48} className="check-icon-large" />
            </div>
            <h2>Sprint Reservation Confirmed!</h2>
            <p className="success-lead">
              Thank you, <strong>{bookingConfirmation.name || 'there'}</strong>. We have reserved your onboarding slot for the <strong>{pkg.name}</strong> retainer.
            </p>

            <div className="confirmation-meta-card">
              <div className="meta-row">
                <span>Confirmation Reference:</span>
                <strong>{bookingConfirmation.id || 'NS-948210'}</strong>
              </div>
              <div className="meta-row">
                <span>Selected Tier:</span>
                <strong>{pkg.name} (₹{Number(pkg.price).toLocaleString('en-IN')}/mo)</strong>
              </div>
              <div className="meta-row">
                <span>Domain:</span>
                <strong>{bookingConfirmation.website || 'Provided in intake'}</strong>
              </div>
              <div className="meta-row">
                <span>Work Email:</span>
                <strong>{bookingConfirmation.email}</strong>
              </div>
            </div>

            <div className="onboarding-next-steps">
              <h3>What Happens in the Next 24 Hours:</h3>
              <div className="steps-cards-row">
                <div className="step-card-box">
                  <span className="step-badge">Within 2 Hours</span>
                  <h4>NDA & Discovery Invite</h4>
                  <p>Our client director will email you a mutual Non-Disclosure Agreement and a calendar link for your technical kickoff call.</p>
                </div>
                <div className="step-card-box">
                  <span className="step-badge">Within 24 Hours</span>
                  <h4>Pre-Kickoff Log Analysis</h4>
                  <p>We review your Google Search Console and begin assembling your 80-point preliminary diagnostic health check.</p>
                </div>
                <div className="step-card-box">
                  <span className="step-badge">Sprint Day 1</span>
                  <h4>Engineering Jira Integration</h4>
                  <p>We join your Slack, configure your Looker Studio live dashboard, and deploy our first wave of technical fixes.</p>
                </div>
              </div>
            </div>

            <div className="success-actions">
              <Link to="/case-studies" className="button button-lime">
                Explore Client Results <ArrowUpRight size={16} />
              </Link>
              <Link to="/" className="button button-outline">
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="booking-split-grid">
            {/* LEFT COLUMN: PACKAGE SUMMARY */}
            <aside className="package-summary-sidebar">
              <div className="summary-sticky-box">
                <div className="summary-header">
                  <span className="kicker">Selected Plan</span>
                  <div className="pkg-selector-wrapper">
                    <label htmlFor="pkg-select" className="sr-only">Switch Package</label>
                    <select
                      id="pkg-select"
                      value={activePkgId}
                      onChange={handlePackageChange}
                      className="pkg-select-dropdown"
                    >
                      {initialPackages.map((p) => (
                        <option value={p.id} key={p.id}>
                          {p.name} (₹{Number(p.price).toLocaleString('en-IN')}/mo)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="summary-price-block">
                  <span className="summary-amount">₹{Number(pkg.price).toLocaleString('en-IN')}</span>
                  <span className="summary-cycle">/ month</span>
                </div>
                <p className="summary-desc">{pkg.description}</p>

                <div className="summary-deliverables">
                  <span className="summary-kicker">Included In This Retainer:</span>
                  <ul>
                    {pkg.features.map((f, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="summary-guarantees">
                  <div className="guarantee-row">
                    <ShieldCheck size={16} />
                    <span>Month-to-month agreement (Zero lock-in)</span>
                  </div>
                  <div className="guarantee-row">
                    <Zap size={16} />
                    <span>Direct engineering commits via GitHub/Linear</span>
                  </div>
                  <div className="guarantee-row">
                    <Clock size={16} />
                    <span>24-Hour onboarding turnaround</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: BOOKING INTAKE FORM */}
            <section className="booking-form-wrapper">
              <div className="form-intro-banner">
                <span className="kicker">Sprint Reservation Intake</span>
                <h2>Complete your onboarding intake</h2>
                <p>Provide your domain details and project scope. No credit card required at reservation.</p>
              </div>

              <form className="booking-form" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="form-row-two">
                  <label>
                    <span>Full Name <em className="req">*</em></span>
                    <div className="input-with-icon">
                      <User size={16} />
                      <input
                        {...form.register('name', { required: true })}
                        placeholder="e.g. Vikramaditya Sharma"
                      />
                    </div>
                  </label>

                  <label>
                    <span>Work Email <em className="req">*</em></span>
                    <div className="input-with-icon">
                      <Mail size={16} />
                      <input
                        type="email"
                        {...form.register('email', { required: true })}
                        placeholder="you@company.com"
                      />
                    </div>
                  </label>
                </div>

                <div className="form-row-two">
                  <label>
                    <span>Phone / WhatsApp <em className="req">*</em></span>
                    <div className="input-with-icon">
                      <Phone size={16} />
                      <input
                        {...form.register('phone', { required: true })}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </label>

                  <label>
                    <span>Company Name <em className="req">*</em></span>
                    <div className="input-with-icon">
                      <Building size={16} />
                      <input
                        {...form.register('company', { required: true })}
                        placeholder="e.g. Acme Technologies"
                      />
                    </div>
                  </label>
                </div>

                <div className="form-row-two">
                  <label>
                    <span>Website Domain URL <em className="req">*</em></span>
                    <div className="input-with-icon">
                      <Globe size={16} />
                      <input
                        type="text"
                        {...form.register('website', { required: true })}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </label>

                  <label>
                    <span>Current Monthly Organic Traffic</span>
                    <select {...form.register('trafficTier')}>
                      <option value="under-10k">Under 10,000 visits / month</option>
                      <option value="10k-50k">10,000 – 50,000 visits / month</option>
                      <option value="50k-250k">50,000 – 250,000 visits / month</option>
                      <option value="250k-plus">250,000+ visits / month</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Primary Competitors (URLs or Names)</span>
                  <input
                    {...form.register('competitors')}
                    placeholder="e.g. competitor1.com, competitor2.com"
                  />
                </label>

                <label>
                  <span>Key Growth Goals & Problems to Solve <em className="req">*</em></span>
                  <textarea
                    {...form.register('requirements', { required: true })}
                    rows={4}
                    placeholder="Tell us about your biggest bottlenecks: e.g. React/Next.js indexing issues, stagnant traffic, outranking competitors, AI Overviews readiness..."
                  />
                </label>

                <div className="form-row-two">
                  <label>
                    <span>Desired Kickoff Timeframe</span>
                    <select {...form.register('kickoffTimeline')}>
                      <option value="immediate">Immediate (This week)</option>
                      <option value="next-month">Start of next month</option>
                      <option value="exploratory">Exploratory / Planning stage</option>
                    </select>
                  </label>

                  <label>
                    <span>Target CMS or Tech Stack</span>
                    <select {...form.register('techStack')}>
                      <option value="nextjs-react">Next.js / React / Custom SPA</option>
                      <option value="shopify">Shopify / Shopify Plus</option>
                      <option value="wordpress">WordPress / WooCommerce</option>
                      <option value="webflow">Webflow</option>
                      <option value="other">Other / Headless</option>
                    </select>
                  </label>
                </div>

                <label className="checkbox-agreement">
                  <input {...form.register('consent', { required: true })} type="checkbox" />
                  <span>
                    I consent to Northstar reviewing my domain and contacting me with a custom preliminary diagnostic.
                  </span>
                </label>

                {status === 'error' && (
                  <div className="form-error">
                    We could not record your reservation. Please verify your connection or contact us directly at growth@northstarseo.com.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="button button-lime full-width-btn"
                >
                  {status === 'loading' ? 'Securing Sprint Slot…' : `Confirm Reservation for ${pkg.name}`} <ArrowUpRight size={18} />
                </button>

                <p className="form-privacy-note">
                  🔒 Strictly confidential. Protected under standard mutual NDA. Zero spam guaranteed.
                </p>
              </form>
            </section>
          </div>
        )}
      </main>
    </>
  )
}
