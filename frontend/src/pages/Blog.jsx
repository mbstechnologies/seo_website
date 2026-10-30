import { ArrowRight, ArrowUpRight, BookOpen, Clock, Search, Sparkles, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogPosts } from '../api'
import PageHero from '../components/shared/PageHero'
import { useState, useMemo } from 'react'

export default function Blog() {
  const query = useQuery({ queryKey: ['blog'], queryFn: fetchBlogPosts })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const categories = ['All', 'AI Search & Future of SEO', 'Technical Engineering', 'Scalable Growth', 'Link Building & PR']

  const filteredPosts = useMemo(() => {
    if (!query.data) return []
    return query.data.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCat
    })
  }, [query.data, searchTerm, selectedCategory])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
  }

  const featured = query.data?.[0]

  return (
    <>
      <PageHero
        eyebrow="Search Intelligence Journal"
        title={<>Actionable Research for the <em>Future of Search.</em></>}
      >
        Deep technical teardowns, algorithm sensor analyses, and organic growth engineering playbooks authored by our active practitioners. Zero fluff.
      </PageHero>

      <main>
        {/* FEATURED ARTICLE HERO */}
        {featured && !searchTerm && selectedCategory === 'All' && (
          <section className="shell featured-journal-section">
            <article className="featured-post-hero">
              <div className="featured-post-copy">
                <div className="post-meta-line">
                  <span className="featured-pill"><Sparkles size={12} /> Featured Teardown</span>
                  <span className="post-cat-tag">{featured.category}</span>
                  <span className="post-read-time"><Clock size={12} /> {featured.readTime}</span>
                </div>

                <h2 className="featured-post-title">
                  <Link to={`/blog/${featured.slug || featured.id}`}>{featured.title}</Link>
                </h2>

                <p className="featured-post-excerpt">{featured.excerpt}</p>

                <div className="post-author-row">
                  <div className="author-info">
                    <User size={14} />
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link to={`/blog/${featured.slug || featured.id}`} className="button button-lime">
                    Read Teardown <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* SEARCH & CATEGORY FILTERS */}
        <section className="shell filter-section">
          <div className="filter-controls-row">
            <div className="search-input-pill">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles, Next.js, SGE, Core Web Vitals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-btn" onClick={() => setSearchTerm('')}>✕</button>
              )}
            </div>

            <div className="category-chips-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`chip-btn ${selectedCategory === cat ? 'active-chip' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="section shell">
          {filteredPosts.length === 0 ? (
            <div className="empty-panel">
              No articles match your search query. Try broadening your keywords.
            </div>
          ) : (
            <div className="articles-cards-grid">
              {filteredPosts.map((post) => (
                <article className="article-preview-card" key={post.id}>
                  <div className="article-card-meta">
                    <span className="article-cat">{post.category}</span>
                    <span className="article-time"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="article-card-title">
                    <Link to={`/blog/${post.slug || post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="article-card-excerpt">{post.excerpt}</p>

                  <div className="article-card-footer">
                    <div className="article-author-meta">
                      <span>By {post.author}</span>
                      <span>·</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <Link to={`/blog/${post.slug || post.id}`} className="read-more-link">
                      Read <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* NEWSLETTER ALERT SUBSCRIPTION BOX */}
        <section className="section shell">
          <div className="newsletter-card-box">
            <div className="newsletter-copy">
              <span className="kicker">Algorithmic Intelligence Feed</span>
              <h2>Stay ahead of every Google Core & SGE update</h2>
              <p>
                Get our private, bi-weekly breakdown of confirmed algorithm shifts, AI Overview changes, and crawl experiments. No marketing fluff, just actionable intelligence.
              </p>
            </div>

            <div className="newsletter-form-container">
              {subscribed ? (
                <div className="newsletter-success">
                  ✓ You are subscribed! Check your inbox for our latest 2026 SGE teardown.
                </div>
              ) : (
                <form className="newsletter-inline-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="button button-lime">
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="final-cta shell">
          <div>
            <p className="kicker">Turn ideas into rankings</p>
            <h2>Want our squad to execute these <em>playbooks on your domain?</em></h2>
            <p className="final-cta-desc">
              Schedule a 30-minute discovery session with our search architects. We’ll show you where your biggest organic opportunities lie.
            </p>
          </div>
          <Link to="/contact" className="button button-lime">
            Request Free 80-Pt Audit <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </>
  )
}
