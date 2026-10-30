import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles, Building, Globe, User } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { fetchPackages, fetchServices, fetchSiteSettings, submitInquiry } from '../api'
import PageHero from '../components/shared/PageHero'
import { agencyImages } from '../data/seoAgencyData'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultDomain = searchParams.get('domain') || ''
  const defaultPackage = searchParams.get('package') || ''

  const services = useQuery({ queryKey: ['services'], queryFn: fetchServices })
  const packages = useQuery({ queryKey: ['packages'], queryFn: fetchPackages })
  const settings = useQuery({ queryKey: ['settings'], queryFn: fetchSiteSettings })

  const form = useForm({
    defaultValues: {
      website: defaultDomain ? `https://${defaultDomain}` : '',
      packageId: defaultPackage || '',
      inquiryType: defaultDomain ? 'audit' : 'partnership'
    }
  })

  useEffect(() => {
    if (defaultDomain) {
      form.setValue('website', defaultDomain.startsWith('http') ? defaultDomain : `https://${defaultDomain}`)
    }
  }, [defaultDomain, form])

  const [status, setStatus] = useState('') // 'idle' | 'loading' | 'success' | 'error'
  const [submissionData, setSubmissionData] = useState(null)
  const [inquiryType, setInquiryType] = useState(defaultDomain ? 'audit' : 'partnership')

  async function submit(values) {
    setStatus('loading')
    try {
      const payload = { ...values, inquiryType, submittedAt: new Date().toISOString() }
      const res = await submitInquiry(payload)
      setSubmissionData(res?.inquiry || { ...payload, id: `INQ-${Math.floor(100000 + Math.random() * 900000)}` })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const details = settings.data || {}

  return (
    <>
      <PageHero
        eyebrow="Initiate Conversation"
        title={<>Let's diagnose your <em>growth opportunity.</em></>}
      >
        Whether you require an urgent technical crawl audit, a high-ROAS Google Ads overhaul, on-page semantic SEO tuning, local maps expansion, or an embedded monthly growth retainer, our senior team is ready.
      </PageHero>

      <main className="contact-page-layout shell">
        <div className="contact-grid-split">
          {/* LEFT: DIRECT INFO & GUARANTEES */}
          <aside className="contact-info-column">
            <div className="contact-cards-stack">
              <div className="contact-sla-card">
                <div className="sla-badge">
                  <Clock size={14} /> Guaranteed Fast Response
                </div>
                <h3>We reply within 4 business hours.</h3>
                <p>
                  No generic auto-responders. A senior search strategist personally reviews your domain and responds with actionable preliminary notes.
                </p>
              </div>

              <div className="direct-channels-card">
                <span className="kicker">Direct Communication</span>
                <div className="channel-item">
                  <Mail size={16} className="channel-icon" />
                  <div>
                    <span>Primary Work Email</span>
                    <a href={`mailto:${details.email || 'growth@northstarseo.com'}`}>
                      {details.email || 'growth@northstarseo.com'}
                    </a>
                  </div>
                </div>

                <div className="channel-item">
                  <Phone size={16} className="channel-icon" />
                  <div>
                    <span>Direct Phone / WhatsApp</span>
                    <a href={`tel:${details.phone || '+9101148923100'}`}>
                      {details.phone || '+91 (011) 4892-3100'}
                    </a>
                  </div>
                </div>

                <div className="channel-item">
                  <MapPin size={16} className="channel-icon" />
                  <div>
                    <span>Headquarters</span>
                    <p>{details.address || 'Level 5, Cyber Park Tech Enclave, Gurugram, NCR Delhi 122002'}</p>
                  </div>
                </div>
              </div>

              <div className="contact-assurances-card">
                <span className="kicker">The Northstar Guarantee</span>
                <ul className="assurance-list">
                  <li>
                    <ShieldCheck size={14} className="check-icon" />
                    <span>Protected under strict mutual Non-Disclosure Agreement (NDA).</span>
                  </li>
                  <li>
                    <ShieldCheck size={14} className="check-icon" />
                    <span>Zero aggressive sales pitches. Strictly technical value.</span>
                  </li>
                  <li>
                    <ShieldCheck size={14} className="check-icon" />
                    <span>100% human analysis by senior growth engineers.</span>
                  </li>
                </ul>
              </div>

              {/* Live Technical Inspection Card */}
              <div className="contact-visual-card">
                <div className="contact-audit-img-wrap">
                  <img src={agencyImages.auditInspect} alt="Diagnostic Code Audit" className="contact-audit-img" />
                </div>
                <div className="contact-visual-caption">
                  <span className="visual-kicker">Live Code Inspection</span>
                  <h4>Real Engineers, Not Automation</h4>
                  <p>Every submitted domain is manually inspected with Screaming Frog and server log tools before your diagnostic call.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTACT / AUDIT FORM */}
          <section className="contact-form-column">
            {status === 'success' && submissionData ? (
              <div className="submission-success-card">
                <CheckCircle2 size={44} className="check-icon-large" />
                <h2>Diagnostic Request Received!</h2>
                <p className="success-text">
                  Thank you, <strong>{submissionData.name || 'there'}</strong>. We have received your request for <strong>{submissionData.website || 'your domain'}</strong>.
                </p>

                <div className="success-timeline-summary">
                  <div className="summary-step">
                    <span className="step-num-pill">01</span>
                    <div>
                      <strong>Crawl & Log Analysis</strong>
                      <p>Our strategist is queueing a deep crawl simulation to inspect your indexation health.</p>
                    </div>
                  </div>
                  <div className="summary-step">
                    <span className="step-num-pill">02</span>
                    <div>
                      <strong>Video Walkthrough Delivery</strong>
                      <p>You will receive a confidential 15-minute diagnostic video and PDF roadmap at <strong>{submissionData.email}</strong>.</p>
                    </div>
                  </div>
                </div>

                <div className="success-buttons">
                  <Link to="/case-studies" className="button button-lime">
                    Read Our Case Studies <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/" className="button button-outline">
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="form-card-container">
                <div className="inquiry-type-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${inquiryType === 'audit' ? 'active-tab' : ''}`}
                    onClick={() => {
                      setInquiryType('audit')
                      form.setValue('inquiryType', 'audit')
                    }}
                  >
                    <Sparkles size={14} /> Request Free 80-Pt Audit
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${inquiryType === 'partnership' ? 'active-tab' : ''}`}
                    onClick={() => {
                      setInquiryType('partnership')
                      form.setValue('inquiryType', 'partnership')
                    }}
                  >
                    General Project Inquiry
                  </button>
                </div>

                <form className="professional-contact-form" onSubmit={form.handleSubmit(submit)}>
                  <div className="form-row-two">
                    <label>
                      <span>Full Name <em className="req">*</em></span>
                      <div className="input-with-icon">
                        <User size={16} />
                        <input
                          {...form.register('name', { required: true })}
                          placeholder="e.g. Vikramaditya Sen"
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
                      <span>Phone / WhatsApp</span>
                      <div className="input-with-icon">
                        <Phone size={16} />
                        <input
                          {...form.register('phone')}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </label>

                    <label>
                      <span>Company Name</span>
                      <div className="input-with-icon">
                        <Building size={16} />
                        <input
                          {...form.register('company')}
                          placeholder="e.g. Acme FinTech"
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
                      <span>Monthly Marketing / SEO Budget</span>
                      <select {...form.register('budget')}>
                        <option value="under-50k">₹40,000 – ₹75,000 / month</option>
                        <option value="75k-150k">₹75,000 – ₹1,50,000 / month</option>
                        <option value="150k-300k">₹1,50,000 – ₹3,00,000 / month</option>
                        <option value="300k-plus">₹3,00,000+ / month (Enterprise)</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-row-two">
                    <label>
                      <span>Primary Service of Interest</span>
                      <select {...form.register('service')}>
                        <option value="">Select a capability...</option>
                        {services.data?.map((item) => (
                          <option value={item.slug || item.id} key={item.id}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      <span>Target Package (Optional)</span>
                      <select {...form.register('packageId')}>
                        <option value="">Select a package...</option>
                        {packages.data?.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name} (₹{Number(item.price).toLocaleString('en-IN')}/mo)
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label>
                    <span>Tell us about your biggest bottlenecks & goals <em className="req">*</em></span>
                    <textarea
                      {...form.register('requirements', { required: true })}
                      rows={5}
                      placeholder={
                        inquiryType === 'audit'
                          ? "What are your top competitors? Have you noticed drops after recent Google algorithm updates or Core Web Vitals issues?"
                          : "Describe your project timeline, target market, and what success looks like over the next 6-12 months..."
                      }
                    />
                  </label>

                  <label className="checkbox-agreement">
                    <input {...form.register('consent', { required: true })} type="checkbox" />
                    <span>
                      I agree to receive a confidential preliminary search audit and discuss potential sprint deliverables.
                    </span>
                  </label>

                  {status === 'error' && (
                    <div className="form-error">
                      Unable to dispatch inquiry. Please check your network or contact growth@northstarseo.com directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="button button-lime full-width-btn"
                  >
                    {status === 'loading'
                      ? 'Dispatching Diagnostic Request…'
                      : inquiryType === 'audit'
                      ? 'Request Free 80-Point SEO Audit'
                      : 'Send Partnership Inquiry'}{' '}
                    <ArrowUpRight size={18} />
                  </button>

                  <p className="form-privacy-note">
                    🔒 Strictly confidential. Protected under standard mutual NDA. Zero spam guaranteed.
                  </p>
                </form>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}
