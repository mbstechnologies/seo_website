import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, Layers, Target, Clock, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchService } from '../api'
import PageHero from '../components/shared/PageHero'
import { LoadingState } from '../components/shared/States'

export default function ServiceDetails() {
  const { slug } = useParams()
  const query = useQuery({
    queryKey: ['service', slug],
    queryFn: () => fetchService(slug)
  })

  if (query.isLoading) {
    return (
      <main className="section shell">
        <LoadingState label="service blueprint" />
      </main>
    )
  }

  const item = query.data

  return (
    <>
      <div className="shell breadcrumb-bar">
        <Link to="/services" className="breadcrumb-back">
          <ArrowLeft size={14} /> Back to All Services
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{item.title}</span>
      </div>

      <PageHero
        eyebrow={`Service Blueprint · ${item.category || 'Strategic Search'}`}
        title={<>{item.title} for <em>Compounding Returns.</em></>}
      >
        {item.description}
      </PageHero>

      <main>
        {/* IMPACT STATS BANNER */}
        {item.impactMetrics && (
          <section className="shell impact-banner-row">
            {item.impactMetrics.map((metric, idx) => (
              <div className="impact-box" key={idx}>
                <span className="impact-num">{metric.value}</span>
                <span className="impact-lbl">{metric.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* DETAILED OVERVIEW & BUSINESS VALUE */}
        <section className="section shell">
          <div className="service-deep-grid">
            <div className="service-main-col">
              <div className="detail-card">
                {item.image && (
                  <div className="service-blueprint-hero-wrap">
                    <img src={item.image} alt={item.title} className="service-blueprint-img" />
                  </div>
                )}
                <span className="kicker">Strategic Overview</span>
                <h2>Why this capability defines <em>market leadership.</em></h2>
                <p className="large-copy">{item.overview}</p>
                {item.scope && (
                  <div className="scope-box">
                    <strong>Comprehensive Scope:</strong>
                    <p>{item.scope}</p>
                  </div>
                )}
              </div>

              {/* PROBLEMS ADDRESSED */}
              {item.problems && (
                <div className="detail-card warning-tint">
                  <div className="card-header-icon">
                    <AlertTriangle size={20} className="warning-icon" />
                    <h3>Common Failure Modes & Bottlenecks We Eliminate</h3>
                  </div>
                  <ul className="problem-list">
                    {item.problems.map((prob, idx) => (
                      <li key={idx}>
                        <span className="prob-bullet">✕</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SCOPE & DELIVERABLES */}
              {item.deliverables && (
                <div className="detail-card">
                  <span className="kicker">Scope & Artifacts</span>
                  <h3>Tangible Deliverables You Will Receive</h3>
                  <div className="deliverables-grid-two">
                    {item.deliverables.map((del, idx) => (
                      <div className="del-item-card" key={idx}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <div>
                          <strong>Deliverable {idx + 1}</strong>
                          <p>{del}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WORKFLOW SPRINTS */}
              {item.workflow && (
                <div className="detail-card">
                  <span className="kicker">Execution Timeline</span>
                  <h3>How We Execute This Sprint</h3>
                  <div className="workflow-steps-list">
                    {item.workflow.map((wf, idx) => (
                      <div className="wf-step-row" key={idx}>
                        <span className="wf-step-badge">Stage 0{idx + 1}</span>
                        <div className="wf-step-content">
                          <strong>{wf.split('&')[0] || wf}</strong>
                          <p>{wf}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR COL */}
            <aside className="service-sidebar-col">
              <div className="sticky-action-card">
                <span className="kicker">Ready to implement?</span>
                <h3>Deploy {item.title}</h3>
                <p>Plug our senior growth engineers and technical specialists directly into your roadmap.</p>

                <div className="sidebar-specs">
                  <div className="spec-item">
                    <Target size={15} />
                    <div>
                      <span>Best Suited For</span>
                      <strong>{item.audience || 'Scaleups & High-Growth Brands'}</strong>
                    </div>
                  </div>
                  <div className="spec-item">
                    <Clock size={15} />
                    <div>
                      <span>Sprint Cycle</span>
                      <strong>30-Day Agile Sprints</strong>
                    </div>
                  </div>
                  <div className="spec-item">
                    <ShieldCheck size={15} />
                    <div>
                      <span>Contract Terms</span>
                      <strong>Month-to-month, 0 lock-in</strong>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="button button-lime full-width-btn">
                  Discuss This Capability <ArrowUpRight size={16} />
                </Link>
                <Link to="/packages" className="button button-outline full-width-btn">
                  Explore Retainer Packages
                </Link>

                {item.tools && (
                  <div className="sidebar-tools">
                    <span className="kicker">Tech Stack & Tools Used</span>
                    <div className="tool-chips">
                      {item.tools.map((t) => (
                        <span key={t} className="tool-chip-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Move from theory to ranking</p>
            <h2>Ready to resolve your <em>search bottlenecks?</em></h2>
            <p className="final-cta-desc">
              Schedule a 30-minute discovery session with a lead search architect. We will review your current analytics and map an actionable remediation path.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Book Discovery Session <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
