import { ArrowRight, ArrowUpRight, Check, CheckCircle2, HelpCircle, Minus, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react'
import PageHero from '../components/shared/PageHero'
import { initialPackages, packageComparisonTable } from '../data/seoAgencyData'
import packagesHeroJpg from '../images/packages_pricing_hero.jpg'

export default function Packages() {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' | 'quarterly'

  return (
    <>
      <PageHero
        eyebrow="Transparent Investment"
        title={<>Predictable Retainers for SEO, PPC & <em>Digital Marketing.</em></>}
        rightVisual={
          <div className="packages-hero-visual-card">
            <img
              src={packagesHeroJpg}
              alt="Predictable SEO & Digital Marketing Retainer ROI Matrix"
              loading="eager"
            />
          </div>
        }
      >
        We combine full-funnel organic search engineering with high-ROAS paid advertising, on-page optimization, local maps dominance, and conversion rate optimization into transparent, monthly retainers with zero multi-year lock-in.
      </PageHero>

      <main>
        {/* BILLING TOGGLE */}
        <section className="shell billing-toggle-section">
          <div className="packages-billing-switcher" role="group" aria-label="Billing frequency switcher">
            <button
              type="button"
              className={`packages-toggle-btn ${billingCycle === 'monthly' ? 'is-active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`packages-toggle-btn ${billingCycle === 'quarterly' ? 'is-active' : ''}`}
              onClick={() => setBillingCycle('quarterly')}
            >
              Quarterly Sprint <span className="packages-save-pill">Save 15%</span>
            </button>
          </div>
          <p className="billing-guarantee-note">
            <ShieldCheck size={14} className="shield-icon" /> All packages are month-to-month with a 30-day exit notice. No handcuffs.
          </p>
        </section>

        {/* PRICING CARDS */}
        <section className="section shell">
          <div className="packages-pricing-grid">
            {initialPackages.map((pkg) => {
              const currentMonthly = pkg.monthlyPrice || pkg.price
              const currentQuarterly = pkg.quarterlyPrice || Math.round(currentMonthly * 0.85)
              const isQuarterly = billingCycle === 'quarterly'
              const activePrice = isQuarterly ? currentQuarterly : currentMonthly

              return (
                <article
                  className={`pricing-tier-card ${pkg.recommended ? 'popular-tier-card' : ''}`}
                  key={pkg.id}
                >
                  {pkg.recommended && (
                    <div className="tier-popular-banner">
                      <Zap size={12} /> Most Popular Retainer
                    </div>
                  )}

                  <div className="tier-header">
                    <span className="tier-badge-pill">{pkg.badge}</span>
                    <h2 className="tier-title">{pkg.name}</h2>
                    <p className="tier-desc">{pkg.description}</p>
                  </div>

                  <div className="tier-pricing-wrap">
                    {isQuarterly ? (
                      <div>
                        <div className="price-display">
                          <span className="original-price-strike">₹{Number(currentMonthly).toLocaleString('en-IN')}</span>
                          <span className="currency-symbol">₹</span>
                          <span className="price-number">{Number(activePrice).toLocaleString('en-IN')}</span>
                          <span className="billing-suffix">/ mo</span>
                          <span className="savings-badge-inline">15% OFF</span>
                        </div>
                        <span className="savings-callout">
                          Billed ₹{Number(activePrice * 3).toLocaleString('en-IN')} / quarter (Save ₹{Number((currentMonthly - activePrice) * 3).toLocaleString('en-IN')})
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="price-display">
                          <span className="currency-symbol">₹</span>
                          <span className="price-number">{Number(activePrice).toLocaleString('en-IN')}</span>
                          <span className="billing-suffix">/ month</span>
                        </div>
                        <span className="monthly-callout">
                          Billed month-to-month, cancel anytime
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="tier-best-for">
                    <strong>Best For:</strong> {pkg.bestFor}
                  </div>

                  <div className="tier-features-list">
                    <span className="features-kicker">Core Inclusions:</span>
                    <ul>
                      {pkg.features.slice(0, 6).map((feature, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={13} className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.features.length > 6 && (
                      <a href="#feature-matrix" className="more-features-hint">
                        + {pkg.features.length - 6} more deliverables in matrix below ↓
                      </a>
                    )}
                  </div>

                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="tier-exclusions-list">
                      <span className="features-kicker-dim">Not Included:</span>
                      <ul>
                        {pkg.notIncluded.slice(0, 2).map((notInc, nIdx) => (
                          <li key={nIdx}>
                            <Minus size={13} className="minus-icon" />
                            <span>{notInc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="tier-action-wrap">
                    <Link
                      to={`/book/${pkg.id}`}
                      className={`button full-width-btn ${pkg.recommended ? 'button-lime' : 'button-outline'}`}
                    >
                      Book {pkg.name} <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* FULL COMPARISON TABLE */}
        <section id="feature-matrix" className="section shell matrix-section-compact">
          <div className="section-heading">
            <div>
              <p className="kicker">Side-by-Side Analysis</p>
              <h2>Detailed <em>Feature Matrix.</em></h2>
            </div>
            <p className="section-intro">
              Inspect exactly what is included across each tier. Need a custom enterprise configuration? Contact our directors.
            </p>
          </div>

          <div className="matrix-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-col-th">Capability / Scope</th>
                  <th className="tier-col-th">Growth Foundation</th>
                  <th className="tier-col-th popular-th">Scale Engine</th>
                  <th className="tier-col-th">Enterprise Alpha</th>
                </tr>
              </thead>
              <tbody>
                {packageComparisonTable.map((group, gIdx) => (
                  <Fragment key={`group-frag-${gIdx}`}>
                    <tr key={`group-${gIdx}`} className="table-group-header-row">
                      <td colSpan={4}>{group.category}</td>
                    </tr>
                    {group.features.map((row, rIdx) => (
                      <tr key={`row-${gIdx}-${rIdx}`} className="table-data-row">
                        <td className="row-feature-name">{row.name}</td>
                        <td className="row-tier-val">{row.starter}</td>
                        <td className="row-tier-val popular-td">{row.scale}</td>
                        <td className="row-tier-val">{row.enterprise}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WHY ZERO LOCK-IN SECTION */}
        <section className="dark-band">
          <div className="shell">
            <div className="section-heading dark-heading">
              <div>
                <p className="kicker">The Anti-Agency Manifesto</p>
                <h2>Why we never enforce <em>long-term lock-in contracts.</em></h2>
              </div>
            </div>

            <div className="manifesto-grid">
              <div className="manifesto-card">
                <h3>Verifiable Performance Over Legal Restraints</h3>
                <p>
                  Most legacy marketing agencies mandate 12-month lock-ins because they know their output fades after month three. We operate month-to-month because our retention rate is 94%+ driven strictly by compounding ROI.
                </p>
              </div>
              <div className="manifesto-card">
                <h3>Complete Intellectual Property Ownership</h3>
                <p>
                  Every line of code, technical audit doc, schema tag, and editorial article we produce is 100% owned by your company. We never gatekeep deliverables or hold your data hostage.
                </p>
              </div>
              <div className="manifesto-card">
                <h3>Direct Code Commits via Git</h3>
                <p>
                  Instead of handing you a 70-page PDF that collects dust in Google Drive, our engineers write tickets in Jira/Linear and submit pull requests directly to your repository.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM AUDIT BANNER */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Custom Requirements?</p>
            <h2>Need a tailored <em>enterprise solution?</em></h2>
            <p className="final-cta-desc">
              If your company manages 100,000+ indexed URLs, complex multi-region hreflang architecture, or requires custom engineering squads, let’s build a bespoke roadmap.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Schedule Enterprise Consultation <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
