import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Target, Zap, Cpu, Award, User, Users, Linkedin, Sparkles, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchSiteSettings, fetchTeam } from '../api'
import PageHero from '../components/shared/PageHero'
import { agencyImages, initialTeam } from '../data/seoAgencyData'
import aboutHeroJpg from '../images/about_squad_hero.jpg'

export default function About() {
  const settings = useQuery({ queryKey: ['settings'], queryFn: fetchSiteSettings })
  const teamQuery = useQuery({ queryKey: ['team'], queryFn: fetchTeam })

  const teamData = teamQuery.data && teamQuery.data.length > 0 ? teamQuery.data : initialTeam

  return (
    <>
      <PageHero
        eyebrow="Our Story & Leadership Squad"
        title={<>Good engineering deserves to be <em>discovered.</em></>}
        rightVisual={
          <div className="about-hero-visual-card">
            <img
              src={aboutHeroJpg}
              alt="Studio Philosophy & Growth Squad Architecture"
              loading="eager"
            />
          </div>
        }
      >
        We founded Northstar on a single conviction: traditional digital marketing agencies are broken. We replaced vanity impression metrics and fluffy PDF reports with deep technical crawl engineering, high-intent on-page architectures, high-ROAS PPC performance marketing, local dominance, and verifiable inbound pipeline.
      </PageHero>

      <main>
        {/* STATS STRIP - CLEAN LIGHT CARDS */}
        <section className="shell proof-stats-strip">
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>2020</strong>
            <span>Studio Established</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>120+</strong>
            <span>Active Enterprise Partnerships</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>15M+</strong>
            <span>Monthly Search Sessions Driven</span>
          </div>
          <div className="proof-box">
            <div className="proof-indicator-accent" />
            <strong>94%</strong>
            <span>Client Retainer Retention</span>
          </div>
        </section>

        {/* THE MISSION & PROBLEM WITH AGENCIES */}
        <section className="section shell">
          <div className="split-narrative-grid">
            <div className="narrative-left">
              <span className="kicker">The Anti-Agency Manifesto</span>
              <h2>Why the traditional SEO agency model is <em>dead.</em></h2>
              <div className="about-visual-manifesto">
                <img src={agencyImages.visionTelescope} alt="Looking Beyond Generic SEO" className="about-manifesto-img" />
              </div>
            </div>
            <div className="narrative-right">
              <p className="large-lead-text">
                For over a decade, marketing agencies sold cookie-cutter 500-word blog posts, bought spammy directory links, and sent 40-page automated PDF reports that no CEO ever read.
              </p>
              <p className="body-narrative">
                Today, Google is powered by deep neural networks, multimodal Transformers, and AI Overviews. Search engines no longer reward keyword stuffing; they reward technical excellence, entity authority, and genuine domain trustworthiness.
              </p>
              <p className="body-narrative">
                Northstar operates as an embedded search & performance growth squad. We speak the language of software architects, product managers, and data-driven media buyers. We fix JavaScript hydration bugs, configure on-page semantic schemas, build high-ROAS Google Ads campaigns, dominate local Google Maps, and engineer programmatic directories that generate real enterprise revenue.
              </p>
            </div>
          </div>
        </section>

        {/* CORE OPERATING PRINCIPLES */}
        <section className="dark-band">
          <div className="shell">
            <div className="section-heading dark-heading">
              <div>
                <p className="kicker">How We Operate</p>
                <h2>The four non-negotiable <em>engineering principles.</em></h2>
              </div>
            </div>

            <div className="values-cards-grid">
              <div className="value-card">
                <span className="val-number">01</span>
                <h3>Code Commits Over PDF Reports</h3>
                <p>
                  We don't just point out problems and leave your engineers to figure it out. We write actionable Linear/Jira tickets, provide exact code patches, and submit direct pull requests for your approval.
                </p>
              </div>

              <div className="value-card">
                <span className="val-number">02</span>
                <h3>First-Party Data Over Rehashed Content</h3>
                <p>
                  To win citations in Google AI Overviews and Perplexity, your content must possess unique proprietary data. We conduct original industry surveys, analyze datasets, and publish unignorable benchmark reports.
                </p>
              </div>

              <div className="value-card">
                <span className="val-number">03</span>
                <h3>Zero Vanity Metrics</h3>
                <p>
                  We do not celebrate ranking #1 for arbitrary keywords with zero search intent. We judge our work strictly by organic pipeline ARR, demo requests, and e-commerce transactions tracked in Looker Studio.
                </p>
              </div>

              <div className="value-card">
                <span className="val-number">04</span>
                <h3>Radical Algorithmic Integrity</h3>
                <p>
                  No private blog networks (PBNs), no hidden sponsored guest posts, and no black-hat cloaking. We protect your company's domain equity with 100% white-hat methodologies built to withstand every Google core update.
                </p>
              </div>
            </div>

            {/* Embedded Squad Collaboration Banner */}
            <div className="about-team-banner">
              <div className="about-collab-img-wrap">
                <img src={agencyImages.teamCollab} alt="Collaborative Growth Engineering Squad" className="about-collab-img" />
              </div>
              <div className="about-team-banner-text">
                <span className="banner-kicker">Embedded Growth Squad</span>
                <h4>Senior Engineers, Not Account Managers</h4>
                <p>You collaborate directly with experienced technical SEO architects, content strategists, and performance media buyers who ship code and build real search equity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MERGED LEADERSHIP & GROWTH ENGINEERING SQUAD */}
        <section id="team" className="section shell team-merged-section">
          <div className="section-heading">
            <div>
              <p className="kicker">Leadership & Growth Squad</p>
              <h2>Meet the engineers behind your <em>search equity.</em></h2>
            </div>
            <p className="section-intro">
              No account managers or middle-layers. You work directly with veteran growth engineers, data analysts, and performance architects.
            </p>
          </div>

          <div className="team-profiles-grid">
            {teamData.map((member) => (
              <article className="team-profile-card" key={member.id}>
                {/* ICON AVATAR HEADER (NO STOCK PHOTOS) */}
                <div className="member-avatar-box">
                  <div className="member-avatar-icon-wrap">
                    <User size={30} className="member-user-icon" />
                  </div>
                  <span className="member-exp-badge">{member.experience}</span>
                </div>

                <div className="member-details">
                  <div className="member-header-row">
                    <div>
                      <h3 className="member-name">{member.name}</h3>
                      <span className="member-role">{member.designation}</span>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="member-social-btn"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin size={15} />
                      </a>
                    )}
                  </div>

                  <div className="member-specialty-box">
                    <span className="spec-label">Specialty Focus:</span>
                    <p className="spec-desc">{member.specialty}</p>
                  </div>

                  <p className="member-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SQUAD EXECUTION STANDARDS */}
        <section className="dark-band">
          <div className="shell">
            <div className="section-heading dark-heading">
              <div>
                <p className="kicker">Execution Standards</p>
                <h2>How our squad works with your <em>internal team.</em></h2>
              </div>
            </div>

            <div className="culture-standards-grid">
              <div className="culture-card">
                <h3>Direct Slack / Discord Access</h3>
                <p>No waiting 48 hours for an account manager to forward an email. You chat directly with the engineers analyzing your logs and writing your schema.</p>
              </div>
              <div className="culture-card">
                <h3>Linear & Jira Integration</h3>
                <p>We work inside your sprint management tools. Tickets are written with clear acceptance criteria, code reproduction steps, and impact projections.</p>
              </div>
              <div className="culture-card">
                <h3>Continuous Algorithm R&D</h3>
                <p>Our lab runs daily experiments on Google algorithm sensor updates, SGE response patterns, and indexation speeds to keep your site ahead of core updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS & CERTIFICATIONS */}
        <section className="section shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Accreditations</p>
              <h2>Industry certifications & <em>technology partners.</em></h2>
            </div>
          </div>

          <div className="partners-grid">
            <div className="partner-card">
              <Award size={28} className="partner-icon" />
              <h4>Google Premier Partner</h4>
              <p>Certified in advanced search measurement, GA4 server-side tracking, and Core Web Vitals remediation.</p>
            </div>
            <div className="partner-card">
              <Cpu size={28} className="partner-icon" />
              <h4>Cloudflare Workers Certified</h4>
              <p>Specialists in deploying edge SEO redirects, dynamic schema injection, and edge prerendering.</p>
            </div>
            <div className="partner-card">
              <Target size={28} className="partner-icon" />
              <h4>Ahrefs Enterprise Agency</h4>
              <p>Direct API integration for real-time backlink velocity tracking and competitive entity gap mining.</p>
            </div>
          </div>
        </section>

        {/* CAREERS / WE ARE HIRING */}
        <section className="section shell">
          <div className="hiring-banner-card">
            <div className="hiring-copy">
              <span className="kicker"><Sparkles size={13} /> We Are Hiring</span>
              <h2>Obsessed with search algorithms and <em>creative code?</em></h2>
              <p>
                We are always searching for extraordinary technical SEO specialists, reverse-engineers, and data journalists. Work remotely from anywhere in the world on category-defining enterprise client challenges.
              </p>
            </div>
            <div className="hiring-action">
              <a href="mailto:careers@northstarseo.com" className="button button-lime">
                View Open Roles <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Ready to collaborate?</p>
            <h2>Deploy our squad on your <em>highest priority search goals.</em></h2>
            <p className="final-cta-desc">
              Book a 30-minute discovery session. We will evaluate your current domain metrics and show you what an embedded Northstar sprint looks like.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Schedule Discovery Session <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
