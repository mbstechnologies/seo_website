import { ArrowLeft, ArrowUpRight, Clock, User, Share2, Sparkles, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogPost, fetchBlogPosts } from '../api'
import PageHero from '../components/shared/PageHero'
import { LoadingState } from '../components/shared/States'

export default function BlogDetails() {
  const { slug } = useParams()
  const postQuery = useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlogPost(slug)
  })
  const allPostsQuery = useQuery({
    queryKey: ['blog'],
    queryFn: fetchBlogPosts
  })

  if (postQuery.isLoading) {
    return (
      <main className="section shell">
        <LoadingState label="article teardown" />
      </main>
    )
  }

  const post = postQuery.data
  const related = allPostsQuery.data?.filter((p) => (p.slug || p.id) !== slug).slice(0, 2) || []

  return (
    <>
      <div className="shell breadcrumb-bar">
        <Link to="/blog" className="breadcrumb-back">
          <ArrowLeft size={14} /> Back to Search Journal
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{post.title}</span>
      </div>

      <PageHero
        eyebrow={`Research Teardown · ${post.category || 'SEO Architecture'}`}
        title={<>{post.title}</>}
      >
        {post.excerpt}
      </PageHero>

      <main className="article-main-wrap shell">
        <div className="article-meta-banner">
          <div className="author-credentials">
            <div className="author-avatar-circle">{post.author?.charAt(0) || 'N'}</div>
            <div>
              <strong>{post.author}</strong>
              <span>Lead Search Strategist, Northstar</span>
            </div>
          </div>
          <div className="article-stats-right">
            <span>Published: {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>·</span>
            <span><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>

        {/* KEY TAKEAWAYS CALLOUT */}
        <div className="key-takeaways-callout">
          <div className="takeaways-top">
            <Sparkles size={16} />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <ul>
            <li>Traditional string-matching keyword optimization is ineffective in modern AI-synthesized search results.</li>
            <li>Google prioritizes verifiable entity salience, structured JSON-LD schemas, and proprietary first-party datasets.</li>
            <li>Server-side rendering (SSR) and sub-200ms INP Core Web Vitals remain essential for rapid indexation.</li>
          </ul>
        </div>

        {/* ARTICLE BODY */}
        <article className="rich-article-content">
          <div className="rendered-markdown-text">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h2 key={index} className="article-h2">{paragraph.replace('### ', '')}</h2>
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const lines = paragraph.split('\n')
                return (
                  <ul key={index} className="article-ul">
                    {lines.map((line, lIdx) => (
                      <li key={lIdx}>{line.replace(/^(\d+\. |- )/, '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={index} className="article-p">{paragraph.trim()}</p>
            })}
          </div>
        </article>

        {/* AUTHOR BIO BOX */}
        <div className="author-bio-card">
          <div className="author-bio-avatar">{post.author?.charAt(0) || 'N'}</div>
          <div className="author-bio-copy">
            <h3>Written by {post.author}</h3>
            <p>
              Senior search strategist and growth engineer at Northstar Growth Studio. Focused on reverse-engineering search algorithms, high-intent programmatic systems, and SGE entity knowledge graphs.
            </p>
          </div>
        </div>

        {/* IN-ARTICLE AUDIT CTA */}
        <div className="in-article-audit-cta">
          <div className="cta-left">
            <span className="kicker">Confidential Diagnostic</span>
            <h3>Is your website ready for Google's latest algorithm updates?</h3>
            <p>Request our free 80-point technical health check and competitor gap report.</p>
          </div>
          <Link to="/contact" className="button button-lime">
            Request Free Audit <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* RELATED ARTICLES */}
        {related.length > 0 && (
          <section className="related-articles-section">
            <div className="section-heading">
              <div>
                <p className="kicker">Continue Reading</p>
                <h2>Related Search Teardowns</h2>
              </div>
            </div>

            <div className="articles-cards-grid">
              {related.map((item) => (
                <article className="article-preview-card" key={item.id}>
                  <div className="article-card-meta">
                    <span className="article-cat">{item.category}</span>
                    <span className="article-time"><Clock size={12} /> {item.readTime}</span>
                  </div>
                  <h3 className="article-card-title">
                    <Link to={`/blog/${item.slug || item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="article-card-excerpt">{item.excerpt}</p>
                  <div className="article-card-footer">
                    <span>By {item.author}</span>
                    <Link to={`/blog/${item.slug || item.id}`} className="read-more-link">
                      Read <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
