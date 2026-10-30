import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchSiteSettings } from '../api'
import PageHero from '../components/shared/PageHero'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" field="privacyPolicy" />
}

export function Terms() {
  return <LegalPage title="Terms of Service" field="terms" />
}

function LegalPage({ title, field }) {
  const settings = useQuery({ queryKey: ['settings'], queryFn: fetchSiteSettings })
  const content = settings.data?.[field] || ''

  return (
    <>
      <div className="shell breadcrumb-bar">
        <Link to="/" className="breadcrumb-back">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{title}</span>
      </div>

      <PageHero
        eyebrow="Legal & Compliance"
        title={<>{title}</>}
      >
        Official compliance documentation, data safety protocols, and terms governing client relationships with Northstar Growth Studio.
      </PageHero>

      <main className="section shell legal-wrapper">
        <div className="legal-paper-card">
          <div className="legal-header-meta">
            <ShieldCheck size={20} className="legal-shield" />
            <span>Northstar Legal Governance Framework · Updated March 2026</span>
          </div>

          <div className="legal-body-text">
            {content.split('\n\n').map((block, idx) => {
              if (block.startsWith('### ')) {
                return <h2 key={idx} className="legal-h2">{block.replace('### ', '')}</h2>
              }
              if (block.startsWith('#### ')) {
                return <h3 key={idx} className="legal-h3">{block.replace('#### ', '')}</h3>
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n')
                return (
                  <ul key={idx} className="legal-ul">
                    {items.map((it, iIdx) => (
                      <li key={iIdx}>{it.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={idx} className="legal-p">{block.trim()}</p>
            })}
          </div>

          <div className="legal-footer-box">
            <p>
              Questions regarding our data retention protocols or legal terms? Contact our legal counsel at{' '}
              <a href="mailto:legal@northstarseo.com">legal@northstarseo.com</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
