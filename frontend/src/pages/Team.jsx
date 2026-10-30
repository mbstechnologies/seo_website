import { ArrowRight, ArrowUpRight, Linkedin, Mail, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTeam } from '../api'
import PageHero from '../components/shared/PageHero'

export default function Team() {
  const query = useQuery({ queryKey: ['team'], queryFn: fetchTeam })

  return (
    <>
      <PageHero
        eyebrow="The Growth Squad"
        title={<>Specialists at the Intersection of <em>Code & Search Intent.</em></>}
      >
        We do not employ account managers who merely relay messages. You work directly with veteran technical SEO engineers, data journalists, and semantic content architects who have built and scaled systems for decades.
      </PageHero>

      <main>
        {/* TEAM GRID */}
        <section className="section shell">
          <div className="team-profiles-grid">
            {query.data?.map((member) => (
              <article className="team-profile-card" key={member.id}>
                <div className="member-image-frame">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="member-headshot"
                  />
                  <div className="member-exp-badge">{member.experience}</div>
                </div>

                <div className="member-details">
                  <div className="member-header-row">
                    <div>
                      <h2 className="member-name">{member.name}</h2>
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
                        <Linkedin size={16} />
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

        {/* TEAM CULTURE & STANDARDS */}
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
